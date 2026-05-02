"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { PageHero } from "@/components/ui/page-hero";

// Note: For SEO, this page should have server-side metadata
// Add a separate metadata export in a layout.tsx or use generateMetadata

export default function HostingPage() {
  const { t, currency, isRTL, billing, setBilling } = useLanguage();

  const plans = [
    {
      name: t("pn_s"),
      popular: false,
      priceUsd: { m: 4.99, a: 3.99 },
      priceEgp: { m: 249, a: 199 },
      features: [
        "1 Website",
        "10 GB NVMe SSD",
        "100 GB Bandwidth",
        "Free SSL",
        "Daily Backups",
        "24/7 Support",
      ],
    },
    {
      name: t("pn_b"),
      popular: true,
      priceUsd: { m: 12.99, a: 9.99 },
      priceEgp: { m: 649, a: 499 },
      features: [
        "5 Websites",
        "50 GB NVMe SSD",
        "Unlimited Bandwidth",
        "Free SSL",
        "Daily Backups",
        "Priority Support",
      ],
    },
    {
      name: t("pn_p"),
      popular: false,
      priceUsd: { m: 24.99, a: 19.99 },
      priceEgp: { m: 1249, a: 999 },
      features: [
        "Unlimited Websites",
        "100 GB NVMe SSD",
        "Unlimited Bandwidth",
        "Free SSL + CDN",
        "Hourly Backups",
        "Dedicated Support",
      ],
    },
    {
      name: t("pn_e"),
      popular: false,
      custom: true,
      features: [
        "Dedicated Resources",
        "500 GB+ NVMe SSD",
        "Unlimited Everything",
        "White-label CDN",
        "Real-time Backups",
        "Account Manager",
      ],
    },
  ];

  const faqs = [
    { q: t("fq1q"), a: t("fq1a") },
    { q: t("fq2q"), a: t("fq2a") },
    { q: t("fq3q"), a: t("fq3a") },
    { q: t("fq4q"), a: t("fq4a") },
    { q: t("fq5q"), a: t("fq5a") },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero eyebrow={t("ho_eye")} title={t("ho_h1")} titleEm={t("ho_h1_em")} subtitle={t("ho_sub")} />

      {/* Plans Section */}
      <section className="py-20 px-[6%]">
        {/* Billing Toggle */}
        <div className="flex justify-center mb-9">
          <div className="flex bg-white/5 border border-border rounded-full overflow-hidden">
            <button
              onClick={() => setBilling("m")}
              className={`text-[0.76rem] font-bold tracking-[0.08em] uppercase px-5 py-2 transition-colors ${
                billing === "m" ? "bg-signal text-night" : "text-muted"
              }`}
            >
              {t("bill_mo")}
            </button>
            <button
              onClick={() => setBilling("a")}
              className={`text-[0.76rem] font-bold tracking-[0.08em] uppercase px-5 py-2 transition-colors ${
                billing === "a" ? "bg-signal text-night" : "text-muted"
              }`}
            >
              {t("bill_an")}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1080px] mx-auto">
          {plans.map((plan, index) => {
            const price = plan.custom
              ? null
              : currency === "usd"
              ? plan.priceUsd![billing]
              : plan.priceEgp![billing];
            const currSymbol = currency === "usd" ? "$" : "EGP ";

            return (
              <div
                key={index}
                className={`bg-night2 border rounded-[10px] p-7 relative transition-all hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.3)] ${
                  plan.popular
                    ? "border-signal bg-gradient-to-br from-signal/[0.07] to-night2"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-signal text-night text-[0.6rem] font-bold tracking-[0.14em] uppercase py-1 px-3 rounded-full whitespace-nowrap">
                    {t("most_pop")}
                  </div>
                )}

                <div className="text-[0.66rem] tracking-[0.18em] uppercase text-muted mb-3">
                  {plan.name}
                </div>

                {plan.custom ? (
                  <>
                    <div className="text-[2.4rem] font-bold tracking-[-0.04em] leading-[1] mb-1">
                      {t("ent_c")}
                    </div>
                    <div className="text-[0.78rem] text-muted mb-4">{t("ent_s")}</div>
                  </>
                ) : (
                  <>
                    <div className="flex items-baseline gap-0.5 mb-1">
                      <span className="text-[0.95rem] font-bold leading-[1]">{currSymbol}</span>
                      <span className="text-[2.4rem] font-bold tracking-[-0.04em] leading-[1]">
                        {price}
                      </span>
                    </div>
                    <div className="text-[0.78rem] text-muted mb-4">{t("per_mo")}</div>
                  </>
                )}

                <ul className="flex flex-col gap-2.5 mb-5">
                  {plan.features.map((feature, fi) => (
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
                  href={plan.custom ? "/contact" : "/hosting"}
                  className={`block w-full text-center py-3 rounded text-[0.81rem] font-bold tracking-[0.05em] transition-all ${
                    plan.popular
                      ? "bg-signal text-night hover:bg-[#0fd4a8] hover:shadow-[0_5px_18px_rgba(19,233,186,0.25)]"
                      : "bg-transparent border border-border text-parchment hover:border-signal hover:bg-signal/5"
                  }`}
                >
                  {plan.custom ? t("btn_sales") : t("btn_go")}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 px-[6%] bg-night2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1080px] mx-auto">
          {/* Terminal Visual */}
          <div className="relative">
            <div className="bg-night3 border border-border rounded-[10px] p-7 font-mono text-[0.78rem] text-parchment leading-[1.95]">
              <div className="flex gap-1.5 mb-4">
                <div className="w-[9px] h-[9px] rounded-full bg-[#FF5F57]" />
                <div className="w-[9px] h-[9px] rounded-full bg-[#FEBC2E]" />
                <div className="w-[9px] h-[9px] rounded-full bg-[#28C840]" />
              </div>
              <div>
                <span className="text-signal">$</span>{" "}
                <span className="text-muted">voxylis deploy --env production</span>
              </div>
              <div>
                <span className="text-muted">{"✓"} Building...</span>{" "}
                <span className="text-signal">done (1.1s)</span>
              </div>
              <div>
                <span className="text-muted">{"✓"} SSL verified...</span>{" "}
                <span className="text-signal">valid 89 days</span>
              </div>
              <div>
                <span className="text-muted">{"✓"} CDN sync...</span>{" "}
                <span className="text-signal">47 files</span>
              </div>
              <div>
                <span className="text-signal">{"🚀"} Live at https://yourdomain.com</span>
              </div>
              <div>
                <span className="text-muted">Latency: </span>
                <span className="text-signal">18ms</span>
                <span className="text-muted"> Uptime: </span>
                <span className="text-signal">99.98%</span>
              </div>
              <div>
                <span className="text-signal">$</span>{" "}
                <span className="inline-block animate-blink">{"█"}</span>
              </div>
            </div>
            <div
              className={`absolute -bottom-4 ${
                isRTL ? "-left-4" : "-right-4"
              } bg-signal text-night font-bold text-[0.7rem] tracking-[0.1em] uppercase py-3 px-4 rounded-lg shadow-[0_12px_32px_rgba(19,233,186,0.27)]`}
            >
              <strong className="block text-[1.4rem] leading-[1] mb-0.5">18ms</strong>
              {t("badge_avg") || "Avg. Response"}
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="text-[0.67rem] tracking-[0.22em] uppercase text-signal mb-3 flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-signal" />
              {t("why_eye")}
            </div>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-3">
              {t("why_h2")} <em className="not-italic text-signal">{t("why_h2_em")}</em>
            </h2>
            <p className="text-[0.92rem] text-muted leading-[1.75] max-w-[500px] mb-8">
              {t("why_sub")}
            </p>

            <div className="flex flex-col gap-4">
              {[
                { title: t("wh1"), desc: t("wh1p") },
                { title: t("wh2"), desc: t("wh2p") },
                { title: t("wh3"), desc: t("wh3p") },
                { title: t("wh4"), desc: t("wh4p") },
              ].map((item, i) => (
                <div key={i} className={`flex gap-3 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                  <div className="w-5 h-5 rounded-full flex-shrink-0 border border-signal bg-signal/10 flex items-center justify-center mt-0.5">
                    <svg
                      viewBox="0 0 10 10"
                      className="w-2.5 h-2.5 stroke-signal fill-none stroke-[2.5]"
                    >
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-[6%]">
        <div className="text-center max-w-[1080px] mx-auto">
          <div className="text-[0.67rem] tracking-[0.22em] uppercase text-signal mb-3 flex items-center justify-center gap-2">
            <span className="w-[18px] h-[1px] bg-signal" />
            {t("faq_eye")}
          </div>
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-10">
            {t("faq_h2")} <em className="not-italic text-signal">{t("faq_h2_em")}</em>
          </h2>
        </div>

        <div className="max-w-[660px] mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className={`w-full text-start bg-transparent border-none text-parchment font-semibold text-[0.9rem] py-4 flex justify-between items-center gap-4 transition-colors hover:text-signal ${
                  isRTL ? "flex-row-reverse text-right" : ""
                }`}
              >
                {faq.q}
                <span
                  className={`w-5 h-5 flex-shrink-0 border border-border rounded-full flex items-center justify-center text-[0.85rem] text-muted transition-all ${
                    openFaq === index ? "rotate-45 bg-signal text-night border-signal" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all text-[0.84rem] text-muted leading-[1.78] ${
                  openFaq === index ? "max-h-[220px] pb-4" : "max-h-0"
                } ${isRTL ? "text-right" : ""}`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
