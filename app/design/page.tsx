"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { PageHero } from "@/components/ui/page-hero";

export default function DesignPage() {
  const { t, currency, isRTL } = useLanguage();

  const features = [
    { title: t("df1h"), desc: t("df1p") },
    { title: t("df2h"), desc: t("df2p") },
    { title: t("df3h"), desc: t("df3p") },
    { title: t("df4h"), desc: t("df4p") },
  ];

  const packages = [
    {
      name: t("pn_db"),
      priceUsd: 499,
      priceEgp: 24999,
      features: [
        "5 Page Website",
        "Mobile Responsive",
        "Basic SEO Setup",
        "Contact Form",
        "2 Revisions",
        "1 Week Delivery",
      ],
    },
    {
      name: t("pn_dbi"),
      popular: true,
      priceUsd: 999,
      priceEgp: 49999,
      features: [
        "10 Page Website",
        "Mobile Responsive",
        "Full SEO Setup",
        "CMS Integration",
        "5 Revisions",
        "2 Week Delivery",
      ],
    },
    {
      name: t("pn_dp"),
      priceUsd: 1999,
      priceEgp: 99999,
      features: [
        "Unlimited Pages",
        "Custom Design",
        "E-commerce Ready",
        "Advanced SEO",
        "Unlimited Revisions",
        "Priority Support",
      ],
    },
  ];

  const process = [
    { num: "01", title: t("pr1h"), desc: t("pr1p") },
    { num: "02", title: t("pr2h"), desc: t("pr2p") },
    { num: "03", title: t("pr3h"), desc: t("pr3p") },
    { num: "04", title: t("pr4h"), desc: t("pr4p") },
  ];

  return (
    <>
      <PageHero eyebrow={t("ds_eye")} title={t("ds_h1")} titleEm={t("ds_h1_em")} subtitle={t("ds_sub")} />

      {/* Features Section */}
      <section className="py-20 px-[6%] bg-night2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1080px] mx-auto">
          <div>
            <div className="text-[0.67rem] tracking-[0.22em] uppercase text-signal mb-3 flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-signal" />
              {t("dfe_eye")}
            </div>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-3">
              {t("dfe_h2")} <em className="not-italic text-signal">{t("dfe_h2_em")}</em>
            </h2>
            <p className="text-[0.92rem] text-muted leading-[1.75] max-w-[500px] mb-8">
              {t("dfe_sub")}
            </p>

            <div className="flex flex-col gap-4">
              {features.map((item, i) => (
                <div key={i} className={`flex gap-3 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                  <div className="w-5 h-5 rounded-full flex-shrink-0 border border-signal bg-signal/10 flex items-center justify-center mt-0.5">
                    <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 stroke-signal fill-none stroke-[2.5]">
                      <polyline points="1.5 5 4 7.5 8.5 2.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[0.89rem] font-bold mb-0.5">{item.title}</h4>
                    <p className="text-[0.8rem] text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Visual */}
          <div>
            <svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-90">
              <rect x="8" y="8" width="404" height="304" rx="12" fill="#0d1228" stroke="rgba(19,233,186,0.2)" strokeWidth="1.5" />
              <rect x="8" y="8" width="404" height="38" rx="12" fill="#141933" />
              <circle cx="28" cy="27" r="5" fill="#FF5F57" />
              <circle cx="44" cy="27" r="5" fill="#FEBC2E" />
              <circle cx="60" cy="27" r="5" fill="#28C840" />
              <rect x="28" y="62" width="170" height="11" rx="4" fill="rgba(19,233,186,0.3)" />
              <rect x="28" y="80" width="260" height="7" rx="3" fill="rgba(232,226,210,0.15)" />
              <rect x="28" y="94" width="220" height="7" rx="3" fill="rgba(232,226,210,0.1)" />
              <rect x="28" y="118" width="92" height="30" rx="5" fill="#13E9BA" />
              <rect x="130" y="118" width="92" height="30" rx="5" fill="none" stroke="rgba(19,233,186,0.4)" strokeWidth="1.2" />
              <rect x="28" y="166" width="160" height="106" rx="8" fill="#141933" stroke="rgba(19,233,186,0.13)" strokeWidth="1" />
              <rect x="200" y="166" width="212" height="48" rx="8" fill="#141933" stroke="rgba(19,233,186,0.13)" strokeWidth="1" />
              <rect x="200" y="224" width="212" height="48" rx="8" fill="#141933" stroke="rgba(19,233,186,0.13)" strokeWidth="1" />
              <rect x="38" y="181" width="75" height="5" rx="2" fill="rgba(19,233,186,0.4)" />
              <rect x="38" y="193" width="125" height="4" rx="2" fill="rgba(232,226,210,0.15)" />
              <rect x="210" y="180" width="55" height="5" rx="2" fill="rgba(19,233,186,0.35)" />
              <rect x="210" y="191" width="165" height="4" rx="2" fill="rgba(232,226,210,0.12)" />
              <rect x="210" y="238" width="55" height="5" rx="2" fill="rgba(255,99,64,0.5)" />
              <rect x="210" y="249" width="165" height="4" rx="2" fill="rgba(232,226,210,0.12)" />
            </svg>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-[6%]">
        <div className="text-center max-w-[1080px] mx-auto">
          <div className="text-[0.67rem] tracking-[0.22em] uppercase text-signal mb-3 flex items-center justify-center gap-2">
            <span className="w-[18px] h-[1px] bg-signal" />
            {t("dpk_eye")}
          </div>
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-3">
            {t("dpk_h2")} <em className="not-italic text-signal">{t("dpk_h2_em")}</em>
          </h2>
          <p className="text-[0.92rem] text-muted leading-[1.75] max-w-[500px] mx-auto mb-10">
            {t("dpk_sub")}
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
                <div className="text-[0.78rem] text-muted mb-4">{t("one_time")}</div>

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
                  {t("btn_order")}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-[6%] bg-night2">
        <div className="text-center max-w-[1080px] mx-auto">
          <div className="text-[0.67rem] tracking-[0.22em] uppercase text-signal mb-3 flex items-center justify-center gap-2">
            <span className="w-[18px] h-[1px] bg-signal" />
            {t("pr_eye")}
          </div>
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-10">
            {t("pr_h2")} <em className="not-italic text-signal">{t("pr_h2_em")}</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1080px] mx-auto relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[26px] left-[calc(12.5%+14px)] right-[calc(12.5%+14px)] h-[1px] bg-border" />

          {process.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-[52px] h-[52px] rounded-full border border-border bg-night2 flex items-center justify-center mx-auto mb-4 text-base font-bold text-signal relative z-10 transition-colors hover:bg-signal hover:text-night hover:border-signal">
                {step.num}
              </div>
              <h4 className="text-[0.9rem] font-bold mb-1">{step.title}</h4>
              <p className="text-[0.8rem] text-muted leading-[1.6]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
