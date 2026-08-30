import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sankalpsarthi.org";

  const routes = [
    "",
    "/about",
    "/causes",
    "/impact",
    "/campaigns",
    "/campaigns/annual-drive-2026",
    "/donate",
    "/volunteer",
    "/contribute",
    "/gallery",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : route === "/donate" ? 0.9 : 0.8,
  }));
}
