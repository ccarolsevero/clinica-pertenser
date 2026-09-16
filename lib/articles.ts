import { getContent } from "./store";

export type { Article } from "./types";
export type Category = string;

export async function getCategories() {
  const content = await getContent();
  return content.blog.categories;
}

export async function getArticles() {
  const content = await getContent();
  return [...content.blog.articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getLatestArticles(count = 3) {
  const articles = await getArticles();
  return articles.slice(0, count);
}

export async function getArticle(slug: string) {
  const content = await getContent();
  return content.blog.articles.find((article) => article.slug === slug);
}
