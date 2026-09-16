import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { pageText, teamMessage } from "@/lib/site";
import { getContent } from "@/lib/store";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a equipe da PertenSer para saber mais sobre avaliação psicológica, psicoterapia e os próximos passos para o atendimento.",
};

export default async function ContatoPage() {
  const { pages, site } = await getContent();
  const t = (key: string) => pageText(pages, "contato", key);
  const team = teamMessage(site.whatsapp);

  return (
    <>
      <section className="hero-photo">
        <div className="hero-photo-media">
          <Image
            src="/contato-hero.png"
            alt="Bruna Kindlein, fundadora da Clínica PertenSer"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="hero-photo-image hero-photo-contato"
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
              <Button href={team} variant="coral" external>
                Falar pelo WhatsApp
              </Button>
            </div>
            <p className="support">{t("heroSupport")}</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>{t("listTitle")}</h2>
          </div>
          <div className="contact-grid">
            <article className="card">
              <p className="index">WhatsApp</p>
              <h3>{site.whatsappDisplay}</h3>
              <p>{t("whatsappText")}</p>
              <Button href={team} variant="coral" external>
                Iniciar conversa
              </Button>
            </article>
            <article className="card quiet">
              <p className="index">E-mail</p>
              <h3>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </h3>
              <p>{t("emailText")}</p>
            </article>
            <article className="card quiet">
              <p className="index">Instagram</p>
              <h3>
                <a href={site.instagramUrl} target="_blank" rel="noreferrer">
                  @{site.instagram}
                </a>
              </h3>
              <p>{t("instagramText")}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>{t("whereTitle")}</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              {t("whereLead")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
