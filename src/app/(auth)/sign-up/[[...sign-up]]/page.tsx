"use client";
import { SignUp } from "@clerk/nextjs";
import { UserPlus, Sparkles, ShieldCheck, PenTool, CheckCheck } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      {/* Left / Brand panel */}
      <aside className="relative hidden lg:flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(99,102,241,0.18),transparent_70%)]" />
        <div className="relative z-10 max-w-xl px-10 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm dark:border-indigo-900/40 dark:bg-white/10 dark:text-indigo-200">
            <Sparkles className="h-3.5 w-3.5" />
            AI Blog Platform
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Join AI Blog today and supercharge your content.
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Sign up to create posts, optimize SEO, and explore AI‑powered writing tools.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <CheckCheck className="mt-0.5 h-5 w-5 text-indigo-600" />
              <span className="text-gray-700 dark:text-gray-300">Entity‑based SEO suggestions</span>
            </li>
            <li className="flex items-start gap-3">
              <PenTool className="mt-0.5 h-5 w-5 text-indigo-600" />
              <span className="text-gray-700 dark:text-gray-300">Structured outlines & one‑click drafts</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-indigo-600" />
              <span className="text-gray-700 dark:text-gray-300">Privacy‑first, export anytime</span>
            </li>
          </ul>
        </div>
      </aside>

      {/* Right / Auth card */}
      <main className="flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-6 flex items-center gap-2">
            <div className="rounded-xl bg-indigo-600 p-2.5 shadow-sm">
              <UserPlus className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Create your account</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">Sign up to start using AI Blog</p>
            </div>
          </div>

          <div className="rounded-2xl border border-indigo-100 bg-white/80 p-4 shadow-lg backdrop-blur dark:border-indigo-900/30 dark:bg-slate-900/60">
            <SignUp
              appearance={{
                variables: {
                  colorPrimary: "#4f46e5",
                  colorText: "#111827",
                  colorTextSecondary: "#6b7280",
                  borderRadius: "0.75rem",
                },
                elements: {
                  rootBox: "w-full",
                  card: "shadow-none bg-transparent",
                  headerTitle: "text-gray-900 dark:text-white text-xl",
                  headerSubtitle: "text-gray-600 dark:text-gray-300",
                  formFieldLabel: "text-gray-800 dark:text-gray-200",
                  formFieldInput: "h-11 rounded-xl border-gray-200 focus:border-indigo-300 focus:ring-indigo-200 dark:bg-slate-900 dark:border-slate-700 dark:text-white",
                  formButtonPrimary:
                    "h-11 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition shadow-sm",
                  footerActionText: "text-gray-600 dark:text-gray-300",
                  footerActionLink: "text-indigo-600 hover:text-indigo-700",
                  socialButtonsBlockButton:
                    "rounded-xl border-gray-200 hover:bg-gray-50 dark:border-slate-700 dark:hover:bg-slate-800",
                  otpCodeFieldInput: "rounded-xl",
                  dividerLine: "bg-gray-200 dark:bg-slate-700",
                  dividerText: "text-gray-500 dark:text-gray-400",
                },
              }}
              afterSignUpUrl="/editor"
              redirectUrl="/editor"
            />
          </div>

          <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
            By signing up, you agree to our <a href="/terms" className="underline underline-offset-2">Terms</a> and <a href="/privacy" className="underline underline-offset-2">Privacy Policy</a>.
          </p>
        </div>
      </main>
    </div>
  );
}
