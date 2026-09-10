import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Psicoterapia para adultos",
  description:
    "Psicoterapia online para adultos, com acompanhamento individualizado de acordo com as necessidades de cada pessoa.",
};

export default function PsicoterapiaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Psicoterapia para adultos</p>
          <h1>Um espaço de cuidado para o que você está vivendo.</h1>
          <p className="lead" style={{ marginTop: 24 }}>
            Psicoterapia online para adultos, com acompanhamento individualizado de acordo com suas necessidades e objetivos.
          </p>
          <div className="actions">
            <Button href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Olá, gostaria de saber mais sobre a psicoterapia da PertenSer.")}`} external>
              Quero saber mais
            </Button>
          </div>
          <p className="support">Atendimento online.</p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Cada pessoa chega à psicoterapia por uma razão diferente.</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>A história, o momento de vida e as necessidades de cada pessoa são particulares.</p>
              <p>
                Por isso, na PertenSer, o acompanhamento é individualizado e considera as questões que levaram você a buscar atendimento e os objetivos construídos ao longo do processo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Clínica PertenSer</p>
            <h2>Um cuidado que considera a sua individualidade.</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>
                A PertenSer é uma clínica voltada ao atendimento psicológico de adultos, oferecendo psicoterapia e avaliação psicológica.
              </p>
              <p>
                Fundada pela psicóloga e especialista em Neuropsicologia Bruna Kindlein, a clínica tem como princípio um olhar cuidadoso e individualizado para cada pessoa.
              </p>
            </div>
            <p className="signature">
              <strong>{site.responsible.name}</strong>
              {site.responsible.role}
              <br />
              {site.responsible.specialty}
              <br />
              {site.responsible.title}
            </p>
            <div className="actions">
              <Button href="/sobre">Conheça a PertenSer</Button>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Quer saber mais sobre a psicoterapia?"
        text="Converse com a equipe da PertenSer para receber mais informações sobre o atendimento e entender os próximos passos."
        showWhatsapp
      />
    </>
  );
}
