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
      <section className="hero-photo">
        <div className="hero-photo-media">
          <Image
            src="/home-hero.png"
            alt="Bruna Kindlein, fundadora da Clínica PertenSer"
            fill
            priority
            sizes="100vw"
            className="hero-photo-image hero-photo-home"
          />
        </div>
        <div className="container">
          <div className="hero-photo-content">
            <p className="eyebrow">Sobre a PertenSer</p>
            <h1>Uma clínica criada para olhar além de um diagnóstico.</h1>
            <div className="lead" style={{ marginTop: 24 }}>
              <p>
                A PertenSer é uma clínica especializada em avaliação psicológica de adultos, com foco principal na investigação de TDAH e Transtorno do Espectro Autista (TEA).
              </p>
              <p>
                Nosso trabalho une rigor técnico e um olhar individualizado para compreender cada pessoa para além de sintomas isolados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Um diagnóstico pode trazer respostas. Mas uma boa avaliação precisa compreender a história por trás delas.</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>
                A PertenSer nasceu da ideia de que avaliar não é apenas confirmar ou descartar uma hipótese.
              </p>
              <p>
                Cada processo considera a história de vida, o funcionamento atual e diferentes possibilidades que possam explicar as dificuldades apresentadas.
              </p>
              <p>
                Por isso, além da hipótese inicial, também podem ser investigados diagnósticos diferenciais e possíveis condições associadas.
              </p>
            </div>
            <p className="quote">
              Nosso objetivo é transformar os resultados da avaliação em respostas claras e que façam sentido para a vida de cada pessoa.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <PortraitSlot
            src="/home-hero.png"
            alt="Bruna Kindlein, psicóloga e fundadora da Clínica PertenSer"
            className="portrait-sobre"
          />
          <div>
            <p className="eyebrow">Fundadora e responsável técnica</p>
            <h2>{site.responsible.shortName}</h2>
            <div className="lead" style={{ marginTop: 24 }}>
              <p>
                Psicóloga e especialista em Neuropsicologia, Bruna Kindlein é fundadora e responsável técnica pela Clínica PertenSer.
              </p>
              <p>
                Sua trajetória é marcada pelo trabalho com adultos e pela avaliação psicológica, especialmente na investigação de TEA e TDAH, além da experiência na supervisão de outros profissionais.
              </p>
              <p>
                A PertenSer nasceu dessa trajetória e da proposta de oferecer avaliações cuidadosas, individualizadas e tecnicamente fundamentadas.
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
          </div>
        </div>
      </section>

      <section className="section green">
        <div className="container">
          <div className="section-head">
            <h2>A PertenSer é uma clínica construída para cuidar de cada processo com atenção.</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              A clínica conta com uma equipe envolvida nos processos de avaliação, conduzidos com rigor técnico, supervisão e atenção às particularidades de cada caso.
            </p>
            <p className="quote light">Rigor para investigar. Clareza para orientar. Cuidado para compreender.</p>
          </div>
        </div>
      </section>

      <CTA
        title="Talvez o que você esteja buscando não seja apenas um diagnóstico, mas uma forma de compreender melhor a sua história."
        text="Conheça a avaliação psicológica da PertenSer e entenda como funciona o processo."
        support="Atendimento online para adultos em todo o Brasil."
        primary={{ href: "/avaliacao-psicologica", label: "Conheça a avaliação psicológica" }}
        secondary={{ href: teamMessage, label: "Falar com a equipe", external: true }}
      />
    </>
  );
}
