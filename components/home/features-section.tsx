"use client";

import { useLanguage } from "@/lib/language-context";

const featureIcons = [
  // Monitor - NVMe SSD
  <svg key="1" viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-signal fill-none stroke-[1.7]">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>,
  // Shield - SSL
  <svg key="2" viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-signal fill-none stroke-[1.7]">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,
  // Refresh - Backups
  <svg key="3" viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-signal fill-none stroke-[1.7]">
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
  </svg>,
  // Chat - Support
  <svg key="4" viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-signal fill-none stroke-[1.7]">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>,
  // Activity - DDoS
  <svg key="5" viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-signal fill-none stroke-[1.7]">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>,
  // Radio - One-Click
  <svg key="6" viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-signal fill-none stroke-[1.7]">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
  </svg>,
];

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    { icon: 0, title: t("f1h"), desc: t("f1p") },
    { icon: 1, title: t("f2h"), desc: t("f2p") },
    { icon: 2, title: t("f3h"), desc: t("f3p") },
    { icon: 3, title: t("f4h"), desc: t("f4p") },
    { icon: 4, title: t("f5h"), desc: t("f5p") },
    { icon: 5, title: t("f6h"), desc: t("f6p") },
  ];

  return (
    <section className="py-20 px-[6%] bg-night2">
      <div className="text-center max-w-[1080px] mx-auto">
        <div className="text-[0.67rem] tracking-[0.22em] uppercase text-signal mb-3 flex items-center justify-center gap-2">
          <span className="w-[18px] h-[1px] bg-signal" />
          {t("fe_eye")}
        </div>
        <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-3">
          {t("fe_h2")} <em className="not-italic text-signal">{t("fe_h2_em")}</em>
        </h2>
        <p className="text-[0.92rem] text-muted leading-[1.75] max-w-[500px] mx-auto mb-10">
          {t("fe_sub")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5px] bg-border border border-border rounded-[10px] overflow-hidden max-w-[1080px] mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-night p-8 relative group transition-colors hover:bg-signal/[0.03]"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-signal to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
            <div className="w-[42px] h-[42px] border border-border rounded-lg flex items-center justify-center bg-signal/[0.07] mb-4">
              {featureIcons[feature.icon]}
            </div>
            <h3 className="text-[0.91rem] font-bold mb-1.5">{feature.title}</h3>
            <p className="text-[0.81rem] text-muted leading-[1.65]">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
