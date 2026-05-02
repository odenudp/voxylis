import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Hosting Plans",
  description:
    "Choose from our range of hosting plans with NVMe SSD storage, free SSL, daily backups, and 24/7 support. Starting from $4.99/month with 99.9% uptime guarantee.",
  openGraph: {
    title: "Web Hosting Plans | Voxylis",
    description:
      "Enterprise-grade web hosting with NVMe SSD, free SSL, daily backups, and 24/7 support. Plans starting from $4.99/month.",
    url: "https://voxylis.com/hosting",
  },
};

export default function HostingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
