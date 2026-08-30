import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import { ChatbotWidget } from "@/components/chatbot-widget";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Sankalp Sarthi Foundation | Helping Hands Create Lasting Change",
    template: "%s | Sankalp Sarthi Foundation",
  },
  description:
    "Official website of Sankalp Sarthi Foundation, a Govt. Approved non-profit organization in Mumbai dedicated to education support, hunger relief, and hospital patient care.",
  keywords: [
    "Sankalp Sarthi Foundation",
    "NGO Mumbai",
    "Social Service Mumbai",
    "School Bag Distribution",
    "Hospital Patient Food Support",
    "Volunteer Internship Mumbai",
    "Donate Non Profit India",
  ],
  authors: [{ name: "Sankalp Sarthi Foundation" }],
  creator: "Sankalp Sarthi Foundation",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sankalpsarthifoundation.org",
    title: "Sankalp Sarthi Foundation | Govt. Approved NGO Mumbai",
    description:
      "Empowering school children, serving warm meals, and aiding hospital patients across Mumbai & Palghar.",
    siteName: "Sankalp Sarthi Foundation",
    images: [
      {
        url: "/assets/foundation-logo-card.png",
        width: 1200,
        height: 630,
        alt: "Sankalp Sarthi Foundation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sankalp Sarthi Foundation",
    description:
      "Volunteer-led non-profit in Mumbai dedicated to school drives, food support, and hospital patient care.",
    images: ["/assets/foundation-logo-card.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="bg-[#F7F6F0] text-[#17352D] antialiased min-h-screen flex flex-col font-sans" suppressHydrationWarning>
        
        {/* Institutional Header */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Sticky Mobile CTAs */}
        <StickyMobileCTA />

        {/* AI Chatbot Floating Widget */}
        <ChatbotWidget />

      </body>
    </html>
  );
}
