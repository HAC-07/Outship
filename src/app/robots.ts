import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.outship.in/sitemap.xml",
    // Agent index: https://www.outship.in/llms.txt
  };
}
