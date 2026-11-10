import type { MetadataRoute } from "next";
import { siteUrl, indexable } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  if (!indexable) {
    // Blocked until the real domain is connected (see NEXT_PUBLIC_ALLOW_INDEXING in src/data/site.ts).
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/testimonial", "/scroll-video-test"] },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
