export function readingTime(markdown: string) {
  const words = markdown.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function seoScore(opts: { title?: string; markdown: string; keywords?: string[]; meta?: string; }) {
  let score = 0, tips: string[] = [];
  const { title = "", markdown, keywords = [], meta = "" } = opts;
  if (title.length > 20 && title.length <= 60) score += 15; else tips.push("Keep title 20–60 chars.");
  if (meta.length >= 140 && meta.length <= 160) score += 15; else tips.push("Meta 140–160 chars.");
  if (/^#\s+/.test(markdown)) score += 10; else tips.push("Add an H1 at the top.");
  const first100 = markdown.split(/\s+/).slice(0,100).join(" ").toLowerCase();
  if (keywords.some(k => first100.includes(k.toLowerCase()))) score += 15; else tips.push("Use a primary keyword early.");
  const h2s = (markdown.match(/\n##\s+/g) || []).length;
  if (h2s >= 3) score += 10; else tips.push("Add at least 3 H2 sections.");
  const images = markdown.match(/!\[.*?\]\(.*?\)/g) || [];
  if (images.length === 0 || images.every(m => /\!\[[^\]]+/.test(m))) score += 10; else tips.push("Add alt text to images.");
  if (/\[.+?\]\(.+?\)/.test(markdown)) score += 5; else tips.push("Add at least one relevant link.");
  const sentences = markdown.split(/[.!?]+/).length;
  const longWords = (markdown.match(/\b\w{12,}\b/g) || []).length;
  if (longWords / Math.max(1, sentences) < 1.2) score += 10; else tips.push("Shorten long sentences.");
  if (keywords.length) {
    const body = markdown.toLowerCase();
    const k = keywords[0].toLowerCase();
    const count = (body.match(new RegExp(`\\b${k}\\b`, "g")) || []).length;
    if (count >= 3) score += 10; else tips.push("Mention your primary keyword ~3–5 times.");
  }
  return { score: Math.min(100, score), tips };
}
