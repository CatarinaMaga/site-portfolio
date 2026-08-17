import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function robots(): Promise<MetadataRoute.Robots> {
  await headers();

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://catarina-magalhaes-portfolio.vercel.app/sitemap.xml",
  };
}
