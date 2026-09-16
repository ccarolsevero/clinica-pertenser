import { NextResponse } from "next/server";
import { getContent, saveContent } from "@/lib/store";
import type { SiteContent } from "@/lib/types";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await getContent();
  return NextResponse.json({
    data: { blog: data.blog },
    persistence: process.env.GITHUB_TOKEN ? "github" : process.env.VERCEL ? "ephemeral" : "local",
  });
}

export async function PUT(request: Request) {
  const body = (await request.json().catch(() => null)) as { blog?: SiteContent["blog"] } | null;
  if (!body?.blog || !Array.isArray(body.blog.categories) || !Array.isArray(body.blog.articles)) {
    return NextResponse.json({ error: "Conteúdo inválido." }, { status: 400 });
  }

  try {
    const current = await getContent();
    const result = await saveContent({ ...current, blog: body.blog });
    return NextResponse.json({
      ok: true,
      data: { blog: result.data.blog },
      github: result.github,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Não foi possível salvar.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
