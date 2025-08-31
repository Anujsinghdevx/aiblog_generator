"use client";
import { useEffect, useMemo, useState } from "react";
import { seoScore } from "@/lib/seo";
import {
  Gauge,
  RefreshCw,
  FileText,
  Link as LinkIcon,
  Tags,
  Info,
  Clipboard,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

type Props = { markdown: string };

export default function SEOInspector({ markdown }: Props) {
  const [title, setTitle] = useState("");
  const [meta, setMeta] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchSEO() {
    try {
      setLoading(true);
      const r = await fetch("/api/ai/seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ markdown }),
      });
      if (!r.ok) return;
      const data = await r.json();
      setTitle(data.title || "");
      setMeta(data.meta_description || "");
      setKeywords(data.keywords || []);
      setSlug(data.slug || "");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSEO();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markdown]);

  const { score, tips } = useMemo(
    () => seoScore({ title, markdown, keywords, meta }),
    [title, markdown, keywords, meta]
  );

  const level = useMemo(() => {
    if (score >= 85) return { label: "Excellent", color: "bg-emerald-500", text: "text-emerald-700" };
    if (score >= 70) return { label: "Good", color: "bg-blue-500", text: "text-blue-700" };
    if (score >= 50) return { label: "Fair", color: "bg-amber-500", text: "text-amber-700" };
    return { label: "Needs Work", color: "bg-rose-500", text: "text-rose-700" };
  }, [score]);

  function copy(text: string) {
    if (!text) return;
    navigator.clipboard?.writeText(text).catch(() => {});
  }

  return (
    <section
      className="rounded-2xl border border-indigo-100/70 bg-white/70 backdrop-blur-sm shadow-sm p-4 sm:p-5 space-y-4"
      aria-label="SEO Inspector"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Gauge className="size-5 text-indigo-600" aria-hidden />
          <h3 className="font-semibold text-gray-900">SEO Checker</h3>
        </div>
        <button
          onClick={fetchSEO}
          className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 px-3 py-1.5 text-sm text-indigo-700 hover:bg-indigo-50 transition"
          aria-label="Refresh SEO analysis"
        >
          <RefreshCw className="size-4" />
          Refresh
        </button>
      </div>

      {/* Score bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Score</span>
          <span className={`font-semibold ${level.text}`}>
            {score}/100 • {level.label}
          </span>
        </div>
        <div className="h-2.5 w-full rounded-full bg-gray-200 overflow-hidden">
          <div
            className={`h-full ${level.color} transition-[width] duration-500`}
            style={{ width: `${Math.min(Math.max(score, 0), 100)}%` }}
          />
        </div>
      </div>

      {/* Fields */}
      <div className="grid gap-3 text-sm">
        <FieldRow
          icon={<FileText className="size-4 text-gray-500" />}
          label="Title"
          value={title}
          onCopy={() => copy(title)}
        />
        <FieldRow
          icon={<LinkIcon className="size-4 text-gray-500" />}
          label="Slug"
          value={slug ? `/${slug}` : ""}
          onCopy={() => copy(`/${slug}`)}
        />
        <FieldRow
          icon={<Info className="size-4 text-gray-500" />}
          label="Meta Description"
          value={meta}
          onCopy={() => copy(meta)}
        />

        {/* Keywords */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <Tags className="size-4 text-gray-500" />
            <span className="font-medium text-gray-800">Keywords</span>
          </div>
          {keywords?.length ? (
            <div className="flex flex-wrap gap-2">
              {keywords.map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-xs text-indigo-700"
                  title={k}
                >
                  {k}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-xs">No keywords detected yet.</p>
          )}
        </div>
      </div>

      {/* Tips */}
      {!loading && tips.length > 0 && (
        <ul className="mt-2 space-y-2">
          {tips.map((t, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <AlertTriangle className="mt-0.5 size-4 text-amber-600 shrink-0" />
              <span className="text-gray-700">{t}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Loading skeleton */}
      {loading && (
        <div className="animate-pulse space-y-3">
          <div className="h-3 w-28 bg-gray-200 rounded" />
          <div className="h-2.5 w-full bg-gray-200 rounded" />
          <div className="h-2 w-4/5 bg-gray-200 rounded" />
          <div className="h-2 w-2/3 bg-gray-200 rounded" />
        </div>
      )}

      {/* Footer mini-guidance */}
      <div className="pt-2 border-t border-gray-100 text-xs text-gray-500 flex items-center gap-2">
        <CheckCircle2 className="size-4 text-emerald-600" />
        Aim for a concise title (50–60 chars), distinct slug, and a compelling
        meta (140–160 chars). Include 1–3 primary keywords naturally.
      </div>
    </section>
  );
}

/* ---------- Small helper component ---------- */
function FieldRow({
  icon,
  label,
  value,
  onCopy,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  onCopy: () => void;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-medium text-gray-800">{label}</span>
        </div>
        <p
          className="mt-1 truncate text-gray-700"
          title={value || "—"}
          aria-live="polite"
        >
          {value || "—"}
        </p>
      </div>
      <button
        onClick={onCopy}
        className="shrink-0 inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-xs text-gray-700 hover:bg-gray-50"
        aria-label={`Copy ${label.toLowerCase()}`}
      >
        <Clipboard className="size-3.5" />
        Copy
      </button>
    </div>
  );
}
