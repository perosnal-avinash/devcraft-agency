import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — CameeTo Software Development Agency",
  description:
    "Meet the CameeTo team — 50+ senior engineers, designers, and architects based in Noida, India. Building world-class software since 2016 for startups and enterprises worldwide.",
  keywords: [
    "about CameeTo",
    "software development team India",
    "software agency Noida",
    "tech company Noida",
    "CameeTo team",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About CameeTo — Software Development Agency",
    description:
      "200+ projects delivered. 50+ engineers. 8+ years of experience. Meet the team behind CameeTo.",
    url: "/about",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "CameeTo" }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
