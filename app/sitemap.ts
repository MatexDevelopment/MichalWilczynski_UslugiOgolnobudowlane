import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: "https://mwilczynski-bud.pl", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
        // gdy dodasz podstrony, dopisz je tutaj
    ];
}