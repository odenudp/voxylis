"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export function CTASection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 px-[6%]">
      <div className="relative overflow-hidden bg-gradient-to-br from-signal/[0.08] to-signal/[0.02] border border-border rounded-[14px] py-16 px-12 text-center max-w-[1080px] mx-auto">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(19,233,186,0.1),transparent_60%)] pointer-events-none" />

        <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-bold tracking-[-0.03em] mb-3 relative">
          {t("hcta_h")} <em className="not-italic text-signal">{t("hcta_h_em")}</em>
        </h2>
        <p className="text-muted max-w-[400px] mx-auto mb-8 relative">{t("hcta_p")}</p>

        <div className={`flex gap-3 justify-center flex-wrap relative ${isRTL ? "flex-row-reverse" : ""}`}>
          <Link
            href="/hosting"
            className="inline-flex items-center gap-1.5 text-[0.84rem] font-bold tracking-[0.06em] py-3 px-7 rounded bg-spark text-white hover:bg-[#e8572f] hover:-translate-y-0.5 transition-all"
          >
            {t("hcta_b1")}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-[0.84rem] font-bold tracking-[0.06em] py-3 px-7 rounded bg-transparent text-parchment border border-border hover:border-signal hover:bg-signal/5 transition-all"
          >
            {t("hcta_b2")}
          </Link>
        </div>
      </div>
    </section>
  );
}
