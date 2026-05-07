import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevCraft — Full-Stack Software Development Agency",
  description:
    "We build scalable web apps, mobile apps, AI solutions, cloud infrastructure, and more. End-to-end software development for startups and enterprises.",
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
      </body>
    </html>
  );
}
