/* Voxylis - Main Application Script v3.0 */
"use strict";

const S={lang:'en',curr:'usd',bill:'m'};
const PAGES=['home','hosting','design','marketing','about','contact'];
const NAV_KEYS=['nav_home','nav_hosting','nav_design','nav_mkt','nav_about','nav_contact'];
const BLOG_NAV_IDS=['nl5b','ml5b'];

const T={
en:{
 nav_home:'Home',nav_hosting:'Hosting Plans',nav_design:'Web Design',nav_mkt:'Marketing',nav_about:'About',nav_contact:'Contact',nav_cta:'Get Started',
 h_eye:'Reliable \u2022 Fast \u2022 Secure',h_h1:'Your Website, Always <em>Online.</em>',
 h_sub:'Enterprise-grade web hosting for businesses worldwide. 99.9% uptime, NVMe SSD servers, and 24/7 expert support.',
 h_b1:'View Hosting Plans',h_b2:'Learn More',
 s1l:'Uptime SLA',s2l:'Active Sites',s3l:'Avg. Response',s4l:'Arabic Support',
 fe_eye:'Why Voxylis',fe_h2:'Hosting Built for <em>Performance.</em>',
 fe_sub:'We obsess over every millisecond so your visitors never have to wait.',
 f1h:'NVMe SSD Storage',f1p:'Up to 10\u00d7 faster than traditional HDD \u2014 your site loads instantly every time.',
 f2h:'Free SSL & CDN',f2p:'Automatic HTTPS and global content delivery included on every plan.',
 f3h:'Daily Backups',f3p:'Automated backups every 24 hours with one-click restore, always included.',
 f4h:'24/7 Arabic Support',f4p:'Our team responds in under 2 minutes in Arabic and English, around the clock.',
 f5h:'DDoS Protection',f5p:'Enterprise-grade firewall and DDoS mitigation protecting your site 24/7.',
 f6h:'One-Click Installs',f6p:'WordPress, Joomla, Magento and 100+ apps installed in a single click.',
 pl_eye:'Our Plans',pl_h2:'Hosting for Every <em>Budget.</em>',
 pl_sub:'Transparent pricing, no hidden fees. Upgrade or downgrade anytime.',
 view_all:'View All Plans \u2192',
 te_eye:'Client Reviews',te_h2:'Trusted by <em>4,000+ Businesses</em>',
 t1q:'\u201cSwitching to Voxylis was the best decision. Site loads under half a second and support replies in Arabic within minutes.\u201d',t1n:'Ahmed Khalil',t1r:'CEO, TechStore Egypt',
 t2q:'\u201cUptime flawless for 18 months. We run a busy e-commerce store and can\'t afford downtime \u2014 Voxylis delivers every time.\u201d',t2n:'Nada Ibrahim',t2r:'Founder, FashionHub Cairo',
 t3q:'\u201cPricing in EGP is very fair. WordPress site went from 4s to 0.6s load time \u2014 incredible.\u201d',t3n:'Omar Samir',t3r:'Developer & Blogger',
 hcta_h:'Ready to Launch <em>Your Website?</em>',hcta_p:'14-day money-back guarantee. No credit card required.',hcta_b1:'Start Free Today',hcta_b2:'Talk to Us \u2192',
 ho_eye:'Web Hosting',ho_h1:'Plans Built for <em>Speed & Scale.</em>',
 ho_sub:'All plans include free SSL, daily backups, and 24/7 expert support. No contracts, cancel anytime.',
 bill_mo:'Monthly',bill_an:'Annual \u201320%',badge_avg:'Avg. Response',
 why_eye:'Why Voxylis',why_h2:'Built for Speed. <em>Obsessed with Results.</em>',
 why_sub:"We don't just host your website \u2014 we make it perform.",
 wh1:'Global Edge Network',wh1p:'35+ PoPs worldwide ensuring <20ms load times wherever your visitors are.',
 wh2:'Multilingual Ready',wh2p:'Servers optimized for Arabic and English content, RTL layouts, and international domain names.',
 wh3:'cPanel in Arabic',wh3p:'Industry-standard control panel in Arabic with one-click app installer.',
 wh4:'Flexible Payment',wh4p:'Pay in USD or EGP — credit card, Vodafone Cash, InstaPay, PayPal, or bank transfer.',
 faq_eye:'FAQ',faq_h2:'Frequently Asked <em>Questions</em>',
 fq1q:'Can I upgrade my plan later?',fq1a:'Yes, upgrade or downgrade anytime from your control panel. Price difference is prorated automatically.',
 fq2q:'Do you support Arabic websites?',fq2a:'Absolutely. Servers are fully optimized for Arabic content, RTL layouts, and Arabic domain names (.msr, .arab).',
 fq3q:'What control panel do you use?',fq3a:'We use cPanel \u2014 the industry standard, available in Arabic with one-click app installer, file manager, and database tools.',
 fq4q:'Is there a money-back guarantee?',fq4a:'Yes, all plans come with a 14-day money-back guarantee, no questions asked.',
 fq5q:'Can I pay in Egyptian Pounds?',fq5a:'Yes! We accept EGP via credit card, Vodafone Cash, InstaPay, and bank transfer.',
 ds_eye:'Web Design',ds_h1:'Websites That <em>Convert.</em>',
 ds_sub:'Our design team builds fast, beautiful, mobile-first websites that turn visitors into customers.',
 dfe_eye:'What We Deliver',dfe_h2:'Design That <em>Works.</em>',
 dfe_sub:'Every site we build loads fast, ranks high, and looks stunning on every device.',
 df1h:'Mobile-First Design',df1p:'Stunning on all devices and screen sizes \u2014 built for the mobile-first world.',
 df2h:'SEO-Ready Structure',df2p:'Clean code, fast loading, and proper structure for search engine rankings.',
 df3h:'Arabic & English',df3p:'Full bilingual support with proper RTL/LTR layouts for both languages.',
 df4h:'CMS Integration',df4p:'WordPress, Webflow, or custom CMS so you can manage your content easily.',
 dpk_eye:'Design Packages',dpk_h2:'Choose Your <em>Package.</em>',
 dpk_sub:'One-time investment. Includes revisions, mobile responsiveness, and handover.',
 pr_eye:'Our Process',pr_h2:'How We <em>Work.</em>',
 pr1h:'Discovery',pr1p:'We learn your brand, goals, and audience in a kickoff call.',
 pr2h:'Design',pr2p:'Wireframes and mockups approved before development starts.',
 pr3h:'Build',pr3p:'Clean code, optimized for speed and search engines.',
 pr4h:'Launch',pr4p:'Final review, device testing, then we go live together.',
 mk_eye:'Digital Marketing',mk_h1:'Grow Your Brand <em>Online.</em>',
 mk_sub:'Data-driven digital marketing strategies that drive real, measurable results for businesses globally.',
 ms_eye:'Our Services',ms_h2:'Everything You Need to <em>Grow.</em>',
 ms_sub:'From SEO to social media, we handle your digital presence end-to-end.',
 ms1h:'SEO Optimization',ms1p:'Rank higher on Google in Arabic and English. Keyword research, on-page SEO, link building, monthly reports.',
 ms2h:'Social Media',ms2p:'Creative content and community management across Facebook, Instagram, TikTok, and LinkedIn.',
 ms3h:'Google & Meta Ads',ms3p:'Certified specialists managing your paid campaigns. Every pound tracked and optimized for maximum ROI.',
 ms4h:'Email Marketing',ms4p:'Automated sequences and targeted campaigns that turn leads into loyal customers.',
 ms5h:'Content Marketing',ms5p:'Blog posts, videos, and graphics in Arabic and English that build authority and organic traffic.',
 ms6h:'Analytics & Reports',ms6p:"Clear monthly reports showing exactly what's working and what we're doing about it.",
 mp_eye:'Marketing Packages',mp_h2:'Scale Your <em>Growth.</em>',
 mp_sub:'Monthly retainer packages with transparent deliverables and reporting.',
 ab_eye:'About Voxylis',ab_h1:'Built in Egypt, <em>Built for Egypt.</em>',
 ab_sub:'We started Voxylis to give businesses worldwide access to enterprise-grade hosting at fair prices, with support in their language.',
 ab_sth:'Our Story',
 ab_p1:'Founded in 2019 in Cairo, Voxylis was born out of frustration. Our founders kept seeing Egyptian businesses struggle with slow, expensive hosting from foreign providers \u2014 with zero Arabic support.',
 ab_p2:'We built Voxylis to fix that. Today we host over 4,000 websites and serve clients across Egypt and the Gulf \u2014 with servers optimized for Arabic content and a team that speaks your language.',
 ab_sl1:'Websites Hosted',ab_sl2:'Founded in Cairo',ab_sl3:'Uptime Average',ab_sl4:'Support Response',
 av_eye:'Our Values',av_h2:'What We <em>Stand For.</em>',
 v1h:'Reliability First',v1p:'We never compromise on uptime. Your business depends on your website being available 24/7/365.',
 v2h:'Fair Pricing',v2p:'World-class hosting at transparent prices — pay in USD or EGP, whichever works for you.',
 v3h:'Local Support',v3p:'Our support team responds in Arabic and English, 24 hours a day, 7 days a week.',
 v4h:'Constant Growth',v4p:'We reinvest in our infrastructure every quarter to stay ahead of your needs.',
 ac_h:'Join <em>4,000+ Businesses</em>',ac_p:'Ready to experience hosting built for Egypt? Start your free trial today.',ac_b1:'View Hosting Plans',ac_b2:'Contact Us',
 ct_eye:'Get in Touch',ct_h1:"We're Here to <em>Help.</em>",ct_sub:'Have a question or ready to start? Our team replies within 2 hours.',
 cf_eye:'Send a Message',ct_nl:'Full Name',ct_el:'Email Address',ct_pl:'Phone Number',ct_sl:'Subject',
 cso1:'Web Hosting',cso2:'Web Design',cso3:'Digital Marketing',cso4:'Technical Support',cso5:'Other',
 ct_ml:'Your Message',ct_send:'Send Message',ct_ok:"Message sent! We\u2019ll get back to you within 2 hours.",
 ci_eye:'Contact Info',ct_r24:'Replies within 2 hours',ct_hrs:'Available 24/7',ct_addr:'Cairo, Egypt',ct_wa:'Chat on WhatsApp',
 ct_pay:'\ud83d\udcb3 We accept payments in EGP and USD via credit card, Vodafone Cash, InstaPay, and bank transfer.',
 ft_tag:'Enterprise-grade web hosting for businesses worldwide. Fast, reliable, multilingual support.',
 ft_c1:'Hosting',ft_c2:'Services',ft_c3:'Company',
 ft_l1:'Starter Plan',ft_l2:'Business Plan',ft_l3:'Pro Plan',ft_l4:'Enterprise',
 ft_l5:'Web Design',ft_l6:'Digital Marketing',ft_l7:'Domains',ft_l8:'SSL Certificates',
 ft_l9:'About Us',ft_l10:'Contact',ft_l11:'Blog',ft_l12:'Privacy Policy',
 ft_copy:'\u00a9 2025 Voxylis. All rights reserved.',ft_priv:'Privacy Policy',ft_terms:'Terms of Service',
 cl_label:'Trusted by 4,000+ businesses worldwide',
 pop_badge:'🚀 Limited Time Offer',
 pop_h:'Get <em>20% Off</em> Your First Year',
 pop_sub:'Launch your website today with enterprise-grade hosting. Cancel anytime, no risk.',
 pop_v1:'20%',pop_l1:'Annual Discount',pop_v2:'14',pop_l2:'Day Free Trial',
 pop_cta1:'Claim Offer Now',pop_cta2:'Maybe Later',pop_timer_txt:'Offer expires in:',pn_s:'Starter',pn_b:'Business',pn_p:'Pro',pn_e:'Enterprise',
 pn_db:'Basic',pn_dbi:'Business',pn_dp:'Premium',
 pn_mk1:'Starter',pn_mk2:'Growth',pn_mk3:'Agency',
 most_pop:'Most Popular',per_mo:'/month',one_time:'One-time',
 ent_c:'Custom',ent_s:'Contact us for pricing',
 btn_go:'Get Started',btn_sales:'Contact Sales',btn_order:'Order Now',btn_quote:'Get a Quote',
},
ar:{
 nav_home:'\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629',nav_hosting:'\u062e\u0637\u0637 \u0627\u0644\u0627\u0633\u062a\u0636\u0627\u0641\u0629',nav_design:'\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0645\u0648\u0627\u0642\u0639',nav_mkt:'\u0627\u0644\u062a\u0633\u0648\u064a\u0642',nav_about:'\u0645\u0646 \u0646\u062d\u0646',nav_contact:'\u0627\u062a\u0635\u0644 \u0628\u0646\u0627',nav_cta:'\u0627\u0628\u062f\u0623 \u0627\u0644\u0622\u0646',
 h_eye:'\u0645\u0648\u062b\u0648\u0642 \u2022 \u0633\u0631\u064a\u0639 \u2022 \u0622\u0645\u0646',h_h1:'\u0645\u0648\u0642\u0639\u0643\u060c \u0645\u062a\u0627\u062d \u062f\u0627\u0626\u0645\u0627\u064b <em>\u0628\u0644\u0627 \u0627\u0646\u0642\u0637\u0627\u0639.</em>',
 h_sub:'\u0627\u0633\u062a\u0636\u0627\u0641\u0629 \u0628\u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062a \u0645\u0635\u0645\u0645\u0629 \u0644\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0635\u0631\u064a\u0629. \u0648\u0642\u062a \u062a\u0634\u063a\u064a\u0644 99.9\u066a \u0648\u062e\u0648\u0627\u062f\u0645 NVMe SSD \u0648\u062f\u0639\u0645 \u0639\u0631\u0628\u064a 24/7.',
 h_b1:'\u0639\u0631\u0636 \u062e\u0637\u0637 \u0627\u0644\u0627\u0633\u062a\u0636\u0627\u0641\u0629',h_b2:'\u0627\u0639\u0631\u0641 \u0623\u0643\u062b\u0631',
 s1l:'\u0636\u0645\u0627\u0646 \u0648\u0642\u062a \u0627\u0644\u062a\u0634\u063a\u064a\u0644',s2l:'\u0645\u0648\u0642\u0639 \u0646\u0634\u0637',s3l:'\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629',s4l:'\u062f\u0639\u0645 \u0639\u0631\u0628\u064a',
 fe_eye:'\u0644\u0645\u0627\u0630\u0627 \u0641\u0648\u0643\u0633\u064a\u0644\u064a\u0633',fe_h2:'\u0627\u0633\u062a\u0636\u0627\u0641\u0629 \u0645\u0635\u0645\u0645\u0629 \u0644\u0640<em>\u0627\u0644\u0623\u062f\u0627\u0621.</em>',
 fe_sub:'\u0646\u0647\u062a\u0645 \u0628\u0643\u0644 \u0645\u064a\u0644\u064a \u062b\u0627\u0646\u064a\u0629 \u062d\u062a\u0649 \u0644\u0627 \u064a\u0646\u062a\u0638\u0631 \u0632\u0648\u0627\u0631\u0643 \u0623\u0628\u062f\u0627\u064b.',
 f1h:'\u062a\u062e\u0632\u064a\u0646 NVMe SSD',f1p:'\u0623\u0633\u0631\u0639 10 \u0645\u0631\u0627\u062a \u0645\u0646 HDD \u2014 \u0645\u0648\u0642\u0639\u0643 \u064a\u064f\u062d\u0645\u064e\u0651\u0644 \u0641\u0648\u0631\u064a\u0627\u064b.',
 f2h:'SSL \u0645\u062c\u0627\u0646\u064a \u0648CDN',f2p:'HTTPS \u062a\u0644\u0642\u0627\u0626\u064a \u0648\u062a\u0648\u0635\u064a\u0644 \u0639\u0627\u0644\u0645\u064a \u0645\u0634\u0645\u0648\u0644 \u0641\u064a \u062c\u0645\u064a\u0639 \u0627\u0644\u062e\u0637\u0637.',
 f3h:'\u0646\u0633\u062e \u0627\u062d\u062a\u064a\u0627\u0637\u064a \u064a\u0648\u0645\u064a',f3p:'\u0646\u0633\u062e \u062a\u0644\u0642\u0627\u0626\u064a \u0643\u0644 24 \u0633\u0627\u0639\u0629 \u0645\u0639 \u0627\u0633\u062a\u0639\u0627\u062f\u0629 \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062d\u062f\u0629.',
 f4h:'\u062f\u0639\u0645 \u0639\u0631\u0628\u064a 24/7',f4p:'\u0641\u0631\u064a\u0642\u0646\u0627 \u064a\u0631\u062f \u0641\u064a \u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u062a\u064a\u0646 \u0628\u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629.',
 f5h:'\u062d\u0645\u0627\u064a\u0629 \u0645\u0646 DDoS',f5p:'\u062c\u062f\u0627\u0631 \u062d\u0645\u0627\u064a\u0629 \u0628\u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062a \u0648\u0635\u062f \u0647\u062c\u0645\u0627\u062a DDoS.',
 f6h:'\u062a\u062b\u0628\u064a\u062a \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062d\u062f\u0629',f6p:'\u0648\u0648\u0631\u062f\u0628\u0631\u064a\u0633 \u0648\u062c\u0648\u0645\u0644\u0627 \u0648\u0645\u0627\u062c\u0646\u062a\u0648 \u0648100+ \u062a\u0637\u0628\u064a\u0642 \u0628\u0646\u0642\u0631\u0629.',
 pl_eye:'\u062e\u0637\u0637\u0646\u0627',pl_h2:'\u0627\u0633\u062a\u0636\u0627\u0641\u0629 \u0644\u0643\u0644 <em>\u0645\u064a\u0632\u0627\u0646\u064a\u0629.</em>',
 pl_sub:'\u0623\u0633\u0639\u0627\u0631 \u0634\u0641\u0627\u0641\u0629 \u0628\u062f\u0648\u0646 \u0631\u0633\u0648\u0645 \u062e\u0641\u064a\u0629. \u062a\u0631\u0642\u064a\u0629 \u0623\u0648 \u062a\u062e\u0641\u064a\u0636 \u0641\u064a \u0623\u064a \u0648\u0642\u062a.',
 view_all:'\u0639\u0631\u0636 \u062c\u0645\u064a\u0639 \u0627\u0644\u062e\u0637\u0637 \u2190',
 te_eye:'\u062a\u0642\u064a\u064a\u0645\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u0627\u0621',te_h2:'\u0645\u0648\u062b\u0648\u0642 \u0628\u0647 \u0645\u0646 \u0642\u0650\u0628\u064e\u0644 <em>\u0623\u0643\u062b\u0631 \u0645\u0646 4,000 \u0639\u0645\u0644</em>',
 t1q:'\u201c\u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u0625\u0644\u0649 \u0641\u0648\u0643\u0633\u064a\u0644\u064a\u0633 \u0643\u0627\u0646 \u0623\u0641\u0636\u0644 \u0642\u0631\u0627\u0631. \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u064f\u062d\u0645\u064e\u0651\u0644 \u0641\u064a \u0623\u0642\u0644 \u0645\u0646 \u0646\u0635\u0641 \u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u0644\u062f\u0639\u0645 \u064a\u0631\u062f \u0628\u0627\u0644\u0639\u0631\u0628\u064a\u0629.\u201d',t1n:'\u0623\u062d\u0645\u062f \u062e\u0644\u064a\u0644',t1r:'\u0627\u0644\u0645\u062f\u064a\u0631 \u0627\u0644\u062a\u0646\u0641\u064a\u0630\u064a\u060c TechStore Egypt',
 t2q:'\u201c\u0648\u0642\u062a \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0644\u0627 \u062a\u0634\u0648\u0628\u0647 \u0634\u0627\u0626\u0628\u0629 \u0644\u0645\u062f\u0629 18 \u0634\u0647\u0631\u0627\u064b. \u0641\u0648\u0643\u0633\u064a\u0644\u064a\u0633 \u064a\u0648\u0641\u0631 \u0630\u0644\u0643 \u062f\u0627\u0626\u0645\u0627\u064b.\u201d',t2n:'\u0646\u062f\u0649 \u0625\u0628\u0631\u0627\u0647\u064a\u0645',t2r:'\u0645\u0624\u0633\u0633\u0629\u060c FashionHub Cairo',
 t3q:'\u201c\u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0628\u0627\u0644\u062c\u0646\u064a\u0647 \u0639\u0627\u062f\u0644\u0629 \u062c\u062f\u0627\u064b. \u0645\u0648\u0642\u0639 \u0648\u0648\u0631\u062f\u0628\u0631\u064a\u0633 \u0627\u0646\u062a\u0642\u0644 \u0645\u0646 4 \u062b\u0648\u0627\u0646\u064d \u0625\u0644\u0649 0.6 \u062b\u0627\u0646\u064a\u0629.\u201d',t3n:'\u0639\u0645\u0631 \u0633\u0645\u064a\u0631',t3r:'\u0645\u0637\u0648\u0631 \u0648\u0645\u062f\u0648\u0651\u0646',
 hcta_h:'\u0647\u0644 \u0623\u0646\u062a \u0645\u0633\u062a\u0639\u062f \u0644\u0625\u0637\u0644\u0627\u0642 <em>\u0645\u0648\u0642\u0639\u0643\u061f</em>',hcta_p:'\u0636\u0645\u0627\u0646 \u0627\u0633\u062a\u0631\u062f\u0627\u062f \u0627\u0644\u0623\u0645\u0648\u0627\u0644 14 \u064a\u0648\u0645\u0627\u064b. \u0644\u0627 \u062a\u062d\u062a\u0627\u062c \u0628\u0637\u0627\u0642\u0629.',hcta_b1:'\u0627\u0628\u062f\u0623 \u0645\u062c\u0627\u0646\u0627\u064b \u0627\u0644\u064a\u0648\u0645',hcta_b2:'\u062a\u062d\u062f\u062b \u0645\u0639\u0646\u0627 \u2192',
 ho_eye:'\u0627\u0633\u062a\u0636\u0627\u0641\u0629 \u0627\u0644\u0648\u064a\u0628',ho_h1:'\u062e\u0637\u0637 \u0645\u0635\u0645\u0645\u0629 \u0644\u0644\u0640<em>\u0633\u0631\u0639\u0629 \u0648\u0627\u0644\u0646\u0645\u0648.</em>',
 ho_sub:'\u062c\u0645\u064a\u0639 \u0627\u0644\u062e\u0637\u0637 \u062a\u0634\u0645\u0644 SSL \u0645\u062c\u0627\u0646\u064a \u0648\u0646\u0633\u062e \u0627\u062d\u062a\u064a\u0627\u0637\u064a \u064a\u0648\u0645\u064a \u0648\u062f\u0639\u0645 24/7.',
 bill_mo:'\u0634\u0647\u0631\u064a',bill_an:'\u0633\u0646\u0648\u064a \u201320\u066a',badge_avg:'\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629',
 why_eye:'\u0644\u0645\u0627\u0630\u0627 \u0641\u0648\u0643\u0633\u064a\u0644\u064a\u0633',why_h2:'\u0645\u0628\u0646\u064a \u0644\u0644\u0633\u0631\u0639\u0629. <em>\u0645\u0647\u0648\u0648\u0633 \u0628\u0627\u0644\u0646\u062a\u0627\u0626\u062c.</em>',
 why_sub:'\u0646\u062d\u0646 \u0644\u0627 \u0646\u0633\u062a\u0636\u064a\u0641 \u0645\u0648\u0642\u0639\u0643 \u0641\u062d\u0633\u0628 \u2014 \u0628\u0644 \u0646\u062c\u0639\u0644\u0647 \u064a\u0624\u062f\u064a \u0628\u0623\u0641\u0636\u0644 \u0623\u062f\u0627\u0621.',
 wh1:'\u0634\u0628\u0643\u0629 \u062d\u0627\u0641\u0629 \u0639\u0627\u0644\u0645\u064a\u0629',wh1p:'\u0623\u0643\u062b\u0631 \u0645\u0646 35 \u0646\u0642\u0637\u0629 \u062d\u0636\u0648\u0631 \u062d\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645 \u0644\u0636\u0645\u0627\u0646 \u0623\u0648\u0642\u0627\u062a \u062a\u062d\u0645\u064a\u0644 \u0623\u0642\u0644 \u0645\u0646 20ms.',
 wh2:'\u0645\u062d\u0633\u0651\u0646 \u0644\u0644\u0639\u0631\u0628\u064a\u0629',wh2p:'\u062e\u0648\u0627\u062f\u0645 \u0645\u062d\u0633\u0651\u0646\u0629 \u0644\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0639\u0631\u0628\u064a \u0648\u062a\u062e\u0637\u064a\u0637\u0627\u062a RTL \u0648\u0646\u0637\u0627\u0642\u0627\u062a .msr/.arab.',
 wh3:'cPanel \u0628\u0627\u0644\u0639\u0631\u0628\u064a\u0629',wh3p:'\u0644\u0648\u062d\u0629 \u062a\u062d\u0643\u0645 \u0645\u0639\u064a\u0627\u0631\u064a\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0645\u0639 \u0645\u062b\u0628\u0651\u062a \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0628\u0646\u0642\u0631\u0629.',
 wh4:'\u0627\u0644\u062f\u0641\u0639 \u0628\u0627\u0644\u062c\u0646\u064a\u0647 \u0627\u0644\u0645\u0635\u0631\u064a',wh4p:'\u0646\u0642\u0628\u0644 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0628\u0627\u0644\u062c\u0646\u064a\u0647 \u0639\u0628\u0631 \u0641\u0648\u062f\u0627\u0641\u0648\u0646 \u0643\u0627\u0634 \u0648\u0625\u0646\u0633\u062a\u0627\u0628\u0627\u064a \u0648\u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0628\u0646\u0643\u064a.',
 faq_eye:'\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629',faq_h2:'\u0627\u0644\u0623\u0633\u0626\u0644\u0629 <em>\u0627\u0644\u0645\u062a\u0643\u0631\u0631\u0629</em>',
 fq1q:'\u0647\u0644 \u064a\u0645\u0643\u0646\u0646\u064a \u062a\u0631\u0642\u064a\u0629 \u062e\u0637\u062a\u064a \u0644\u0627\u062d\u0642\u0627\u064b\u061f',fq1a:'\u0646\u0639\u0645\u060c \u062a\u0631\u0642\u064a\u0629 \u0623\u0648 \u062a\u062e\u0641\u064a\u0636 \u0641\u064a \u0623\u064a \u0648\u0642\u062a. \u064a\u062a\u0645 \u0627\u062d\u062a\u0633\u0627\u0628 \u0641\u0631\u0642 \u0627\u0644\u0633\u0639\u0631 \u062a\u0644\u0642\u0627\u0626\u064a\u0627\u064b.',
 fq2q:'\u0647\u0644 \u062a\u062f\u0639\u0645\u0648\u0646 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0639\u0631\u0628\u064a\u0629\u061f',fq2a:'\u0628\u0627\u0644\u062a\u0623\u0643\u064a\u062f. \u062e\u0648\u0627\u062f\u0645\u0646\u0627 \u0645\u062d\u0633\u0651\u0646\u0629 \u0644\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0639\u0631\u0628\u064a \u0648\u062a\u062e\u0637\u064a\u0637\u0627\u062a RTL \u0648\u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0646\u0637\u0627\u0642\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629.',
 fq3q:'\u0645\u0627 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0627\u0644\u062a\u064a \u062a\u0633\u062a\u062e\u062f\u0645\u0648\u0646\u0647\u0627\u061f',fq3a:'\u0646\u0633\u062a\u062e\u062f\u0645 cPanel \u2014 \u0627\u0644\u0645\u0639\u064a\u0627\u0631 \u0627\u0644\u0635\u0646\u0627\u0639\u064a\u060c \u0645\u062a\u0627\u062d\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0645\u0639 \u0645\u062b\u0628\u0651\u062a \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a.',
 fq4q:'\u0647\u0644 \u0647\u0646\u0627\u0643 \u0636\u0645\u0627\u0646 \u0627\u0633\u062a\u0631\u062f\u0627\u062f \u0627\u0644\u0623\u0645\u0648\u0627\u0644\u061f',fq4a:'\u0646\u0639\u0645\u060c \u062c\u0645\u064a\u0639 \u0627\u0644\u062e\u0637\u0637 \u062a\u0623\u062a\u064a \u0645\u0639 \u0636\u0645\u0627\u0646 14 \u064a\u0648\u0645\u0627\u064b \u062f\u0648\u0646 \u0623\u0633\u0626\u0644\u0629.',
 fq5q:'\u0647\u0644 \u064a\u0645\u0643\u0646\u0646\u064a \u0627\u0644\u062f\u0641\u0639 \u0628\u0627\u0644\u062c\u0646\u064a\u0647 \u0627\u0644\u0645\u0635\u0631\u064a\u061f',fq5a:'\u0646\u0639\u0645! \u0646\u0642\u0628\u0644 \u0627\u0644\u062c\u0646\u064a\u0647 \u0639\u0628\u0631 \u0628\u0637\u0627\u0642\u0629 \u0627\u0626\u062a\u0645\u0627\u0646 \u0648\u0641\u0648\u062f\u0627\u0641\u0648\u0646 \u0643\u0627\u0634 \u0648\u0625\u0646\u0633\u062a\u0627\u0628\u0627\u064a.',
 ds_eye:'\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0645\u0648\u0627\u0642\u0639',ds_h1:'\u0645\u0648\u0627\u0642\u0639 \u062a\u064f\u062d\u0642\u0651\u0642 <em>\u0627\u0644\u062a\u062d\u0648\u064a\u0644.</em>',
 ds_sub:'\u0641\u0631\u064a\u0642 \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u064a\u0628\u0646\u064a \u0645\u0648\u0627\u0642\u0639 \u0633\u0631\u064a\u0639\u0629 \u0648\u062c\u0645\u064a\u0644\u0629 \u062a\u062d\u0648\u0651\u0644 \u0627\u0644\u0632\u0648\u0627\u0631 \u0625\u0644\u0649 \u0639\u0645\u0644\u0627\u0621.',
 dfe_eye:'\u0645\u0627 \u0646\u0642\u062f\u0645\u0647',dfe_h2:'\u062a\u0635\u0645\u064a\u0645 <em>\u064a\u0639\u0645\u0644.</em>',
 dfe_sub:'\u0643\u0644 \u0645\u0648\u0642\u0639 \u0646\u0628\u0646\u064a\u0647 \u064a\u064f\u062d\u0645\u064e\u0651\u0644 \u0628\u0633\u0631\u0639\u0629 \u0648\u064a\u062d\u062a\u0644 \u0645\u0631\u0627\u062a\u0628 \u0639\u0627\u0644\u064a\u0629.',
 df1h:'\u062a\u0635\u0645\u064a\u0645 \u064a\u064f\u0642\u062f\u0651\u0645 \u0627\u0644\u062c\u0648\u0627\u0644 \u0623\u0648\u0644\u0627\u064b',df1p:'\u0631\u0627\u0626\u0639 \u0639\u0644\u0649 \u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u2014 \u0645\u0635\u0645\u0651\u0645 \u0644\u0639\u0627\u0644\u0645 \u0627\u0644\u062c\u0648\u0627\u0644.',
 df2h:'\u0628\u0646\u064a\u0629 \u062c\u0627\u0647\u0632\u0629 \u0644\u0644\u0633\u064a\u0648',df2p:'\u0643\u0648\u062f \u0646\u0638\u064a\u0641 \u0648\u062a\u062d\u0645\u064a\u0644 \u0633\u0631\u064a\u0639 \u0648\u0628\u0646\u064a\u0629 \u0635\u062d\u064a\u062d\u0629 \u0644\u0645\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0628\u062d\u062b.',
 df3h:'\u0639\u0631\u0628\u064a \u0648\u0625\u0646\u062c\u0644\u064a\u0632\u064a',df3p:'\u062f\u0639\u0645 \u062b\u0646\u0627\u0626\u064a \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u0639 \u062a\u062e\u0637\u064a\u0637\u0627\u062a RTL/LTR \u0635\u062d\u064a\u062d\u0629.',
 df4h:'\u062a\u0643\u0627\u0645\u0644 \u0645\u0639 CMS',df4p:'\u0648\u0648\u0631\u062f\u0628\u0631\u064a\u0633 \u0623\u0648 Webflow \u0623\u0648 CMS \u0645\u062e\u0635\u0635 \u0644\u0625\u062f\u0627\u0631\u0629 \u0645\u062d\u062a\u0648\u0627\u0643 \u0628\u0633\u0647\u0648\u0644\u0629.',
 dpk_eye:'\u0628\u0627\u0642\u0627\u062a \u0627\u0644\u062a\u0635\u0645\u064a\u0645',dpk_h2:'\u0627\u062e\u062a\u0631 <em>\u0628\u0627\u0642\u062a\u0643.</em>',
 dpk_sub:'\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0644\u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629. \u064a\u0634\u0645\u0644 \u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0627\u062a \u0648\u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0644\u0644\u062c\u0648\u0627\u0644 \u0648\u0627\u0644\u062a\u0633\u0644\u064a\u0645.',
 pr_eye:'\u0623\u0633\u0644\u0648\u0628 \u0639\u0645\u0644\u0646\u0627',pr_h2:'\u0643\u064a\u0641 <em>\u0646\u0639\u0645\u0644.</em>',
 pr1h:'\u0627\u0644\u0627\u0633\u062a\u0643\u0634\u0627\u0641',pr1p:'\u0646\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0639\u0644\u0627\u0645\u062a\u0643 \u0648\u0623\u0647\u062f\u0627\u0641\u0643 \u0648\u062c\u0645\u0647\u0648\u0631\u0643.',
 pr2h:'\u0627\u0644\u062a\u0635\u0645\u064a\u0645',pr2p:'\u062a\u0635\u0627\u0645\u064a\u0645 \u0623\u0648\u0644\u064a\u0629 \u0644\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0642\u0628\u0644 \u0628\u062f\u0621 \u0627\u0644\u062a\u0637\u0648\u064a\u0631.',
 pr3h:'\u0627\u0644\u0628\u0646\u0627\u0621',pr3p:'\u0643\u0648\u062f \u0646\u0638\u064a\u0641 \u0645\u062d\u0633\u0651\u0646 \u0644\u0644\u0633\u0631\u0639\u0629 \u0648\u0645\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0628\u062d\u062b.',
 pr4h:'\u0627\u0644\u0625\u0637\u0644\u0627\u0642',pr4p:'\u0645\u0631\u0627\u062c\u0639\u0629 \u0646\u0647\u0627\u0626\u064a\u0629 \u0648\u0627\u062e\u062a\u0628\u0627\u0631 \u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u062b\u0645 \u0646\u0646\u0637\u0644\u0642 \u0645\u0639\u0627\u064b.',
 mk_eye:'\u0627\u0644\u062a\u0633\u0648\u064a\u0642 \u0627\u0644\u0631\u0642\u0645\u064a',mk_h1:'\u0646\u0645\u0651\u0650 \u0639\u0644\u0627\u0645\u062a\u0643 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629 <em>\u0623\u0648\u0646\u0644\u0627\u064a\u0646.</em>',
 mk_sub:'\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0627\u062a \u062a\u0633\u0648\u064a\u0642 \u0631\u0642\u0645\u064a \u062a\u062d\u0642\u0642 \u0646\u062a\u0627\u0626\u062c \u062d\u0642\u064a\u0642\u064a\u0629 \u0648\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0642\u064a\u0627\u0633.',
 ms_eye:'\u062e\u062f\u0645\u0627\u062a\u0646\u0627',ms_h2:'\u0643\u0644 \u0645\u0627 \u062a\u062d\u062a\u0627\u062c\u0647 <em>\u0644\u0644\u0646\u0645\u0648.</em>',
 ms_sub:'\u0645\u0646 \u0627\u0644\u0633\u064a\u0648 \u0625\u0644\u0649 \u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0648\u0627\u0635\u0644\u060c \u0646\u062a\u0648\u0644\u0649 \u062d\u0636\u0648\u0631\u0643 \u0627\u0644\u0631\u0642\u0645\u064a \u0628\u0627\u0644\u0643\u0627\u0645\u0644.',
 ms1h:'\u062a\u062d\u0633\u064a\u0646 \u0645\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0628\u062d\u062b',ms1p:'\u0627\u062d\u062a\u0644 \u0645\u0631\u0627\u062a\u0628 \u0623\u0639\u0644\u0649 \u0639\u0644\u0649 \u062c\u0648\u062c\u0644 \u0628\u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629.',
 ms2h:'\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a',ms2p:'\u0645\u062d\u062a\u0648\u0649 \u0625\u0628\u062f\u0627\u0639\u064a \u0639\u0628\u0631 \u0641\u064a\u0633\u0628\u0648\u0643 \u0648\u0625\u0646\u0633\u062a\u062c\u0631\u0627\u0645 \u0648\u062a\u064a\u0643 \u062a\u0648\u0643 \u0648\u0644\u064a\u0646\u0643\u062f \u0625\u0646.',
 ms3h:'\u0625\u0639\u0644\u0627\u0646\u0627\u062a \u062c\u0648\u062c\u0644 \u0648\u0645\u064a\u062a\u0627',ms3p:'\u0645\u062a\u062e\u0635\u0635\u0648\u0646 \u0645\u0639\u062a\u0645\u062f\u0648\u0646 \u064a\u062f\u064a\u0631\u0648\u0646 \u062d\u0645\u0644\u0627\u062a\u0643 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0629. \u0643\u0644 \u062c\u0646\u064a\u0647 \u0645\u062a\u062a\u0628\u064e\u0651\u0639.',
 ms4h:'\u0627\u0644\u062a\u0633\u0648\u064a\u0642 \u0628\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a',ms4p:'\u062a\u0633\u0644\u0633\u0644\u0627\u062a \u062a\u0644\u0642\u0627\u0626\u064a\u0629 \u0648\u062d\u0645\u0644\u0627\u062a \u0645\u0633\u062a\u0647\u062f\u0641\u0629 \u062a\u062d\u0648\u0651\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0645\u062d\u062a\u0645\u0644\u064a\u0646.',
 ms5h:'\u062a\u0633\u0648\u064a\u0642 \u0627\u0644\u0645\u062d\u062a\u0648\u0649',ms5p:'\u0645\u0642\u0627\u0644\u0627\u062a \u0648\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a \u0648\u0631\u0633\u0648\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u062a\u0628\u0646\u064a \u0627\u0644\u0633\u0644\u0637\u0629 \u0648\u062a\u062c\u0644\u0628 \u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a.',
 ms6h:'\u0627\u0644\u062a\u062d\u0644\u064a\u0644\u0627\u062a \u0648\u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631',ms6p:'\u062a\u0642\u0627\u0631\u064a\u0631 \u0634\u0647\u0631\u064a\u0629 \u0648\u0627\u0636\u062d\u0629 \u062a\u064f\u0638\u0647\u0651\u0631 \u0645\u0627 \u064a\u0639\u0645\u0644 \u0648\u0645\u0627 \u0646\u0641\u0639\u0644\u0647 \u062d\u064a\u0627\u0644 \u0630\u0644\u0643.',
 mp_eye:'\u0628\u0627\u0642\u0627\u062a \u0627\u0644\u062a\u0633\u0648\u064a\u0642',mp_h2:'\u062d\u0642\u0651\u0642 <em>\u0646\u0645\u0648\u0643.</em>',
 mp_sub:'\u0628\u0627\u0642\u0627\u062a \u0634\u0647\u0631\u064a\u0629 \u0628\u0646\u062a\u0627\u0626\u062c \u0634\u0641\u0627\u0641\u0629 \u0648\u062a\u0642\u0627\u0631\u064a\u0631 \u0648\u0627\u0636\u062d\u0629.',
 ab_eye:'\u0639\u0646 \u0641\u0648\u0643\u0633\u064a\u0644\u064a\u0633',ab_h1:'\u0628\u064f\u0646\u064a \u0641\u064a \u0645\u0635\u0631\u060c <em>\u0645\u0646 \u0623\u062c\u0644 \u0645\u0635\u0631.</em>',
 ab_sub:'\u0623\u0646\u0634\u0623\u0646\u0627 \u0641\u0648\u0643\u0633\u064a\u0644\u064a\u0633 \u0644\u0623\u0646 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0635\u0631\u064a\u0629 \u062a\u0633\u062a\u062d\u0642 \u0627\u0633\u062a\u0636\u0627\u0641\u0629 \u0639\u0627\u0644\u0645\u064a\u0629 \u0628\u0623\u0633\u0639\u0627\u0631 \u0639\u0627\u062f\u0644\u0629 \u0648\u062f\u0639\u0645 \u0628\u0644\u063a\u062a\u0647\u0627.',
 ab_sth:'\u0642\u0635\u062a\u0646\u0627',
 ab_p1:'\u062a\u0623\u0633\u0633\u062a \u0641\u0648\u0643\u0633\u064a\u0644\u064a\u0633 \u0639\u0627\u0645 2019 \u0641\u064a \u0627\u0644\u0642\u0627\u0647\u0631\u0629. \u0631\u0623\u0649 \u0645\u0624\u0633\u0633\u0648\u0646\u0627 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0635\u0631\u064a\u0629 \u062a\u0639\u0627\u0646\u064a \u0645\u0646 \u0627\u0633\u062a\u0636\u0627\u0641\u0629 \u0628\u0637\u064a\u0626\u0629 \u0648\u063a\u0627\u0644\u064a\u0629 \u0645\u0646 \u0645\u0632\u0648\u062f\u064a\u0646 \u0623\u062c\u0627\u0646\u0628 \u062f\u0648\u0646 \u0623\u064a \u062f\u0639\u0645 \u0639\u0631\u0628\u064a.',
 ab_p2:'\u0628\u0646\u064a\u0646\u0627 \u0641\u0648\u0643\u0633\u064a\u0644\u064a\u0633 \u0644\u062d\u0644 \u0647\u0630\u0647 \u0627\u0644\u0645\u0634\u0643\u0644\u0629. \u0646\u0633\u062a\u0636\u064a\u0641 \u0627\u0644\u064a\u0648\u0645 \u0623\u0643\u062b\u0631 \u0645\u0646 4,000 \u0645\u0648\u0642\u0639 \u0648\u0646\u062e\u062f\u0645 \u0639\u0645\u0644\u0627\u0621 \u0641\u064a \u0645\u0635\u0631 \u0648\u0627\u0644\u062e\u0644\u064a\u062c.',
 ab_sl1:'\u0645\u0648\u0642\u0639 \u0645\u0633\u062a\u0636\u0627\u0641',ab_sl2:'\u062a\u0623\u0633\u0633\u062a \u0628\u0627\u0644\u0642\u0627\u0647\u0631\u0629',ab_sl3:'\u0645\u062a\u0648\u0633\u0637 \u0648\u0642\u062a \u0627\u0644\u062a\u0634\u063a\u064a\u0644',ab_sl4:'\u0648\u0642\u062a \u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0627\u0644\u062f\u0639\u0645',
 av_eye:'\u0642\u064a\u0645\u0646\u0627',av_h2:'\u0645\u0627 <em>\u0646\u0624\u0645\u0646 \u0628\u0647.</em>',
 v1h:'\u0627\u0644\u0645\u0648\u062b\u0648\u0642\u064a\u0629 \u0623\u0648\u0644\u0627\u064b',v1p:'\u0644\u0627 \u0646\u062a\u0646\u0627\u0632\u0644 \u0623\u0628\u062f\u0627\u064b \u0639\u0646 \u0648\u0642\u062a \u0627\u0644\u062a\u0634\u063a\u064a\u0644. \u0639\u0645\u0644\u0643 \u064a\u0639\u062a\u0645\u062f \u0639\u0644\u0649 \u062a\u0648\u0627\u0641\u0631 \u0645\u0648\u0642\u0639\u0643 24/7.',
 v2h:'\u0623\u0633\u0639\u0627\u0631 \u0639\u0627\u062f\u0644\u0629',v2p:'\u0627\u0633\u062a\u0636\u0627\u0641\u0629 \u0639\u0627\u0644\u0645\u064a\u0629 \u0628\u0623\u0633\u0639\u0627\u0631 \u0645\u0646\u0637\u0642\u064a\u0629 \u0644\u0644\u0633\u0648\u0642 \u0627\u0644\u0645\u0635\u0631\u064a\u060c \u062f\u0627\u0626\u0645\u0627\u064b \u0628\u0627\u0644\u062c\u0646\u064a\u0647.',
 v3h:'\u062f\u0639\u0645 \u0645\u062d\u0644\u064a',v3p:'\u0641\u0631\u064a\u0642 \u0627\u0644\u062f\u0639\u0645 \u0645\u0642\u0631\u0647 \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0648\u064a\u0631\u062f \u0628\u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0641\u064a \u0623\u064a \u0648\u0642\u062a.',
 v4h:'\u062a\u0637\u0648\u064a\u0631 \u0645\u0633\u062a\u0645\u0631',v4p:'\u0646\u0639\u064a\u062f \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0641\u064a \u0628\u0646\u064a\u062a\u0646\u0627 \u0627\u0644\u062a\u062d\u062a\u064a\u0629 \u0643\u0644 \u0631\u0628\u0639 \u0633\u0646\u0629.',
 ac_h:'\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 <em>\u0623\u0643\u062b\u0631 \u0645\u0646 4,000 \u0639\u0645\u0644</em>',ac_p:'\u0647\u0644 \u0623\u0646\u062a \u0645\u0633\u062a\u0639\u062f \u0644\u062a\u062c\u0631\u0628\u0629 \u0627\u0633\u062a\u0636\u0627\u0641\u0629 \u0645\u0628\u0646\u064a\u0629 \u0644\u0645\u0635\u0631\u061f',ac_b1:'\u0639\u0631\u0636 \u062e\u0637\u0637 \u0627\u0644\u0627\u0633\u062a\u0636\u0627\u0641\u0629',ac_b2:'\u0627\u062a\u0635\u0644 \u0628\u0646\u0627',
 ct_eye:'\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627',ct_h1:'\u0646\u062d\u0646 \u0647\u0646\u0627 <em>\u0644\u0644\u0645\u0633\u0627\u0639\u062f\u0629.</em>',ct_sub:'\u0644\u062f\u064a\u0643 \u0633\u0624\u0627\u0644 \u0623\u0648 \u0645\u0633\u062a\u0639\u062f \u0644\u0644\u0628\u062f\u0621\u061f \u0641\u0631\u064a\u0642\u0646\u0627 \u064a\u0631\u062f \u062e\u0644\u0627\u0644 \u0633\u0627\u0639\u062a\u064a\u0646.',
 cf_eye:'\u0623\u0631\u0633\u0644 \u0631\u0633\u0627\u0644\u0629',ct_nl:'\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644',ct_el:'\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a',ct_pl:'\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641',ct_sl:'\u0627\u0644\u0645\u0648\u0636\u0648\u0639',
 cso1:'\u0627\u0633\u062a\u0636\u0627\u0641\u0629 \u0648\u064a\u0628',cso2:'\u062a\u0635\u0645\u064a\u0645 \u0645\u0648\u0627\u0642\u0639',cso3:'\u062a\u0633\u0648\u064a\u0642 \u0631\u0642\u0645\u064a',cso4:'\u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u0641\u0646\u064a',cso5:'\u0623\u062e\u0631\u0649',
 ct_ml:'\u0631\u0633\u0627\u0644\u062a\u0643',ct_send:'\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629',ct_ok:'\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u062a\u0643! \u0633\u0646\u0639\u0648\u062f \u0625\u0644\u064a\u0643 \u062e\u0644\u0627\u0644 \u0633\u0627\u0639\u062a\u064a\u0646.',
 ci_eye:'\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644',ct_r24:'\u064a\u0631\u062f \u062e\u0644\u0627\u0644 \u0633\u0627\u0639\u062a\u064a\u0646',ct_hrs:'\u0645\u062a\u0627\u062d 24/7',ct_addr:'\u0627\u0644\u0642\u0627\u0647\u0631\u0629\u060c \u0645\u0635\u0631',ct_wa:'\u062a\u062d\u062f\u062b \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0622\u0628',
 ct_pay:'\ud83d\udcb3 \u0646\u0642\u0628\u0644 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0628\u0627\u0644\u062c\u0646\u064a\u0647 \u0648\u0627\u0644\u062f\u0648\u0644\u0627\u0631 \u0639\u0628\u0631 \u0628\u0637\u0627\u0642\u0629 \u0627\u0626\u062a\u0645\u0627\u0646 \u0648\u0641\u0648\u062f\u0627\u0641\u0648\u0646 \u0643\u0627\u0634 \u0648\u0625\u0646\u0633\u062a\u0627\u0628\u0627\u064a \u0648\u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0628\u0646\u0643\u064a.',
 ft_tag:'\u0627\u0633\u062a\u0636\u0627\u0641\u0629 \u0628\u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062a \u0644\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0635\u0631\u064a\u0629. \u0633\u0631\u064a\u0639\u0629 \u0648\u0645\u0648\u062b\u0648\u0642\u0629 \u0648\u062f\u0639\u0645 \u0639\u0631\u0628\u064a.',
 ft_c1:'\u0627\u0644\u0627\u0633\u062a\u0636\u0627\u0641\u0629',ft_c2:'\u0627\u0644\u062e\u062f\u0645\u0627\u062a',ft_c3:'\u0627\u0644\u0634\u0631\u0643\u0629',
 ft_l1:'\u062e\u0637\u0629 \u0627\u0644\u0645\u0628\u062a\u062f\u0626',ft_l2:'\u062e\u0637\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644',ft_l3:'\u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629',ft_l4:'\u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062a',
 ft_l5:'\u062a\u0635\u0645\u064a\u0645 \u0645\u0648\u0627\u0642\u0639',ft_l6:'\u0627\u0644\u062a\u0633\u0648\u064a\u0642 \u0627\u0644\u0631\u0642\u0645\u064a',ft_l7:'\u0627\u0644\u0646\u0637\u0627\u0642\u0627\u062a',ft_l8:'\u0634\u0647\u0627\u062f\u0627\u062a SSL',
 ft_l9:'\u0645\u0646 \u0646\u062d\u0646',ft_l10:'\u0627\u062a\u0635\u0644 \u0628\u0646\u0627',ft_l11:'\u0627\u0644\u0645\u062f\u0648\u0646\u0629',ft_l12:'\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629',
 ft_copy:'\u00a9 2025 \u0641\u0648\u0643\u0633\u064a\u0644\u064a\u0633. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.',ft_priv:'\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629',ft_terms:'\u0634\u0631\u0648\u0637 \u0627\u0644\u062e\u062f\u0645\u0629',
 cl_label:'\u0645وثوق به من قِبَل عملاء مصريّين رائدين',pn_s:'\u0627\u0644\u0645\u0628\u062a\u062f\u0626',pn_b:'\u0627\u0644\u0623\u0639\u0645\u0627\u0644',pn_p:'\u0627\u0644\u0627\u062d\u062a\u0631\u0627\u0641\u064a',
 pop_badge:'🚀 عرض محدود المدة',
 pop_h:'احصل على <em>خصم 20%</em> لسنتك الأولى',
 pop_sub:'أطلق موقعك اليوم باستضافة بمستوى المؤسسات.',
 pop_v1:'20%',pop_l1:'خصم سنوي',pop_v2:'14',pop_l2:'يوم تجربة مجانية',
 pop_cta1:'احجز العرض الآن',pop_cta2:'ربما لاحقاً',pop_timer_txt:'ينتهي العرض خلال:',pn_e:'\u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062a',
 pn_db:'\u0627\u0644\u0623\u0633\u0627\u0633\u064a',pn_dbi:'\u0627\u0644\u0623\u0639\u0645\u0627\u0644',pn_dp:'\u0627\u0644\u0645\u0645\u064a\u0632',
 pn_mk1:'\u0627\u0644\u0645\u0628\u062a\u062f\u0626',pn_mk2:'\u0627\u0644\u0646\u0645\u0648',pn_mk3:'\u0627\u0644\u0648\u0643\u0627\u0644\u0627\u062a',
 most_pop:'\u0627\u0644\u0623\u0643\u062b\u0631 \u0634\u064a\u0648\u0639\u0627\u064b',per_mo:'/\u0634\u0647\u0631',one_time:'\u062f\u0641\u0639\u0629 \u0648\u0627\u062d\u062f\u0629',
 ent_c:'\u0645\u062e\u0635\u0635',ent_s:'\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0644\u0644\u0633\u0639\u0631',
 btn_go:'\u0627\u0628\u062f\u0623 \u0627\u0644\u0622\u0646',btn_sales:'\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a',btn_order:'\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646',btn_quote:'\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u0639\u0631\u0636 \u0633\u0639\u0631',
}};

