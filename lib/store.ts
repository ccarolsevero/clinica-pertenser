import "server-only";

import { promises as fs } from "fs";
import path from "path";
import { revalidatePath } from "next/cache";
import { articleHtml, sanitizeArticleHtml } from "./html";
import type { SiteContent } from "./types";

const CONTENT_FILE = path.join(process.cwd(), "data", "content.json");
const GITHUB_PATH = "data/content.json";

let cache: { data: SiteContent; mtime: number } | null = null;

export async function getContent(): Promise<SiteContent> {
  const stat = await fs.stat(CONTENT_FILE);
  if (cache && cache.mtime === stat.mtimeMs) return cache.data;
  const raw = await fs.readFile(CONTENT_FILE, "utf8");
  const data = JSON.parse(raw) as SiteContent;
  const normalized = {
    ...data,
    blog: {
      ...data.blog,
      articles: data.blog.articles.map((article) => ({
        ...article,
        content: articleHtml(article.content as string | string[]),
      })),
    },
  };
  cache = { data: normalized, mtime: stat.mtimeMs };
  return normalized;
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

export function normalizeContent(input: SiteContent): SiteContent {
  const categories = [...new Set(input.blog.categories.map((item) => item.trim()).filter(Boolean))];
  const used = new Set<string>();
  const articles = input.blog.articles.map((article, index) => {
    let slug = slugify(article.slug || article.title) || `artigo-${index + 1}`;
    const base = slug;
    let n = 2;
    while (used.has(slug)) {
      slug = `${base}-${n}`;
      n += 1;
    }
    used.add(slug);
    const category = article.category.trim();
    if (category && !categories.includes(category)) categories.push(category);
    return {
      ...article,
      slug,
      title: article.title.trim(),
      excerpt: article.excerpt.trim(),
      category,
      date: article.date || new Date().toISOString().slice(0, 10),
      content: sanitizeArticleHtml(articleHtml(article.content)),
    };
  });

  return {
    ...input,
    site: {
      ...input.site,
      whatsapp: input.site.whatsapp.replace(/\D/g, ""),
      instagram: input.site.instagram.replace(/^@/, ""),
    },
    testimonials: input.testimonials.map((item) => item.trim()).filter(Boolean),
    blog: { categories, articles },
  };
}

function githubConfig() {
  const token = (process.env.CONTENT_GITHUB_TOKEN || process.env.GITHUB_TOKEN || "").trim();
  const repo = (
    process.env.GITHUB_REPO ||
    [process.env.VERCEL_GIT_REPO_OWNER, process.env.VERCEL_GIT_REPO_SLUG].filter(Boolean).join("/")
  ).trim();
  const branch = (process.env.GITHUB_BRANCH || "main").trim();
  return { token, repo, branch };
}

async function commitToGitHub(json: string) {
  const { token, repo, branch } = await githubConfig();
  if (!token || !repo) return { ok: false as const, skipped: true as const };

  const headers = {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${token}`,
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "pertenser-admin",
  };
  const encodedPath = GITHUB_PATH.split("/").map(encodeURIComponent).join("/");
  const url = `https://api.github.com/repos/${repo}/contents/${encodedPath}?ref=${encodeURIComponent(branch)}`;
  const current = await fetch(url, { headers, cache: "no-store" });
  const currentJson = current.ok ? ((await current.json()) as { sha?: string }) : {};

  const put = await fetch(`https://api.github.com/repos/${repo}/contents/${encodedPath}`, {
    method: "PUT",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "Atualiza textos do site pelo painel",
      content: Buffer.from(json).toString("base64"),
      sha: currentJson.sha,
      branch,
    }),
  });

  if (!put.ok) {
    if (put.status === 404) {
      throw new Error(
        "O GitHub não aceitou o token neste repositório privado. No Vercel, substitua GITHUB_TOKEN por um Personal Access Token clássico (começa com ghp_) com a permissão repo.",
      );
    }
    const detail = await put.text();
    throw new Error(`Não foi possível salvar no GitHub (${put.status}). ${detail.slice(0, 280)}`);
  }
  return { ok: true as const, skipped: false as const };
}

export async function saveContent(input: SiteContent) {
  const data = normalizeContent(input);
  const json = `${JSON.stringify(data, null, 2)}\n`;
  const { token, repo } = githubConfig();
  const onVercel = Boolean(process.env.VERCEL);

  let github: "saved" | "skipped" | "missing" = "skipped";
  if (onVercel || token) {
    if (!token || !repo) {
      throw new Error(
        "Neste servidor não é possível gravar o arquivo local. Cadastre GITHUB_TOKEN e GITHUB_REPO na Vercel para salvar os textos.",
      );
    }
    await commitToGitHub(json);
    github = "saved";
  }

  if (!onVercel) {
    await fs.writeFile(CONTENT_FILE, json, "utf8");
  }

  const stat = await fs.stat(CONTENT_FILE);
  cache = { data, mtime: stat.mtimeMs };
  revalidatePath("/", "layout");
  return { data, github };
}
