import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { ProcessSteps } from "@/components/ProcessSteps";
import { tdahProcess } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "TDAH em adultos",
  description:
    "Avaliação psicológica para investigar a possibilidade de TDAH na vida adulta, considerando história, funcionamento e diagnósticos diferenciais.",
};

const faqs = [
  {
    question: "Preciso ter certeza de que tenho TDAH?",
    answer: "Não. A avaliação existe justamente para investigar essa possibilidade.",
  },
  {
    question: "E se a hipótese de TDAH não for confirmada?",
    answer:
      "A avaliação considera outras hipóteses que possam contribuir para a compreensão das dificuldades apresentadas.",
  },
  {
    question: "A avaliação é online?",
    answer:
      "Sim. A PertenSer realiza avaliação psicológica online para adultos em todo o Brasil.",
  },
  {
    question: "Quanto tempo dura?",
    answer: "Em média, 8 sessões, podendo variar conforme cada caso.",
  },
  {
    question: "Recebo um laudo?",
    answer:
      "Sim. Ao final, é realizada a devolutiva e entregue o laudo psicológico correspondente à avaliação.",
  },
];

export default function TdahPage() {
  return (
    <>
      <section className="hero-photo">
        <div className="hero-photo-media">
          <Image
            src="/tea-tdah-hero.png"
            alt="Bruna Kindlein, psicóloga da Clínica PertenSer"
            fill
            priority
            sizes="100vw"
            className="hero-photo-image hero-photo-tea-tdah"
          />
        </div>
        <div className="container">
          <div className="hero-photo-content">
            <p className="eyebrow">TDAH em adultos</p>
            <h1>Investigar a possibilidade de TDAH é também compreender a sua história.</h1>
            <p className="lead" style={{ marginTop: 24 }}>
              A avaliação psicológica permite investigar a hipótese de TDAH na vida adulta considerando suas dificuldades, sua história de vida e seu funcionamento de forma ampla.
            </p>
            <div className="actions">
              <Button href="/avaliacao-psicologica">Quero conhecer a avaliação</Button>
            </div>
            <p className="support">Avaliação psicológica online para adultos em todo o Brasil.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Talvez algumas dificuldades tenham acompanhado você por muito tempo sem uma explicação clara.</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>
                Para algumas pessoas, a possibilidade de TDAH surge apenas na vida adulta, quando começam a buscar respostas para dificuldades que ainda não foram suficientemente compreendidas.
              </p>
              <p>Você não precisa ter certeza de que é TDAH para procurar uma avaliação.</p>
            </div>
            <p className="quote">A suspeita é um ponto de partida para investigar — não uma conclusão.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Avaliação de TDAH em adultos</p>
            <h2>Uma avaliação olha além da hipótese inicial.</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>
                Na investigação de TDAH em adultos, são considerados aspectos como atenção, organização, planejamento, gestão do tempo, impulsividade e funcionamento executivo, além dos impactos dessas dificuldades no cotidiano.
              </p>
              <p>
                A avaliação também considera o desenvolvimento ao longo da vida, diagnósticos diferenciais e possíveis condições associadas.
              </p>
            </div>
            <p className="quote">
              O objetivo não é confirmar TDAH a qualquer custo, mas compreender o que melhor explica as dificuldades que você vivencia.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">O processo</p>
            <h2>Como acontece a avaliação?</h2>
          </div>
          <ProcessSteps
            steps={tdahProcess}
            note="Em média, o processo acontece ao longo de 8 sessões, podendo variar conforme cada caso."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Uma avaliação cuidadosa para uma compreensão mais ampla.</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>
                A PertenSer é uma clínica especializada em avaliação psicológica de adultos, com foco principal na investigação de TDAH e Transtorno do Espectro Autista (TEA).
              </p>
              <p>
                Os processos são conduzidos com rigor técnico, supervisão e atenção às particularidades de cada história.
              </p>
            </div>
            <p className="signature">
              <strong>{site.responsible.name}</strong>
              {site.responsible.credentials}
              <br />
              Fundadora e responsável técnica
            </p>
            <div className="actions">
              <Button href="/sobre">Conheça a PertenSer</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Dúvidas sobre a avaliação de TDAH em adultos</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTA
        title="Quer compreender melhor o que pode estar por trás das suas dificuldades?"
        text="Se você deseja investigar a possibilidade de TDAH, converse com a equipe da PertenSer para entender como funciona a avaliação e quais são os próximos passos."
        support="Avaliação psicológica online para adultos em todo o Brasil."
        showWhatsapp
      />
    </>
  );
}
