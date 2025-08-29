import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const body = await req.json();
  const r = await fetch(`${process.env.AI_API_URL}/generate`, {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
      "X-User-Id": userId,
      "X-Service-Token": process.env.SERVICE_API_KEY!,
    },
    body: JSON.stringify(body)
  });

  return new Response(await r.text(), { status: r.status, headers: { "Content-Type": r.headers.get("Content-Type") || "application/json" }});
}
