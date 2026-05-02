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
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voxylis.com"),
  title: {
    default: "Voxylis — Fast, Reliable Web Hosting & Digital Services",
    template: "%s | Voxylis",
  },
  description:
    "Voxylis offers enterprise-grade web hosting, web design, and digital marketing. 99.9% uptime, NVMe SSD, free SSL, daily backups, and 24/7 multilingual support. Plans from $4.99/mo.",
  keywords: [
    "web hosting",
    "fast hosting",
    "NVMe SSD hosting",
    "web design",
    "digital marketing",
    "SEO",
    "reliable hosting",
    "cheap hosting",
    "WordPress hosting",
    "business hosting",
    "Egypt hosting",
    "Arabic support hosting",
  ],
  authors: [{ name: "Voxylis", url: "https://voxylis.com" }],
  creator: "Voxylis",
  publisher: "Voxylis",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Voxylis",
    title: "Voxylis — Fast, Reliable Web Hosting & Digital Services",
    description:
      "Enterprise-grade web hosting for businesses worldwide. 99.9% uptime, NVMe SSD, free SSL, daily backups, and 24/7 support. Start from $4.99/month.",
    url: "https://voxylis.com/",
    locale: "en_US",
    alternateLocale: "ar_EG",
  },
  twitter: {
    card: "summary_large_image",
    site: "@voxylis",
    creator: "@voxylis",
    title: "Voxylis — Fast, Reliable Web Hosting",
    description:
      "Enterprise-grade web hosting for businesses worldwide. 99.9% uptime, NVMe SSD, free SSL. Start from $4.99/month.",
  },
  alternates: {
    canonical: "https://voxylis.com",
    languages: {
      "en-US": "https://voxylis.com",
      "ar-EG": "https://voxylis.com/ar",
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#13E9BA" },
    { media: "(prefers-color-scheme: dark)", color: "#060816" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-night" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${ubuntu.variable} ${cairo.variable} font-sans antialiased`}>
        <LanguageProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-signal focus:text-night focus:px-4 focus:py-2 focus:rounded">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="pt-[68px] min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
