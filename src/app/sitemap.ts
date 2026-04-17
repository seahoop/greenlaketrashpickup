import type { MetadataRoute } from "next";
import { SITE } from "../lib/site";
import { AREA_PAGES, SERVICE_PAGES } from "../lib/seo-pages";

const ROUTES = [
  "",
  "/services",
  "/team",
  "/portfolio",
  "/areas-we-serve",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ROUTES.map((route, index) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as MetadataRoute.Sitemap[number]["changeFrequency"]) : ("monthly" as MetadataRoute.Sitemap[number]["changeFrequency"]),
    priority: index === 0 ? 1 : 0.85,
  }));

  const serviceRoutes = SERVICE_PAGES.map((page) => ({
    url: `${SITE.url}/services/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const areaRoutes = AREA_PAGES.map((page) => ({
    url: `${SITE.url}/areas-we-serve/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
