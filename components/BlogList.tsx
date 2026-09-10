"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { categories, type Category, type Article } from "@/lib/articles";

export function BlogList({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState<Category | "Todos">("Todos");

  const visible = useMemo(() => {
    if (active === "Todos") return articles;
    return articles.filter((article) => article.category === active);
  }, [active, articles]);

  return (
    <>
      <div className="filters" role="tablist" aria-label="Filtrar por categoria">
        {(["Todos", ...categories] as const).map((category) => (
          <button
            key={category}
            className={`filter${active === category ? " active" : ""}`}
            onClick={() => setActive(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      {visible.length ? (
        <div className="article-grid">
          {visible.map((article) => (
            <ArticleCard key={article.slug} article={article} showDate />
          ))}
        </div>
      ) : (
        <p className="lead">Nenhum conteúdo nesta categoria por enquanto.</p>
      )}
    </>
  );
}