function t(k){return(T[S.lang]&&T[S.lang][k])||T.en[k]||k;}

// Plan data
const PLANS={
 hosting:[
  {id:'s',pop:false,price:{usdm:4.99,egpm:249,usda:3.99,egpa:199},
   en:['1 Website','10 GB NVMe Storage','Unmetered Bandwidth','Free SSL','5 Email Accounts','Weekly Backups','24/7 Support'],
   ar:['\u0645\u0648\u0642\u0639 \u0648\u0627\u062d\u062f','10 \u062c\u064a\u062c\u0627 NVMe','\u0646\u0637\u0627\u0642 \u062a\u0631\u062f\u062f\u064a \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f','SSL \u0645\u062c\u0627\u0646\u064a','5 \u062d\u0633\u0627\u0628\u0627\u062a \u0628\u0631\u064a\u062f','\u0646\u0633\u062e \u0627\u062d\u062a\u064a\u0627\u0637\u064a \u0623\u0633\u0628\u0648\u0639\u064a','\u062f\u0639\u0645 24/7'],
   eno:['No Daily Backups','No Priority Support'],
   aro:['\u0628\u062f\u0648\u0646 \u0646\u0633\u062e \u064a\u0648\u0645\u064a','\u0628\u062f\u0648\u0646 \u062f\u0639\u0645 \u0623\u0648\u0644\u0648\u064a\u0629'],
   btn:'go'},
  {id:'b',pop:true,price:{usdm:12.99,egpm:649,usda:9.99,egpa:499},
   en:['10 Websites','50 GB NVMe Storage','Unmetered Bandwidth','Free SSL + Wildcard','50 Email Accounts','Daily Backups','Priority Support','Free Domain 1yr'],
   ar:['10 \u0645\u0648\u0627\u0642\u0639','50 \u062c\u064a\u062c\u0627 NVMe','\u0646\u0637\u0627\u0642 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f','SSL + Wildcard \u0645\u062c\u0627\u0646\u064a','50 \u062d\u0633\u0627\u0628 \u0628\u0631\u064a\u062f','\u0646\u0633\u062e \u0627\u062d\u062a\u064a\u0627\u0637\u064a \u064a\u0648\u0645\u064a','\u062f\u0639\u0645 \u0623\u0648\u0644\u0648\u064a\u0629','\u0646\u0637\u0627\u0642 \u0645\u062c\u0627\u0646\u064a \u0633\u0646\u0629'],
   eno:['No Dedicated IP'],aro:['\u0628\u062f\u0648\u0646 IP \u0645\u062e\u0635\u0635'],btn:'go'},
  {id:'p',pop:false,price:{usdm:24.99,egpm:1249,usda:19.99,egpa:999},
   en:['Unlimited Websites','150 GB NVMe Storage','Unmetered Bandwidth','Free SSL + Wildcard','Unlimited Emails','Daily Backups','Dedicated IP','Free Domain 1yr','Priority Support'],
   ar:['\u0645\u0648\u0627\u0642\u0639 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f\u0629','150 \u062c\u064a\u062c\u0627 NVMe','\u0646\u0637\u0627\u0642 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f','SSL + Wildcard \u0645\u062c\u0627\u0646\u064a','\u0628\u0631\u064a\u062f \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f','\u0646\u0633\u062e \u064a\u0648\u0645\u064a','IP \u0645\u062e\u0635\u0635','\u0646\u0637\u0627\u0642 \u0645\u062c\u0627\u0646\u064a \u0633\u0646\u0629','\u062f\u0639\u0645 \u0623\u0648\u0644\u0648\u064a\u0629'],
   eno:[],aro:[],btn:'go'},
  {id:'e',pop:false,custom:true,
   en:['Unlimited Websites','500 GB NVMe Storage','Unmetered Bandwidth','Free SSL + Wildcard','Unlimited Emails','Daily + Offsite Backups','Dedicated IP','Free Domain 2yrs','Dedicated Account Manager'],
   ar:['\u0645\u0648\u0627\u0642\u0639 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f\u0629','500 \u062c\u064a\u062c\u0627 NVMe','\u0646\u0637\u0627\u0642 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f','SSL + Wildcard \u0645\u062c\u0627\u0646\u064a','\u0628\u0631\u064a\u062f \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f','\u0646\u0633\u062e \u064a\u0648\u0645\u064a \u0648\u062e\u0627\u0631\u062c\u064a','IP \u0645\u062e\u0635\u0635','\u0646\u0637\u0627\u0642 \u0645\u062c\u0627\u0646\u064a \u0633\u0646\u062a\u0627\u0646','\u0645\u062f\u064a\u0631 \u062d\u0633\u0627\u0628 \u0645\u062e\u0635\u0635'],
   eno:[],aro:[],btn:'sales'},
 ],
 design:[
  {id:'db',pop:false,price:{usd:299,egp:14999},
   en:['5 Pages','Mobile Responsive','Contact Form','Basic SEO Setup','WordPress CMS'],
   ar:['5 \u0635\u0641\u062d\u0627\u062a','\u0645\u062a\u062c\u0627\u0648\u0628 \u0645\u0639 \u0627\u0644\u062c\u0648\u0627\u0644','\u0646\u0645\u0648\u0630\u062c \u062a\u0648\u0627\u0635\u0644','\u0625\u0639\u062f\u0627\u062f SEO \u0623\u0633\u0627\u0633\u064a','\u0648\u0648\u0631\u062f\u0628\u0631\u064a\u0633 CMS'],
   eno:['No E-commerce','No Bilingual'],aro:['\u0628\u062f\u0648\u0646 \u062a\u062c\u0627\u0631\u0629 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629','\u0628\u062f\u0648\u0646 \u062b\u0646\u0627\u0626\u064a \u0627\u0644\u0644\u063a\u0629'],btn:'order'},
  {id:'dbi',pop:true,price:{usd:699,egp:34999},
   en:['15 Pages','Custom UI Design','Arabic + English','Advanced SEO','E-commerce Ready','6 Months Support'],
   ar:['15 \u0635\u0641\u062d\u0629','\u062a\u0635\u0645\u064a\u0645 UI \u0645\u062e\u0635\u0635','\u0639\u0631\u0628\u064a + \u0625\u0646\u062c\u0644\u064a\u0632\u064a','SEO \u0645\u062a\u0642\u062f\u0645','\u062c\u0627\u0647\u0632 \u0644\u0644\u062a\u062c\u0627\u0631\u0629 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629','6 \u0623\u0634\u0647\u0631 \u062f\u0639\u0645'],
   eno:['No Payment Gateway'],aro:['\u0628\u062f\u0648\u0646 \u0628\u0648\u0627\u0628\u0629 \u062f\u0641\u0639'],btn:'order'},
  {id:'dp',pop:false,price:{usd:1499,egp:74999},
   en:['Unlimited Pages','Bespoke UI/UX','Arabic + English','Full SEO Strategy','E-commerce + Payment','12 Months Support','Performance Optimized'],
   ar:['\u0635\u0641\u062d\u0627\u062a \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f\u0629','UI/UX \u0645\u062e\u0635\u0635 \u0628\u0627\u0644\u0643\u0627\u0645\u0644','\u0639\u0631\u0628\u064a + \u0625\u0646\u062c\u0644\u064a\u0632\u064a','\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 SEO \u0643\u0627\u0645\u0644\u0629','\u062a\u062c\u0627\u0631\u0629 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 + \u062f\u0641\u0639','12 \u0634\u0647\u0631 \u062f\u0639\u0645','\u0645\u062d\u0633\u0651\u0646 \u0644\u0644\u0623\u062f\u0627\u0621'],
   eno:[],aro:[],btn:'quote'},
 ],
 marketing:[
  {id:'mk1',pop:false,price:{usd:199,egp:9999},
   en:['SEO Audit & Setup','Social Media 2 platforms','8 Posts / Month','Monthly Report'],
   ar:['\u062a\u062f\u0642\u064a\u0642 \u0648\u0625\u0639\u062f\u0627\u062f SEO','\u0648\u0633\u0627\u0626\u0644 \u062a\u0648\u0627\u0635\u0644 \u0645\u0646\u0635\u062a\u0627\u0646','8 \u0645\u0646\u0634\u0648\u0631\u0627\u062a/\u0634\u0647\u0631','\u062a\u0642\u0631\u064a\u0631 \u0634\u0647\u0631\u064a'],
   eno:['No Paid Ads','No Email Marketing'],aro:['\u0628\u062f\u0648\u0646 \u0625\u0639\u0644\u0627\u0646\u0627\u062a \u0645\u062f\u0641\u0648\u0639\u0629','\u0628\u062f\u0648\u0646 \u062a\u0633\u0648\u064a\u0642 \u0628\u0631\u064a\u062f\u064a'],btn:'go'},
  {id:'mk2',pop:true,price:{usd:449,egp:22499},
   en:['Full SEO Strategy','Social Media 4 platforms','20 Posts / Month','Google Ads Management','Email Marketing'],
   ar:['\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 SEO \u0643\u0627\u0645\u0644\u0629','\u0648\u0633\u0627\u0626\u0644 \u062a\u0648\u0627\u0635\u0644 4 \u0645\u0646\u0635\u0627\u062a','20 \u0645\u0646\u0634\u0648\u0631\u0627\u064b/\u0634\u0647\u0631','\u0625\u062f\u0627\u0631\u0629 \u0625\u0639\u0644\u0627\u0646\u0627\u062a \u062c\u0648\u062c\u0644','\u062a\u0633\u0648\u064a\u0642 \u0628\u0631\u064a\u062f\u064a'],
   eno:['No Dedicated Strategist'],aro:['\u0628\u062f\u0648\u0646 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a \u0645\u062e\u0635\u0635'],btn:'go'},
  {id:'mk3',pop:false,price:{usd:899,egp:44999},
   en:['Full SEO + Content','All Social Platforms','Unlimited Posts','Google + Meta Ads','Email + Automation','Dedicated Strategist'],
   ar:['SEO \u0643\u0627\u0645\u0644 + \u0645\u062d\u062a\u0648\u0649','\u062c\u0645\u064a\u0639 \u0645\u0646\u0635\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644','\u0645\u0646\u0634\u0648\u0631\u0627\u062a \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f\u0629','\u0625\u0639\u0644\u0627\u0646\u0627\u062a \u062c\u0648\u062c\u0644 \u0648\u0645\u064a\u062a\u0627','\u0628\u0631\u064a\u062f + \u0623\u062a\u0645\u062a\u0629','\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a \u0645\u062e\u0635\u0635'],
   eno:[],aro:[],btn:'go'},
 ]
};

