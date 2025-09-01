'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Mail, MessageSquare, Github, MapPin, Clock, Phone, Send, ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";



export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    // simple honeypot
    if ((formData.get("company") as string)?.length) return;

    setStatus("loading");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: { "Content-Type": "application/json" },
      });
      if (!r.ok) throw new Error();
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Header />

      <main className="bg-gradient-to-b from-indigo-100 to-purple-50">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI Blog</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Questions, feedback, partnerships, or support—drop us a line. We typically reply within 24 hours.
          </p>
        </section>

        {/* Quick contact cards */}
        <section className="max-w-6xl mx-auto px-6 pb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard
            icon={<Mail className="size-6 text-indigo-600" />}
            title="Email"
            desc="hello@example.com"
            href="mailto:hello@example.com"
          />
          <ContactCard
            icon={<Github className="size-6 text-gray-800" />}
            title="GitHub"
            desc="Star or open an issue"
            href="https://github.com/"
          />
          <ContactCard
            icon={<MessageSquare className="size-6 text-purple-600" />}
            title="Support"
            desc="Docs & FAQs"
            href="/#faq"
          />
        </section>

        {/* Form + sidebar */}
        <section className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-sm ring-1 ring-indigo-100">
              <h2 className="text-2xl font-semibold text-gray-900">Send us a message</h2>
              <p className="mt-1 text-gray-600 text-sm">
                Share as much detail as you like—topic, goals, deadlines.
              </p>

              <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Honeypot */}
                <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

                <Field label="Your name" htmlFor="name">
                  <input
                    id="name" name="name" required
                    className="w-full rounded-lg border border-indigo-100 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Jane Doe"
                  />
                </Field>

                <Field label="Email" htmlFor="email">
                  <input
                    id="email" name="email" type="email" required
                    className="w-full rounded-lg border border-indigo-100 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="you@example.com"
                  />
                </Field>

                <Field label="Subject" htmlFor="subject">
                  <input
                    id="subject" name="subject" required
                    className="w-full rounded-lg border border-indigo-100 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Feature request / Partnership / Support"
                  />
                </Field>

                <Field label="Topic" htmlFor="topic">
                  <select
                    id="topic" name="topic"
                    className="w-full rounded-lg border border-indigo-100 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                    defaultValue="general"
                  >
                    <option value="general">General</option>
                    <option value="support">Support</option>
                    <option value="feature">Feature request</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </Field>

                <div className="md:col-span-2">
                  <Field label="Message" htmlFor="message">
                    <textarea
                      id="message" name="message" rows={6} required
                      className="w-full rounded-lg border border-indigo-100 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                      placeholder="Tell us what you’re trying to accomplish…"
                    />
                  </Field>
                </div>

                <div className="md:col-span-2 flex items-center justify-between gap-3">
                  <label className="inline-flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" name="consent" required className="accent-indigo-600" />
                    I agree to the{" "}
                    <Link href="/privacy" className="text-indigo-700 underline underline-offset-2">
                      privacy policy
                    </Link>
                    .
                  </label>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 font-semibold shadow-md hover:opacity-95 disabled:opacity-60"
                  >
                    <Send className="size-4" />
                    {status === "loading" ? "Sending…" : "Send message"}
                  </button>
                </div>

                {status === "ok" && (
                  <p className="md:col-span-2 mt-1 text-emerald-700 text-sm inline-flex items-center gap-2">
                    <ShieldCheck className="size-4" /> Thanks! We’ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="md:col-span-2 mt-1 text-rose-700 text-sm">
                    Something went wrong. Please email us at{" "}
                    <a className="underline" href="mailto:hello@example.com">hello@example.com</a>.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <InfoTile
              icon={<MapPin className="size-5 text-indigo-600" />}
              title="Address"
              lines={["AI Blog", "Remote-first"]}
            />
            <InfoTile
              icon={<Clock className="size-5 text-indigo-600" />}
              title="Hours"
              lines={["Mon–Fri: 9am–6pm IST", "Avg. response: < 24h"]}
            />
            <InfoTile
              icon={<Phone className="size-5 text-indigo-600" />}
              title="Quick links"
              lines={[
                "Docs & FAQs",
                "Changelog",
                "Twitter / X",
              ]}
              links={[
                { label: "Docs", href: "/#faq" },
                { label: "Changelog", href: "/changelog" },
                { label: "Twitter", href: "https://x.com/", external: true },
              ]}
            />
          </aside>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ---------- small helpers ---------- */
function Field({
  label, htmlFor, children,
}: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm text-gray-700">
      <span className="font-medium">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function ContactCard({
  icon, title, desc, href,
}: { icon: React.ReactNode; title: string; desc: string; href: string }) {
  const isExternal = href.startsWith("http");
  const Cmp = isExternal ? "a" : Link;
  const props = isExternal ? { href, target: "_blank", rel: "noreferrer" } : { href };
  return (
    <Cmp
      {...(props as any)}
      className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm ring-1 ring-indigo-100 hover:shadow-md transition-shadow"
    >
      <div className="mt-0.5">{icon}</div>
      <div>
        <div className="font-semibold text-gray-900">{title}</div>
        <div className="text-gray-600 text-sm">{desc}</div>
      </div>
    </Cmp>
  );
}

function InfoTile({
  icon, title, lines, links,
}: {
  icon: React.ReactNode;
  title: string;
  lines?: string[];
  links?: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-indigo-100">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      {lines?.length ? (
        <ul className="mt-2 text-sm text-gray-600 space-y-0.5">
          {lines.map((l) => <li key={l}>{l}</li>)}
        </ul>
      ) : null}
      {links?.length ? (
        <div className="mt-2 flex flex-wrap gap-2">
          {links.map((l) =>
            l.external ? (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                 className="text-indigo-700 underline underline-offset-2 text-sm">{l.label}</a>
            ) : (
              <Link key={l.label} href={l.href}
                    className="text-indigo-700 underline underline-offset-2 text-sm">{l.label}</Link>
            )
          )}
        </div>
      ) : null}
    </div>
  );
}
