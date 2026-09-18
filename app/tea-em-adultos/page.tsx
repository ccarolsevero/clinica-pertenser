import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
import { faqPageJsonLd, webPageJsonLd } from "@/lib/seo";
import { pageFaqs, pageText } from "@/lib/site";
import { getContent } from "@/lib/store";

const description =
  "Avaliação psicológica para investigar a possibilidade de Transtorno do Espectro Autista (TEA) na vida adulta, de forma individualizada.";

export const metadata: Metadata = {
  title: "TEA em adultos",
  description,
  alternates: { canonical: "/tea-em-adultos" },
};

export default async function TeaPage() {
  const { pages, site, processes } = await getContent();
  const t = (key: string) => pageText(pages, "tea", key);
  const faqs = pageFaqs(pages, "tea");

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: "TEA em adultos",
            description,
            path: "/tea-em-adultos",
          }),
          faqPageJsonLd(faqs),
        ]}
      />

      <section className="hero-photo" id="inicio">
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

      <section className="section alt" id="quando-buscar">
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

      <section className="section" id="como-e-a-avaliacao">
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

      <section className="section alt" id="como-funciona">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{t("processEyebrow")}</p>
            <h2>{t("processTitle")}</h2>
          </div>
          <ProcessSteps steps={processes.tea} note={t("processNote")} />
        </div>
      </section>

      <section className="section" id="clinica">
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

      <section className="section" id="perguntas-frequentes">
        <div className="container">
          <div className="section-head">
            <h2>{t("faqTitle")}</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTA title={t("ctaTitle")} text={t("ctaText")} support={t("ctaSupport")} />
    </>
  );
}
