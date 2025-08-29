"use client";
import { useEffect, useMemo, useState } from "react";
import { seoScore } from "@/lib/seo";

export default function SEOInspector({ markdown }: { markdown: string }) {
  const [title, setTitle] = useState("");
  const [meta, setMeta] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [slug, setSlug] = useState("");

  useEffect(() => {
    (async () => {
      const r = await fetch("/api/ai/seo", {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({ markdown })
      });
      if (r.ok) {
        const data = await r.json();
        setTitle(data.title);
        setMeta(data.meta_description);
        setKeywords(data.keywords || []);
        setSlug(data.slug);
      }
    })();
  }, [markdown]);

  const { score, tips } = useMemo(() => seoScore({ title, markdown, keywords, meta }), [title, markdown, keywords, meta]);

  return (
    <div className="rounded-2xl border p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">SEO Checker</h3>
        <div className="text-sm font-semibold">{score}/100</div>
      </div>
      <div className="text-sm space-y-1">
        <div><span className="font-medium">Title:</span> {title}</div>
        <div><span className="font-medium">Slug:</span> /{slug}</div>
        <div><span className="font-medium">Meta:</span> {meta}</div>
        <div><span className="font-medium">Keywords:</span> {keywords.join(", ")}</div>
      </div>
      {tips.length > 0 && (
        <ul className="text-sm list-disc pl-5 space-y-1">
          {tips.map((t,i)=> <li key={i}>{t}</li>)}
        </ul>
      )}
    </div>
  );
}
