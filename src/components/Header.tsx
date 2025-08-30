"use client";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-100 to-purple-50 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-2xl sm:text-3xl text-gray-900 tracking-wide hover:text-indigo-600 transition-colors duration-200"
        >
          AI Blog
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/editor"
            className="text-lg text-gray-700 hover:text-indigo-600 transition-colors duration-200"
          >
            Editor
          </Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full py-2 px-6 shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              <SignInButton mode="modal" />
            </div>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
}
