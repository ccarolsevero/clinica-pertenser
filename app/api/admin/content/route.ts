import { NextResponse } from "next/server";
import { getContent, saveContent } from "@/lib/store";
import type { SiteContent } from "@/lib/types";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await getContent();
  return NextResponse.json({
    data,
    persistence: process.env.GITHUB_TOKEN ? "github" : process.env.VERCEL ? "ephemeral" : "local",
  });
}

export async function PUT(request: Request) {
  const body = (await request.json().catch(() => null)) as SiteContent | null;
  if (!body?.site || !body.blog) {
    return NextResponse.json({ error: "Conteúdo inválido." }, { status: 400 });
  }

  try {
    const result = await saveContent(body);
    return NextResponse.json({
      ok: true,
      data: result.data,
      github: result.github,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Não foi possível salvar.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