function getPrice(plan){
 if(plan.custom) return null;
 const c=S.curr, b=S.bill;
 if(plan.price.usd!==undefined){
  return {sym:c==='usd'?'$':'',num:(c==='usd'?plan.price.usd:plan.price.egp).toLocaleString(),suf:c==='usd'?'USD':'EGP'};
 }
 const n=c==='usd'?(b==='m'?plan.price.usdm:plan.price.usda):(b==='m'?plan.price.egpm:plan.price.egpa);
 return {sym:c==='usd'?'$':'',num:n.toLocaleString(),suf:c==='usd'?'USD':'EGP'};
}

const DESC={
 s:{en:'For personal projects and small websites.',ar:'\u0644\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0635\u063a\u064a\u0631\u0629.'},
 b:{en:'For growing businesses and professional websites.',ar:'\u0644\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u062a\u0646\u0627\u0645\u064a\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629.'},
 p:{en:'For agencies and developers managing multiple sites.',ar:'\u0644\u0644\u0648\u0643\u0627\u0644\u0627\u062a \u0648\u0627\u0644\u0645\u0637\u0648\u0631\u064a\u0646 \u0627\u0644\u0630\u064a\u0646 \u064a\u062f\u064a\u0631\u0648\u0646 \u0645\u0648\u0627\u0642\u0639 \u0645\u062a\u0639\u062f\u062f\u0629.'},
 e:{en:'Full-power hosting for high-traffic sites.',ar:'\u0627\u0633\u062a\u0636\u0627\u0641\u0629 \u0643\u0627\u0645\u0644\u0629 \u0644\u0644\u0645\u0648\u0627\u0642\u0639 \u0639\u0627\u0644\u064a\u0629 \u0627\u0644\u062d\u0631\u0643\u0629.'},
 db:{en:'A clean professional website to start your online presence.',ar:'\u0645\u0648\u0642\u0639 \u0627\u062d\u062a\u0631\u0627\u0641\u064a \u0644\u0628\u062f\u0621 \u062a\u0648\u0627\u062c\u062f\u0643 \u0627\u0644\u0631\u0642\u0645\u064a.'},
 dbi:{en:'Full-featured website for growing businesses.',ar:'\u0645\u0648\u0642\u0639 \u0645\u062a\u0643\u0627\u0645\u0644 \u0644\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u062a\u0646\u0627\u0645\u064a\u0629.'},
 dp:{en:'Bespoke high-performance site for premium brands.',ar:'\u0645\u0648\u0642\u0639 \u0627\u0633\u062a\u062b\u0646\u0627\u0626\u064a \u0639\u0627\u0644\u064a \u0627\u0644\u0623\u062f\u0627\u0621 \u0644\u0644\u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u0645\u0645\u064a\u0632\u0629.'},
 mk1:{en:'For businesses getting started with digital marketing.',ar:'\u0644\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062a\u064a \u062a\u0628\u062f\u0623 \u0645\u0634\u0648\u0627\u0631 \u0627\u0644\u062a\u0633\u0648\u064a\u0642 \u0627\u0644\u0631\u0642\u0645\u064a.'},
 mk2:{en:'For businesses ready to grow aggressively online.',ar:'\u0644\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0633\u062a\u0639\u062f\u0629 \u0644\u0644\u0646\u0645\u0648 \u0627\u0644\u0631\u0642\u0645\u064a \u0627\u0644\u0633\u0631\u064a\u0639.'},
 mk3:{en:'Full-service marketing for ambitious brands.',ar:'\u062a\u0633\u0648\u064a\u0642 \u0634\u0627\u0645\u0644 \u0644\u0644\u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u0637\u0645\u0648\u062d\u0629.'},
};

