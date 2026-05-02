"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export function PlansPreview() {
  const { t, currency, isRTL } = useLanguage();

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
  ];

  return (
    <section className="py-20 px-[6%]">
      <div className="text-center max-w-[1080px] mx-auto">
        <div className="text-[0.67rem] tracking-[0.22em] uppercase text-signal mb-3 flex items-center justify-center gap-2">
          <span className="w-[18px] h-[1px] bg-signal" />
          {t("pl_eye")}
        </div>
        <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-3">
          {t("pl_h2")} <em className="not-italic text-signal">{t("pl_h2_em")}</em>
        </h2>
        <p className="text-[0.92rem] text-muted leading-[1.75] max-w-[500px] mx-auto mb-10">
          {t("pl_sub")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
        {plans.map((plan, index) => {
          const price = currency === "usd" ? plan.priceUsd.m : plan.priceEgp.m;
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

              <div className="flex items-baseline gap-0.5 mb-1">
                <span className="text-[0.95rem] font-bold leading-[1]">{currSymbol}</span>
                <span className="text-[2.4rem] font-bold tracking-[-0.04em] leading-[1]">
                  {price}
                </span>
              </div>
              <div className="text-[0.78rem] text-muted mb-4">{t("per_mo")}</div>

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
                href="/hosting"
                className={`block w-full text-center py-3 rounded text-[0.81rem] font-bold tracking-[0.05em] transition-all ${
                  plan.popular
                    ? "bg-signal text-night hover:bg-[#0fd4a8] hover:shadow-[0_5px_18px_rgba(19,233,186,0.25)]"
                    : "bg-transparent border border-border text-parchment hover:border-signal hover:bg-signal/5"
                }`}
              >
                {t("btn_go")}
              </Link>
            </div>
          );
        })}
      </div>

      <Link
        href="/hosting"
        className="block text-center mt-7 text-[0.82rem] text-signal hover:opacity-70 transition-opacity"
      >
        {t("view_all")}
      </Link>
    </section>
  );
}
