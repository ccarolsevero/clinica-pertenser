import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { ProcessSteps } from "@/components/ProcessSteps";
import { teaProcess } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "TEA em adultos",
  description:
    "Avaliação psicológica para investigar a possibilidade de Transtorno do Espectro Autista (TEA) na vida adulta, de forma individualizada.",
};

const faqs = [
  {
    question: "Preciso ter certeza de que sou autista para procurar uma avaliação?",
    answer:
      "Não. A avaliação existe justamente para investigar essa hipótese e compreender o que pode explicar as questões que motivaram a procura.",
  },
  {
    question: "E se a avaliação não confirmar TEA?",
    answer:
      "Mesmo quando a hipótese inicial não é confirmada, os resultados podem contribuir para uma melhor compreensão do seu funcionamento e orientar os próximos cuidados.",
  },
  {
    question: "Outras possibilidades também são consideradas?",
    answer:
      "Sim. Diagnósticos diferenciais e possíveis condições associadas podem ser considerados quando relevantes para a compreensão do caso.",
  },
  {
    question: "A avaliação é online?",
    answer:
      "Sim. O processo é realizado online para adultos de diferentes regiões do Brasil. Caso seja necessário algum procedimento complementar presencial, você será orientado.",
  },
  {
    question: "Quanto tempo dura?",
    answer:
      "A duração varia conforme cada caso. Em média, o processo acontece ao longo de 8 sessões.",
  },
  {
    question: "Recebo um laudo?",
    answer:
      "Sim. Ao final, é realizada uma devolutiva e entregue o laudo psicológico correspondente à avaliação realizada.",
  },
];

export default function TeaPage() {
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
            <p className="eyebrow">TEA em adultos</p>
            <h1>Algumas respostas sobre o presente podem começar pela compreensão da sua história.</h1>
            <p className="lead" style={{ marginTop: 24 }}>
              A avaliação psicológica permite investigar a possibilidade de Transtorno do Espectro Autista (TEA) na vida adulta, considerando sua trajetória, seu funcionamento e as dificuldades vivenciadas no cotidiano.
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
            <h2>A possibilidade de autismo pode surgir somente na vida adulta.</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>
                Algumas pessoas chegam à vida adulta com dúvidas sobre o próprio funcionamento ou com dificuldades que nunca foram suficientemente compreendidas.
              </p>
              <p>
                Quando surge a hipótese de TEA, a avaliação psicológica permite investigar essa possibilidade de forma individualizada.
              </p>
            </div>
            <p className="quote">
              Você não precisa chegar com uma resposta. A avaliação é justamente um espaço de investigação.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Avaliação de TEA em adultos</p>
            <h2>A avaliação considera mais do que a hipótese inicial.</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>
                Na PertenSer, o processo considera a história de vida e diferentes aspectos do funcionamento cognitivo, emocional e comportamental.
              </p>
              <p>A investigação pode envolver entrevistas, instrumentos psicológicos e informações complementares.</p>
              <p>
                Além da hipótese de TEA, diagnósticos diferenciais e possíveis condições associadas também podem ser considerados quando relevantes para o caso.
              </p>
            </div>
            <p className="quote">
              O objetivo é compreender o que melhor explica as questões que levaram você a buscar a avaliação.
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
            steps={teaProcess}
            note="A duração pode variar de acordo com cada caso. Em média, o processo acontece ao longo de 8 sessões."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Uma avaliação cuidadosa para compreender cada história em sua singularidade.</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>
                A PertenSer é uma clínica especializada em avaliação psicológica de adultos, com foco principal na investigação de TEA e TDAH.
              </p>
              <p>
                Os processos contam com uma equipe e são conduzidos com rigor técnico, supervisão e atenção às particularidades de cada pessoa.
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

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Dúvidas sobre a avaliação de TEA em adultos</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTA
        title="Quer investigar a possibilidade de TEA na vida adulta?"
        text="Converse com a equipe da PertenSer para entender como funciona a avaliação psicológica e quais são os próximos passos."
        support="Avaliação psicológica online para adultos em todo o Brasil."
        showWhatsapp
      />
    </>
  );
}
