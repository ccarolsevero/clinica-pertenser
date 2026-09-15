import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { PortraitSlot } from "@/components/PortraitSlot";
import { teamMessage } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre a PertenSer",
  description:
    "A PertenSer é uma clínica especializada em avaliação psicológica de adultos, com foco principal na investigação de TDAH e TEA.",
};

export default function SobrePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Sobre a PertenSer</p>
            <h1>Uma clínica criada para olhar além de um diagnóstico.</h1>
            <div className="lead" style={{ marginTop: 24 }}>
              <p>
                A PertenSer é uma clínica especializada em avaliação psicológica de adultos, com foco na investigação de TDAH e Transtorno do Espectro Autista (TEA).
              </p>
              <p>O trabalho une rigor técnico, escuta e um olhar individualizado para cada caso.</p>
            </div>
          </div>
          <div className="hero-brand">
            <Image
              src="/logo-pertenser.png"
              alt="Clínica PertenSer"
              width={899}
              height={496}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section alt">
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
              <p>
                Bruna Kindlein é psicóloga, pós-graduada em Neuropsicologia, fundadora e responsável técnica da Clínica PertenSer.
              </p>
              <p>
                Sua atuação é voltada ao trabalho com adultos e à avaliação psicológica, especialmente na investigação de TDAH e TEA. Também possui experiência na supervisão de outros profissionais.
              </p>
              <p>
                A PertenSer nasceu dessa trajetória e da proposta de oferecer um trabalho tecnicamente fundamentado, cuidadoso e próximo.
              </p>
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

      <section className="section green">
        <div className="container">
          <div className="section-head">
            <h2>Um trabalho construído em equipe.</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              A PertenSer conta com uma equipe envolvida nos processos da clínica, com acompanhamento da responsável técnica e cuidado em cada etapa do atendimento.
            </p>
            <p className="quote light">Rigor para investigar. Clareza para orientar. Cuidado para compreender.</p>
          </div>
        </div>
      </section>

      <CTA
        title="Conheça o trabalho da PertenSer."
        text="Saiba mais sobre a avaliação psicológica ou converse com a equipe para esclarecer suas dúvidas."
        support="Atendimento online para adultos em todo o Brasil."
        primary={{ href: "/avaliacao-psicologica", label: "Conheça a avaliação psicológica" }}
        secondary={{ href: teamMessage, label: "Falar com a equipe", external: true }}
      />
    </>
  );
}
