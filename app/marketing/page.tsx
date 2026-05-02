"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { PageHero } from "@/components/ui/page-hero";

const serviceIcons = [
  // Search - SEO
  <svg key="1" viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-signal fill-none stroke-[1.7]">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>,
  // Twitter - Social
  <svg key="2" viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-signal fill-none stroke-[1.7]">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>,
  // Monitor - Ads
  <svg key="3" viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-signal fill-none stroke-[1.7]">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>,
  // Mail - Email
  <svg key="4" viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-signal fill-none stroke-[1.7]">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>,
  // File - Content
  <svg key="5" viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-signal fill-none stroke-[1.7]">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>,
  // Chart - Analytics
  <svg key="6" viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-signal fill-none stroke-[1.7]">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>,
];

export default function MarketingPage() {
  const { t, currency, isRTL } = useLanguage();

  const services = [
    { icon: 0, title: t("ms1h"), desc: t("ms1p") },
    { icon: 1, title: t("ms2h"), desc: t("ms2p") },
    { icon: 2, title: t("ms3h"), desc: t("ms3p") },
    { icon: 3, title: t("ms4h"), desc: t("ms4p") },
    { icon: 4, title: t("ms5h"), desc: t("ms5p") },
    { icon: 5, title: t("ms6h"), desc: t("ms6p") },
  ];

  const packages = [
    {
      name: t("pn_mk1"),
      priceUsd: 299,
      priceEgp: 14999,
      features: [
        "Social Media (2 platforms)",
        "8 Posts/month",
        "Basic SEO",
        "Monthly Report",
        "Email Support",
      ],
    },
    {
      name: t("pn_mk2"),
      popular: true,
      priceUsd: 699,
      priceEgp: 34999,
      features: [
        "Social Media (4 platforms)",
        "20 Posts/month",
        "Full SEO + Ads",
        "Weekly Reports",
        "Priority Support",
      ],
    },
    {
      name: t("pn_mk3"),
      priceUsd: 1499,
      priceEgp: 74999,
      features: [
        "All Platforms",
        "Unlimited Posts",
        "Full Marketing Suite",
        "Real-time Dashboard",
        "Dedicated Manager",
      ],
    },
  ];

  return (
    <>
      <PageHero eyebrow={t("mk_eye")} title={t("mk_h1")} titleEm={t("mk_h1_em")} subtitle={t("mk_sub")} />

      {/* Services Section */}
      <section className="py-20 px-[6%] bg-night2">
        <div className="text-center max-w-[1080px] mx-auto">
          <div className="text-[0.67rem] tracking-[0.22em] uppercase text-signal mb-3 flex items-center justify-center gap-2">
            <span className="w-[18px] h-[1px] bg-signal" />
            {t("ms_eye")}
          </div>
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-3">
            {t("ms_h2")} <em className="not-italic text-signal">{t("ms_h2_em")}</em>
          </h2>
          <p className="text-[0.92rem] text-muted leading-[1.75] max-w-[500px] mx-auto mb-10">
            {t("ms_sub")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-night2 border border-border rounded-[10px] p-7 transition-all hover:-translate-y-1 hover:border-signal/30"
            >
              <div className="w-[42px] h-[42px] rounded-lg border border-border bg-signal/[0.07] flex items-center justify-center mb-4">
                {serviceIcons[service.icon]}
              </div>
              <h3 className="text-[0.93rem] font-bold mb-1.5">{service.title}</h3>
              <p className="text-[0.81rem] text-muted leading-[1.65]">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-[6%]">
        <div className="text-center max-w-[1080px] mx-auto">
          <div className="text-[0.67rem] tracking-[0.22em] uppercase text-signal mb-3 flex items-center justify-center gap-2">
            <span className="w-[18px] h-[1px] bg-signal" />
            {t("mp_eye")}
          </div>
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-3">
            {t("mp_h2")} <em className="not-italic text-signal">{t("mp_h2_em")}</em>
          </h2>
          <p className="text-[0.92rem] text-muted leading-[1.75] max-w-[500px] mx-auto mb-10">
            {t("mp_sub")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
          {packages.map((pkg, index) => {
            const price = currency === "usd" ? pkg.priceUsd : pkg.priceEgp;
            const currSymbol = currency === "usd" ? "$" : "EGP ";

            return (
              <div
                key={index}
                className={`bg-night2 border rounded-[10px] p-7 relative transition-all hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.3)] ${
                  pkg.popular
                    ? "border-signal bg-gradient-to-br from-signal/[0.07] to-night2"
                    : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-signal text-night text-[0.6rem] font-bold tracking-[0.14em] uppercase py-1 px-3 rounded-full whitespace-nowrap">
                    {t("most_pop")}
                  </div>
                )}

                <div className="text-[0.66rem] tracking-[0.18em] uppercase text-muted mb-3">
                  {pkg.name}
                </div>

                <div className="flex items-baseline gap-0.5 mb-1">
                  <span className="text-[0.95rem] font-bold leading-[1]">{currSymbol}</span>
                  <span className="text-[2.4rem] font-bold tracking-[-0.04em] leading-[1]">
                    {price.toLocaleString()}
                  </span>
                </div>
                <div className="text-[0.78rem] text-muted mb-4">{t("per_mo")}</div>

                <ul className="flex flex-col gap-2.5 mb-5">
                  {pkg.features.map((feature, fi) => (
                    <li
                      key={fi}
                      className={`text-[0.8rem] text-parchment flex items-center gap-2 ${
                        isRTL ? "flex-row-reverse text-right" : ""
                      }`}
                    >
                      <span className="w-[14px] h-[14px] flex-shrink-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%2014%2014%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Ccircle%20cx=%277%27%20cy=%277%27%20r=%276.5%27%20fill=%27rgba(19,233,186,.1)%27%20stroke=%27%2313E9BA%27%20stroke-width=%27.8%27/%3E%3Cpath%20d=%27M4.5%207l2%202%203.5-3.5%27%20stroke=%27%2313E9BA%27%20stroke-width=%271.4%27%20fill=%27none%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27/%3E%3C/svg%3E')] bg-center bg-contain bg-no-repeat" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 rounded text-[0.81rem] font-bold tracking-[0.05em] transition-all ${
                    pkg.popular
                      ? "bg-signal text-night hover:bg-[#0fd4a8] hover:shadow-[0_5px_18px_rgba(19,233,186,0.25)]"
                      : "bg-transparent border border-border text-parchment hover:border-signal hover:bg-signal/5"
                  }`}
                >
                  {t("btn_quote")}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