const BTNMAP={go:{cls:'bpg',lbl:'btn_go'},sales:{cls:'bpsp',lbl:'btn_sales'},order:{cls:'bpg',lbl:'btn_order'},quote:{cls:'bpg',lbl:'btn_quote'}};

function mkCard(pl,flat){
 const p=getPrice(pl);
 const feats=(pl[S.lang]||pl.en).map(f=>`<li>${f}</li>`).join('');
 const nofeats=((S.lang==='ar'?pl.aro:pl.eno)||[]).map(f=>`<li class="no">${f}</li>`).join('');
 const bm=BTNMAP[pl.btn]||BTNMAP.go;
 const popT=pl.pop?`<div class="ptag">${t('most_pop')}</div>`:'';
 const nm=t('pn_'+pl.id);
 const desc=(DESC[pl.id]||{en:'',ar:''})[S.lang]||(DESC[pl.id]||{}).en||'';
 const per=flat?t('one_time'):t('per_mo');
 let prHTML;
 if(pl.custom){
  prHTML=`<div style="font-size:1.3rem;font-weight:700;color:var(--signal);margin-bottom:.4rem">${t('ent_c')}</div><div class="ppd">${t('ent_s')}</div>`;
 }else{
  prHTML=`<div class="ppr"><span class="pcur">${p.sym}</span><span class="pnum">${p.num}</span><span class="psuf">${p.suf}</span></div><div class="ppd">${per}</div>`;
 }
 return `<div class="pc${pl.pop?' pop':''}">${popT}<div class="pname">${nm}</div>${prHTML}<p class="pdesc">${desc}</p><ul class="pfl">${feats}${nofeats}</ul><button class="bplan ${bm.cls}" onclick="go('contact')">${t(bm.lbl)}</button></div>`;
}


