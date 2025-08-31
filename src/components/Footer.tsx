"use client";
import Link from "next/link";
import { Github, Mail, Shield, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-indigo-100 bg-white/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">AI Blog</h3>
          <p className="mt-2 text-gray-600">
            Minimal, fast, and SEO-friendly AI blog generation. Markdown first.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Product</h4>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li><Link href="/editor" className="hover:text-indigo-700">Editor</Link></li>
            <li><Link href="/#how" className="hover:text-indigo-700">How it works</Link></li>
            <li><Link href="/#faq" className="hover:text-indigo-700">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Company</h4>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li><Link href="/about" className="hover:text-indigo-700">About</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-700">Contact</Link></li>
            <li className="flex items-center gap-2">
              <Shield className="size-4" />
              <Link href="/privacy" className="hover:text-indigo-700">Privacy</Link>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="size-4" />
              <Link href="/terms" className="hover:text-indigo-700">Terms</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Connect</h4>
          <div className="mt-2 flex items-center gap-3 text-gray-600">
            <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-1 hover:text-indigo-700">
              <Github className="size-4" /> GitHub
            </a>
            <a aria-label="Email" href="mailto:hello@example.com"
               className="inline-flex items-center gap-1 hover:text-indigo-700">
              <Mail className="size-4" /> Email
            </a>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            © {new Date().getFullYear()} AI Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
