import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
import { pageFaqs, pageText } from "@/lib/site";
import { getContent } from "@/lib/store";

export const metadata: Metadata = {
  title: "TEA em adultos",
  description:
    "Avaliação psicológica para investigar a possibilidade de Transtorno do Espectro Autista (TEA) na vida adulta, de forma individualizada.",
};

export default async function TeaPage() {
  const { pages, site, processes } = await getContent();
  const t = (key: string) => pageText(pages, "tea", key);

  return (
    <>
      <section className="hero-photo">
        <div className="hero-photo-media">
          <Image
            src="/tea-hero.png"
            alt="Bruna Kindlein, psicóloga da Clínica PertenSer"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="hero-photo-image hero-photo-tea"
          />
        </div>
        <div className="container">
          <div className="hero-photo-content">
            <p className="eyebrow">{t("heroEyebrow")}</p>
            <h1>{t("heroTitle")}</h1>
            <p className="lead" style={{ marginTop: 24 }}>
              {t("heroLead")}
            </p>
            <div className="actions">
              <Button href="/avaliacao-psicologica">Quero conhecer a avaliação</Button>
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
            <p className="eyebrow">{t("evalEyebrow")}</p>
            <h2>{t("evalTitle")}</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>{t("evalLead1")}</p>
              <p>{t("evalLead2")}</p>
            </div>
            <p className="quote">{t("evalQuote")}</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{t("processEyebrow")}</p>
            <h2>{t("processTitle")}</h2>
          </div>
          <ProcessSteps steps={processes.tea} note={t("processNote")} />
        </div>
      </section>

      <section className="section">
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

      <Testimonials alt />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>{t("faqTitle")}</h2>
          </div>
          <FAQ items={pageFaqs(pages, "tea")} />
        </div>
      </section>

      <CTA title={t("ctaTitle")} text={t("ctaText")} support={t("ctaSupport")} />
    </>
  );
}