// ══════════════════════════════════════════
//  BLOG DATA
// ══════════════════════════════════════════
const BLOG_POSTS = [
  {
    id:1, cat:'hosting', img_color:'#0d2a1f',
    date_en:'Apr 14, 2025', date_ar:'14 أبريل 2025',
    read_en:'5 min read', read_ar:'5 دقائق قراءة',
    cat_en:'Hosting', cat_ar:'الاستضافة',
    title_en:'NVMe SSD vs Traditional HDD Hosting: What\'s the Real Difference?',
    title_ar:'NVMe SSD مقابل HDD التقليدي: ما الفرق الحقيقي؟',
    excerpt_en:'Your hosting storage type is one of the biggest factors in your website\'s speed. We break down exactly why NVMe SSD hosting is up to 10× faster and why it matters for SEO.',
    excerpt_ar:'نوع التخزين في استضافتك هو أحد أهم عوامل سرعة موقعك. نشرح لك لماذا تخزين NVMe SSD أسرع بـ 10 مرات وأهميته لتحسين محركات البحث.',
    body_en:`<h2>Why Storage Type Matters More Than You Think</h2>
<p>Most people compare hosting plans by price or RAM, completely ignoring the storage technology underneath. This is a mistake — your storage type directly affects how fast every page on your site loads, which in turn affects your Google rankings, bounce rate, and conversion rate.</p>
<div class="callout"><strong>Key stat:</strong> Google has confirmed that page speed is a direct ranking factor. A 1-second delay in load time can reduce conversions by up to 7%.</div>
<h2>What is NVMe SSD?</h2>
<p>NVMe (Non-Volatile Memory Express) is a communication protocol designed specifically for flash storage. Unlike traditional SATA SSDs, NVMe drives communicate directly with your CPU via PCIe lanes, cutting out the slow SATA bottleneck entirely.</p>
<ul>
<li><strong>NVMe SSD:</strong> Up to 7,000 MB/s read speeds</li>
<li><strong>SATA SSD:</strong> ~550 MB/s read speeds</li>
<li><strong>Traditional HDD:</strong> ~120 MB/s read speeds</li>
</ul>
<h2>Real-World Impact for Your Website</h2>
<p>In our internal tests, migrating a WordPress site from HDD hosting to Voxylis NVMe hosting reduced Time to First Byte (TTFB) from 1.4 seconds down to 140ms — a 10× improvement. Google's Core Web Vitals immediately reflected this.</p>
<h3>Impact on Core Web Vitals</h3>
<p>Google's ranking algorithm now heavily weighs Core Web Vitals — LCP (Largest Contentful Paint), FID (First Input Delay), and CLS (Cumulative Layout Shift). NVMe storage directly improves your LCP score by serving assets faster from disk to RAM.</p>
<h2>How to Check If Your Host Uses NVMe</h2>
<p>Ask your host directly, or run a benchmark using tools like <strong>GTmetrix</strong> or <strong>Pingdom</strong>. Look at your TTFB — anything above 600ms strongly suggests you're on HDD or slow SATA storage.</p>
<div class="callout"><strong>Pro tip:</strong> All Voxylis plans include NVMe SSD storage as standard — no extra charge, no upsell.</div>
<h2>Bottom Line</h2>
<p>If you're on HDD hosting in 2025, you're leaving rankings, speed, and conversions on the table. Migrating to NVMe SSD hosting is the single highest-ROI upgrade most websites can make today.</p>
<div class="art-cta"><p><strong>Ready to upgrade?</strong> Move to Voxylis NVMe hosting today — free migration included.</p><button class="btn bp" style="font-size:.8rem;padding:.65rem 1.2rem" onclick="closeArticleBtn();go('hosting')">View Plans</button></div>`,
    body_ar:`<h2>لماذا نوع التخزين أهم مما تظن؟</h2>
<p>معظم الناس يقارنون خطط الاستضافة بالسعر أو الذاكرة العشوائية، متجاهلين تقنية التخزين. هذا خطأ — نوع التخزين يؤثر مباشرة على سرعة تحميل كل صفحة في موقعك، وهذا يؤثر بدوره على ترتيبك في جوجل ومعدل الارتداد والتحويلات.</p>
<div class="callout"><strong>إحصائية مهمة:</strong> أكدت جوجل أن سرعة الصفحة عامل تصنيف مباشر. تأخير ثانية واحدة يمكن أن يقلل التحويلات بنسبة 7%.</div>
<h2>ما هو NVMe SSD؟</h2>
<p>NVMe (Non-Volatile Memory Express) هو بروتوكول اتصال مصمم خصيصًا للتخزين الفلاشي. على عكس SATA SSDs التقليدية، تتواصل محركات NVMe مباشرة مع المعالج عبر مسارات PCIe.</p>
<ul>
<li><strong>NVMe SSD:</strong> سرعات قراءة تصل إلى 7,000 ميجابايت/ثانية</li>
<li><strong>SATA SSD:</strong> ~550 ميجابايت/ثانية</li>
<li><strong>HDD التقليدي:</strong> ~120 ميجابايت/ثانية</li>
</ul>
<h2>التأثير الحقيقي على موقعك</h2>
<p>في اختباراتنا، أدى ترحيل موقع ووردبريس من HDD إلى NVMe فوكسيليس إلى تقليل TTFB من 1.4 ثانية إلى 140ms — تحسن بمقدار 10 مرات.</p>
<div class="art-cta"><p><strong>مستعد للترقية؟</strong> انتقل إلى استضافة NVMe من فوكسيليس — الترحيل المجاني مشمول.</p><button class="btn bp" style="font-size:.8rem;padding:.65rem 1.2rem" onclick="closeArticleBtn();go('hosting')">عرض الخطط</button></div>`
  },
  {
    id:2, cat:'seo', img_color:'#1a0d2a',
    date_en:'Apr 7, 2025', date_ar:'7 أبريل 2025',
    read_en:'7 min read', read_ar:'7 دقائق قراءة',
    cat_en:'SEO', cat_ar:'تحسين محركات البحث',
    title_en:'10 Technical SEO Fixes That Will Boost Your Rankings This Week',
    title_ar:'10 إصلاحات SEO تقنية ستعزز ترتيبك هذا الأسبوع',
    excerpt_en:'Technical SEO is the foundation everything else is built on. These 10 fixes take under an hour each and can dramatically move the needle on your Google rankings.',
    excerpt_ar:'SEO التقني هو الأساس الذي يُبنى عليه كل شيء. هذه الإصلاحات العشرة تستغرق أقل من ساعة لكل منها ويمكنها تحريك الإبرة بشكل كبير في ترتيبات جوجل.',
    body_en:`<h2>Why Technical SEO Comes First</h2>
<p>You can write the best content in the world, but if Googlebot can't crawl and index your pages efficiently, you won't rank. Technical SEO removes the invisible barriers between your content and top rankings.</p>
<h2>The 10 Fixes</h2>
<h3>1. Fix Your Core Web Vitals</h3>
<p>LCP under 2.5s, FID under 100ms, CLS under 0.1 — these are Google's thresholds for "good" scores. Check yours at PageSpeed Insights and address each failing metric.</p>
<h3>2. Implement HTTPS Sitewide</h3>
<p>Still on HTTP? Google has been penalizing non-HTTPS sites since 2018. All Voxylis plans include free SSL — there's no excuse not to have it.</p>
<h3>3. Fix Crawl Errors in Google Search Console</h3>
<p>Log into Google Search Console and go to Coverage. Any 404 or redirect errors are leaking your crawl budget and potentially hurting rankings.</p>
<h3>4. Compress and Serve Next-Gen Images</h3>
<p>Images are almost always the biggest LCP culprit. Convert your JPGs/PNGs to WebP — it cuts file size by 25-35% with no visible quality loss.</p>
<h3>5. Enable GZIP/Brotli Compression</h3>
<p>Text-based assets (HTML, CSS, JS) should be compressed before transmission. Brotli compression is up to 26% better than GZIP and is supported by all modern browsers.</p>
<h3>6. Implement Proper Canonical Tags</h3>
<p>If your site has duplicate content (e.g. www vs non-www, HTTP vs HTTPS, trailing slash vs none), add canonical tags to tell Google which version is authoritative.</p>
<h3>7. Fix Your Mobile Viewport</h3>
<p>Google uses mobile-first indexing — your mobile experience is what gets ranked, not your desktop. Test with Google's Mobile-Friendly Test and fix any failing elements.</p>
<h3>8. Create and Submit an XML Sitemap</h3>
<p>If you don't have a sitemap submitted in Google Search Console, you're relying on Googlebot to find your pages organically. A sitemap guarantees every page gets discovered.</p>
<h3>9. Improve Internal Linking</h3>
<p>Internal links distribute PageRank across your site. Your most important pages should have the most internal links pointing to them — ensure every page is reachable within 3 clicks from the homepage.</p>
<h3>10. Optimize Your robots.txt</h3>
<p>Make sure you're not accidentally blocking important pages in robots.txt. Many WordPress sites block CSS and JS files, which prevents Google from rendering pages correctly.</p>
<div class="callout"><strong>Quick win:</strong> Run a free SEO audit at <strong>ahrefs.com/free-seo-tools</strong> — their site audit tool catches most of these issues automatically.</div>
<div class="art-cta"><p><strong>Want us to handle your SEO?</strong> Our digital marketing team covers all of this and more.</p><button class="btn bp" style="font-size:.8rem;padding:.65rem 1.2rem" onclick="closeArticleBtn();go('marketing')">View Marketing Plans</button></div>`,
    body_ar:`<h2>لماذا يأتي SEO التقني أولاً؟</h2>
<p>يمكنك كتابة أفضل محتوى في العالم، لكن إذا لم يتمكن Googlebot من الزحف إلى صفحاتك وفهرستها بكفاءة، لن تحتل مراتب عالية. SEO التقني يزيل الحواجز غير المرئية بين محتواك والمراتب الأولى.</p>
<h2>الإصلاحات العشرة</h2>
<h3>1. أصلح Core Web Vitals</h3>
<p>LCP أقل من 2.5 ثانية، FID أقل من 100ms، CLS أقل من 0.1 — هذه هي عتبات جوجل للدرجات "الجيدة".</p>
<h3>2. طبّق HTTPS على كامل الموقع</h3>
<p>لا تزال على HTTP؟ جوجل تعاقب المواقع غير HTTPS منذ 2018. جميع خطط فوكسيليس تتضمن SSL مجانياً.</p>
<h3>3. أصلح أخطاء الزحف في Google Search Console</h3>
<p>سجل دخولك وانتقل إلى التغطية. أي أخطاء 404 تستنزف ميزانية الزحف وتضر بالترتيبات.</p>
<h3>4. اضغط صورك وقدّمها بصيغ الجيل القادم</h3>
<p>حوّل JPGs/PNGs إلى WebP — يقلل حجم الملف 25-35% دون فقدان الجودة.</p>
<h3>5. فعّل ضغط GZIP/Brotli</h3>
<p>ضغط Brotli أفضل بنسبة 26% من GZIP ومدعوم من جميع المتصفحات الحديثة.</p>
<div class="art-cta"><p><strong>تريد منا التعامل مع SEO الخاص بك؟</strong> فريق التسويق الرقمي لدينا يغطي كل هذا وأكثر.</p><button class="btn bp" style="font-size:.8rem;padding:.65rem 1.2rem" onclick="closeArticleBtn();go('marketing')">عرض خطط التسويق</button></div>`
  },
  {
    id:3, cat:'design', img_color:'#0d1a2a',
    date_en:'Mar 28, 2025', date_ar:'28 مارس 2025',
    read_en:'6 min read', read_ar:'6 دقائق قراءة',
    cat_en:'Web Design', cat_ar:'تصميم المواقع',
    title_en:'Why Your Website\'s Loading Speed is Killing Your Conversion Rate',
    title_ar:'لماذا تدمر سرعة تحميل موقعك معدل تحويلك؟',
    excerpt_en:'A 3-second load time can cost you 53% of your mobile visitors before they even see your homepage. Here\'s how to diagnose the problem and fix it permanently.',
    excerpt_ar:'وقت تحميل 3 ثوانٍ يمكن أن يكلفك 53% من زوار الجوال قبل رؤية صفحتك الرئيسية. إليك كيفية تشخيص المشكلة وإصلاحها بشكل دائم.',
    body_en:`<h2>The Data That Should Alarm Every Website Owner</h2>
<p>Google's research shows that 53% of mobile users abandon a page that takes longer than 3 seconds to load. Amazon calculated that every 100ms of added latency costs them 1% in sales. These aren't edge cases — they're universal patterns that apply to every website.</p>
<div class="callout"><strong>Reality check:</strong> Use Google PageSpeed Insights right now on your website. If your score is below 70 on mobile, you have a conversion problem.</div>
<h2>The 5 Biggest Speed Killers</h2>
<h3>1. Unoptimized Images</h3>
<p>Images typically account for 60-80% of a page's total weight. Serving a 4MB hero image on a mobile device when a 200KB WebP would look identical is one of the most common and costly mistakes in web design.</p>
<h3>2. Render-Blocking JavaScript</h3>
<p>JavaScript files that load in the &lt;head&gt; block the browser from rendering the page until they're fully loaded. Move non-critical JS to the bottom of the page or use defer/async attributes.</p>
<h3>3. No Browser Caching</h3>
<p>Without proper cache headers, returning visitors re-download everything on every visit. Setting Cache-Control headers correctly means repeat visitors experience near-instant loads.</p>
<h3>4. No CDN</h3>
<p>Serving all your assets from a single server location means visitors far from that server experience high latency. A CDN stores copies of your static assets at edge locations worldwide.</p>
<h3>5. Slow Hosting</h3>
<p>All of the above optimizations are built on top of your hosting infrastructure. If your server itself is slow (high TTFB), no amount of frontend optimization will fully compensate.</p>
<h2>The Fix: Measure → Optimize → Repeat</h2>
<p>Use this workflow: measure with PageSpeed Insights, identify your biggest bottleneck, fix it, re-measure. Repeat until your mobile score is above 90. Most sites can get there in under a week of focused work.</p>
<div class="art-cta"><p><strong>Need a faster website?</strong> Our web design team builds performance-first sites from the ground up.</p><button class="btn bp" style="font-size:.8rem;padding:.65rem 1.2rem" onclick="closeArticleBtn();go('design')">View Design Packages</button></div>`,
    body_ar:`<h2>البيانات التي يجب أن تقلق كل صاحب موقع</h2>
<p>أبحاث جوجل تُظهر أن 53% من مستخدمي الجوال يتركون الصفحة التي تستغرق أكثر من 3 ثوانٍ للتحميل. أمازون حسبت أن كل 100ms تأخير إضافي يكلفها 1% من المبيعات.</p>
<div class="callout"><strong>اختبر الآن:</strong> استخدم Google PageSpeed Insights على موقعك. إذا كانت درجتك أقل من 70 على الجوال، لديك مشكلة في التحويل.</div>
<h2>أكبر 5 قاتلات سرعة</h2>
<h3>1. الصور غير المحسّنة</h3><p>تمثل الصور عادةً 60-80% من الحجم الكلي للصفحة. تقديم صورة بحجم 4MB على الجوال عندما يكون 200KB WebP مطابقاً بصرياً هو من أكثر الأخطاء الشائعة.</p>
<h3>2. JavaScript الحاجب للعرض</h3><p>ملفات JS في الـ head تحجب المتصفح عن عرض الصفحة. انقلها لنهاية الصفحة أو استخدم defer/async.</p>
<h3>3. لا تخزين مؤقت للمتصفح</h3><p>بدون ترويسات التخزين المؤقت، يُعيد الزوار تحميل كل شيء في كل زيارة.</p>
<h3>4. لا CDN</h3><p>تقديم أصولك من موقع خادم واحد يعني تأخراً عالياً للزوار البعيدين.</p>
<h3>5. استضافة بطيئة</h3><p>إذا كان الخادم نفسه بطيئاً (TTFB عالي)، لن تعوض أي تحسينات أمامية ذلك بالكامل.</p>
<div class="art-cta"><p><strong>تحتاج موقعاً أسرع؟</strong> فريق تصميم الويب لدينا يبني مواقع تُقدم الأداء أولاً.</p><button class="btn bp" style="font-size:.8rem;padding:.65rem 1.2rem" onclick="closeArticleBtn();go('design')">عرض باقات التصميم</button></div>`
  },
  {
    id:4, cat:'marketing', img_color:'#2a1a0d',
    date_en:'Mar 19, 2025', date_ar:'19 مارس 2025',
    read_en:'8 min read', read_ar:'8 دقائق قراءة',
    cat_en:'Marketing', cat_ar:'التسويق',
    title_en:'The Complete Guide to Google My Business Optimization in 2025',
    title_ar:'الدليل الكامل لتحسين Google My Business في 2025',
    excerpt_en:'Local SEO starts with your Google Business Profile. This guide walks through every optimization that will get your business appearing in the local pack and Maps results.',
    excerpt_ar:'يبدأ SEO المحلي من ملف Google Business الخاص بك. هذا الدليل يشرح كل تحسين سيجعل نشاطك يظهر في النتائج المحلية وخرائط جوجل.',
    body_en:`<h2>Why Google Business Profile is Your Most Powerful Free SEO Tool</h2>
<p>Google My Business (now Google Business Profile) directly determines whether your business appears in the "local pack" — the 3 business listings that appear above organic results for local searches. Getting into this pack can be more valuable than ranking #1 in organic results.</p>
<div class="callout"><strong>Stat:</strong> 46% of all Google searches have local intent. Businesses in the local pack get 33% of clicks. This is non-negotiable for any business with a physical presence or local service area.</div>
<h2>Complete Optimization Checklist</h2>
<h3>1. Claim and Verify Your Listing</h3>
<p>If you haven't claimed your Google Business Profile, do it now at business.google.com. Verification typically takes 5 days via postcard, but phone/email verification is sometimes available.</p>
<h3>2. Complete Every Section</h3>
<p>Businesses with complete profiles get 7× more clicks. Fill in: business name, address, phone, website, hours, description (750 characters), categories (up to 10), and services.</p>
<h3>3. Choose the Right Primary Category</h3>
<p>Your primary category is the most influential ranking factor in your profile. Be as specific as possible — "Web Hosting Company" will outrank "Technology Company" for hosting searches.</p>
<h3>4. Post Weekly Updates</h3>
<p>Google Business Posts appear in your listing and in search results. Post offers, events, new blog content, or company updates at least once per week to signal active engagement.</p>
<h3>5. Collect and Respond to Reviews</h3>
<p>Reviews are the #1 local ranking factor. Ask every happy customer for a review — the easiest way is a direct link to your review form. Respond to every review, positive and negative.</p>
<h3>6. Upload Quality Photos Weekly</h3>
<p>Businesses with photos receive 42% more requests for directions and 35% more website clicks. Upload photos of your team, workspace, and products regularly.</p>
<h3>7. Enable Messaging</h3>
<p>Google Business messaging lets potential customers contact you directly from search results. Response time is displayed publicly — keep it under 24 hours.</p>
<div class="art-cta"><p><strong>Want us to manage your digital presence?</strong> Our marketing team handles GMB, SEO, and social — all in one plan.</p><button class="btn bp" style="font-size:.8rem;padding:.65rem 1.2rem" onclick="closeArticleBtn();go('marketing')">View Marketing Plans</button></div>`,
    body_ar:`<h2>لماذا Google Business Profile هو أقوى أداة SEO مجانية؟</h2>
<p>Google My Business يحدد مباشرةً ما إذا كان نشاطك يظهر في "الحزمة المحلية" — قوائم الأعمال الثلاث التي تظهر فوق النتائج العضوية للبحث المحلي.</p>
<div class="callout"><strong>إحصائية:</strong> 46% من كل بحث في جوجل ذو نية محلية. الأعمال في الحزمة المحلية تحصل على 33% من النقرات.</div>
<h2>قائمة التحسين الكاملة</h2>
<h3>1. استلم وتحقق من قائمتك</h3><p>إذا لم تستلم Google Business Profile الخاص بك، افعل ذلك الآن على business.google.com.</p>
<h3>2. أكمل كل الأقسام</h3><p>الأعمال ذات الملفات الكاملة تحصل على 7 أضعاف النقرات. أكمل: الاسم، العنوان، الهاتف، الموقع، الساعات، الوصف، الفئات.</p>
<h3>3. انشر تحديثات أسبوعية</h3><p>انشر عروضاً أو أحداثاً أو محتوى مدونة على الأقل مرة أسبوعياً.</p>
<h3>4. اجمع التقييمات وارد عليها</h3><p>التقييمات هي عامل التصنيف المحلي رقم 1. اطلب من كل عميل سعيد تقييماً وارد على كل تقييم.</p>
<div class="art-cta"><p><strong>تريدنا أن ندير تواجدك الرقمي؟</strong> فريق التسويق لدينا يتولى GMB وSEO والسوشيال ميديا.</p><button class="btn bp" style="font-size:.8rem;padding:.65rem 1.2rem" onclick="closeArticleBtn();go('marketing')">عرض خطط التسويق</button></div>`
  },
  {
    id:5, cat:'hosting', img_color:'#0d2a1a',
    date_en:'Mar 10, 2025', date_ar:'10 مارس 2025',
    read_en:'4 min read', read_ar:'4 دقائق قراءة',
    cat_en:'Hosting', cat_ar:'الاستضافة',
    title_en:'How to Migrate Your Website to Voxylis in Under 30 Minutes',
    title_ar:'كيف تنقل موقعك إلى فوكسيليس في أقل من 30 دقيقة',
    excerpt_en:'Worried that migrating your website will cause downtime or data loss? Our step-by-step process ensures zero downtime migration with a complete safety net.',
    excerpt_ar:'قلق من أن نقل موقعك سيسبب توقفاً أو فقدان بيانات؟ عمليتنا المفصلة تضمن نقلاً بدون أي توقف مع شبكة أمان كاملة.',
    body_en:`<h2>The Fear That Keeps People on Bad Hosting</h2>
<p>We hear this all the time: "I know my hosting is slow and expensive, but I'm afraid to migrate." This fear is completely understandable — but it's also largely unfounded when you follow the right process.</p>
<h2>The Zero-Downtime Migration Process</h2>
<h3>Step 1: Back Up Everything (5 minutes)</h3>
<p>Before touching anything, create a complete backup of your website files and database. If you're on WordPress, plugins like UpdraftPlus or All-in-One WP Migration make this a one-click operation.</p>
<h3>Step 2: Set Up Your New Hosting Account (5 minutes)</h3>
<p>Create your Voxylis account and note your new server's nameservers. Don't change your DNS yet — this is crucial for zero downtime.</p>
<h3>Step 3: Transfer Your Files (10 minutes)</h3>
<p>Connect to your new server via FTP/SFTP and upload your website files. For WordPress sites, export your database from your old host's phpMyAdmin and import it into your new server.</p>
<h3>Step 4: Test on the New Server (5 minutes)</h3>
<p>Before switching DNS, test your site on the new server by temporarily modifying your local hosts file. Verify everything works correctly.</p>
<h3>Step 5: Switch DNS (2 minutes, 0 downtime)</h3>
<p>Update your domain's nameservers to point to Voxylis. DNS propagation typically takes 1-4 hours. During this time, your site remains accessible on your old host, so there's no downtime.</p>
<div class="callout"><strong>Free migration:</strong> All Voxylis Business and Pro plan subscribers get a free, professionally managed migration — we do all of this for you.</div>
<div class="art-cta"><p><strong>Want us to handle your migration?</strong> It's free with Business and Pro plans.</p><button class="btn bp" style="font-size:.8rem;padding:.65rem 1.2rem" onclick="closeArticleBtn();go('hosting')">View Hosting Plans</button></div>`,
    body_ar:`<h2>الخوف الذي يبقي الناس على استضافة سيئة</h2>
<p>نسمع هذا دائماً: "أعرف أن استضافتي بطيئة وغالية، لكنني أخاف من الانتقال." هذا الخوف مفهوم تماماً — لكنه أيضاً مبالغ فيه كثيراً عند اتباع العملية الصحيحة.</p>
<h2>عملية الانتقال بدون توقف</h2>
<h3>الخطوة 1: احتفظ بنسخة احتياطية من كل شيء (5 دقائق)</h3>
<p>قبل لمس أي شيء، أنشئ نسخة احتياطية كاملة من ملفات موقعك وقاعدة البيانات.</p>
<h3>الخطوة 2: إعداد حساب الاستضافة الجديد (5 دقائق)</h3>
<p>أنشئ حساب فوكسيليس ودوّن خوادم الأسماء الجديدة. لا تغير DNS الآن.</p>
<h3>الخطوة 3: نقل الملفات (10 دقائق)</h3>
<p>اتصل بالخادم الجديد عبر FTP/SFTP وارفع ملفات موقعك.</p>
<h3>الخطوة 4: الاختبار على الخادم الجديد (5 دقائق)</h3>
<p>اختبر موقعك على الخادم الجديد قبل تغيير DNS.</p>
<h3>الخطوة 5: تغيير DNS (دقيقتان، 0 توقف)</h3>
<p>حدّث خوادم أسماء نطاقك للإشارة إلى فوكسيليس. ينتشر DNS عادةً في 1-4 ساعات دون أي توقف.</p>
<div class="art-cta"><p><strong>تريدنا أن نتولى الانتقال؟</strong> مجاني مع خطتي Business وPro.</p><button class="btn bp" style="font-size:.8rem;padding:.65rem 1.2rem" onclick="closeArticleBtn();go('hosting')">عرض خطط الاستضافة</button></div>`
  },
  {
    id:6, cat:'seo', img_color:'#1a0d1a',
    date_en:'Feb 28, 2025', date_ar:'28 فبراير 2025',
    read_en:'6 min read', read_ar:'6 دقائق قراءة',
    cat_en:'SEO', cat_ar:'تحسين محركات البحث',
    title_en:'Structured Data & Schema Markup: The Complete 2025 Guide',
    title_ar:'البيانات المنظمة وترميز Schema: الدليل الكامل لعام 2025',
    excerpt_en:'Schema markup helps Google understand your content and can earn you rich results — star ratings, FAQs, prices — directly in the search results. Here\'s exactly how to implement it.',
    excerpt_ar:'ترميز Schema يساعد جوجل على فهم محتواك ويمكنه أن يمنحك نتائج غنية — تقييمات نجوم، أسئلة شائعة، أسعار — مباشرة في نتائج البحث.',
    body_en:`<h2>What is Schema Markup and Why Does It Matter?</h2>
<p>Schema markup is structured data you add to your HTML to help search engines understand the context of your content. When implemented correctly, it can unlock "rich results" — enhanced SERP appearances that dramatically increase click-through rates.</p>
<div class="callout"><strong>Impact:</strong> Websites with rich results see 20-30% higher CTR compared to standard listings. More clicks from the same ranking = more organic traffic without improving your position.</div>
<h2>The Most Valuable Schema Types for Businesses</h2>
<h3>Organization Schema</h3>
<p>Tells Google who you are — your name, logo, contact info, and social profiles. This powers the Knowledge Panel that appears when people search your brand name directly.</p>
<h3>FAQ Schema</h3>
<p>Expands your search result to show questions and answers directly in the SERP. This can effectively double your SERP real estate without improving rankings.</p>
<h3>Product & Offer Schema</h3>
<p>For e-commerce or service pricing pages, this enables price, availability, and review stars to show directly in search results.</p>
<h3>Review/Rating Schema</h3>
<p>Star ratings next to your listing dramatically improve CTR. Aggregate your reviews using this schema to display your average rating in Google results.</p>
<h3>Breadcrumb Schema</h3>
<p>Replaces the URL in your search result with a clean breadcrumb path. Improves user trust and CTR, especially on mobile.</p>
<h2>How to Validate Your Schema</h2>
<p>Use Google's Rich Results Test at search.google.com/test/rich-results to validate any Schema markup you add. Fix any errors before submitting to Google Search Console.</p>
<div class="callout"><strong>Good news:</strong> Voxylis websites are built with proper Schema markup as standard — Organization, FAQ, Service, and Breadcrumb schemas are included in every site we build.</div>
<div class="art-cta"><p><strong>Want a site that's built for Google from day one?</strong> Our web design packages include full Schema implementation.</p><button class="btn bp" style="font-size:.8rem;padding:.65rem 1.2rem" onclick="closeArticleBtn();go('design')">View Design Packages</button></div>`,
    body_ar:`<h2>ما هو ترميز Schema ولماذا يهم؟</h2>
<p>ترميز Schema هو بيانات منظمة تضيفها إلى HTML لمساعدة محركات البحث على فهم سياق محتواك. عند تطبيقه بشكل صحيح، يمكنه فتح "نتائج غنية" في صفحات نتائج البحث.</p>
<div class="callout"><strong>التأثير:</strong> المواقع ذات النتائج الغنية ترى معدل نقر أعلى بـ 20-30% مقارنةً بالقوائم العادية.</div>
<h2>أهم أنواع Schema للأعمال</h2>
<h3>Organization Schema</h3><p>يخبر جوجل بهويتك — اسمك وشعارك ومعلومات الاتصال والملفات الاجتماعية.</p>
<h3>FAQ Schema</h3><p>يوسّع نتيجة بحثك لإظهار الأسئلة والإجابات مباشرةً في صفحة النتائج.</p>
<h3>Product & Offer Schema</h3><p>يتيح عرض السعر والتوفر ونجوم التقييم مباشرة في نتائج البحث.</p>
<h3>Review/Rating Schema</h3><p>نجوم التقييم بجانب قائمتك تحسّن معدل النقر بشكل كبير.</p>
<div class="art-cta"><p><strong>تريد موقعاً مبنياً لجوجل من اليوم الأول؟</strong> باقات تصميمنا تتضمن تطبيق Schema الكامل.</p><button class="btn bp" style="font-size:.8rem;padding:.65rem 1.2rem" onclick="closeArticleBtn();go('design')">عرض باقات التصميم</button></div>`
  }
];

