import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Lock,
  Database,
  Network,
  UserCheck,
  Mail,
  ScrollText,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | AI Blog",
  description: "Our commitment to your privacy and data protection at AI Blog.",
};

const sections = [
  {
    id: "collect",
    icon: Database,
    title: "1. Information We Collect",
    body: (
      <p>
        We collect minimal information needed to provide our service, such as your account
        details, usage logs, and content you create in the editor. We do not sell your data.
      </p>
    ),
  },
  {
    id: "use",
    icon: Shield,
    title: "2. How We Use Your Data",
    body: (
      <p>
        Data is used strictly to operate and improve AI Blog, deliver AI-generated drafts,
        optimize SEO suggestions, and support you as a user.
      </p>
    ),
  },
  {
    id: "security",
    icon: Lock,
    title: "3. Data Storage & Security",
    body: (
      <p>
        Your content is stored securely in our database. We employ encryption and access
        controls to protect your information. However, no system is 100% secure, and we
        cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: "third-parties",
    icon: Network,
    title: "4. Third-Party Services",
    body: (
      <p>
        We may use analytics or AI providers to deliver functionality. These services only
        receive the data necessary for their operation.
      </p>
    ),
  },
  {
    id: "rights",
    icon: UserCheck,
    title: "5. Your Rights",
    body: (
      <p>
        You can request deletion of your data or export a copy by contacting us at{" "}
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

export default function PrivacyPage() {
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
                  Privacy Policy
                </h1>
                <p className="mt-3 text-gray-600">
                  Last updated: <span className="font-medium text-gray-800">{lastUpdated}</span>
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Badge className="bg-indigo-600 hover:bg-indigo-600 text-white">Privacy</Badge>
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
                <CardContent className="text-gray-700 leading-relaxed">{body}</CardContent>
              </Card>
            ))}

            {/* Footer note */}
            <p className="text-xs text-gray-500 mt-8">
              We are committed to privacy by design. If you have questions about how we handle data,
              please contact us.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
