import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data";
import ServicePageClient from "./ServicePageClient";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cameeto.com";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const url = `${SITE_URL}/services/${slug}`;
  return {
    title: `${service.title} Services — CameeTo`,
    description: service.description,
    keywords: [
      `${service.title.toLowerCase()} company India`,
      `${service.title.toLowerCase()} agency Noida`,
      `hire ${service.title.toLowerCase()} developers`,
      "CameeTo services",
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: `${service.title} Services — CameeTo`,
      description: service.description,
      url,
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `${service.title} — CameeTo` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} Services — CameeTo`,
      description: service.description,
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageClient service={service} />;
}
