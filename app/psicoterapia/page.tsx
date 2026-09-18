import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
import { faqPageJsonLd, webPageJsonLd } from "@/lib/seo";
import { pageFaqs, pageText, whatsappUrl } from "@/lib/site";
import { getContent } from "@/lib/store";

const description =
  "Psicoterapia online para adultos, com acompanhamento individualizado de acordo com as necessidades de cada pessoa.";

export const metadata: Metadata = {
  title: "Psicoterapia para adultos",
  description,
  alternates: { canonical: "/psicoterapia" },
};

export default async function PsicoterapiaPage() {
  const { pages, site, processes } = await getContent();
  const t = (key: string) => pageText(pages, "psicoterapia", key);
  const faqs = pageFaqs(pages, "psicoterapia");

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: "Psicoterapia para adultos",
            description,
            path: "/psicoterapia",
          }),
          faqPageJsonLd(faqs),
        ]}
      />

      <section className="hero-photo" id="inicio">
        <div className="hero-photo-media">
          <Image
            src="/psicoterapia-hero.png"
            alt="Bruna Kindlein, psicóloga responsável pela psicoterapia"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="hero-photo-image hero-photo-psicoterapia"
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
              <Button
                href={whatsappUrl(site.whatsapp, "Olá, gostaria de saber mais sobre a psicoterapia da PertenSer.")}
                external
              >
                Quero saber mais
              </Button>
            </div>
            <p className="support">{t("heroSupport")}</p>
          </div>
        </div>
      </section>

      <section className="section alt" id="por-que-psicoterapia">
        <div className="container">
          <div className="section-head">
            <h2>{t("reasonTitle")}</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>{t("reasonLead1")}</p>
              <p>{t("reasonLead2")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="como-funciona">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{t("processEyebrow")}</p>
            <h2>{t("processTitle")}</h2>
          </div>
          <ProcessSteps steps={processes.therapy} />
        </div>
      </section>

      <section className="section alt" id="clinica">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{t("clinicEyebrow")}</p>
            <h2>{t("clinicTitle")}</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>{t("clinicLead")}</p>
            </div>
            <p className="signature">
              <strong>{site.responsible.name}</strong>
              {site.responsible.credentials}
              <br />
              {site.responsible.title}
            </p>
            <div className="actions">
              <Button href="/sobre">Conheça a PertenSer</Button>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section alt" id="perguntas-frequentes">
        <div className="container">
          <div className="section-head">
            <h2>{t("faqTitle")}</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTA title={t("ctaTitle")} text={t("ctaText")} />
    </>
  );
}
