import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
import { pageFaqs, pageText, teamMessage } from "@/lib/site";
import { getContent } from "@/lib/store";

export const metadata: Metadata = {
  title: "Avaliação psicológica para adultos",
  description:
    "Avaliação psicológica online para adultos, com foco na investigação de TDAH, TEA e diagnósticos diferenciais. Atendimento em todo o Brasil.",
};

export default async function AvaliacaoPage() {
  const { pages, site, processes } = await getContent();
  const t = (key: string) => pageText(pages, "avaliacao", key);
  const team = teamMessage(site.whatsapp);

  return (
    <>
      <section className="hero-photo">
        <div className="hero-photo-media">
          <Image
            src="/avaliacao-hero-bruna-jaleco.png"
            alt="Bruna Kindlein, psicóloga responsável pela avaliação psicológica"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="hero-photo-image hero-photo-avaliacao"
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
              <Button href={team} external>
                Quero conhecer a avaliação
              </Button>
            </div>
            <p className="support">{t("heroSupport")}</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>{t("seekTitle")}</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>{t("seekLead1")}</p>
              <p>{t("seekLead2")}</p>
            </div>
            <p className="quote">{t("seekQuote")}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{t("considerEyebrow")}</p>
            <h2>{t("considerTitle")}</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              {t("considerLead")}
            </p>
          </div>
          <div className="cards">
            <article className="card quiet">
              <h3>{t("card1Title")}</h3>
              <p>{t("card1Text")}</p>
            </article>
            <article className="card quiet">
              <h3>{t("card2Title")}</h3>
              <p>{t("card2Text")}</p>
            </article>
            <article className="card quiet">
              <h3>{t("card3Title")}</h3>
              <p>{t("card3Text")}</p>
            </article>
            <article className="card quiet">
              <h3>{t("card4Title")}</h3>
              <p>{t("card4Text")}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section green">
        <div className="container">
          <div className="section-head">
            <h2>{t("hypothesisTitle")}</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>{t("hypothesisLead1")}</p>
              <p>{t("hypothesisLead2")}</p>
            </div>
            <p className="quote light">{t("hypothesisQuote")}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{t("processEyebrow")}</p>
            <h2>{t("processTitle")}</h2>
          </div>
          <ProcessSteps steps={processes.evaluation} note={t("processNote")} />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>{t("investigateTitle")}</h2>
          </div>
          <div className="cards">
            <article className="card">
              <h3>{t("tdahTitle")}</h3>
              <p>{t("tdahText")}</p>
              <Button href="/tdah-em-adultos" variant="secondary">
                Saiba mais sobre TDAH em adultos
              </Button>
            </article>
            <article className="card">
              <h3>{t("teaTitle")}</h3>
              <p>{t("teaText")}</p>
              <Button href="/tea-em-adultos" variant="secondary">
                Saiba mais sobre TEA em adultos
              </Button>
            </article>
          </div>
          <p className="lead" style={{ marginTop: 36 }}>
            {t("investigateNote")}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">{t("onlineEyebrow")}</p>
            <h2>{t("onlineTitle")}</h2>
          </div>
          <div className="lead">
            <p>{t("onlineText")}</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>{t("clinicTitle")}</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>{t("clinicLead1")}</p>
              <p>{t("clinicLead2")}</p>
            </div>
            <p className="signature">
              <strong>{site.responsible.name}</strong>
              {site.responsible.credentials}
              <br />
              {site.responsible.founder}
            </p>
            <div className="actions">
              <Button href="/sobre">Conheça a PertenSer</Button>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>{t("faqTitle")}</h2>
          </div>
          <FAQ items={pageFaqs(pages, "avaliacao")} />
        </div>
      </section>

      <CTA title={t("ctaTitle")} text={t("ctaText")} support={t("ctaSupport")} />
    </>
  );
}
