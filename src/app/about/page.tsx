import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Sparkles, ShieldCheck, Rocket, Gauge, Zap, FileText, Github, Mail, Target, Clock, CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "About | AI Blog",
  description:
    "Learn about AI Blog — a fast, Markdown-first blog generator with built-in SEO checks and a clean, accessible UI.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-b from-indigo-100 to-purple-50">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI Blog</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl">
            We’re building the fastest way to draft, edit, and optimize blog posts — without bloat. AI Blog is
            <strong> Markdown-native</strong>, <strong>SEO-aware</strong>, and designed for outstanding Lighthouse scores.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/editor"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 font-semibold shadow-md hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            >
              <Sparkles className="size-5" />
              Try the Editor
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white text-indigo-700 px-5 py-2.5 font-semibold hover:bg-indigo-50"
            >
              <FileText className="size-5" />
              Home
            </Link>
          </div>
        </section>

        {/* Mission */}
        <section className="max-w-6xl mx-auto px-6 pb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              icon={<Target className="size-8 text-indigo-600" />}
              title="Our Mission"
              desc="Empower creators to publish faster with clean, accessible content that ranks. We obsess over speed, clarity, and a workflow that keeps you in the zone."
            />
            <Card
              icon={<ShieldCheck className="size-8 text-emerald-600" />}
              title="Our Principles"
              desc="Minimal UI. Maximum clarity. No dark patterns. Everything we ship should be understandable in seconds and feel lightning fast."
            />
          </div>
        </section>

        {/* What makes us different */}
        <section className="max-w-6xl mx-auto px-6 pb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
            What makes AI Blog different?
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Feature
              icon={<Gauge className="size-8 text-blue-600" />}
              title="Performance-first"
              desc="Zero bloat, semantic HTML, and accessibility baked in for great Lighthouse scores."
            />
            <Feature
              icon={<Zap className="size-8 text-yellow-600" />}
              title="Fast workflow"
              desc="Draft, refine, and optimize in a single, streamlined Markdown workspace."
            />
            <Feature
              icon={<Rocket className="size-8 text-purple-600" />}
              title="SEO built-in"
              desc="Smart titles, slugs, metas, keywords & practical improvement tips in real-time."
            />
            <Feature
              icon={<ShieldCheck className="size-8 text-emerald-600" />}
              title="Clean exports"
              desc="Copy or export Markdown/HTML without extra wrappers or messy classes."
            />
          </div>
        </section>

        {/* Timeline / story */}
        <section className="max-w-6xl mx-auto px-6 pb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">Our Story</h2>
          <div className="mt-6 space-y-4">
            <TimelineItem
              icon={<Clock className="size-5 text-indigo-600" />}
              title="Idea → Prototype"
              desc="We started with a simple goal: an AI-assisted Markdown editor that feels native, not noisy."
            />
            <TimelineItem
              icon={<CheckCircle2 className="size-5 text-emerald-600" />}
              title="SEO Inspector lands"
              desc="We added live SEO scoring, title/meta suggestions, and keyword chips without clutter."
            />
            <TimelineItem
              icon={<Rocket className="size-5 text-purple-600" />}
              title="Polish & performance"
              desc="Refined UI, pure CSS interactions, and careful defaults for accessibility and speed."
            />
          </div>
        </section>

        {/* Callout / CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="rounded-2xl bg-white/70 backdrop-blur-sm p-6 md:p-8 shadow-sm ring-1 ring-indigo-100 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              Ready to write faster and rank better?
            </h3>
            <p className="mt-2 text-gray-600">
              Open the editor, choose your tone, and let AI kickstart your next post — you stay in control.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <Link
                href="/editor"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 font-semibold shadow-md hover:opacity-95"
              >
                <Sparkles className="size-5" />
                Launch Editor
              </Link>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white text-indigo-700 px-5 py-2.5 font-semibold hover:bg-indigo-50"
              >
                <Mail className="size-5" />
                Contact
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ---------------- helpers ---------------- */
function Card({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-indigo-100">
      <div className="shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-indigo-100">
      <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-gray-600">{desc}</p>
    </div>
  );
}

function TimelineItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative rounded-xl bg-white p-5 shadow-sm ring-1 ring-indigo-100">
      <div className="flex items-start gap-3">
        <div className="mt-1">{icon}</div>
        <div>
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <p className="mt-1 text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}
