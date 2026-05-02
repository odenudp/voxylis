"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { Logo } from "./logo";

export function Footer() {
  const { t, isRTL } = useLanguage();

  const hostingLinks = [
    { href: "/hosting", label: t("ft_l1") },
    { href: "/hosting", label: t("ft_l2") },
    { href: "/hosting", label: t("ft_l3") },
    { href: "/hosting", label: t("ft_l4") },
  ];

  const servicesLinks = [
    { href: "/design", label: t("ft_l5") },
    { href: "/marketing", label: t("ft_l6") },
    { href: "/hosting", label: t("ft_l7") },
    { href: "/hosting", label: t("ft_l8") },
  ];

  const companyLinks = [
    { href: "/about", label: t("ft_l9") },
    { href: "/contact", label: t("ft_l10") },
    { href: "/blog", label: t("ft_l11") },
    { href: "/privacy", label: t("ft_l12") },
  ];

  return (
    <footer className="bg-night border-t border-border py-14 px-[6%]">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10 max-w-7xl mx-auto`}
      >
        {/* Brand Column */}
        <div className={isRTL ? "text-right" : ""}>
          <Logo />
          <p className="text-[0.81rem] text-muted leading-[1.7] mt-3 max-w-[240px]">
            {t("ft_tag")}
          </p>
        </div>

        {/* Hosting Column */}
        <div className={isRTL ? "text-right" : ""}>
          <h5 className="text-[0.62rem] tracking-[0.2em] uppercase text-signal mb-4">
            {t("ft_c1")}
          </h5>
          <ul className="flex flex-col gap-2">
            {hostingLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-[0.81rem] text-muted hover:text-parchment transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className={isRTL ? "text-right" : ""}>
          <h5 className="text-[0.62rem] tracking-[0.2em] uppercase text-signal mb-4">
            {t("ft_c2")}
          </h5>
          <ul className="flex flex-col gap-2">
            {servicesLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-[0.81rem] text-muted hover:text-parchment transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div className={isRTL ? "text-right" : ""}>
          <h5 className="text-[0.62rem] tracking-[0.2em] uppercase text-signal mb-4">
            {t("ft_c3")}
          </h5>
          <ul className="flex flex-col gap-2">
            {companyLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-[0.81rem] text-muted hover:text-parchment transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`border-t border-border pt-6 flex items-center justify-between gap-4 flex-wrap max-w-7xl mx-auto ${
          isRTL ? "flex-row-reverse" : ""
        }`}
      >
        <p className="text-[0.72rem] text-muted">{t("ft_copy")}</p>
        <div className="flex gap-5">
          <Link
            href="/privacy"
            className="text-[0.72rem] text-muted hover:text-parchment transition-colors"
          >
            {t("ft_priv")}
          </Link>
          <Link
            href="/terms"
            className="text-[0.72rem] text-muted hover:text-parchment transition-colors"
          >
            {t("ft_terms")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
