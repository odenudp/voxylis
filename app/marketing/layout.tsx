import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description:
    "Data-driven digital marketing services including SEO, social media, Google & Meta Ads, email marketing, and content marketing. Grow your brand online with measurable results.",
  openGraph: {
    title: "Digital Marketing Services | Voxylis",
    description:
      "Data-driven digital marketing that delivers results. SEO, social media, paid ads, and more.",
    url: "https://voxylis.com/marketing",
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
