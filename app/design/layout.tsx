import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Services",
  description:
    "Professional web design services that convert visitors into customers. Mobile-first, SEO-ready designs with Arabic and English support. One-time investment with full handover.",
  openGraph: {
    title: "Web Design Services | Voxylis",
    description:
      "Professional web design that converts. Mobile-first, SEO-ready designs with full bilingual support.",
    url: "https://voxylis.com/design",
  },
};

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
