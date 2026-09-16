import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_COOKIE, isValidSession } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  const isAdminPath = pathname === "/admin" || pathname.startsWith("/admin/") || pathname.startsWith("/api/admin");
  if (isAdminPath) requestHeaders.set("x-pertenser-admin", "1");

  if (!isAdminPath) return NextResponse.next();
  if (pathname === "/admin/login" || pathname === "/api/admin/login") {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const valid = await isValidSession(request.cookies.get(ADMIN_COOKIE)?.value);
  if (valid) return NextResponse.next({ request: { headers: requestHeaders } });

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

  const login = new URL("/admin/login", request.url);
  login.searchParams.set("from", pathname);
  return NextResponse.redirect(login);
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/api/admin/:path*"],
};
