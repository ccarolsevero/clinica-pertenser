import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { teamMessage } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a equipe da PertenSer para saber mais sobre avaliação psicológica, psicoterapia e os próximos passos para o atendimento.",
};

export default function ContatoPage() {
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
            <p className="eyebrow">Fale com a PertenSer</p>
            <h1>Vamos conversar sobre o que você está buscando?</h1>
            <p className="lead" style={{ marginTop: 24 }}>
              Entre em contato com a equipe da PertenSer para saber mais sobre avaliação psicológica, psicoterapia e os próximos passos para o atendimento.
            </p>
            <div className="actions">
              <Button href={teamMessage} variant="coral" external>
                Falar pelo WhatsApp
              </Button>
            </div>
            <p className="support">Atendimento online para adultos.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Entre em contato</h2>
          </div>
          <div className="contact-grid">
            <article className="card">
              <p className="index">WhatsApp</p>
              <h3>{site.whatsappDisplay}</h3>
              <p>Para informações e agendamento.</p>
              <Button href={teamMessage} variant="coral" external>
                Iniciar conversa
              </Button>
            </article>
            <article className="card quiet">
              <p className="index">E-mail</p>
              <h3>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </h3>
              <p>Envie uma mensagem e retornaremos o contato.</p>
            </article>
            <article className="card quiet">
              <p className="index">Instagram</p>
              <h3>
                <a href={site.instagramUrl} target="_blank" rel="noreferrer">
                  @{site.instagram}
                </a>
              </h3>
              <p>Acompanhe os conteúdos da clínica.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Onde você estiver.</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              A PertenSer realiza avaliação psicológica online para adultos de diferentes regiões do Brasil.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
