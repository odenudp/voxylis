"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { PageHero } from "@/components/ui/page-hero";

export default function ContactPage() {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const subjects = [
    { value: "", label: t("ct_sl") },
    { value: "hosting", label: t("cso1") },
    { value: "design", label: t("cso2") },
    { value: "marketing", label: t("cso3") },
    { value: "support", label: t("cso4") },
    { value: "other", label: t("cso5") },
  ];

  return (
    <>
      <PageHero eyebrow={t("ct_eye")} title={t("ct_h1")} titleEm={t("ct_h1_em")} subtitle={t("ct_sub")} />

      <section className="py-20 px-[6%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-[1080px] mx-auto">
          {/* Contact Form */}
          <div>
            <div className="text-[0.67rem] tracking-[0.22em] uppercase text-signal mb-4 flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-signal" />
              {t("cf_eye")}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-muted mb-1.5">
                    {t("ct_nl")}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-night2 border border-border rounded-lg py-3 px-4 text-[0.88rem] text-parchment outline-none transition-all focus:border-signal"
                  />
                </div>
                <div>
                  <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-muted mb-1.5">
                    {t("ct_el")}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-night2 border border-border rounded-lg py-3 px-4 text-[0.88rem] text-parchment outline-none transition-all focus:border-signal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-muted mb-1.5">
                    {t("ct_pl")}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-night2 border border-border rounded-lg py-3 px-4 text-[0.88rem] text-parchment outline-none transition-all focus:border-signal"
                  />
                </div>
                <div>
                  <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-muted mb-1.5">
                    {t("ct_sl")}
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-night2 border border-border rounded-lg py-3 px-4 text-[0.88rem] text-parchment outline-none transition-all focus:border-signal appearance-none cursor-pointer"
                  >
                    {subjects.map((subj) => (
                      <option key={subj.value} value={subj.value}>
                        {subj.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-muted mb-1.5">
                  {t("ct_ml")}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-night2 border border-border rounded-lg py-3 px-4 text-[0.88rem] text-parchment outline-none transition-all focus:border-signal resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-signal text-night font-bold text-[0.84rem] tracking-[0.06em] py-3.5 px-7 rounded-lg hover:bg-[#0fd4a8] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(19,233,186,0.27)] transition-all"
              >
                {t("ct_send")}
              </button>

              {submitted && (
                <div className="text-signal text-[0.85rem] text-center py-3 bg-signal/10 rounded-lg">
                  {t("ct_ok")}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="text-[0.67rem] tracking-[0.22em] uppercase text-signal mb-4 flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-signal" />
              {t("ci_eye")}
            </div>

            <div className="flex flex-col gap-5">
              <ContactCard
                icon={
                  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-signal fill-none stroke-[1.7]">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
                label="Email"
                value="support@voxylis.com"
                sub={t("ct_r24")}
              />
              <ContactCard
                icon={
                  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-signal fill-none stroke-[1.7]">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                }
                label="Phone"
                value="+20 123 456 7890"
                sub={t("ct_hrs")}
              />
              <ContactCard
                icon={
                  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-signal fill-none stroke-[1.7]">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
                label="Address"
                value={t("ct_addr")}
                sub=""
              />
              <a
                href="https://wa.me/201234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg p-4 transition-all hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-full bg-[#25D366]/15 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[0.88rem] font-semibold text-[#25D366]">{t("ct_wa")}</div>
                  <div className="text-[0.75rem] text-muted">{t("ct_hrs")}</div>
                </div>
              </a>
            </div>

            <p className="text-[0.78rem] text-muted mt-8 p-4 bg-night2 rounded-lg border border-border">
              {t("ct_pay")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-4 bg-night2 border border-border rounded-lg p-4">
      <div className="w-11 h-11 rounded-full bg-signal/10 border border-border flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[0.68rem] tracking-[0.1em] uppercase text-muted">{label}</div>
        <div className="text-[0.92rem] font-semibold">{value}</div>
        {sub && <div className="text-[0.72rem] text-signal">{sub}</div>}
      </div>
    </div>
  );
}