const CATS = {
  en: [{id:'all',label:'All Posts'},{id:'hosting',label:'Hosting'},{id:'seo',label:'SEO'},{id:'design',label:'Web Design'},{id:'marketing',label:'Marketing'}],
  ar: [{id:'all',label:'جميع المقالات'},{id:'hosting',label:'الاستضافة'},{id:'seo',label:'تحسين محركات البحث'},{id:'design',label:'تصميم المواقع'},{id:'marketing',label:'التسويق'}]
};

let _activeCat = 'all';

// ── Blog translations ──
const BLOG_T = {
  en:{
    bl_eye:'Knowledge Base',
    bl_h1:'The Voxylis <em>Blog</em>',
    bl_sub:'Expert guides on web hosting, SEO, web design, and digital marketing. Updated weekly.',
    bl_seo_eye:'Why We Write',
    bl_seo_h2:'Knowledge That <em>Grows Your Business.</em>',
    bl_seo_p1:'Every article on the Voxylis blog is written by our team of hosting engineers, SEO specialists, and digital marketing strategists. We don\'t publish fluff — every piece contains actionable insights you can implement today.',
    bl_seo_p2:'Our goal is simple: help you build a faster, more visible, more profitable online presence. Whether you\'re managing your own site or building for clients, you\'ll find guides here that make a real difference.',
    bl_nl_h:'Stay <em>Ahead of the Curve.</em>',
    bl_nl_p:'Get our best SEO tips, hosting guides, and marketing insights — delivered to your inbox every week.',
    bl_nl_btn:'Subscribe Free',
    bl_nl_ok:'You\'re subscribed! Welcome to the Voxylis community.',
    bl_read:'Read Article',
    bl_no_results:'No articles in this category yet. Check back soon.',
    nav_blog:'Blog',
    bl_bc_home:'Home', bl_bc_blog:'Blog',
  },
  ar:{
    bl_eye:'قاعدة المعرفة',
    bl_h1:'مدونة <em>فوكسيليس</em>',
    bl_sub:'أدلة خبراء في استضافة الويب وSEO وتصميم المواقع والتسويق الرقمي. تحديث أسبوعي.',
    bl_seo_eye:'لماذا نكتب',
    bl_seo_h2:'معرفة <em>تنمّي أعمالك.</em>',
    bl_seo_p1:'كل مقال في مدونة فوكسيليس مكتوب من قِبَل فريقنا من مهندسي الاستضافة ومتخصصي SEO واستراتيجيي التسويق الرقمي.',
    bl_seo_p2:'هدفنا بسيط: مساعدتك على بناء تواجد إلكتروني أسرع وأكثر ظهوراً وأكثر ربحية.',
    bl_nl_h:'ابقَ <em>في المقدمة دائماً.</em>',
    bl_nl_p:'احصل على أفضل نصائح SEO وأدلة الاستضافة ورؤى التسويق — مباشرة في بريدك الإلكتروني كل أسبوع.',
    bl_nl_btn:'اشترك مجاناً',
    bl_nl_ok:'أنت مشترك الآن! مرحباً بك في مجتمع فوكسيليس.',
    bl_read:'اقرأ المقال',
    bl_no_results:'لا توجد مقالات في هذه الفئة بعد. تحقق لاحقاً.',
    nav_blog:'المدونة',
    bl_bc_home:'الرئيسية', bl_bc_blog:'المدونة',
  }
};

