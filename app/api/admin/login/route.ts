import { NextResponse } from "next/server";
import { adminPasswordConfigured, createSessionCookie, passwordMatches } from "@/lib/auth";

export async function POST(request: Request) {
  if (!adminPasswordConfigured()) {
    return NextResponse.json(
      { error: "Defina ADMIN_PASSWORD no ambiente antes de entrar no painel." },
      { status: 500 },
    );
  }

  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  if (!passwordMatches(body?.password ?? "")) {
    return NextResponse.json({ error: "Senha incorreta." }, { status: 401 });
  }

  const cookie = await createSessionCookie();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(cookie.name, cookie.value, cookie.options);
  return response;
}
