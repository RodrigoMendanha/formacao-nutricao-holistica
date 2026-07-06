import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** sitemap.xml gerado pelo Next com a URL da landing page. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
