import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — CameeTo Software Development Agency",
  description:
    "Meet CameeTo — 50+ senior engineers and architects in Noida, India. Building world-class software since 2016 for startups and enterprises worldwide.",
  keywords: [
    "about CameeTo",
    "software development team India",
    "software agency Noida",
    "tech company Noida",
    "CameeTo team",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    title: "About CameeTo — Software Development Agency",
    description:
      "200+ projects delivered. 50+ engineers. 8+ years of experience. Meet the team behind CameeTo.",
    url: "/about",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "CameeTo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About CameeTo — Software Development Agency",
    description: "200+ projects delivered. 50+ engineers. 8+ years of experience.",
    images: ["/opengraph-image"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
