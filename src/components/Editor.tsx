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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, tone, target_words: 900, include_outline: true }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data?.detail || "Error");
      setMd(data.markdown);
    } finally {
      setLoading(false);
    }
  }

  async function aiSuggest() {
    setLoading(true);
    try {
      const r = await fetch("/api/ai/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ partial_markdown: md, goal: "continue the next section with examples" }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data?.detail || "Error");
      setMd((m) => m + "\n\n" + data.markdown);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-900">AI Blog Editor</h1>
        <div className="text-sm opacity-70">~{readingTime(md)} min read</div>
      </div>

      {/* Controls for Topic, Tone, and Buttons */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {/* Topic Input */}
        <input
          className="border p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        {/* Tone Selector */}
        <select
          className="border p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option>informative</option>
          <option>conversational</option>
          <option>technical</option>
          <option>persuasive</option>
        </select>
        {/* Action Buttons */}
        <div className="flex gap-3 justify-between">
          <button
            onClick={aiGenerate}
            disabled={loading || !topic}
            className="px-6 py-3 rounded-full bg-black text-white font-semibold disabled:opacity-50 hover:bg-indigo-800 transition-all"
          >
            {loading ? "Working..." : "Generate AI Draft"}
          </button>
          <button
            onClick={aiSuggest}
            disabled={loading}
            className="px-6 py-3 rounded-full border-2 border-indigo-500 text-indigo-600 font-semibold hover:bg-indigo-100 disabled:opacity-50 transition-all"
          >
            Suggest Next Section
          </button>
        </div>
      </div>

      {/* Markdown Editor */}
      <div data-color-mode="light">
        <MDEditor value={md} onChange={(v) => setMd(v ?? "")} height={520} />
      </div>

      {/* SEO Panel (For simplicity, included below the editor) */}
      <div className="mt-6">
        <div>
          {require("./SEOInline").default({ markdown: md })}
        </div>
      </div>
    </div>
  );
}
