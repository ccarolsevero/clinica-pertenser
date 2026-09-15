import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { ProcessSteps } from "@/components/ProcessSteps";
import { therapyProcess } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Psicoterapia para adultos",
  description:
    "Psicoterapia online para adultos, com acompanhamento individualizado de acordo com as necessidades de cada pessoa.",
};

const faqs = [
  {
    question: "A psicoterapia é online?",
    answer: "Sim. Os atendimentos são realizados online para adultos.",
  },
  {
    question: "Qual é a frequência das sessões?",
    answer:
      "A frequência é definida de acordo com as necessidades do acompanhamento.",
  },
  {
    question: "Quanto tempo dura a psicoterapia?",
    answer: "Não existe uma duração única. O tempo varia conforme cada processo.",
  },
  {
    question: "Vocês atendem por convênio?",
    answer:
      "O atendimento é particular. Dependendo do plano, pode haver possibilidade de reembolso.",
  },
];

export default function PsicoterapiaPage() {
  return (
    <>
      <section className="hero-photo">
        <div className="hero-photo-media">
          <Image
            src="/psicoterapia-hero.png"
            alt="Bruna Kindlein, psicóloga responsável pela psicoterapia"
            fill
            priority
            sizes="100vw"
            className="hero-photo-image hero-photo-psicoterapia"
          />
        </div>
        <div className="container">
          <div className="hero-photo-content">
            <p className="eyebrow">Psicoterapia para adultos</p>
            <h1>Um espaço de cuidado para o que você está vivendo.</h1>
            <p className="lead" style={{ marginTop: 24 }}>
              Psicoterapia online para adultos, com acompanhamento de acordo com as necessidades e objetivos de cada pessoa.
            </p>
            <div className="actions">
              <Button href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Olá, gostaria de saber mais sobre a psicoterapia da PertenSer.")}`} external>
                Quero saber mais
              </Button>
            </div>
            <p className="support">Atendimento online.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Cada pessoa chega à psicoterapia por uma razão diferente.</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>
                A psicoterapia pode ser buscada diante de dificuldades emocionais, conflitos, mudanças, questões nos relacionamentos ou do desejo de compreender melhor a si mesmo.
              </p>
              <p>O acompanhamento é construído a partir das questões e objetivos de cada pessoa.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">O processo</p>
            <h2>Como funciona a psicoterapia?</h2>
          </div>
          <ProcessSteps steps={therapyProcess} />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Clínica PertenSer</p>
            <h2>Um cuidado que considera a sua individualidade.</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>
                A PertenSer é uma clínica voltada ao cuidado psicológico de adultos, com um trabalho pautado pela escuta e pelo acompanhamento individualizado.
              </p>
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

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Perguntas frequentes</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTA
        title="Quer saber mais sobre a psicoterapia?"
        text="Converse com a equipe da PertenSer para esclarecer dúvidas e conhecer os próximos passos."
      />
    </>
  );
}
