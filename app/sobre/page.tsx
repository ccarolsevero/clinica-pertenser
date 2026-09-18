import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { PortraitSlot } from "@/components/PortraitSlot";
import { webPageJsonLd } from "@/lib/seo";
import { pageText, teamMessage } from "@/lib/site";
import { getContent } from "@/lib/store";

const description =
  "A PertenSer é uma clínica especializada em avaliação psicológica de adultos, com foco principal na investigação de TDAH e TEA.";

export const metadata: Metadata = {
  title: "Sobre a PertenSer",
  description,
  alternates: { canonical: "/sobre" },
};

export default async function SobrePage() {
  const { pages, site } = await getContent();
  const t = (key: string) => pageText(pages, "sobre", key);

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: "Sobre a PertenSer",
          description,
          path: "/sobre",
        })}
      />

      <section className="page-hero" id="inicio">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">{t("heroEyebrow")}</p>
            <h1>{t("heroTitle")}</h1>
            <div className="lead" style={{ marginTop: 24 }}>
              <p>{t("heroLead1")}</p>
              <p>{t("heroLead2")}</p>
            </div>
          </div>
          <div className="hero-brand">
            <Image
              src="/logo-pertenser.png"
              alt="Clínica PertenSer"
              width={1798}
              height={992}
              sizes="(max-width: 980px) 70vw, 440px"
              quality={90}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section alt" id="fundadora">
        <div className="container split reverse">
          <PortraitSlot
            src="/bruna-sobre.png"
            alt="Bruna Kindlein, psicóloga e fundadora da Clínica PertenSer"
            className="portrait-sobre"
          />
          <div>
            <p className="eyebrow">Fundadora e responsável técnica</p>
            <h2>{site.responsible.shortName}</h2>
            <div className="lead" style={{ marginTop: 24 }}>
              <p>{t("founderLead1")}</p>
              <p>{t("founderLead2")}</p>
              <p>{t("founderLead3")}</p>
            </div>
            <p className="signature">
              <strong>{site.responsible.name}</strong>
              {site.responsible.credentials}
              <br />
              {site.responsible.title}
            </p>
          </div>
        </div>
      </section>

      <section className="section green" id="equipe">
        <div className="container">
          <div className="section-head">
            <h2>{t("teamTitle")}</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              {t("teamLead")}
            </p>
            <p className="quote light">{t("teamQuote")}</p>
          </div>
        </div>
      </section>

      <CTA
        title={t("ctaTitle")}
        text={t("ctaText")}
        support={t("ctaSupport")}
        primary={{ href: "/avaliacao-psicologica", label: "Conheça a avaliação psicológica" }}
        secondary={{ href: teamMessage(site.whatsapp), label: "Falar com a equipe", external: true }}
      />
    </>
  );
}
