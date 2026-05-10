import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Start Your Project with CameeTo",
  description:
    "Get in touch with CameeTo. Share your project requirements and receive a tailored proposal within 24 hours. Based in Noida, India — serving clients globally.",
  keywords: [
    "contact CameeTo",
    "hire software developers India",
    "software development quote",
    "start a software project",
    "software agency contact",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    title: "Contact CameeTo — Start Your Project",
    description:
      "Tell us about your project. We'll get back within 24 hours with a tailored proposal.",
    url: "/contact",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "CameeTo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact CameeTo — Start Your Project",
    description: "Tell us about your project. We'll get back within 24 hours with a tailored proposal.",
    images: ["/opengraph-image"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
