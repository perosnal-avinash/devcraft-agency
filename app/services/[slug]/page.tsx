import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data";
import ServicePageClient from "./ServicePageClient";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const url = `/services/${slug}`;
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
      title: `${service.title} Services — CameeTo`,
      description: service.description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} Services — CameeTo`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageClient service={service} />;
}
