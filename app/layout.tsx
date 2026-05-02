import type { Metadata, Viewport } from "next";
import { Ubuntu, Cairo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/lib/language-context";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Voxylis — Fast, Reliable Web Hosting & Digital Services",
  description:
    "Voxylis offers enterprise-grade web hosting, web design, and digital marketing. 99.9% uptime, NVMe SSD, free SSL, daily backups, and 24/7 multilingual support. Plans from $4.99/mo.",
  keywords:
    "web hosting, fast hosting, NVMe SSD hosting, web design, digital marketing, SEO, reliable hosting, cheap hosting, WordPress hosting, business hosting",
  authors: [{ name: "Voxylis" }],
  openGraph: {
    type: "website",
    siteName: "Voxylis",
    title: "Voxylis — Fast, Reliable Web Hosting & Digital Services",
    description:
      "Enterprise-grade web hosting for businesses worldwide. 99.9% uptime, NVMe SSD, free SSL, daily backups, and 24/7 support. Start from $4.99/month.",
    url: "https://voxylis.com/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@voxylis",
    title: "Voxylis — Fast, Reliable Web Hosting",
    description:
      "Enterprise-grade web hosting for businesses worldwide. 99.9% uptime, NVMe SSD, free SSL. Start from $4.99/month.",
  },
};

export const viewport: Viewport = {
  themeColor: "#13E9BA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-night">
      <body className={`${ubuntu.variable} ${cairo.variable} font-sans antialiased`}>
        <LanguageProvider>
          <Navbar />
          <main className="pt-[68px] min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
