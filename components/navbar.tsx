"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { Logo } from "./logo";

export function Navbar() {
  const { lang, setLang, currency, setCurrency, t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("nav_home") },
    { href: "/hosting", label: t("nav_hosting") },
    { href: "/design", label: t("nav_design") },
    { href: "/marketing", label: t("nav_mkt") },
    { href: "/about", label: t("nav_about") },
    { href: "/blog", label: t("nav_blog") },
    { href: "/contact", label: t("nav_contact") },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] h-[68px] flex items-center justify-between px-[4%] backdrop-blur-[22px] border-b border-border transition-colors duration-300 ${
          isScrolled ? "bg-night/[0.98]" : "bg-night/[0.84]"
        }`}
      >
        <Link href="/" className="flex-shrink-0 cursor-pointer">
          <Logo />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex gap-6 items-center flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs tracking-[0.12em] uppercase text-muted hover:text-parchment transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Controls */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          {/* Language Toggle */}
          <div className="flex bg-white/5 border border-border rounded-full overflow-hidden">
            <button
              onClick={() => setLang("en")}
              className={`text-[0.68rem] font-bold tracking-[0.08em] uppercase px-3 py-1.5 transition-colors whitespace-nowrap ${
                lang === "en" ? "bg-signal text-night" : "text-muted"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("ar")}
              className={`text-[0.68rem] font-bold tracking-[0.08em] uppercase px-3 py-1.5 transition-colors whitespace-nowrap ${
                lang === "ar" ? "bg-signal text-night" : "text-muted"
              }`}
            >
              عر
            </button>
          </div>

          {/* Currency Toggle */}
          <div className="flex bg-white/5 border border-border rounded-full overflow-hidden">
            <button
              onClick={() => setCurrency("usd")}
              className={`text-[0.68rem] font-bold tracking-[0.08em] uppercase px-3 py-1.5 transition-colors whitespace-nowrap ${
                currency === "usd" ? "bg-signal text-night" : "text-muted"
              }`}
            >
              USD
            </button>
            <button
              onClick={() => setCurrency("egp")}
              className={`text-[0.68rem] font-bold tracking-[0.08em] uppercase px-3 py-1.5 transition-colors whitespace-nowrap ${
                currency === "egp" ? "bg-signal text-night" : "text-muted"
              }`}
            >
              EGP
            </button>
          </div>

          {/* CTA Button */}
          <Link
            href="/hosting"
            className="bg-signal text-night font-bold text-[0.74rem] tracking-[0.08em] uppercase px-5 py-2 rounded hover:bg-[#0fd4a8] hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            {t("nav_cta")}
          </Link>
        </div>

        {/* Mobile Burger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2.5 min-w-[44px] min-h-[44px] justify-center items-center"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <span
            className={`block w-[22px] h-[2px] bg-parchment rounded transition-transform ${
              isMobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-parchment rounded transition-opacity ${
              isMobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-parchment rounded transition-transform ${
              isMobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[68px] left-0 right-0 z-[9000] bg-night/[0.99] border-b border-border p-5 flex-col gap-1 max-h-[calc(100vh-68px)] overflow-y-auto ${
          isMobileOpen ? "flex" : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileOpen(false)}
            className="text-[0.93rem] text-muted py-2 border-b border-border hover:text-parchment transition-colors"
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/hosting"
          onClick={() => setIsMobileOpen(false)}
          className="block bg-signal text-night font-bold text-[0.84rem] tracking-[0.06em] uppercase py-3 px-5 rounded text-center mt-3"
        >
          {t("nav_cta")}
        </Link>

        <div className="flex gap-3 pt-4 mt-1 border-t border-border flex-wrap items-center">
          {/* Language Toggle Mobile */}
          <div className="flex bg-white/5 border border-border rounded-full overflow-hidden">
            <button
              onClick={() => setLang("en")}
              className={`text-[0.68rem] font-bold tracking-[0.08em] uppercase px-3 py-1.5 transition-colors ${
                lang === "en" ? "bg-signal text-night" : "text-muted"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("ar")}
              className={`text-[0.68rem] font-bold tracking-[0.08em] uppercase px-3 py-1.5 transition-colors ${
                lang === "ar" ? "bg-signal text-night" : "text-muted"
              }`}
            >
              عر
            </button>
          </div>

          {/* Currency Toggle Mobile */}
          <div className="flex bg-white/5 border border-border rounded-full overflow-hidden">
            <button
              onClick={() => setCurrency("usd")}
              className={`text-[0.68rem] font-bold tracking-[0.08em] uppercase px-3 py-1.5 transition-colors ${
                currency === "usd" ? "bg-signal text-night" : "text-muted"
              }`}
            >
              USD
            </button>
            <button
              onClick={() => setCurrency("egp")}
              className={`text-[0.68rem] font-bold tracking-[0.08em] uppercase px-3 py-1.5 transition-colors ${
                currency === "egp" ? "bg-signal text-night" : "text-muted"
              }`}
            >
              EGP
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
