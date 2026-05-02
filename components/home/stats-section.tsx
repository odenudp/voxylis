"use client";

import { useLanguage } from "@/lib/language-context";

export function StatsSection() {
  const { t, isRTL } = useLanguage();

  const stats = [
    { value: "99.9", unit: "%", label: t("s1l") },
    { value: "4,000", unit: "+", label: t("s2l") },
    { value: "<18", unit: "ms", label: t("s3l") },
    { value: "24/7", unit: "", label: t("s4l") },
  ];

  return (
    <div className="mx-[6%]">
      <div className="grid grid-cols-2 lg:grid-cols-4 border border-border rounded-[10px] overflow-hidden max-w-[1080px] mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`py-5 px-5 bg-night2 ${
              index < stats.length - 1
                ? isRTL
                  ? "border-l border-border"
                  : "border-r border-border"
                : ""
            }`}
          >
            <div className="text-[1.6rem] font-bold leading-[1.1]">
              {stat.value}
              <span className="text-signal">{stat.unit}</span>
            </div>
            <div className="text-[0.68rem] tracking-[0.1em] uppercase text-muted mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
