"use client";

import { useLanguage } from "@/lib/language-context";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleEm: string;
  subtitle: string;
}

export function PageHero({ eyebrow, title, titleEm, subtitle }: PageHeroProps) {
  const { isRTL } = useLanguage();

  return (
    <div className="py-14 px-[6%] bg-gradient-to-b from-night2 to-night border-b border-border relative overflow-hidden">
      {/* Glow effect */}
      <div
        className={`absolute -top-20 ${
          isRTL ? "-left-20" : "-right-20"
        } w-[340px] h-[340px] rounded-full blur-[100px] pointer-events-none`}
        style={{ background: "rgba(19,233,186,0.06)" }}
      />

      <div className="max-w-[640px] relative">
        <div
          className={`text-[0.67rem] tracking-[0.22em] uppercase text-signal mb-3 flex items-center gap-2 ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          <span className="w-[18px] h-[1px] bg-signal" />
          {eyebrow}
        </div>
        <h1 className="text-[clamp(1.85rem,3.5vw,2.9rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-3">
          {title} <em className="not-italic text-signal">{titleEm}</em>
        </h1>
        <p className={`text-[0.93rem] text-muted max-w-[500px] leading-[1.72] ${isRTL ? "text-right" : ""}`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}
