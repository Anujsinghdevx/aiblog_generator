import Header from "@/components/Header";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto p-6 space-y-4">
        <h1 className="text-2xl font-semibold">Welcome to AI Blog</h1>
        <p className="opacity-80">Generate Markdown posts with AI, preview, and optimize SEO.</p>
        <Link href="/editor" className="inline-block px-4 py-2 rounded bg-black text-white">Open Editor</Link>
      </main>
    </>
  );
}
