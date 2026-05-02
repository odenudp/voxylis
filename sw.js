/* ══════════════════════════════════════════════════════
   Voxylis Service Worker v3.0
   Strategy: Cache-First for static, Network-First for HTML
   ══════════════════════════════════════════════════════ */
'use strict';

const CACHE_NAME    = 'voxylis-v3.0';
const STATIC_CACHE  = 'voxylis-static-v3.0';
const DYNAMIC_CACHE = 'voxylis-dynamic-v3.0';
const FONT_CACHE    = 'voxylis-fonts-v3.0';

// Assets to precache on install
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js',
  '/offline.html',
];

// Font URLs to cache separately (long TTL)
const FONT_URLS = [
  'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&family=Cairo:wght@300;400;600;700;900&display=swap',
];

// ── INSTALL: precache core files ──
self.addEventListener('install', function(e){
  e.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(function(cache){
        return cache.addAll(PRECACHE_URLS).catch(function(err){
          console.warn('[SW] Precache partial failure:', err);
        });
      }),
      caches.open(FONT_CACHE).then(function(cache){
        return cache.addAll(FONT_URLS).catch(function(){});
      })
    ]).then(function(){
      return self.skipWaiting();
    })
  );
});

// ── ACTIVATE: clean old caches ──
self.addEventListener('activate', function(e){
  var VALID_CACHES = [CACHE_NAME, STATIC_CACHE, DYNAMIC_CACHE, FONT_CACHE];
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys.filter(function(k){ return VALID_CACHES.indexOf(k) === -1; })
            .map(function(k){ return caches.delete(k); })
      );
    }).then(function(){
      return self.clients.claim();
    })
  );
});

// ── FETCH: routing strategy ──
self.addEventListener('fetch', function(e){
  var url = new URL(e.request.url);

  // Skip non-GET and browser-extension requests
  if(e.request.method !== 'GET') return;
  if(url.protocol === 'chrome-extension:') return;

  // FONTS → Cache-First (very long-lived)
  if(url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com'){
    e.respondWith(cacheFirst(e.request, FONT_CACHE));
    return;
  }

  // CSS / JS → Stale-While-Revalidate
  if(url.pathname.endsWith('.css') || url.pathname.endsWith('.js')){
    e.respondWith(staleWhileRevalidate(e.request, STATIC_CACHE));
    return;
  }

  // Images / SVG → Cache-First
  if(/\.(png|jpg|jpeg|gif|webp|svg|ico)$/.test(url.pathname)){
    e.respondWith(cacheFirst(e.request, STATIC_CACHE));
    return;
  }

  // HTML (navigation) → Network-First with offline fallback
  if(e.request.mode === 'navigate' || url.pathname.endsWith('.html')){
    e.respondWith(networkFirst(e.request));
    return;
  }

  // Everything else → Stale-While-Revalidate
  e.respondWith(staleWhileRevalidate(e.request, DYNAMIC_CACHE));
});

// ── STRATEGIES ──

function cacheFirst(request, cacheName){
  return caches.open(cacheName).then(function(cache){
    return cache.match(request).then(function(cached){
      if(cached) return cached;
      return fetch(request).then(function(response){
        if(response && response.status === 200){
          cache.put(request, response.clone());
        }
        return response;
      });
    });
  });
}

function networkFirst(request){
  return fetch(request).then(function(response){
    if(response && response.status === 200){
      caches.open(STATIC_CACHE).then(function(cache){
        cache.put(request, response.clone());
      });
    }
    return response;
  }).catch(function(){
    return caches.match(request).then(function(cached){
      return cached || caches.match('/offline.html') || new Response(
        '<html><body style="background:#060816;color:#E8E2D2;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;text-align:center"><div><h1 style="color:#13E9BA">Voxylis</h1><p>You appear to be offline. Please check your connection.</p></div></body></html>',
        {headers:{'Content-Type':'text/html'}}
      );
    });
  });
}

function staleWhileRevalidate(request, cacheName){
  return caches.open(cacheName).then(function(cache){
    return cache.match(request).then(function(cached){
      var fetchPromise = fetch(request).then(function(response){
        if(response && response.status === 200){
          cache.put(request, response.clone());
        }
        return response;
      }).catch(function(){ return cached; });
      return cached || fetchPromise;
    });
  });
}

// ── PUSH NOTIFICATIONS (future-ready) ──
self.addEventListener('push', function(e){
  if(!e.data) return;
  var data = e.data.json();
  e.waitUntil(
    self.registration.showNotification(data.title||'Voxylis', {
      body:    data.body||'',
      icon:    '/img/icon-192.png',
      badge:   '/img/badge-72.png',
      vibrate: [100,50,100],
      data:    {url: data.url||'/'},
      actions: [{action:'open',title:'Open'}]
    })
  );
});

self.addEventListener('notificationclick', function(e){
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data.url||'/'));
});