function bt(k){ return (BLOG_T[S.lang]&&BLOG_T[S.lang][k])||BLOG_T.en[k]||k; }

// ── Blog SVG thumbnails ──
function blogThumb(cat,color){
  const g = {
    hosting:'<rect x="60" y="40" width="80" height="60" rx="6" fill="none" stroke="#13E9BA" stroke-width="2.5" opacity=".6"/><rect x="70" y="50" width="60" height="40" rx="3" fill="rgba(19,233,186,.08)"/><line x1="75" y1="62" x2="125" y2="62" stroke="#13E9BA" stroke-width="1.5" opacity=".5"/><line x1="75" y1="70" x2="115" y2="70" stroke="#13E9BA" stroke-width="1.5" opacity=".35"/><line x1="75" y1="78" x2="120" y2="78" stroke="#13E9BA" stroke-width="1.5" opacity=".25"/><circle cx="155" cy="55" r="14" fill="none" stroke="#FF6340" stroke-width="2" opacity=".5"/><line x1="155" y1="46" x2="155" y2="64" stroke="#FF6340" stroke-width="2" opacity=".5"/><line x1="146" y1="55" x2="164" y2="55" stroke="#FF6340" stroke-width="2" opacity=".5"/>',
    seo:'<circle cx="90" cy="70" r="30" fill="none" stroke="#13E9BA" stroke-width="2.5" opacity=".6"/><circle cx="90" cy="70" r="18" fill="rgba(19,233,186,.08)"/><line x1="112" y1="92" x2="140" y2="120" stroke="#13E9BA" stroke-width="3.5" stroke-linecap="round" opacity=".7"/><line x1="60" y1="70" x2="120" y2="70" stroke="#13E9BA" stroke-width="1.5" opacity=".35"/><line x1="90" y1="40" x2="90" y2="100" stroke="#13E9BA" stroke-width="1.5" opacity=".35"/>',
    design:'<rect x="45" y="35" width="130" height="90" rx="8" fill="none" stroke="#13E9BA" stroke-width="2" opacity=".6"/><rect x="45" y="35" width="130" height="22" rx="8" fill="rgba(19,233,186,.1)"/><circle cx="57" cy="46" r="4" fill="#FF5F57"/><circle cx="69" cy="46" r="4" fill="#FEBC2E"/><circle cx="81" cy="46" r="4" fill="#28C840"/><rect x="57" y="70" width="50" height="8" rx="2" fill="rgba(19,233,186,.35)"/><rect x="57" y="84" width="80" height="6" rx="2" fill="rgba(232,226,210,.2)"/><rect x="57" y="95" width="65" height="6" rx="2" fill="rgba(232,226,210,.15)"/>',
    marketing:'<line x1="50" y1="110" x2="80" y2="70" stroke="#13E9BA" stroke-width="2.5" opacity=".6"/><line x1="80" y1="70" x2="110" y2="85" stroke="#13E9BA" stroke-width="2.5" opacity=".6"/><line x1="110" y1="85" x2="140" y2="45" stroke="#13E9BA" stroke-width="2.5" opacity=".6"/><circle cx="50" cy="110" r="5" fill="#13E9BA" opacity=".7"/><circle cx="80" cy="70" r="5" fill="#13E9BA" opacity=".7"/><circle cx="110" cy="85" r="5" fill="#13E9BA" opacity=".7"/><circle cx="140" cy="45" r="5" fill="#13E9BA"/><rect x="45" y="112" width="6" height="20" rx="2" fill="rgba(19,233,186,.3)"/><rect x="105" y="87" width="6" height="45" rx="2" fill="rgba(19,233,186,.3)"/><rect x="135" y="47" width="6" height="85" rx="2" fill="rgba(19,233,186,.5)"/>'
  };
  return `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="150" fill="${color}"/>${g[cat]||g.hosting}</svg>`;
}

function renderBlogGrid(cat){
  _activeCat = cat||'all';
  const grid = document.getElementById('blogGrid');
  const noR  = document.getElementById('blogNoResults');
  if(!grid) return;
  const posts = BLOG_POSTS.filter(p=>_activeCat==='all'||p.cat===_activeCat);
  if(!posts.length){
    grid.innerHTML=''; noR.style.display='block';
    noR.textContent = bt('bl_no_results');
    return;
  }
  noR.style.display='none';
  grid.innerHTML = posts.map(p=>`
    <div class="blog-card" onclick="openArticle(${p.id})">
      <div class="blog-img">
        ${blogThumb(p.cat, p.img_color)}
        <div class="blog-cat">${S.lang==='ar'?p.cat_ar:p.cat_en}</div>
      </div>
      <div class="blog-body">
        <div class="blog-meta">
          <span>${S.lang==='ar'?p.date_ar:p.date_en}</span>
          <span class="blog-meta-dot"></span>
          <span>${S.lang==='ar'?p.read_ar:p.read_en}</span>
        </div>
        <div class="blog-title">${S.lang==='ar'?p.title_ar:p.title_en}</div>
        <div class="blog-excerpt">${S.lang==='ar'?p.excerpt_ar:p.excerpt_en}</div>
        <div class="blog-read">${bt('bl_read')} <span style="font-size:1rem;line-height:1">${S.lang==='ar'?'←':'→'}</span></div>
      </div>
    </div>`).join('');
}

function renderCatFilter(){
  const el = document.getElementById('blogCatFilter');
  if(!el) return;
  el.innerHTML = (CATS[S.lang]||CATS.en).map(c=>`
    <button onclick="filterBlog('${c.id}')" style="
      background:${_activeCat===c.id?'var(--signal)':'transparent'};
      color:${_activeCat===c.id?'var(--night)':'var(--muted)'};
      border:1px solid ${_activeCat===c.id?'var(--signal)':'var(--border)'};
      border-radius:100px;font-size:.72rem;font-weight:700;letter-spacing:.08em;
      text-transform:uppercase;padding:.4rem 1rem;cursor:pointer;transition:all .2s;
      font-family:inherit"
    >${c.label}</button>`).join('');
}

function filterBlog(cat){
  _activeCat = cat;
  renderCatFilter();
  renderBlogGrid(cat);
}

function renderBlogPage(){
  const ids = ['bl_eye','bl_seo_eye','bl_seo_p1','bl_seo_p2','bl_nl_p','bl_nl_btn'];
  ids.forEach(id=>{ const e=document.getElementById(id); if(e) e.textContent=bt(id); });
  ['bl_h1','bl_seo_h2','bl_nl_h'].forEach(id=>{ const e=document.getElementById(id); if(e) e.innerHTML=bt(id); });
  const subEl = document.getElementById('bl_sub'); if(subEl) subEl.textContent = bt('bl_sub');
  renderCatFilter();
  renderBlogGrid(_activeCat);
}

function openArticle(id){
  const p = BLOG_POSTS.find(x=>x.id===id);
  if(!p) return;
  const isAr = S.lang==='ar';
  document.getElementById('artTitle').textContent = isAr?p.title_ar:p.title_en;
  document.getElementById('artCat').textContent = isAr?p.cat_ar:p.cat_en;
  document.getElementById('artMeta').innerHTML = `<span>${isAr?p.date_ar:p.date_en}</span><span style="margin:0 .4rem">·</span><span>${isAr?p.read_ar:p.read_en}</span>`;
  document.getElementById('artBody').innerHTML = isAr?p.body_ar:p.body_en;
  const bc = document.getElementById('artBreadcrumb');
  bc.innerHTML = `<a href="#" onclick="closeArticleBtn();go('home');return false">${bt('bl_bc_home')}</a><span>›</span><a href="#" onclick="closeArticleBtn();return false">${bt('bl_bc_blog')}</a><span>›</span><span>${isAr?p.cat_ar:p.cat_en}</span>`;
  document.getElementById('articleModal').classList.add('show');
  document.body.style.overflow='hidden';
  // Update JSON-LD breadcrumb for SEO
  const ldEl = document.getElementById('ld-breadcrumb');
  if(ldEl){
    const title = isAr?p.title_ar:p.title_en;
    ldEl.textContent = JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://voxylis.com/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://voxylis.com/blog"},{"@type":"ListItem","position":3,"name":title,"item":"https://voxylis.com/blog/"+id}]});
  }
}

function closeArticleBtn(){
  document.getElementById('articleModal').classList.remove('show');
  document.body.style.overflow='';
}

function closeArticle(e){
  if(e.target===document.getElementById('articleModal')) closeArticleBtn();
}

function subscribeNewsletter(){
  const el = document.getElementById('nlEmail');
  const msg = document.getElementById('nlMsg');
  if(!el||!msg) return;
  if(!el.value||!el.value.includes('@')){ msg.style.color='var(--spark)'; msg.textContent='Please enter a valid email address.'; return; }
  msg.style.color='var(--signal)';
  msg.textContent = bt('bl_nl_ok');
  el.value='';
  setTimeout(()=>{ msg.textContent=''; },5000);
}

// ── Update SEO meta per page ──
const PAGE_SEO = {
  home:{
    en:{title:'Voxylis — Fast, Reliable Web Hosting & Digital Services',desc:'Enterprise-grade web hosting for businesses worldwide. 99.9% uptime, NVMe SSD, free SSL. Plans from $4.99/mo.'},
    ar:{title:'فوكسيليس — استضافة ويب سريعة وموثوقة',desc:'استضافة ويب بمستوى المؤسسات للأعمال حول العالم. وقت تشغيل 99.9%، NVMe SSD، SSL مجاني.'}
  },
  hosting:{
    en:{title:'Web Hosting Plans — Voxylis',desc:'NVMe SSD web hosting plans from $4.99/month. Unlimited bandwidth, free SSL, daily backups, 24/7 support. No contracts.'},
    ar:{title:'خطط استضافة الويب — فوكسيليس',desc:'خطط استضافة NVMe SSD من 4.99$ شهرياً. نطاق ترددي غير محدود وSSL مجاني ونسخ احتياطي يومي.'}
  },
  design:{
    en:{title:'Web Design Services — Voxylis',desc:'Mobile-first web design packages from $299. SEO-ready, bilingual (Arabic & English), with CMS integration and 6-12 months support.'},
    ar:{title:'خدمات تصميم المواقع — فوكسيليس',desc:'باقات تصميم مواقع تبدأ من 299$. جاهزة للسيو، ثنائية اللغة، مع تكامل CMS.'}
  },
  marketing:{
    en:{title:'Digital Marketing Services — Voxylis',desc:'Full-service digital marketing: SEO, social media, Google & Meta Ads, email marketing. Plans from $199/month.'},
    ar:{title:'خدمات التسويق الرقمي — فوكسيليس',desc:'تسويق رقمي متكامل: SEO ووسائل التواصل والإعلانات والتسويق البريدي. تبدأ من 199$/شهر.'}
  },
  blog:{
    en:{title:'Web Hosting & SEO Blog — Voxylis',desc:'Expert guides on web hosting, SEO, web design, and digital marketing. Actionable tips updated weekly by the Voxylis team.'},
    ar:{title:'مدونة الاستضافة والسيو — فوكسيليس',desc:'أدلة خبراء في استضافة الويب وSEO وتصميم المواقع والتسويق الرقمي. نصائح عملية يومية.'}
  },
  about:{
    en:{title:'About Voxylis — Our Story & Mission',desc:'Learn about Voxylis: founded in 2019, hosting 4,000+ websites worldwide, with a mission to make enterprise-grade hosting accessible to everyone.'},
    ar:{title:'عن فوكسيليس — قصتنا ورسالتنا',desc:'تعرف على فوكسيليس: تأسست عام 2019، نستضيف أكثر من 4,000 موقع حول العالم.'}
  },
  contact:{
    en:{title:'Contact Voxylis — Get in Touch',desc:'Contact the Voxylis team for web hosting, web design, or digital marketing inquiries. We reply within 2 hours in English and Arabic.'},
    ar:{title:'تواصل مع فوكسيليس',desc:'تواصل مع فريق فوكسيليس لاستفسارات الاستضافة أو التصميم أو التسويق. نرد خلال ساعتين.'}
  }
};

function updateSEOMeta(page){
  const d = (PAGE_SEO[page]&&PAGE_SEO[page][S.lang])||{};
  if(!d.title) return;
  const tEl=document.getElementById('seo-title'); if(tEl) tEl.textContent=d.title;
  const dEl=document.getElementById('seo-desc'); if(dEl) dEl.setAttribute('content',d.desc);
  const ogT=document.getElementById('og-title'); if(ogT) ogT.setAttribute('content',d.title);
  const ogD=document.getElementById('og-desc'); if(ogD) ogD.setAttribute('content',d.desc);
  const twT=document.getElementById('tw-title'); if(twT) twT.setAttribute('content',d.title);
  const twD=document.getElementById('tw-desc'); if(twD) twD.setAttribute('content',d.desc);
  const can=document.getElementById('seo-canonical'); if(can) can.setAttribute('href','https://voxylis.com/'+(page==='home'?'':page));
  const ogU=document.getElementById('og-url'); if(ogU) ogU.setAttribute('content','https://voxylis.com/'+(page==='home'?'':page));
  // Update breadcrumb JSON-LD
  const ldEl=document.getElementById('ld-breadcrumb');
  if(ldEl&&page!=='home'){
    const label = d.title.split('—')[0].trim();
    ldEl.textContent=JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://voxylis.com/"},{"@type":"ListItem","position":2,"name":label,"item":"https://voxylis.com/"+page}]});
  }
}

function renderPlans(cid,arr,flat){
 const el=document.getElementById(cid); if(!el) return;
 el.innerHTML=arr.map(p=>mkCard(p,flat)).join('');
}

