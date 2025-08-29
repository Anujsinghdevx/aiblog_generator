export async function GET() {
  const r = await fetch(`${process.env.AI_API_URL}/posts`, {
    headers: { "X-Service-Token": process.env.SERVICE_API_KEY! }
  });
  return new Response(await r.text(), { status: r.status, headers: { "Content-Type": r.headers.get("Content-Type") || "application/json" }});
}
