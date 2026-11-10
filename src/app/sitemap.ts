import type { MetadataRoute } from "next";
import { siteUrl, indexable } from "@/data/site";
import { showcaseProjects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexable) return [];
  const now = new Date();
  const pages = ["", "/projects", "/about", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const projects = showcaseProjects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...pages, ...projects];
}
