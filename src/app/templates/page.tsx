"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FileText,
  Megaphone,
  Newspaper,
  ListChecks,
  Lightbulb,
  Rocket,
  Bot,
  ShoppingCart,
  BarChart3,
  Landmark,
  Search,
  Tags,
  ArrowRight,
} from "lucide-react";

const TEMPLATES = [
  {
    slug: "how-to-tutorial",
    title: "How‑to Tutorial",
    desc: "Step‑by‑step guide with prerequisites, steps, tips, and FAQs.",
    tags: ["Guide", "Evergreen", "Beginner"],
    icon: FileText,
  },
  {
    slug: "product-review",
    title: "Product Review",
    desc: "Pros, cons, specs, use‑cases, verdict, and alternatives.",
    tags: ["Affiliate", "Transactional", "Comparison"],
    icon: ShoppingCart,
  },
  {
    slug: "listicle",
    title: "Listicle",
    desc: "Curated list with scannable sections and key takeaways.",
    tags: ["Top 10", "Roundup", "Skimmable"],
    icon: ListChecks,
  },
  {
    slug: "case-study",
    title: "Case Study",
    desc: "Problem → approach → results with metrics and quotes.",
    tags: ["B2B", "MOFU", "Proof"],
    icon: BarChart3,
  },
  {
    slug: "news-brief",
    title: "News Brief",
    desc: "What happened, why it matters, key facts, and sources.",
    tags: ["Timely", "Short", "Citations"],
    icon: Newspaper,
  },
  {
    slug: "seo-pillar",
    title: "SEO Pillar Page",
    desc: "Comprehensive hub with clusters, internal links, and schema.",
    tags: ["Evergreen", "Longform", "Clusters"],
    icon: Lightbulb,
  },
  {
    slug: "landing-page",
    title: "Landing Page",
    desc: "Hero, value props, social proof, FAQs, and CTA flow.",
    tags: ["CRO", "Paid", "Conversion"],
    icon: Rocket,
  },
  {
    slug: "press-release",
    title: "Press Release",
    desc: "Headline, subhead, boilerplate, quotes, and media info.",
    tags: ["PR", "Corporate", "Media"],
    icon: Megaphone,
  },
  {
    slug: "comparison",
    title: "Comparison / Vs",
    desc: "Side‑by‑side features, pricing, pros/cons, and verdict.",
    tags: ["BOFU", "Decision", "Alternatives"],
    icon: Landmark,
  },
  {
    slug: "interview-qa",
    title: "Interview Q&A",
    desc: "Intro, guest bio, curated questions, and highlights.",
    tags: ["Editorial", "Thought Leadership"],
    icon: Bot,
  },
];

const ALL_TAGS = Array.from(new Set(TEMPLATES.flatMap((t) => t.tags))).sort();

export default function TemplatesPage() {
  const [q, setQ] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const text = q.trim().toLowerCase();
    return TEMPLATES.filter((t) => {
      const matchText = !text ||
        t.title.toLowerCase().includes(text) ||
        t.desc.toLowerCase().includes(text) ||
        t.tags.some((tag) => tag.toLowerCase().includes(text));
      const matchTags = activeTags.length === 0 || activeTags.every((tag) => t.tags.includes(tag));
      return matchText && matchTags;
    });
  }, [q, activeTags]);

  function toggleTag(tag: string) {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm">
            <Tags className="h-3.5 w-3.5" />
            Templates
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">Pick a template and write faster</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Start from a proven structure. Customize in the editor with AI assists, entity hints, and SEO checks.</p>
        </section>

        {/* Controls */}
        <div className="mb-8 grid gap-4 sm:grid-cols-[1fr_auto]">
          <label className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search templates…"
              className="w-full rounded-2xl border border-indigo-100 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 shadow-sm outline-none ring-0 placeholder:text-gray-400 focus:border-indigo-300 focus:bg-white focus:shadow-md"
            />
          </label>
          <div className="flex flex-wrap items-center gap-2">
            {ALL_TAGS.map((tag) => {
              const active = activeTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium border transition ${
                    active
                      ? "bg-indigo-600 text-white border-indigo-600 shadow"
                      : "bg-white text-gray-700 border-indigo-100 hover:bg-indigo-50"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
            {activeTags.length > 0 && (
              <button
                onClick={() => setActiveTags([])}
                className="rounded-full px-3 py-1.5 text-sm font-medium border bg-white text-gray-700 border-indigo-100 hover:bg-gray-50"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => {
            const Icon = t.icon;
            return (
              <article
                key={t.slug}
                className="group flex h-full flex-col rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <header className="flex items-start gap-3">
                  <span className="rounded-xl bg-indigo-50 p-2">
                    <Icon className="h-5 w-5 text-indigo-600" />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{t.title}</h2>
                    <p className="mt-1 text-sm text-gray-600">{t.desc}</p>
                  </div>
                </header>

                <div className="mt-4 flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4">
                  <Link
                    href={`/editor?template=${t.slug}`}
                    className="inline-flex items-center gap-1 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                  >
                    Use template <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </section>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-12 rounded-2xl border border-indigo-100 bg-white p-8 text-center shadow-sm">
            <p className="text-gray-700">No templates match your filters.</p>
            <p className="text-sm text-gray-500 mt-1">Try clearing tags or adjusting your search.</p>
          </div>
        )}
      </div>
    </main>
  );
}
