import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Edit, Search, Settings, Sparkles, PenLine, Rocket, ShieldCheck, Clock, FileText
} from "lucide-react";

export default function Page() {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-b from-indigo-100 to-purple-50">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Create SEO-ready blogs with AI — fast.
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Draft, edit, and optimize Markdown in one clean workspace. Built for speed, readability, and Lighthouse scores.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/editor"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 text-base md:text-lg font-semibold shadow-md hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              aria-label="Open the AI editor"
            >
              <Sparkles className="size-5" />
              Start Writing Now
            </Link>
            <Link
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white text-indigo-700 px-6 py-3 text-base md:text-lg font-semibold hover:bg-indigo-50"
            >
              <PenLine className="size-5" />
              See How It Works
            </Link>
          </div>

          {/* Trust row */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-500">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="size-5 text-emerald-600" />
              <span>Clean HTML & A11y</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="size-5 text-indigo-600" />
              <span>Fast, low-JS UI</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Rocket className="size-5 text-purple-600" />
              <span>Lighthouse-friendly</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FileText className="size-5 text-blue-600" />
              <span>Markdown-native</span>
            </div>
          </div>
        </section>

        {/* Features / USPs */}
        <section className="max-w-6xl mx-auto px-6 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card icon={<Edit className="size-10 text-indigo-600" />} title="Easy Post Creation"
                  desc="Generate structured outlines and long-form drafts in minutes with smart prompts." />
            <Card icon={<Search className="size-10 text-purple-600" />} title="Instant SEO Checks"
                  desc="Auto title, slug & meta with live scoring and actionable improvement tips." />
            <Card icon={<Settings className="size-10 text-blue-600" />} title="Built-in Controls"
                  desc="Choose tone, target length, and add examples. Export clean Markdown anytime." />
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="max-w-6xl mx-auto px-6 pb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">How it works</h2>
          <ol className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Step num="1" title="Describe the topic"
                  desc="Add your topic and tone. We prep an outline and headings you can tweak." />
            <Step num="2" title="Generate & edit in Markdown"
                  desc="Write with AI assistance, then refine in the split-view editor." />
            <Step num="3" title="Optimize & publish"
                  desc="SEO Inspector suggests titles, slugs, and meta. Export or copy anywhere." />
          </ol>
        </section>

        {/* Testimonials (lightweight) */}
        <section className="max-w-6xl mx-auto px-6 pb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">Creators love the flow</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Quote text="Cut my writing time in half. The SEO tips are actually useful, not generic."
                   author="Maya S., Content Lead" />
            <Quote text="Clean Markdown, zero bloat. It just feels fast."
                   author="Arun K., Indie Hacker" />
            <Quote text="Titles, slug and meta in one click—my drafts finally ship on schedule."
                   author="Lena R., Tech Blogger" />
          </div>
        </section>

        {/* FAQ (no JS) */}
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">FAQs</h2>
          <div className="mt-6 space-y-3">
            <details className="group rounded-lg border border-indigo-100 bg-white p-4">
              <summary className="cursor-pointer font-medium text-gray-900">Can I export the post?</summary>
              <p className="mt-2 text-gray-600">Yes—copy Markdown or export from the editor. The HTML is clean and accessible.</p>
            </details>
            <details className="group rounded-lg border border-indigo-100 bg-white p-4">
              <summary className="cursor-pointer font-medium text-gray-900">Do you support custom tones?</summary>
              <p className="mt-2 text-gray-600">Absolutely. Create your own tone presets or switch per-post.</p>
            </details>
            <details className="group rounded-lg border border-indigo-100 bg-white p-4">
              <summary className="cursor-pointer font-medium text-gray-900">Will animations slow the site?</summary>
              <p className="mt-2 text-gray-600">We keep it lightweight—no Motion here. Layout uses pure CSS for speed.</p>
            </details>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ---------- small presentational helpers (same file for convenience) ---------- */
function Card({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm ring-1 ring-indigo-100 hover:shadow-md transition-shadow">
      <div className="mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-gray-600">{desc}</p>
    </div>
  );
}

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <li className="bg-white rounded-xl p-5 shadow-sm ring-1 ring-indigo-100">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
        {num}
      </div>
      <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-gray-600">{desc}</p>
    </li>
  );
}

function Quote({ text, author }: { text: string; author: string }) {
  return (
    <figure className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-indigo-100">
      <blockquote className="text-gray-700">“{text}”</blockquote>
      <figcaption className="mt-3 text-sm text-gray-500">— {author}</figcaption>
    </figure>
  );
}
