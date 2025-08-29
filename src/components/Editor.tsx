"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { readingTime } from "@/lib/seo";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function Editor() {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("informative");
  const [md, setMd] = useState<string>("# ");
  const [loading, setLoading] = useState(false);

  async function aiGenerate() {
    setLoading(true);
    try {
      const r = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({ topic, tone, target_words: 900, include_outline: true })
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data?.detail || "Error");
      setMd(data.markdown);
    } finally { setLoading(false); }
  }

  async function aiSuggest() {
    setLoading(true);
    try {
      const r = await fetch("/api/ai/suggest", {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({ partial_markdown: md, goal: "continue the next section with examples" })
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data?.detail || "Error");
      setMd((m) => m + "\n\n" + data.markdown);
    } finally { setLoading(false); }
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">AI Blog Editor</h1>
        <div className="text-sm opacity-70">~{readingTime(md)} min read</div>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        <input className="border p-2 rounded" placeholder="Topic"
               value={topic} onChange={e=>setTopic(e.target.value)} />
        <select className="border p-2 rounded" value={tone} onChange={e=>setTone(e.target.value)}>
          <option>informative</option><option>conversational</option>
          <option>technical</option><option>persuasive</option>
        </select>
        <div className="flex gap-2">
          <button onClick={aiGenerate} disabled={loading || !topic}
                  className="px-3 py-2 rounded bg-black text-white disabled:opacity-50">
            {loading ? "Working..." : "AI Generate Draft"}
          </button>
          <button onClick={aiSuggest} disabled={loading}
                  className="px-3 py-2 rounded border">
            AI Suggest Next
          </button>
        </div>
      </div>

      <div data-color-mode="light">
        <MDEditor value={md} onChange={(v)=>setMd(v ?? "")} height={520} />
      </div>

      {/* Side panel */}
      <div className="mt-6">
        {/* Client fetches SEO for current markdown */}
        {/** we keep simple: mount SEOInspector below editor */}
        <div>
          {/* Inline import to avoid circular imports */}
          {require("./SEOInline").default({ markdown: md })}
        </div>
      </div>
    </div>
  );
}
