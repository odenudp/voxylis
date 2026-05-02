"use client";

import { useLanguage } from "@/lib/language-context";

const clientLogos = [
  { name: "TechStore", icon: "rect" },
  { name: "NexaBrand", icon: "circle" },
  { name: "FashionHub", icon: "diamond" },
  { name: "PulseRetail", icon: "box" },
  { name: "KhairCo", icon: "diamond-outline" },
  { name: "CircleMedia", icon: "circle-outline" },
  { name: "EgShop", icon: "eg" },
  { name: "AdvGroup", icon: "adv" },
];

export function ClientsSlider() {
  const { t } = useLanguage();

  return (
    <div className="mt-10">
      <p className="text-center text-[0.65rem] tracking-[0.22em] uppercase text-muted mb-4 px-[6%]">
        {t("cl_label")}
      </p>
      <div className="py-6 bg-night border-t border-b border-border overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-night to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-night to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex gap-0 w-max animate-scroll-clients hover:[animation-play-state:paused]">
          {/* First set */}
          {clientLogos.map((client, i) => (
            <ClientLogo key={`a-${i}`} name={client.name} icon={client.icon} />
          ))}
          {/* Duplicate for seamless loop */}
          {clientLogos.map((client, i) => (
            <ClientLogo key={`b-${i}`} name={client.name} icon={client.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ClientLogo({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center justify-center px-11 opacity-45 hover:opacity-85 grayscale hover:grayscale-0 brightness-200 hover:brightness-100 transition-all flex-shrink-0">
      <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="h-[26px] w-auto">
        {icon === "rect" && <rect x="4" y="8" width="24" height="24" rx="4" fill="#13E9BA" />}
        {icon === "circle" && <circle cx="16" cy="20" r="12" fill="#FF6340" />}
        {icon === "diamond" && <polygon points="16,8 28,20 16,32 4,20" fill="#13E9BA" />}
        {icon === "box" && (
          <>
            <rect
              x="4"
              y="12"
              width="22"
              height="16"
              rx="3"
              fill="none"
              stroke="#E8E2D2"
              strokeWidth="2.5"
            />
            <rect x="9" y="17" width="12" height="6" rx="1.5" fill="#13E9BA" />
          </>
        )}
        {icon === "diamond-outline" && (
          <path
            d="M4 20 L16 8 L28 20 L16 32Z"
            fill="none"
            stroke="#FF6340"
            strokeWidth="2.5"
          />
        )}
        {icon === "circle-outline" && (
          <>
            <circle
              cx="16"
              cy="20"
              r="12"
              fill="none"
              stroke="#13E9BA"
              strokeWidth="2.5"
            />
            <circle cx="16" cy="20" r="5" fill="#13E9BA" />
          </>
        )}
        {icon === "eg" && (
          <>
            <rect x="4" y="6" width="28" height="28" rx="14" fill="#13E9BA" opacity="0.2" />
            <text
              x="10"
              y="25"
              fontFamily="Ubuntu,sans-serif"
              fontWeight="900"
              fontSize="18"
              fill="#13E9BA"
            >
              Eg
            </text>
          </>
        )}
        {icon === "adv" && (
          <>
            <rect
              x="4"
              y="10"
              width="26"
              height="20"
              rx="3"
              fill="rgba(255,99,64,0.2)"
              stroke="#FF6340"
              strokeWidth="1.5"
            />
            <text
              x="6"
              y="25"
              fontFamily="Ubuntu,sans-serif"
              fontWeight="900"
              fontSize="13"
              fill="#FF6340"
            >
              ADV
            </text>
          </>
        )}
        <text
          x="36"
          y="27"
          fontFamily="Ubuntu,sans-serif"
          fontWeight="700"
          fontSize="16"
          fill="#E8E2D2"
        >
          {name}
        </text>
      </svg>
    </div>
  );
}
