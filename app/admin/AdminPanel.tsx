"use client";

import { useEffect, useMemo, useState } from "react";
import { RichTextEditor } from "@/components/RichTextEditor";
import type { Article, FaqItem, ProcessStep, SiteContent } from "@/lib/types";

type Tab = "clinica" | "paginas" | "blog" | "depoimentos";

const PAGE_NAMES: Record<string, string> = {
  home: "Início",
  blog: "Blog",
  avaliacao: "Avaliação psicológica",
  tdah: "TDAH em adultos",
  tea: "TEA em adultos",
  psicoterapia: "Psicoterapia",
  sobre: "Sobre",
  contato: "Contato",
};

const PROCESS_NAMES: Record<keyof SiteContent["processes"], string> = {
  evaluation: "Avaliação psicológica",
  tdah: "TDAH em adultos",
  tea: "TEA em adultos",
  therapy: "Psicoterapia",
};

function fieldLabel(key: string) {
  const labels: Record<string, string> = {
    heroEyebrow: "Linha acima do título",
    heroTitle: "Título principal",
    heroLead: "Texto de apoio",
    heroLead1: "Texto de apoio 1",
    heroLead2: "Texto de apoio 2",
    heroSupport: "Linha abaixo do botão",
    ctaTitle: "Título do convite final",
    ctaText: "Texto do convite final",
    ctaSupport: "Linha de apoio do convite",
    faqTitle: "Título das perguntas frequentes",
    metaDescription: "Descrição para busca",
  };
  return labels[key] || key.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase());
}

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
  const [tab, setTab] = useState<Tab>("blog");
  const [content, setContent] = useState<SiteContent | null>(null);
  const [pageKey, setPageKey] = useState("home");
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
        setContent(payload.data);
        setPersistence(payload.persistence);
      })
      .catch(() => setError("Não foi possível carregar o conteúdo."));
  }, []);

  const selectedArticle = content?.blog.articles[articleIndex];
  const pageFields = useMemo(() => {
    if (!content) return [];
    const page = content.pages[pageKey] || {};
    return Object.entries(page).filter(([key, value]) => key !== "faqs" && typeof value === "string") as [
      string,
      string,
    ][];
  }, [content, pageKey]);

  async function save(next = content) {
    if (!next) return;
    setSaving(true);
    setError("");
    setStatus("");
    const response = await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next),
    });
    const payload = (await response.json()) as { error?: string; data?: SiteContent; github?: string };
    setSaving(false);
    if (!response.ok) {
      setError(payload.error || "Não foi possível salvar.");
      return;
    }
    if (payload.data) setContent(payload.data);
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

  if (!content) {
    return (
      <div className="admin-shell">
        <p className="lead">{error || "Carregando painel..."}</p>
      </div>
    );
  }

  const data = content;
  const faqs = (data.pages[pageKey]?.faqs as FaqItem[] | undefined) || [];

  function updateSite<K extends keyof SiteContent["site"]>(key: K, value: SiteContent["site"][K]) {
    setContent({ ...data, site: { ...data.site, [key]: value } });
  }

  function updateResponsible(key: string, value: string) {
    setContent({
      ...data,
      site: { ...data.site, responsible: { ...data.site.responsible, [key]: value } },
    });
  }

  function updatePageField(key: string, value: unknown) {
    setContent({
      ...data,
      pages: {
        ...data.pages,
        [pageKey]: { ...data.pages[pageKey], [key]: value },
      },
    });
  }

  function updateArticle(patch: Partial<Article>) {
    const articles = data.blog.articles.map((article, index) =>
      index === articleIndex ? { ...article, ...patch } : article,
    );
    setContent({ ...data, blog: { ...data.blog, articles } });
  }

  function updateProcess(kind: keyof SiteContent["processes"], index: number, patch: Partial<ProcessStep>) {
    const steps = data.processes[kind].map((step, stepIndex) =>
      stepIndex === index ? { ...step, ...patch } : step,
    );
    setContent({ ...data, processes: { ...data.processes, [kind]: steps } });
  }

  return (
    <div className="admin-app">
      <header className="admin-top">
        <div>
          <p className="eyebrow">Painel PertenSer</p>
          <h1>Textos do site</h1>
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
          Neste ambiente as alterações podem não permanecer. Peça para configurar GITHUB_TOKEN, GITHUB_REPO e ADMIN_PASSWORD na Vercel.
        </p>
      ) : null}
      {status ? <p className="admin-ok">{status}</p> : null}
      {error ? <p className="admin-error">{error}</p> : null}

      <nav className="admin-tabs" aria-label="Seções do painel">
        {(
          [
            ["blog", "Blog e categorias"],
            ["paginas", "Textos das páginas"],
            ["clinica", "Clínica e contato"],
            ["depoimentos", "Avaliações"],
          ] as [Tab, string][]
        ).map(([id, label]) => (
          <button key={id} className={tab === id ? "active" : ""} type="button" onClick={() => setTab(id)}>
            {label}
          </button>
        ))}
      </nav>

      {tab === "clinica" ? (
        <section className="admin-grid">
          <label>
            Nome da clínica
            <input value={content.site.name} onChange={(event) => updateSite("name", event.target.value)} />
          </label>
          <label>
            Frase do rodapé
            <input value={content.site.tagline} onChange={(event) => updateSite("tagline", event.target.value)} />
          </label>
          <label>
            WhatsApp (só números, com DDI)
            <input value={content.site.whatsapp} onChange={(event) => updateSite("whatsapp", event.target.value)} />
          </label>
          <label>
            WhatsApp para exibir
            <input
              value={content.site.whatsappDisplay}
              onChange={(event) => updateSite("whatsappDisplay", event.target.value)}
            />
          </label>
          <label>
            E-mail
            <input value={content.site.email} onChange={(event) => updateSite("email", event.target.value)} />
          </label>
          <label>
            Instagram
            <input value={content.site.instagram} onChange={(event) => updateSite("instagram", event.target.value)} />
          </label>
          <label>
            Link do Instagram
            <input
              value={content.site.instagramUrl}
              onChange={(event) => updateSite("instagramUrl", event.target.value)}
            />
          </label>
          <label>
            Nome completo
            <input
              value={content.site.responsible.name}
              onChange={(event) => updateResponsible("name", event.target.value)}
            />
          </label>
          <label>
            Nome curto
            <input
              value={content.site.responsible.shortName}
              onChange={(event) => updateResponsible("shortName", event.target.value)}
            />
          </label>
          <label>
            Credencial
            <input
              value={content.site.responsible.credentials}
              onChange={(event) => updateResponsible("credentials", event.target.value)}
            />
          </label>
          <label>
            Função
            <input
              value={content.site.responsible.founder}
              onChange={(event) => updateResponsible("founder", event.target.value)}
            />
          </label>
          <label>
            Assinatura longa
            <input
              value={content.site.responsible.title}
              onChange={(event) => updateResponsible("title", event.target.value)}
            />
          </label>
        </section>
      ) : null}

      {tab === "paginas" ? (
        <section>
          <div className="admin-row">
            <label>
              Página
              <select value={pageKey} onChange={(event) => setPageKey(event.target.value)}>
                {Object.keys(content.pages).map((key) => (
                  <option key={key} value={key}>
                    {PAGE_NAMES[key] || key}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="admin-stack">
            {pageFields.map(([key, value]) => (
              <label key={key}>
                {fieldLabel(key)}
                <textarea
                  rows={value.length > 90 ? 5 : 2}
                  value={value}
                  onChange={(event) => updatePageField(key, event.target.value)}
                />
              </label>
            ))}
          </div>
          {faqs.length ? (
            <div className="admin-block">
              <h2>Perguntas frequentes</h2>
              {faqs.map((item, index) => (
                <div className="admin-faq" key={`${item.question}-${index}`}>
                  <input
                    value={item.question}
                    onChange={(event) => {
                      const next = faqs.map((faq, faqIndex) =>
                        faqIndex === index ? { ...faq, question: event.target.value } : faq,
                      );
                      updatePageField("faqs", next);
                    }}
                  />
                  <textarea
                    rows={3}
                    value={item.answer}
                    onChange={(event) => {
                      const next = faqs.map((faq, faqIndex) =>
                        faqIndex === index ? { ...faq, answer: event.target.value } : faq,
                      );
                      updatePageField("faqs", next);
                    }}
                  />
                  <button
                    type="button"
                    className="admin-link"
                    onClick={() => updatePageField("faqs", faqs.filter((_, faqIndex) => faqIndex !== index))}
                  >
                    Remover
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => updatePageField("faqs", [...faqs, { question: "", answer: "" }])}
              >
                Adicionar pergunta
              </button>
            </div>
          ) : null}

          <div className="admin-block">
            <h2>Etapas</h2>
            {(Object.keys(PROCESS_NAMES) as Array<keyof SiteContent["processes"]>).map((kind) => (
              <div key={kind} className="admin-process">
                <h3>{PROCESS_NAMES[kind]}</h3>
                {content.processes[kind].map((step, index) => (
                  <div className="admin-faq" key={`${kind}-${index}`}>
                    <input
                      value={step.title}
                      onChange={(event) => updateProcess(kind, index, { title: event.target.value })}
                    />
                    <textarea
                      rows={3}
                      value={step.text}
                      onChange={(event) => updateProcess(kind, index, { text: event.target.value })}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {tab === "blog" ? (
        <section className="admin-split">
          <div>
            <h2>Categorias</h2>
            <ul className="admin-list">
              {content.blog.categories.map((category) => (
                <li key={category}>
                  <span>{category}</span>
                  <button
                    type="button"
                    className="admin-link"
                    onClick={() => {
                      if (content.blog.articles.some((article) => article.category === category)) {
                        setError("Há artigos nesta categoria. Mova-os antes de excluir.");
                        return;
                      }
                      const next = {
                        ...content,
                        blog: {
                          ...content.blog,
                          categories: content.blog.categories.filter((item) => item !== category),
                        },
                      };
                      setContent(next);
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
                  if (!name || content.blog.categories.includes(name)) return;
                  const next = {
                    ...content,
                    blog: { ...content.blog, categories: [...content.blog.categories, name] },
                  };
                  setContent(next);
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
                  const article = emptyArticle(content.blog.categories[0] || "Geral");
                  setContent({
                    ...content,
                    blog: { ...content.blog, articles: [article, ...content.blog.articles] },
                  });
                  setArticleIndex(0);
                }}
              >
                Novo artigo
              </button>
            </div>
            <ul className="admin-list">
              {content.blog.articles.map((article, index) => (
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
                    {content.blog.categories.map((category) => (
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
                    const articles = content.blog.articles.filter((_, index) => index !== articleIndex);
                    setContent({ ...content, blog: { ...content.blog, articles } });
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
      ) : null}

      {tab === "depoimentos" ? (
        <section className="admin-stack">
          {content.testimonials.map((text, index) => (
            <label key={index}>
              Avaliação {index + 1}
              <textarea
                rows={5}
                value={text}
                onChange={(event) => {
                  const testimonials = content.testimonials.map((item, itemIndex) =>
                    itemIndex === index ? event.target.value : item,
                  );
                  setContent({ ...content, testimonials });
                }}
              />
              <button
                type="button"
                className="admin-link"
                onClick={() =>
                  setContent({
                    ...content,
                    testimonials: content.testimonials.filter((_, itemIndex) => itemIndex !== index),
                  })
                }
              >
                Remover
              </button>
            </label>
          ))}
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => setContent({ ...content, testimonials: [...content.testimonials, ""] })}
          >
            Adicionar avaliação
          </button>
        </section>
      ) : null}
    </div>
  );
}
