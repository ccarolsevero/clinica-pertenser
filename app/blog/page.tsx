import type { Metadata } from "next";
import Image from "next/image";
import { BlogList } from "@/components/BlogList";
import { CTA } from "@/components/CTA";
import { getArticles, getCategories } from "@/lib/articles";
import { pageText, teamMessage } from "@/lib/site";
import { getContent } from "@/lib/store";

export async function generateMetadata(): Promise<Metadata> {
  const { pages } = await getContent();
  return {
    title: "Blog",
    description: pageText(pages, "blog", "metaDescription"),
  };
}

export default async function BlogPage() {
  const { pages, site } = await getContent();
  const t = (key: string) => pageText(pages, "blog", key);
  const articles = await getArticles();
  const categories = await getCategories();

  return (
    <>
      <section className="hero-photo">
        <div className="hero-photo-media">
          <Image
            src="/bruna-blog-hero.png"
            alt="Bruna Kindlein, psicóloga da Clínica PertenSer"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="hero-photo-image"
          />
        </div>
        <div className="container">
          <div className="hero-photo-content">
            <p className="eyebrow">{t("heroEyebrow")}</p>
            <h1>{t("heroTitle")}</h1>
            <div className="lead" style={{ marginTop: 24 }}>
              <p>{t("heroLead1")}</p>
              <p>{t("heroLead2")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>{t("listTitle")}</h2>
          </div>
          <BlogList articles={articles} categories={categories} />
        </div>
      </section>

      <CTA
        title={t("ctaTitle")}
        text={t("ctaText")}
        primary={{ href: "/avaliacao-psicologica", label: "Conheça a avaliação psicológica" }}
        secondary={{ href: teamMessage(site.whatsapp), label: "Falar com a equipe", external: true }}
      />
    </>
  );
}
