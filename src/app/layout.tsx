import type { Metadata } from "next";
import { Inter, Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"
// Font configurations
// Public Sans — a clean, institutional grotesk in the same family as the
// editorial-institutional look of sites like weforum.org: one typeface,
// used at different weights for headings vs. body, rather than pairing two
// different display faces. (Originally built for USWDS/US government
// digital services, which also fits SafeHaven's "civic infrastructure"
// positioning.) Two loader instances keep the existing --font-montserrat /
// --font-open-sans variable names so tailwind.config.js and every
// component using font-heading/font-sans need no other changes.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});
const publicSansHeading = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["600", "700", "800"]
});
const publicSansBody = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"]
});
export const metadata: Metadata = {
  title: "Safehaven - Preparing Civilization for AI and Superintelligence",
  description:
    "Safehaven is dedicated to preparing civilization for the advent of artificial intelligence and superintelligence through collaborative governance, societal readiness, and global initiatives.",
  keywords:
    "AI, artificial intelligence, superintelligence, societal readiness, AI governance, AI TownSquare, global AI initiatives",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${publicSansHeading.variable} ${publicSansBody.variable} ${inter.variable}`}>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
        <Analytics /> 
      </body>
    </html>
  );
}