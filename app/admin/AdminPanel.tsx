"use client";

import { useEffect, useState } from "react";
import { RichTextEditor } from "@/components/RichTextEditor";
import type { Article, SiteContent } from "@/lib/types";

type BlogContent = SiteContent["blog"];

function emptyArticle(category: string): Article {
  return {
    slug: "",
    title: "",
    excerpt: "",
    category,
    date: new Date().toISOString().slice(0, 10),
    content: "",
  };
}

export function AdminPanel() {
  const [blog, setBlog] = useState<BlogContent | null>(null);
  const [articleIndex, setArticleIndex] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [persistence, setPersistence] = useState("");

  useEffect(() => {
    fetch("/api/admin/content")
      .then(async (response) => {
        const payload = await response.json();
        setBlog(payload.data?.blog ?? null);
        setPersistence(payload.persistence);
      })
      .catch(() => setError("Não foi possível carregar o conteúdo."));
  }, []);

  const selectedArticle = blog?.articles[articleIndex];

  async function save(next = blog) {
    if (!next) return;
    setSaving(true);
    setError("");
    setStatus("");
    const response = await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ blog: next }),
    });
    const payload = (await response.json()) as { error?: string; data?: { blog: BlogContent }; github?: string };
    setSaving(false);
    if (!response.ok) {
      setError(payload.error || "Não foi possível salvar.");
      return;
    }
    if (payload.data?.blog) setBlog(payload.data.blog);
    setStatus(
      payload.github === "saved"
        ? "Salvo. O site público será atualizado em instantes."
        : payload.github === "missing"
          ? "Salvo só neste servidor. No Vercel, configure GITHUB_TOKEN para a alteração permanecer."
          : "Textos salvos.",
    );
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  if (!blog) {
    return (
      <div className="admin-shell">
        <p className="lead">{error || "Carregando painel..."}</p>
      </div>
    );
  }

  const data = blog;

  function updateArticle(patch: Partial<Article>) {
    const articles = data.articles.map((article, index) =>
      index === articleIndex ? { ...article, ...patch } : article,
    );
    setBlog({ ...data, articles });
  }

  return (
    <div className="admin-app">
      <header className="admin-top">
        <div>
          <p className="eyebrow">Painel PertenSer</p>
          <h1>Blog</h1>
        </div>
        <div className="admin-top-actions">
          <button className="btn btn-coral" type="button" onClick={() => save()} disabled={saving}>
            {saving ? "Salvando..." : "Salvar"}
          </button>
          <button className="btn btn-ghost" type="button" onClick={logout}>
            Sair
          </button>
        </div>
      </header>

      {persistence === "ephemeral" ? (
        <p className="admin-banner">
          Neste ambiente as alterações podem não permanecer. Peça para configurar GITHUB_TOKEN, GITHUB_REPO e
          ADMIN_PASSWORD na Vercel.
        </p>
      ) : null}
      {status ? <p className="admin-ok">{status}</p> : null}
      {error ? <p className="admin-error">{error}</p> : null}

      <section className="admin-split">
        <div>
          <h2>Categorias</h2>
          <ul className="admin-list">
            {data.categories.map((category) => (
              <li key={category}>
                <span>{category}</span>
                <button
                  type="button"
                  className="admin-link"
                  onClick={() => {
                    if (data.articles.some((article) => article.category === category)) {
                      setError("Há artigos nesta categoria. Mova-os antes de excluir.");
                      return;
                    }
                    const next = {
                      ...data,
                      categories: data.categories.filter((item) => item !== category),
                    };
                    setBlog(next);
                    void save(next);
                  }}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
          <div className="admin-row">
            <input
              placeholder="Nova categoria"
              value={categoryName}
              onChange={(event) => setCategoryName(event.target.value)}
            />
            <button
              type="button"
              className="btn btn-coral"
              onClick={() => {
                const name = categoryName.trim();
                if (!name || data.categories.includes(name)) return;
                const next = { ...data, categories: [...data.categories, name] };
                setBlog(next);
                setCategoryName("");
                void save(next);
              }}
            >
              Criar
            </button>
          </div>
        </div>

        <div>
          <div className="admin-row">
            <h2>Artigos</h2>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                const article = emptyArticle(data.categories[0] || "Geral");
                setBlog({ ...data, articles: [article, ...data.articles] });
                setArticleIndex(0);
              }}
            >
              Novo artigo
            </button>
          </div>
          <ul className="admin-list">
            {data.articles.map((article, index) => (
              <li key={`${article.slug}-${index}`}>
                <button type="button" className={index === articleIndex ? "active" : ""} onClick={() => setArticleIndex(index)}>
                  {article.title || "Artigo sem título"}
                </button>
              </li>
            ))}
          </ul>
          {selectedArticle ? (
            <div className="admin-stack">
              <label>
                Título
                <input value={selectedArticle.title} onChange={(event) => updateArticle({ title: event.target.value })} />
              </label>
              <label>
                Endereço do artigo
                <input
                  value={selectedArticle.slug}
                  onChange={(event) => updateArticle({ slug: event.target.value })}
                  placeholder="gerado automaticamente se ficar em branco"
                />
              </label>
              <label>
                Categoria
                <select
                  value={selectedArticle.category}
                  onChange={(event) => updateArticle({ category: event.target.value })}
                >
                  {data.categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Data
                <input
                  type="date"
                  value={selectedArticle.date}
                  onChange={(event) => updateArticle({ date: event.target.value })}
                />
              </label>
              <label>
                Resumo
                <textarea
                  rows={3}
                  value={selectedArticle.excerpt}
                  onChange={(event) => updateArticle({ excerpt: event.target.value })}
                />
              </label>
              <div className="admin-field">
                <span>Texto do artigo</span>
                <RichTextEditor
                  key={`${articleIndex}-${selectedArticle.slug}`}
                  value={selectedArticle.content}
                  onChange={(html) => updateArticle({ content: html })}
                />
              </div>
              <button
                type="button"
                className="admin-link"
                onClick={() => {
                  const articles = data.articles.filter((_, index) => index !== articleIndex);
                  setBlog({ ...data, articles });
                  setArticleIndex(0);
                }}
              >
                Excluir artigo
              </button>
            </div>
          ) : (
            <p className="lead">Nenhum artigo ainda.</p>
          )}
        </div>
      </section>
    </div>
  );
}
