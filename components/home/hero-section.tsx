"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export function HeroSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-68px)] flex items-center py-16 px-[6%]">
      {/* Background Blobs */}
      <div
        className="absolute w-[480px] h-[480px] rounded-full -top-[90px] -right-[70px] blur-[110px] pointer-events-none"
        style={{ background: "rgba(19,233,186,0.07)" }}
      />
      <div
        className="absolute w-[340px] h-[340px] rounded-full top-[45%] -left-[110px] blur-[110px] pointer-events-none"
        style={{ background: "rgba(255,99,64,0.05)" }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-[1080px] mx-auto relative z-10">
        <div>
          {/* Eyebrow */}
          <div
            className={`text-[0.68rem] tracking-[0.22em] uppercase text-signal mb-5 flex items-center gap-2.5 opacity-0 animate-[fadeUp_0.7s_0.15s_forwards] ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <span className="w-6 h-[1px] bg-signal" />
            {t("h_eye")}
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.3rem,4.5vw,3.9rem)] font-bold tracking-[-0.035em] leading-[1.07] mb-4 opacity-0 animate-[fadeUp_0.7s_0.3s_forwards]">
            {t("h_h1")} <em className="not-italic text-signal">{t("h_h1_em")}</em>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-[0.95rem] text-muted leading-[1.75] max-w-[450px] mb-8 opacity-0 animate-[fadeUp_0.7s_0.45s_forwards] ${
              isRTL ? "text-right" : ""
            }`}
          >
            {t("h_sub")}
          </p>

          {/* Buttons */}
          <div
            className={`flex gap-3 flex-wrap opacity-0 animate-[fadeUp_0.7s_0.6s_forwards] ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <Link
              href="/hosting"
              className="inline-flex items-center gap-1.5 text-[0.84rem] font-bold tracking-[0.06em] py-3 px-7 rounded bg-signal text-night hover:bg-[#0fd4a8] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(19,233,186,0.27)] transition-all"
            >
              {t("h_b1")}
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-[0.84rem] font-bold tracking-[0.06em] py-3 px-7 rounded bg-transparent text-parchment border border-border hover:border-signal hover:bg-signal/5 transition-all"
            >
              {t("h_b2")}
            </Link>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hidden lg:block opacity-0 animate-[fadeIn_1s_0.7s_forwards]">
          <svg viewBox="0 0 440 360" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <defs>
              <linearGradient id="wg" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#13E9BA" stopOpacity="0" />
                <stop offset="100%" stopColor="#13E9BA" stopOpacity="0.13" />
              </linearGradient>
              <filter id="glo">
                <feGaussianBlur stdDeviation="3.5" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g stroke="rgba(19,233,186,0.07)" strokeWidth="1">
              <line x1="0" y1="72" x2="440" y2="72" />
              <line x1="0" y1="144" x2="440" y2="144" />
              <line x1="0" y1="216" x2="440" y2="216" />
              <line x1="0" y1="288" x2="440" y2="288" />
              <line x1="72" y1="0" x2="72" y2="360" />
              <line x1="144" y1="0" x2="144" y2="360" />
              <line x1="216" y1="0" x2="216" y2="360" />
              <line x1="288" y1="0" x2="288" y2="360" />
              <line x1="360" y1="0" x2="360" y2="360" />
            </g>
            <path d="M0,250 Q55,185 110,200 T220,155 T316,164 T384,106 T440,134" fill="url(#wg)" />
            <path
              d="M0,250 Q55,185 110,200 T220,155 T316,164 T384,106 T440,134"
              fill="none"
              stroke="#13E9BA"
              strokeWidth="2.2"
              filter="url(#glo)"
            />
            <circle cx="110" cy="200" r="4" fill="#13E9BA" />
            <circle cx="220" cy="155" r="5.5" fill="#13E9BA" />
            <circle cx="316" cy="164" r="4" fill="#13E9BA" />
            <circle cx="384" cy="106" r="4" fill="#13E9BA" />
            <rect
              className="bar-animate"
              x="46"
              y="52"
              width="11"
              height="44"
              rx="2"
              fill="rgba(19,233,186,0.15)"
            />
            <rect
              className="bar-animate"
              x="72"
              y="34"
              width="11"
              height="62"
              rx="2"
              fill="rgba(19,233,186,0.22)"
            />
            <rect
              className="bar-animate"
              x="98"
              y="60"
              width="11"
              height="36"
              rx="2"
              fill="rgba(19,233,186,0.15)"
            />
            <rect
              className="bar-animate"
              x="124"
              y="40"
              width="11"
              height="56"
              rx="2"
              fill="rgba(19,233,186,0.18)"
            />
            <rect
              className="bar-animate"
              x="150"
              y="24"
              width="11"
              height="72"
              rx="2"
              fill="rgba(19,233,186,0.24)"
            />
            <rect
              x="336"
              y="24"
              width="76"
              height="66"
              rx="8"
              fill="none"
              stroke="rgba(255,99,64,0.22)"
              strokeWidth="1.4"
            />
            <circle
              cx="374"
              cy="57"
              r="11"
              fill="none"
              stroke="#FF6340"
              strokeWidth="1.4"
              opacity="0.65"
            />
            <text x="369" y="62" fill="#FF6340" fontSize="12" fontWeight="700" opacity="0.65">
              99
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
