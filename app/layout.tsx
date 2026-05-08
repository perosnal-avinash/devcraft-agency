import type { Metadata } from "next";
import "./globals.css";
import ConsentBanner from "@/components/ConsentBanner";

export const metadata: Metadata = {
  title: "CameeTo — Software Agency",
  description:
    "We build web apps, mobile apps, and AI solutions for startups and enterprises.",
  keywords: "software development, web development, mobile apps, AI, cloud, DevOps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#020817] text-slate-100 overflow-x-hidden">
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
