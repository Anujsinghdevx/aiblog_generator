"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { href: "/editor", label: "Editor" },
  { href: "/templates", label: "Templates" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={
        "relative inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium transition-colors " +
        (active
          ? "text-indigo-700 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-950/40"
          : "text-gray-700 hover:text-indigo-700 hover:bg-indigo-50/60 dark:text-gray-300 dark:hover:text-indigo-200 dark:hover:bg-indigo-950/30")
      }
    >
      {label}
      {active && (
        <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded bg-indigo-600/70 dark:bg-indigo-400/70" />
      )}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-indigo-100/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-indigo-900/30 dark:bg-slate-950/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand */}
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="rounded-xl bg-indigo-600 p-1.5 shadow-sm transition group-hover:scale-105">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <span className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            AI Blog
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <NavItem key={l.href} href={l.href} label={l.label} />
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="inline-flex items-center justify-center rounded-xl border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 active:scale-[0.99] dark:border-indigo-900/40 dark:bg-slate-900 dark:text-indigo-200 dark:hover:bg-slate-800">
                Sign in
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.99]">
                Get started
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <Link
              href="/dashboard"
              className="hidden sm:inline-flex items-center justify-center rounded-xl border border-indigo-200 bg-white px-3.5 py-2 text-sm font-medium text-indigo-700 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 dark:border-indigo-900/40 dark:bg-slate-900 dark:text-indigo-200 dark:hover:bg-slate-800"
            >
              Dashboard
            </Link>
            <UserButton appearance={{ elements: { avatarBox: "h-8 w-8" } }} />
          </SignedIn>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-xl p-2 text-gray-700 hover:bg-indigo-50 md:hidden dark:text-gray-300 dark:hover:bg-indigo-950/40"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={
          "md:hidden transition-[max-height,opacity] overflow-hidden border-t border-indigo-100/70 dark:border-indigo-900/30 " +
          (open ? "max-h-96 opacity-100" : "max-h-0 opacity-0")
        }
      >
        <div className="mx-auto max-w-6xl px-4 py-3">
          <nav className="grid gap-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2 text-base font-medium text-gray-800 hover:bg-indigo-50 hover:text-indigo-700 dark:text-gray-200 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex items-center gap-2">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="flex-1 rounded-xl border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 dark:border-indigo-900/40 dark:bg-slate-900 dark:text-indigo-200 dark:hover:bg-slate-800">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="flex-1 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">
                  Create account
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <Link
                href="/dashboard"
                className="flex-1 rounded-xl border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 dark:border-indigo-900/40 dark:bg-slate-900 dark:text-indigo-200 dark:hover:bg-slate-800"
              >
                Dashboard
              </Link>
              <UserButton appearance={{ elements: { avatarBox: "h-8 w-8" } }} />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}
