import Link from "next/link";
import type { Article } from "@/lib/articles";
import { formatDate } from "@/lib/articles";

export function ArticleCard({
  article,
  showDate = false,
}: {
  article: Article;
  showDate?: boolean;
}) {
  return (
    <article className="article-card">
      <div className="article-cover" aria-hidden="true" />
      <div className="article-body">
        <div className="article-meta">
          <span>{article.category}</span>
          {showDate ? <time dateTime={article.date}>{formatDate(article.date)}</time> : null}
        </div>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <Link href={`/blog/${article.slug}`} className="link">
          Ler artigo
        </Link>
      </div>
    </article>
  );
}
