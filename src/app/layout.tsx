import type { Metadata } from "next";
import { Inter, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"]
});

const openSans = Open_Sans({
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
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${inter.variable}`}>
      <body className={openSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
