import { baseURL } from "@/constants";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Core clinic pages
  const staticRoutes = [
    {
      url: `${baseURL}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0, // Homepage gets highest priority
    },
    // {
    //   url: `${baseUrl}/dentist`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly' as const,
    //   priority: 0.8, 
    // },
    {
      url: `${baseURL}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7, 
    },
  ];

  return [
    ...staticRoutes,
  ];
}