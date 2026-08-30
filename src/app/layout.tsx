import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import { ChatbotWidget } from "@/components/chatbot-widget";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sankalpsarthi.org"),
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
  description: "Sankalp Sarthi Foundation is a Mumbai-based non-profit focused on school supplies distribution, food support for homeless people, hospital patient nutrition, and volunteer community service.",
  keywords: ["Sankalp Sarthi Foundation", "NGO Mumbai", "Donate Education Mumbai", "Volunteer NGO India", "Food Support Mumbai", "Annual Drive 2026"],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    title: `${SITE_CONFIG.name} | Helping Hands Can Make Difference`,
    description: "Empowering children with education support and serving vulnerable communities across Mumbai.",
    url: "https://sankalpsarthi.org",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/assets/annual-drive-poster.png",
        width: 1200,
        height: 630,
        alt: "Sankalp Sarthi Foundation Annual Drive",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE_CONFIG.name,
    url: "https://sankalpsarthi.org",
    logo: "https://sankalpsarthi.org/assets/foundation-logo-card.png",
    description: "Volunteer-driven non-profit organization focused on education support, food drives, and hospital patient care in Mumbai, India.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_CONFIG.email,
      contactType: "customer service",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script src="https://checkout.razorpay.com/v1/checkout.js" async />
      </head>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <ChatbotWidget />
      </body>
    </html>
  );
}
