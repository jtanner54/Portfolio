import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jacktanner.dev";
  const lastModified = new Date("2026-01-06"); // fixed date for static export

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/About`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Tech`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
