"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import type { Article } from "@/lib/types";

export function BlogList({ articles, categories }: { articles: Article[]; categories: string[] }) {
  const [active, setActive] = useState<string>("Todos");

  const visible = useMemo(() => {
    if (active === "Todos") return articles;
    return articles.filter((article) => article.category === active);
  }, [active, articles]);

  return (
    <>
      <div className="filters" role="tablist" aria-label="Filtrar por categoria">
        {["Todos", ...categories].map((category) => (
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
