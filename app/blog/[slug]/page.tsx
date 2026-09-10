import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { formatDate, getArticle, getArticles } from "@/lib/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Artigo" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  return (
    <article className="section">
      <div className="container prose">
        <p className="eyebrow">{article.category}</p>
        <h1>{article.title}</h1>
        <p className="support">{formatDate(article.date)}</p>
        <div className="lead" style={{ marginTop: 32 }}>
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
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
