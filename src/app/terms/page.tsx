import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  UserRound,
  BookOpenCheck,
  TriangleAlert,
  Power,
  RefreshCcw,
  Mail,
  ScrollText,
} from "lucide-react";

export const metadata = {
  title: "Terms of Service | AI Blog",
  description:
    "Read the Terms of Service for AI Blog: your rights, responsibilities, and the rules that govern use of our platform.",
};

const sections = [
  {
    id: "acceptance",
    icon: ShieldCheck,
    title: "1. Acceptance of Terms",
    body: (
      <p>
        By accessing or using AI Blog, you acknowledge that you have read, understood,
        and agree to be bound by these Terms of Service. If you do not agree, you
        must discontinue use of the platform.
      </p>
    ),
  },
  {
    id: "use",
    icon: BookOpenCheck,
    title: "2. Use of the Service",
    body: (
      <p>
        You may use AI Blog for lawful purposes only. You retain ownership of content you
        submit, but you grant us permission to process it for generation, editing, and SEO
        optimization features that power the service.
      </p>
    ),
  },
  {
    id: "accounts",
    icon: UserRound,
    title: "3. Accounts",
    body: (
      <p>
        You are responsible for safeguarding your login credentials and for all activity
        occurring under your account. Notify us immediately of any unauthorized use.
      </p>
    ),
  },
  {
    id: "limitations",
    icon: TriangleAlert,
    title: "4. Limitations & Disclaimers",
    body: (
      <p>
        AI Blog is provided “as is” without warranties of any kind. To the maximum extent
        permitted by law, we are not liable for any indirect, incidental, or consequential
        damages arising from use, misuse, or inability to use the platform.
      </p>
    ),
  },
  {
    id: "termination",
    icon: Power,
    title: "5. Suspension & Termination",
    body: (
      <p>
        We may suspend or terminate access for violations of these Terms, abuse of the
        platform, or unlawful activity. Upon termination, provisions intended to survive
        will remain in effect.
      </p>
    ),
  },
  {
    id: "changes",
    icon: RefreshCcw,
    title: "6. Changes to These Terms",
    body: (
      <p>
        We may update these Terms from time to time. Continued use of AI Blog after an
        update constitutes acceptance of the revised Terms. We encourage you to review
        this page periodically.
      </p>
    ),
  },
  {
    id: "contact",
    icon: Mail,
    title: "7. Contact",
    body: (
      <p>
        Questions? Reach us at {" "}
        <a
          href="mailto:hello@example.com"
          className="text-indigo-700 underline underline-offset-2"
        >
          hello@example.com
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
  const lastUpdated = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
    timeZone: "Asia/Kolkata",
  }).format(new Date());

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-indigo-50 via-white to-purple-50">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-indigo-100">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(99,102,241,0.15),transparent_60%)]" />
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl p-3 shadow-sm bg-white/70 backdrop-blur">
                <ScrollText className="h-8 w-8 text-indigo-600" aria-hidden />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
                  Terms of Service
                </h1>
                <p className="mt-3 text-gray-600">
                  Last updated: <span className="font-medium text-gray-800">{lastUpdated}</span>
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Badge className="bg-indigo-600 hover:bg-indigo-600 text-white">Legal</Badge>
                  <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                    AI Blog
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-8">
          {/* TOC */}
          <aside className="hidden lg:block">
            <nav aria-label="Table of contents" className="sticky top-24">
              <div className="rounded-2xl border border-indigo-100 bg-white shadow-sm">
                <div className="px-5 py-4 border-b border-indigo-100">
                  <p className="text-sm font-semibold text-gray-900">On this page</p>
                </div>
                <ul className="p-2">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                      >
                        <s.icon className="h-4 w-4" aria-hidden />
                        <span className="line-clamp-1">{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </aside>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map(({ id, icon: Icon, title, body }) => (
              <Card id={id} key={id} className="scroll-mt-28 border-indigo-100">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="rounded-xl p-2 bg-indigo-50">
                    <Icon className="h-5 w-5 text-indigo-600" aria-hidden />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed">
                  {body}
                </CardContent>
              </Card>
            ))}

            {/* Footer note */}
            <p className="text-xs text-gray-500 mt-8">
              These Terms form a binding agreement between you and AI Blog. If any provision is
              held unenforceable, the remaining provisions will remain in full force and effect.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
