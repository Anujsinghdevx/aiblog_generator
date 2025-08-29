"use client";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Link href="/" className="font-semibold">AI Blog</Link>
      <nav className="flex items-center gap-4">
        <Link href="/editor">Editor</Link>
        <SignedIn><UserButton /></SignedIn>
        <SignedOut><SignInButton mode="modal" /></SignedOut>
      </nav>
    </header>
  );
}
