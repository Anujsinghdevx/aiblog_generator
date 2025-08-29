import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  // call our own proxy so it adds service token
  const res = await fetch(`${base}/api/ai/posts`, { cache: "no-store" }).catch(()=>null);
  const posts: { slug: string }[] = res?.ok ? await res!.json() : [];
  return posts.map(p => ({
    url: `${base}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7
  }));
}
