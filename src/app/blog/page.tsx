"use client";
import Link from "next/link";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

const posts = [
  {
    slug: "getting-started-with-ai-blog",
    title: "Getting Started with AI Blog",
    excerpt:
      "Learn how to create, edit, and optimize your first post using AI Blog's editor and SEO features.",
    date: "2025-09-02",
  },
  {
    slug: "seo-tips-with-ai",
    title: "SEO Tips with AI Assistance",
    excerpt:
      "Discover how AI Blog suggests keywords and structures your article for better search visibility.",
    date: "2025-08-28",
  },
  {
    slug: "privacy-first-content",
    title: "Privacy‑First Content Creation",
    excerpt:
      "See how AI Blog ensures your drafts and data remain secure while you work.",
    date: "2025-08-20",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-gradient-to-b from-indigo-50 via-white to-purple-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Our Blog
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Insights & Updates
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Tips, tutorials, and product news to help you make the most of AI Blog.
          </p>
        </section>

        {/* Posts grid */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col justify-between rounded-2xl border border-indigo-100 bg-white shadow-sm hover:shadow-md transition p-6"
            >
              <header>
                <time className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  {new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(
                    new Date(post.date)
                  )}
                </time>
                <h2 className="mt-2 text-xl font-semibold text-gray-900 line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 text-gray-600 line-clamp-3">{post.excerpt}</p>
              </header>
              <footer className="mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-indigo-600 hover:gap-2 transition-all text-sm font-medium"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </footer>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
