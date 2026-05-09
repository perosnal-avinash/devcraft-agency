import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cameeto.com";

const serviceSlugs = [
  "web-development",
  "mobile-app-development",
  "ai-machine-learning",
  "cloud-devops",
  "backend-api",
  "cybersecurity",
  "data-engineering",
  "enterprise-software",
  "ui-ux-design",
  "ecommerce",
  "qa-testing",
  "maintenance-support",
  "fintech",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL,                          lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE_URL}/about`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/privacy-policy`,      lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${SITE_URL}/terms-of-service`,    lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${SITE_URL}/cookie-policy`,       lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${SITE_URL}/nda-template`,        lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages];
}
