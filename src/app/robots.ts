import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** robots.txt gerado pelo Next — permite indexação + aponta o sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("sitemap.xml", SITE_URL).toString(),
    host: SITE_URL,
  };
}
