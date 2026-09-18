import Image from "next/image";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { PortraitSlot } from "@/components/PortraitSlot";
import { getLatestArticles } from "@/lib/articles";
import { webPageJsonLd } from "@/lib/seo";
import { pageText, teamMessage } from "@/lib/site";
import { getContent } from "@/lib/store";

export default async function HomePage() {
  const content = await getContent();
  const { site, pages } = content;
  const t = (key: string) => pageText(pages, "home", key);
  const latest = await getLatestArticles(3);
  const team = teamMessage(site.whatsapp);

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: `${site.name} | Avaliação psicológica de adultos`,
          description:
            "Avaliação psicológica online para adultos, com foco na investigação de TDAH, TEA e diagnósticos diferenciais.",
          path: "/",
        })}
      />

      <section className="hero-photo" id="inicio">
        <div className="hero-photo-media">
          <Image
            src="/home-hero.png"
            alt="Bruna Kindlein, fundadora da Clínica PertenSer"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="hero-photo-image hero-photo-home"
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
            <div className="actions">
              <Button href="/avaliacao-psicologica">Conheça a avaliação psicológica</Button>
              <Button href={team} variant="secondary" external>
                Falar com a equipe
              </Button>
            </div>
            <p className="support">{t("heroSupport")}</p>
          </div>
        </div>
      </section>

      <section className="section alt" id="servicos">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{t("helpEyebrow")}</p>
            <h2>{t("helpTitle")}</h2>
          </div>
          <div className="cards">
            <article className="card">
              <h3>{t("evalTitle")}</h3>
              <p>{t("evalText")}</p>
              <Button href="/avaliacao-psicologica" variant="secondary">
                Conheça a avaliação psicológica
              </Button>
            </article>
            <article className="card">
              <h3>{t("therapyTitle")}</h3>
              <p>{t("therapyText")}</p>
              <Button href="/psicoterapia" variant="secondary">
                Conheça a psicoterapia
              </Button>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="sobre">
        <div className="container split">
          <div>
            <p className="eyebrow">{t("aboutEyebrow")}</p>
            <h2>{t("aboutTitle")}</h2>
          </div>
          <div>
            <div className="lead">
              <p>{t("aboutLead1")}</p>
              <p>{t("aboutLead2")}</p>
            </div>
            <div className="actions">
              <Button href="/sobre">Conheça a PertenSer</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section green" id="como-trabalhamos">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow light">{t("workEyebrow")}</p>
            <h2>{t("workTitle")}</h2>
          </div>
          <div className="lead">
            <p>{t("workLead1")}</p>
            <p>{t("workLead2")}</p>
            <p>{t("workLead3")}</p>
          </div>
          <p className="quote light">{t("workQuote")}</p>
          <div className="actions">
            <Button href="/avaliacao-psicologica#como-funciona" variant="light">
              Entenda como funciona a avaliação
            </Button>
          </div>
        </div>
      </section>

      <section className="section" id="fundadora">
        <div className="container split reverse">
          <PortraitSlot
            src="/bruna-kindlein.png"
            alt="Bruna Kindlein, psicóloga e fundadora da Clínica PertenSer"
          />
          <div>
            <p className="eyebrow">Fundadora e responsável técnica</p>
            <h2>{site.responsible.shortName}</h2>
            <div className="lead" style={{ marginTop: 24 }}>
              <p>{t("founderLead1")}</p>
              <p>{t("founderLead2")}</p>
            </div>
            <p className="signature">
              <strong>{site.responsible.name}</strong>
              {site.responsible.credentials}
              <br />
              {site.responsible.founder}
            </p>
            <div className="actions">
              <Button href="/sobre#fundadora">Conheça a PertenSer</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt" id="blog">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{t("blogEyebrow")}</p>
            <h2>{t("blogTitle")}</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              {t("blogLead")}
            </p>
          </div>
          <div className="article-grid">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="actions">
            <Button href="/blog" variant="secondary">
              Ver todos os conteúdos
            </Button>
          </div>
        </div>
      </section>

      <CTA title={t("ctaTitle")} text={t("ctaText")} support={t("ctaSupport")} />
    </>
  );
}
