import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FinTech from "@/components/FinTech";
import Consultation from "@/components/Consultation";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CameeTo — Software Development Agency in India | Web, Mobile & AI",
  description:
    "CameeTo builds high-performance web apps, mobile apps, AI/ML systems, and FinTech platforms. 200+ projects delivered. Based in Noida, India — serving clients globally.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cameeto.com/#organization",
      name: "CameeTo",
      url: "https://cameeto.com",
      logo: {
        "@type": "ImageObject",
        url: "https://cameeto.com/logo.png",
        width: 409,
        height: 125,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@cameeto.com",
        contactType: "customer support",
        availableLanguage: ["English", "Hindi"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Anthurium, Plot No. 3, Sector 73",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201301",
        addressCountry: "IN",
      },
      sameAs: [
        "https://twitter.com/cameeto",
        "https://linkedin.com/company/cameeto",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://cameeto.com/#website",
      url: "https://cameeto.com",
      name: "CameeTo",
      publisher: { "@id": "https://cameeto.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://cameeto.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://cameeto.com/#service",
      name: "CameeTo Software Development Agency",
      image: "https://cameeto.com/og-image.png",
      url: "https://cameeto.com",
      telephone: "+91-98765-43210",
      email: "info@cameeto.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Anthurium, Plot No. 3, Sector 73",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201301",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.5355,
        longitude: 77.391,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      priceRange: "$$$",
      servesCuisine: undefined,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "50",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026") }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <TechStack />
        <Portfolio />
        <Process />
        <Testimonials />
        <Consultation />
        <FinTech />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
