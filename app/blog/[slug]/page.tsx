import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { getArticle } from "@/lib/articles";
import { formatDate } from "@/lib/format";
import { sanitizeArticleHtml } from "@/lib/html";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Artigo" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) notFound();

  return (
    <article className="section">
      <div className="container prose">
        <p className="eyebrow">{article.category}</p>
        <h1>{article.title}</h1>
        <p className="support">{formatDate(article.date)}</p>
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: sanitizeArticleHtml(article.content) }}
        />
        <div className="actions">
          <Button href="/blog" variant="secondary">
            Voltar aos conteúdos
          </Button>
          <Button href="/avaliacao-psicologica">Conheça a avaliação</Button>
        </div>
      </div>
    </article>
  );
}
