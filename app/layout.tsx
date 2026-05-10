import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConsentBanner from "@/components/ConsentBanner";

const inter = Inter({ subsets: ["latin"], display: "swap", preload: true });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cameeto.com";
const SITE_NAME = "CameeTo";
const DEFAULT_TITLE = "CameeTo — Software Development Agency in India";
const DEFAULT_DESC =
  "CameeTo is a software development agency in Noida, India, building web apps, mobile apps, AI/ML solutions, FinTech platforms, and enterprise software for startups and enterprises worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESC,
  keywords: [
    "software development company India",
    "web development agency Noida",
    "mobile app development India",
    "AI ML development company",
    "fintech software development",
    "React Next.js development",
    "enterprise software India",
    "custom software development",
    "startup software development",
    "software agency Noida",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "CameeTo — Software Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [`${SITE_URL}/opengraph-image`],
    creator: "@cameeto",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#020817] text-slate-100 overflow-x-hidden`}>
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
