import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/articles";

const SITE = "https://www.clinicapertenser.com.br";

const PAGES = [
  "",
  "/avaliacao-psicologica",
  "/tdah-em-adultos",
  "/tea-em-adultos",
  "/psicoterapia",
  "/sobre",
  "/contato",
  "/blog",
  "/politica-de-privacidade",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles();
  const now = new Date();

  return [
    ...PAGES.map((path) => ({
      url: `${SITE}${path}`,
      lastModified: now,
    })),
    ...articles.map((article) => ({
      url: `${SITE}/blog/${article.slug}`,
      lastModified: new Date(article.date),
    })),
  ];
}