function render(){
 // Simple text
 const ids=['cl_label','pop_cta1','pop_cta2','pop_timer_txt','pop_l1','pop_l2','pop_v1','pop_v2','s1l','s2l','s3l','s4l','fe_sub','f1h','f1p','f2h','f2p','f3h','f3p','f4h','f4p','f5h','f5p','f6h','f6p','pl_sub','view_all','badge_avg','why_sub','wh1','wh1p','wh2','wh2p','wh3','wh3p','wh4','wh4p','ab_sth','ab_p1','ab_p2','ab_sl1','ab_sl2','ab_sl3','ab_sl4','ac_p','ac_b1','ac_b2','ct_sub','ct_nl','ct_el','ct_pl','ct_sl','cso1','cso2','cso3','cso4','cso5','ct_ml','ct_send','ct_r24','ct_hrs','ct_addr','ct_wa','ct_pay','ft_tag','ft_c1','ft_c2','ft_c3','ft_l1','ft_l2','ft_l3','ft_l4','ft_l5','ft_l6','ft_l7','ft_l8','ft_l9','ft_l10','ft_l11','ft_l12','ft_copy','ft_priv','ft_terms','v1h','v1p','v2h','v2p','v3h','v3p','v4h','v4p','h_sub','h_b1','h_b2','hcta_p','hcta_b1','hcta_b2','ho_sub','ds_sub','dfe_sub','dpk_sub','df1h','df1p','df2h','df2p','df3h','df3p','df4h','df4p','pr1h','pr1p','pr2h','pr2p','pr3h','pr3p','pr4h','pr4p','mk_sub','ms_sub','mp_sub','ms1h','ms1p','ms2h','ms2p','ms3h','ms3p','ms4h','ms4p','ms5h','ms5p','ms6h','ms6p','ab_sub','fe_eye','pl_eye','te_eye','ho_eye','why_eye','faq_eye','ds_eye','dfe_eye','dpk_eye','pr_eye','mk_eye','ms_eye','mp_eye','ab_eye','av_eye','ct_eye','cf_eye','ci_eye'];
 ids.forEach(id=>{const e=document.getElementById(id);if(e) e.textContent=t(id);});
 // HTML (has <em>)
 ['pop_badge','pop_h','pop_sub','h_h1','h_eye','fe_h2','pl_h2','te_h2','hcta_h','ho_h1','why_h2','faq_h2','ds_h1','dfe_h2','dpk_h2','pr_h2','mk_h1','ms_h2','mp_h2','ab_h1','av_h2','ac_h','ct_h1'].forEach(id=>{const e=document.getElementById(id);if(e) e.innerHTML=t(id);});
 // Nav
 NAV_KEYS.forEach((k,i)=>{['nl'+i,'ml'+i].forEach(id=>{const e=document.getElementById(id);if(e) e.textContent=t(k);});});
 const nc=document.getElementById('navCta');if(nc) nc.textContent=t('nav_cta');
 const mc=document.getElementById('mob-cta');if(mc) mc.textContent=t('nav_cta');
 // Blog nav links
 BLOG_NAV_IDS.forEach(id=>{const e=document.getElementById(id);if(e) e.textContent=bt('nav_blog');});
 // Refresh blog if visible
 if(document.getElementById('page-blog').classList.contains('active')) renderBlogPage();
 // Update SEO lang alternate
 document.querySelector('meta[property="og:locale"]')&&document.querySelector('meta[property="og:locale"]').setAttribute('content',S.lang==='ar'?'ar_EG':'en_US');
 const bm=document.getElementById('billMo');if(bm) bm.textContent=t('bill_mo');
 const ba=document.getElementById('billAn');if(ba) ba.textContent=t('bill_an');
 // Testimonials
 const tc=document.getElementById('testis');
 if(tc) tc.innerHTML=[{q:'t1q',n:'t1n',r:'t1r',av:'AK'},{q:'t2q',n:'t2n',r:'t2r',av:'NI'},{q:'t3q',n:'t3n',r:'t3r',av:'OS'}].map(d=>`<div class="tc"><div class="tst">\u2605\u2605\u2605\u2605\u2605</div><p class="tqt">${t(d.q)}</p><div class="tau"><div class="tav">${d.av}</div><div><div class="tname">${t(d.n)}</div><div class="trole">${t(d.r)}</div></div></div></div>`).join('');
 // FAQ
 const fl=document.getElementById('faqList');
 if(fl) fl.innerHTML=[1,2,3,4,5].map(i=>`<div class="fi"><button class="fq" onclick="toggleFaq(this)"><span>${t('fq'+i+'q')}</span><span class="fico">+</span></button><div class="fa">${t('fq'+i+'a')}</div></div>`).join('');
 // Plans
 const hp=PLANS.hosting.slice(0,3);
 renderPlans('homePlans',hp,false);
 renderPlans('hostPlans',PLANS.hosting,false);
 renderPlans('designPlans',PLANS.design,true);
 renderPlans('mktPlans',PLANS.marketing,false);
 // formOk
 const fo=document.getElementById('formOk');if(fo) fo.textContent=t('ct_ok');
}

function go(page){
 document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
 document.getElementById('page-'+page).classList.add('active');
 window.scrollTo({top:0,behavior:'smooth'});
 setTimeout(checkReveal,60);
 updateSEOMeta(page);
 if(page==='blog') renderBlogPage();
}

function setLang(l){
 S.lang=l;
 const ar=l==='ar';
 document.documentElement.lang=l;
 document.documentElement.dir=ar?'rtl':'ltr';
 document.body.classList.toggle('ar',ar);
 var nlIn=document.getElementById('nlEmail');
 if(nlIn){ nlIn.placeholder=ar?'بريدك الإلكتروني...':'Your email address...'; nlIn.dir=ar?'rtl':'ltr'; }
 ['bEN','bAR','mbEN','mbAR'].forEach(id=>{const e=document.getElementById(id);if(e) e.classList.toggle('on',(id.includes('EN')&&l==='en')||(id.includes('AR')&&l==='ar'));});
 render();
}

function setCurr(c){
 S.curr=c;
 ['bUSD','bEGP','mbUSD','mbEGP'].forEach(id=>{const e=document.getElementById(id);if(e) e.classList.toggle('on',(id.includes('USD')&&c==='usd')||(id.includes('EGP')&&c==='egp'));});
 render();
}

function setBill(b){
 S.bill=b;
 document.getElementById('billMo').classList.toggle('on',b==='m');
 document.getElementById('billAn').classList.toggle('on',b==='a');
 renderPlans('homePlans',PLANS.hosting.slice(0,3),false);
 renderPlans('hostPlans',PLANS.hosting,false);
}

function toggleMob(){
 var m=document.getElementById('mob');
 var b=document.getElementById('burger');
 var isOpen=m.classList.contains('open');
 if(isOpen){m.classList.remove('open');b.classList.remove('open');}
 else{m.classList.add('open');b.classList.add('open');}
}
function closeMob(){
 document.getElementById('mob').classList.remove('open');
 document.getElementById('burger').classList.remove('open');
}

function toggleFaq(btn){
 const it=btn.closest('.fi');
 const was=it.classList.contains('open');
 document.querySelectorAll('.fi').forEach(f=>f.classList.remove('open'));
 if(!was) it.classList.add('open');
}

function submitForm(e){
 e.preventDefault();
 const fo=document.getElementById('formOk');
 fo.textContent=t('ct_ok');
 fo.classList.add('show');
 setTimeout(()=>fo.classList.remove('show'),5000);
 e.target.reset();
}

function checkReveal(){
 document.querySelectorAll('[data-r]').forEach(el=>{
  if(el.getBoundingClientRect().top<window.innerHeight*.93) el.classList.add('on');
 });
}

window.addEventListener('scroll',()=>{
 document.getElementById('nav').classList.toggle('scrolled',window.scrollY>30);
 checkReveal();
},{passive:true});

render();
checkReveal();
updateSEOMeta('home');
// Init email placeholder
var _nlInit=document.getElementById('nlEmail');if(_nlInit)_nlInit.placeholder='Your email address...';

// ── POPUP ──
var _popDismissed = false;
var _timerInterval = null;

function showPopup(){
  if(_popDismissed) return;
  document.getElementById('promoPopup').classList.add('show');
  startTimer(300); // 5 min countdown
}

function dismissPopup(){
  _popDismissed = true;
  document.getElementById('promoPopup').classList.remove('show');
  if(_timerInterval) clearInterval(_timerInterval);
}

function closePopup(e){
  if(e.target === document.getElementById('promoPopup')) dismissPopup();
}

function startTimer(secs){
  var s = secs;
  function tick(){
    if(s <= 0){ clearInterval(_timerInterval); return; }
    var m = Math.floor(s/60), sec = s%60;
    var txt = (m<10?'0':'')+m+':'+(sec<10?'0':'')+sec;
    var el = document.getElementById('pop_timer_txt');
    var base = t('pop_timer_txt');
    if(el) el.innerHTML = base + ' <span>' + txt + '</span>';
    s--;
  }
  tick();
  _timerInterval = setInterval(tick, 1000);
}

// Show popup after 4 seconds on first visit
setTimeout(function(){ showPopup(); }, 4000);


// ════════════════════════════════════
//  WHATSAPP WIDGET
// ════════════════════════════════════
var _waPanelOpen = false;
var _waNumber    = '201000000000';

var WA_TEXT = {
  en:{
    agent:'Voxylis Support',
    online:'Typically replies in minutes',
    today:'Today',
    msg1:'👋 Hi there! Welcome to <strong>Voxylis</strong>.',
    msg2:"How can we help you today? Tap below to start chatting on WhatsApp — we respond fast!",
    start:'Start Chat',
    tooltip:'Need help? Chat with us!',
  },
  ar:{
    agent:'دعم فوكسيليس',
    online:'يرد عادةً في دقائق',
    today:'اليوم',
    msg1:'👋 مرحباً! أهلاً وسهلاً بك في <strong>فوكسيليس</strong>.',
    msg2:'كيف يمكننا مساعدتك اليوم؟ اضغط أدناه لبدء المحادثة على واتساب — نرد بسرعة!',
    start:'ابدأ المحادثة',
    tooltip:'هل تحتاج مساعدة؟ تحدث معنا!',
  }
};

function renderWAWidget(){
  var l = S.lang;
  var d = WA_TEXT[l]||WA_TEXT.en;
  var set = function(id,txt,html){
    var e = document.getElementById(id);
    if(!e) return;
    if(html) e.innerHTML=txt; else e.textContent=txt;
  };
  set('wa_agent_name',  d.agent);
  set('wa_online_txt',  d.online);
  set('wa_time_label',  d.today);
  set('wa_msg_1',       d.msg1, true);
  set('wa_msg_2',       d.msg2);
  set('wa_start_txt',   d.start);
  // Update WhatsApp href with language-specific message
  var link = document.getElementById('waOpenLink');
  if(link){
    var msg = l==='ar'
      ? 'مرحباً فوكسيليس، أحتاج إلى مساعدة في الاستضافة.'
      : 'Hello Voxylis, I need help with hosting.';
    link.href = 'https://wa.me/'+_waNumber+'?text='+encodeURIComponent(msg);
  }
}

function toggleWAPanel(){
  _waPanelOpen = !_waPanelOpen;
  var panel = document.getElementById('waPanel');
  var fab   = document.getElementById('waFab');
  if(!panel||!fab) return;
  if(_waPanelOpen){
    panel.classList.add('open');
    fab.classList.add('open');
    fab.setAttribute('aria-expanded','true');
    panel.setAttribute('aria-hidden','false');
    // Hide badge once opened
    fab.style.setProperty('--badge-display','none');
  } else {
    panel.classList.remove('open');
    fab.classList.remove('open');
    fab.setAttribute('aria-expanded','false');
    panel.setAttribute('aria-hidden','true');
  }
}

function waTrackClick(){
  // Analytics hook — replace with your tracking call
  if(typeof gtag === 'function'){
    gtag('event','whatsapp_click',{event_category:'engagement',event_label:'support_widget'});
  }
}

// Close WA panel when clicking outside
document.addEventListener('click', function(e){
  var w = document.getElementById('waWidget');
  if(_waPanelOpen && w && !w.contains(e.target)){
    toggleWAPanel();
  }
});

// ════════════════════════════════════
//  POPUP CACHE — remember dismissal across sessions
// ════════════════════════════════════
function loadPopupState(){
  try{
    var dismissed = sessionStorage.getItem('vx_popup_dismissed');
    if(dismissed === '1') _popDismissed = true;
  }catch(e){}
}
function savePopupDismissed(){
  try{ sessionStorage.setItem('vx_popup_dismissed','1'); }catch(e){}
}
// Extend dismissPopup to save session state
(function(){
  var _orig = typeof window.dismissPopup === 'function' ? window.dismissPopup : function(){};
  window.dismissPopup = function(){
    _orig();
    savePopupDismissed();
  };
}());
loadPopupState();

// ════════════════════════════════════
//  BUG FIXES & POLISH
// ════════════════════════════════════

// Fix 1: Escape key closes article modal, popup, WA panel
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    var artModal = document.getElementById('articleModal');
    var popup    = document.getElementById('promoPopup');
    if(artModal && artModal.classList.contains('show')){
      closeArticleBtn(); return;
    }
    if(popup && popup.classList.contains('show')){
      dismissPopup(); return;
    }
    if(_waPanelOpen){ toggleWAPanel(); return; }
  }
});

// Fix 2: Prevent body scroll when modals are open
var _scrollLockCount = 0;
function lockScroll(){
  _scrollLockCount++;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = (window.innerWidth - document.documentElement.clientWidth) + 'px';
}
function unlockScroll(){
  _scrollLockCount = Math.max(0,_scrollLockCount-1);
  if(_scrollLockCount === 0){
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }
}
// Extend openArticle / closeArticleBtn with scroll lock
(function(){
  var _origOpen  = typeof window.openArticle    === 'function' ? window.openArticle    : function(){};
  var _origClose = typeof window.closeArticleBtn === 'function' ? window.closeArticleBtn : function(){};
  window.openArticle = function(id){
    _origOpen(id);
    lockScroll();
  };
  window.closeArticleBtn = function(){
    _origClose();
    unlockScroll();
  };
}());

// Fix 3: Extend go() with nav highlight update
(function(){
  var _origGo = typeof window.go === 'function' ? window.go : function(){};
  window.go = function(page){
    _origGo(page);
  document.querySelectorAll('.nav-links a').forEach(function(a){
    a.classList.remove('active');
  });
  var pages = ['home','hosting','design','marketing','about','blog','contact'];
  var ids   = ['nl0','nl1','nl2','nl3','nl4','nl5b','nl5'];
  var idx   = pages.indexOf(page);
  if(idx >= 0){
    var el = document.getElementById(ids[idx]);
    if(el) el.classList.add('active');
  }
  };
}());

// Fix 4: Extend setLang to re-render WA widget
(function(){
  var _orig = typeof window.setLang === 'function' ? window.setLang : function(){};
  window.setLang = function(l){
    _orig(l);
    renderWAWidget();
  };
}());

// Fix 5: Wrap renderPlans in try/catch
(function(){
  var _orig = typeof window.renderPlans === 'function' ? window.renderPlans : function(){};
  window.renderPlans = function(cid,arr,flat){
    try{ _orig(cid,arr,flat); }
    catch(e){ console.warn('renderPlans error:',e); }
  };
}());

// Fix 6: Improve newsletter validation
(function(){
  var _orig = typeof window.subscribeNewsletter === 'function' ? window.subscribeNewsletter : function(){};
  window.subscribeNewsletter = function(){
  var el = document.getElementById('nlEmail');
  var msg = document.getElementById('nlMsg');
  if(!el||!msg) return;
  var email = (el.value||'').trim();
  var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if(!valid){
    msg.style.color='var(--spark)';
    msg.textContent = S.lang==='ar'
      ? 'يرجى إدخال بريد إلكتروني صحيح.'
      : 'Please enter a valid email address.';
    el.focus();
    return;
  }
  _orig();
  };
}());

// Fix 7: Mobile tap — only prevent double-tap zoom on FABs, not all links
// Using touch-action:manipulation in CSS instead (safer approach)
// No JS listener needed — CSS handles this without breaking native navigation.

// Fix 8: Resize handler — recheck reveals and close mobile menu
window.addEventListener('resize', function(){
  if(window.innerWidth > 900){
    document.getElementById('mob').classList.remove('open');
    document.getElementById('burger').classList.remove('open');
  }
  checkReveal();
},{passive:true});

// ══ Init WA widget on load ══
renderWAWidget();
