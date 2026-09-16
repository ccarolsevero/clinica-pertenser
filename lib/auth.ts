const COOKIE = "pertenser_admin";
const DAY = 60 * 60 * 24;

function secret() {
  return process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || "pertenser-admin";
}

function toBase64Url(bytes: ArrayBuffer | Uint8Array) {
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let binary = "";
  arr.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64Url(value: string) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((value.length + 3) % 4);
  const binary = atob(padded);
  return Uint8Array.from(binary, (c) => c.charCodeAt(0));
}

async function hmac(value: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  return toBase64Url(signature);
}

export async function createSessionCookie() {
  const exp = Date.now() + 30 * DAY * 1000;
  const payload = String(exp);
  const token = `${payload}.${await hmac(payload)}`;
  return {
    name: COOKIE,
    value: token,
    options: {
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 30 * DAY,
    },
  };
}

export function clearSessionCookie() {
  return {
    name: COOKIE,
    value: "",
    options: {
      httpOnly: true,
      sameSite: "lax" as const,
      path: "/",
      maxAge: 0,
    },
  };
}

export async function isValidSession(token?: string | null) {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;
  const exp = Number(payload);
  if (!Number.isFinite(exp) || exp < Date.now()) return false;
  const expected = await hmac(payload);
  if (expected.length !== signature.length) return false;
  const a = fromBase64Url(expected);
  const b = fromBase64Url(signature);
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a[i] ^ b[i];
  return diff === 0;
}

export function adminPasswordConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD);
}

export function passwordMatches(password: string) {
  return Boolean(process.env.ADMIN_PASSWORD) && password === process.env.ADMIN_PASSWORD;
}

export { COOKIE as ADMIN_COOKIE };
