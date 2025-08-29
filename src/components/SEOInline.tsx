"use client";
import dynamic from "next/dynamic";
const SEOInspector = dynamic(() => import("./SEOInspector"), { ssr: false });
export default function SEOInline({ markdown }: { markdown: string }) {
  return <SEOInspector markdown={markdown} />;
}
