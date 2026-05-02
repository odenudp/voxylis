"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { PageHero } from "@/components/ui/page-hero";

export default function AboutPage() {
  const { t, isRTL } = useLanguage();

  const stats = [
    { value: "4,000+", label: t("ab_sl1") },
    { value: "2019", label: t("ab_sl2") },
    { value: "99.98%", label: t("ab_sl3") },
    { value: "<2min", label: t("ab_sl4") },
  ];

  const values = [
    { title: t("v1h"), desc: t("v1p") },
    { title: t("v2h"), desc: t("v2p") },
    { title: t("v3h"), desc: t("v3p") },
    { title: t("v4h"), desc: t("v4p") },
  ];

  return (
    <>
      <PageHero eyebrow={t("ab_eye")} title={t("ab_h1")} titleEm={t("ab_h1_em")} subtitle={t("ab_sub")} />

      {/* Story Section */}
      <section className="py-20 px-[6%] bg-night2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1080px] mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-5 order-2 lg:order-1">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-night border border-border rounded-[10px] p-5 text-center transition-transform hover:-translate-y-1"
              >
                <div className="text-[1.8rem] font-bold text-signal mb-1">{stat.value}</div>
                <div className="text-[0.72rem] tracking-[0.1em] uppercase text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Story Content */}
          <div className="order-1 lg:order-2">
            <div className="text-[0.67rem] tracking-[0.22em] uppercase text-signal mb-3 flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-signal" />
              {t("ab_sth")}
            </div>
            <p className={`text-[0.93rem] text-muted leading-[1.8] mb-5 ${isRTL ? "text-right" : ""}`}>
              {t("ab_p1")}
            </p>
            <p className={`text-[0.93rem] text-muted leading-[1.8] ${isRTL ? "text-right" : ""}`}>
              {t("ab_p2")}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-[6%]">
        <div className="text-center max-w-[1080px] mx-auto">
          <div className="text-[0.67rem] tracking-[0.22em] uppercase text-signal mb-3 flex items-center justify-center gap-2">
            <span className="w-[18px] h-[1px] bg-signal" />
            {t("av_eye")}
          </div>
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-10">
            {t("av_h2")} <em className="not-italic text-signal">{t("av_h2_em")}</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-night2 border border-border rounded-[10px] p-6 transition-transform hover:-translate-y-1"
            >
              <div
                className={`flex items-center gap-3 mb-3 ${isRTL ? "flex-row-reverse text-right" : ""}`}
              >
                <div className="w-[34px] h-[34px] rounded-full border border-signal bg-signal/10 flex items-center justify-center text-signal font-bold text-[0.85rem]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[0.94rem] font-bold">{value.title}</h3>
              </div>
              <p className={`text-[0.83rem] text-muted leading-[1.7] ${isRTL ? "text-right" : ""}`}>
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-[6%] bg-night2">
        <div className="relative overflow-hidden bg-gradient-to-br from-signal/[0.08] to-signal/[0.02] border border-border rounded-[14px] py-16 px-12 text-center max-w-[900px] mx-auto">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(19,233,186,0.1),transparent_60%)] pointer-events-none" />

          <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-bold tracking-[-0.03em] mb-3 relative">
            {t("ac_h")} <em className="not-italic text-signal">{t("ac_h_em")}</em>
          </h2>
          <p className="text-muted max-w-[400px] mx-auto mb-8 relative">{t("ac_p")}</p>

          <div className={`flex gap-3 justify-center flex-wrap relative ${isRTL ? "flex-row-reverse" : ""}`}>
            <Link
              href="/hosting"
              className="inline-flex items-center gap-1.5 text-[0.84rem] font-bold tracking-[0.06em] py-3 px-7 rounded bg-signal text-night hover:bg-[#0fd4a8] hover:-translate-y-0.5 transition-all"
            >
              {t("ac_b1")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-[0.84rem] font-bold tracking-[0.06em] py-3 px-7 rounded bg-transparent text-parchment border border-border hover:border-signal hover:bg-signal/5 transition-all"
            >
              {t("ac_b2")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
