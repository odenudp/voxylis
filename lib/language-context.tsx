"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";
type Currency = "usd" | "egp";
type BillingCycle = "m" | "a";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  billing: BillingCycle;
  setBilling: (billing: BillingCycle) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [currency, setCurrencyState] = useState<Currency>("usd");
  const [billing, setBillingState] = useState<BillingCycle>("m");

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("ar", newLang === "ar");
  };

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
  };

  const setBilling = (newBilling: BillingCycle) => {
    setBillingState(newBilling);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  const isRTL = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, currency, setCurrency, billing, setBilling, t, isRTL }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

const translations: Record<string, Record<string, string>> = {
  en: {
    nav_home: "Home",
    nav_hosting: "Hosting Plans",
    nav_design: "Web Design",
    nav_mkt: "Marketing",
    nav_about: "About",
    nav_contact: "Contact",
    nav_blog: "Blog",
    nav_cta: "Get Started",
    h_eye: "Reliable • Fast • Secure",
    h_h1: "Your Website, Always",
    h_h1_em: "Online.",
    h_sub:
      "Enterprise-grade web hosting for businesses worldwide. 99.9% uptime, NVMe SSD servers, and 24/7 expert support.",
    h_b1: "View Hosting Plans",
    h_b2: "Learn More",
    s1l: "Uptime SLA",
    s2l: "Active Sites",
    s3l: "Avg. Response",
    s4l: "Arabic Support",
    fe_eye: "Why Voxylis",
    fe_h2: "Hosting Built for",
    fe_h2_em: "Performance.",
    fe_sub: "We obsess over every millisecond so your visitors never have to wait.",
    f1h: "NVMe SSD Storage",
    f1p: "Up to 10× faster than traditional HDD — your site loads instantly every time.",
    f2h: "Free SSL & CDN",
    f2p: "Automatic HTTPS and global content delivery included on every plan.",
    f3h: "Daily Backups",
    f3p: "Automated backups every 24 hours with one-click restore, always included.",
    f4h: "24/7 Arabic Support",
    f4p: "Our team responds in under 2 minutes in Arabic and English, around the clock.",
    f5h: "DDoS Protection",
    f5p: "Enterprise-grade firewall and DDoS mitigation protecting your site 24/7.",
    f6h: "One-Click Installs",
    f6p: "WordPress, Joomla, Magento and 100+ apps installed in a single click.",
    pl_eye: "Our Plans",
    pl_h2: "Hosting for Every",
    pl_h2_em: "Budget.",
    pl_sub: "Transparent pricing, no hidden fees. Upgrade or downgrade anytime.",
    view_all: "View All Plans →",
    te_eye: "Client Reviews",
    te_h2: "Trusted by",
    te_h2_em: "4,000+ Businesses",
    t1q: '"Switching to Voxylis was the best decision. Site loads under half a second and support replies in Arabic within minutes."',
    t1n: "Ahmed Khalil",
    t1r: "CEO, TechStore Egypt",
    t2q: '"Uptime flawless for 18 months. We run a busy e-commerce store and can\'t afford downtime — Voxylis delivers every time."',
    t2n: "Nada Ibrahim",
    t2r: "Founder, FashionHub Cairo",
    t3q: '"Pricing in EGP is very fair. WordPress site went from 4s to 0.6s load time — incredible."',
    t3n: "Omar Samir",
    t3r: "Developer & Blogger",
    hcta_h: "Ready to Launch",
    hcta_h_em: "Your Website?",
    hcta_p: "14-day money-back guarantee. No credit card required.",
    hcta_b1: "Start Free Today",
    hcta_b2: "Talk to Us →",
    cl_label: "Trusted by 4,000+ businesses worldwide",
    most_pop: "Most Popular",
    per_mo: "/month",
    one_time: "One-time",
    btn_go: "Get Started",
    btn_sales: "Contact Sales",
    btn_order: "Order Now",
    btn_quote: "Get a Quote",
    bill_mo: "Monthly",
    bill_an: "Annual –20%",
    pn_s: "Starter",
    pn_b: "Business",
    pn_p: "Pro",
    pn_e: "Enterprise",
    ent_c: "Custom",
    ent_s: "Contact us for pricing",
    ho_eye: "Web Hosting",
    ho_h1: "Plans Built for",
    ho_h1_em: "Speed & Scale.",
    ho_sub: "All plans include free SSL, daily backups, and 24/7 expert support. No contracts, cancel anytime.",
    why_eye: "Why Voxylis",
    why_h2: "Built for Speed.",
    why_h2_em: "Obsessed with Results.",
    why_sub: "We don't just host your website — we make it perform.",
    wh1: "Global Edge Network",
    wh1p: "35+ PoPs worldwide ensuring <20ms load times wherever your visitors are.",
    wh2: "Multilingual Ready",
    wh2p: "Servers optimized for Arabic and English content, RTL layouts, and international domain names.",
    wh3: "cPanel in Arabic",
    wh3p: "Industry-standard control panel in Arabic with one-click app installer.",
    wh4: "Flexible Payment",
    wh4p: "Pay in USD or EGP — credit card, Vodafone Cash, InstaPay, PayPal, or bank transfer.",
    faq_eye: "FAQ",
    faq_h2: "Frequently Asked",
    faq_h2_em: "Questions",
    fq1q: "Can I upgrade my plan later?",
    fq1a: "Yes, upgrade or downgrade anytime from your control panel. Price difference is prorated automatically.",
    fq2q: "Do you support Arabic websites?",
    fq2a: "Absolutely. Servers are fully optimized for Arabic content, RTL layouts, and Arabic domain names (.msr, .arab).",
    fq3q: "What control panel do you use?",
    fq3a: "We use cPanel — the industry standard, available in Arabic with one-click app installer, file manager, and database tools.",
    fq4q: "Is there a money-back guarantee?",
    fq4a: "Yes, all plans come with a 14-day money-back guarantee, no questions asked.",
    fq5q: "Can I pay in Egyptian Pounds?",
    fq5a: "Yes! We accept EGP via credit card, Vodafone Cash, InstaPay, and bank transfer.",
    ds_eye: "Web Design",
    ds_h1: "Websites That",
    ds_h1_em: "Convert.",
    ds_sub: "Our design team builds fast, beautiful, mobile-first websites that turn visitors into customers.",
    dfe_eye: "What We Deliver",
    dfe_h2: "Design That",
    dfe_h2_em: "Works.",
    dfe_sub: "Every site we build loads fast, ranks high, and looks stunning on every device.",
    df1h: "Mobile-First Design",
    df1p: "Stunning on all devices and screen sizes — built for the mobile-first world.",
    df2h: "SEO-Ready Structure",
    df2p: "Clean code, fast loading, and proper structure for search engine rankings.",
    df3h: "Arabic & English",
    df3p: "Full bilingual support with proper RTL/LTR layouts for both languages.",
    df4h: "CMS Integration",
    df4p: "WordPress, Webflow, or custom CMS so you can manage your content easily.",
    dpk_eye: "Design Packages",
    dpk_h2: "Choose Your",
    dpk_h2_em: "Package.",
    dpk_sub: "One-time investment. Includes revisions, mobile responsiveness, and handover.",
    pr_eye: "Our Process",
    pr_h2: "How We",
    pr_h2_em: "Work.",
    pr1h: "Discovery",
    pr1p: "We learn your brand, goals, and audience in a kickoff call.",
    pr2h: "Design",
    pr2p: "Wireframes and mockups approved before development starts.",
    pr3h: "Build",
    pr3p: "Clean code, optimized for speed and search engines.",
    pr4h: "Launch",
    pr4p: "Final review, device testing, then we go live together.",
    pn_db: "Basic",
    pn_dbi: "Business",
    pn_dp: "Premium",
    mk_eye: "Digital Marketing",
    mk_h1: "Grow Your Brand",
    mk_h1_em: "Online.",
    mk_sub: "Data-driven digital marketing strategies that drive real, measurable results for businesses globally.",
    ms_eye: "Our Services",
    ms_h2: "Everything You Need to",
    ms_h2_em: "Grow.",
    ms_sub: "From SEO to social media, we handle your digital presence end-to-end.",
    ms1h: "SEO Optimization",
    ms1p: "Rank higher on Google in Arabic and English. Keyword research, on-page SEO, link building, monthly reports.",
    ms2h: "Social Media",
    ms2p: "Creative content and community management across Facebook, Instagram, TikTok, and LinkedIn.",
    ms3h: "Google & Meta Ads",
    ms3p: "Certified specialists managing your paid campaigns. Every pound tracked and optimized for maximum ROI.",
    ms4h: "Email Marketing",
    ms4p: "Automated sequences and targeted campaigns that turn leads into loyal customers.",
    ms5h: "Content Marketing",
    ms5p: "Blog posts, videos, and graphics in Arabic and English that build authority and organic traffic.",
    ms6h: "Analytics & Reports",
    ms6p: "Clear monthly reports showing exactly what's working and what we're doing about it.",
    mp_eye: "Marketing Packages",
    mp_h2: "Scale Your",
    mp_h2_em: "Growth.",
    mp_sub: "Monthly retainer packages with transparent deliverables and reporting.",
    pn_mk1: "Starter",
    pn_mk2: "Growth",
    pn_mk3: "Agency",
    ab_eye: "About Voxylis",
    ab_h1: "Built in Egypt,",
    ab_h1_em: "Built for Egypt.",
    ab_sub: "We started Voxylis to give businesses worldwide access to enterprise-grade hosting at fair prices, with support in their language.",
    ab_sth: "Our Story",
    ab_p1: "Founded in 2019 in Cairo, Voxylis was born out of frustration. Our founders kept seeing Egyptian businesses struggle with slow, expensive hosting from foreign providers — with zero Arabic support.",
    ab_p2: "We built Voxylis to fix that. Today we host over 4,000 websites and serve clients across Egypt and the Gulf — with servers optimized for Arabic content and a team that speaks your language.",
    ab_sl1: "Websites Hosted",
    ab_sl2: "Founded in Cairo",
    ab_sl3: "Uptime Average",
    ab_sl4: "Support Response",
    av_eye: "Our Values",
    av_h2: "What We",
    av_h2_em: "Stand For.",
    v1h: "Reliability First",
    v1p: "We never compromise on uptime. Your business depends on your website being available 24/7/365.",
    v2h: "Fair Pricing",
    v2p: "World-class hosting at transparent prices — pay in USD or EGP, whichever works for you.",
    v3h: "Local Support",
    v3p: "Our support team responds in Arabic and English, 24 hours a day, 7 days a week.",
    v4h: "Constant Growth",
    v4p: "We reinvest in our infrastructure every quarter to stay ahead of your needs.",
    ac_h: "Join",
    ac_h_em: "4,000+ Businesses",
    ac_p: "Ready to experience hosting built for Egypt? Start your free trial today.",
    ac_b1: "View Hosting Plans",
    ac_b2: "Contact Us",
    ct_eye: "Get in Touch",
    ct_h1: "We're Here to",
    ct_h1_em: "Help.",
    ct_sub: "Have a question or ready to start? Our team replies within 2 hours.",
    cf_eye: "Send a Message",
    ct_nl: "Full Name",
    ct_el: "Email Address",
    ct_pl: "Phone Number",
    ct_sl: "Subject",
    cso1: "Web Hosting",
    cso2: "Web Design",
    cso3: "Digital Marketing",
    cso4: "Technical Support",
    cso5: "Other",
    ct_ml: "Your Message",
    ct_send: "Send Message",
    ct_ok: "Message sent! We'll get back to you within 2 hours.",
    ci_eye: "Contact Info",
    ct_r24: "Replies within 2 hours",
    ct_hrs: "Available 24/7",
    ct_addr: "Cairo, Egypt",
    ct_wa: "Chat on WhatsApp",
    ct_pay: "We accept payments in EGP and USD via credit card, Vodafone Cash, InstaPay, and bank transfer.",
    ft_tag: "Enterprise-grade web hosting for businesses worldwide. Fast, reliable, multilingual support.",
    ft_c1: "Hosting",
    ft_c2: "Services",
    ft_c3: "Company",
    ft_l1: "Starter Plan",
    ft_l2: "Business Plan",
    ft_l3: "Pro Plan",
    ft_l4: "Enterprise",
    ft_l5: "Web Design",
    ft_l6: "Digital Marketing",
    ft_l7: "Domains",
    ft_l8: "SSL Certificates",
    ft_l9: "About Us",
    ft_l10: "Contact",
    ft_l11: "Blog",
    ft_l12: "Privacy Policy",
    ft_copy: "© 2025 Voxylis. All rights reserved.",
    ft_priv: "Privacy Policy",
    ft_terms: "Terms of Service",
  },
  ar: {
    nav_home: "الرئيسية",
    nav_hosting: "خطط الاستضافة",
    nav_design: "تصميم المواقع",
    nav_mkt: "التسويق",
    nav_about: "من نحن",
    nav_contact: "اتصل بنا",
    nav_blog: "المدونة",
    nav_cta: "ابدأ الآن",
    h_eye: "موثوق • سريع • آمن",
    h_h1: "موقعك، متاح دائماً",
    h_h1_em: "بلا انقطاع.",
    h_sub: "استضافة بمستوى المؤسسات مصممة للأعمال المصرية. وقت تشغيل 99.9٪ وخوادم NVMe SSD ودعم عربي 24/7.",
    h_b1: "عرض خطط الاستضافة",
    h_b2: "اعرف أكثر",
    s1l: "ضمان وقت التشغيل",
    s2l: "موقع نشط",
    s3l: "متوسط الاستجابة",
    s4l: "دعم عربي",
    fe_eye: "لماذا فوكسيليس",
    fe_h2: "استضافة مصممة لـ",
    fe_h2_em: "الأداء.",
    fe_sub: "نهتم بكل ميلي ثانية حتى لا ينتظر زوارك أبداً.",
    cl_label: "موثوق به من قِبَل عملاء مصريّين رائدين",
    most_pop: "الأكثر شيوعاً",
    per_mo: "/شهر",
    one_time: "دفعة واحدة",
    btn_go: "ابدأ الآن",
    btn_sales: "تواصل مع المبيعات",
    btn_order: "اطلب الآن",
    btn_quote: "احصل على عرض سعر",
    ft_copy: "© 2025 فوكسيليس. جميع الحقوق محفوظة.",
    ft_priv: "سياسة الخصوصية",
    ft_terms: "شروط الخدمة",
  },
};
