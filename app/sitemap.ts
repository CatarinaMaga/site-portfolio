import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await headers();

  return [
    {
      url: "https://catarina-magalhaes-portfolio.vercel.app/",
      lastModified: new Date("2026-08-17"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
