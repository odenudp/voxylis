"use client";

import { useLanguage } from "@/lib/language-context";

export function TestimonialsSection() {
  const { t, isRTL } = useLanguage();

  const testimonials = [
    {
      quote: t("t1q"),
      name: t("t1n"),
      role: t("t1r"),
      initials: "AK",
    },
    {
      quote: t("t2q"),
      name: t("t2n"),
      role: t("t2r"),
      initials: "NI",
    },
    {
      quote: t("t3q"),
      name: t("t3n"),
      role: t("t3r"),
      initials: "OS",
    },
  ];

  return (
    <section className="py-20 px-[6%] bg-night2">
      <div className="text-center max-w-[1080px] mx-auto">
        <div className="text-[0.67rem] tracking-[0.22em] uppercase text-signal mb-3 flex items-center justify-center gap-2">
          <span className="w-[18px] h-[1px] bg-signal" />
          {t("te_eye")}
        </div>
        <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-10">
          {t("te_h2")} <em className="not-italic text-signal">{t("te_h2_em")}</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-night2 border border-border rounded-[10px] p-6 transition-transform hover:-translate-y-1"
          >
            <div className="text-signal text-[0.82rem] mb-3">★★★★★</div>
            <p className={`text-[0.83rem] text-parchment leading-[1.75] mb-5 italic ${isRTL ? "text-right" : ""}`}>
              {testimonial.quote}
            </p>
            <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
              <div className="w-[34px] h-[34px] rounded-full bg-[#1A1D30] border-2 border-border flex items-center justify-center font-bold text-[0.75rem] text-signal flex-shrink-0">
                {testimonial.initials}
              </div>
              <div>
                <div className="text-[0.81rem] font-bold">{testimonial.name}</div>
                <div className="text-[0.7rem] text-muted">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
