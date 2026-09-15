import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
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
    answer: "Não. A avaliação existe justamente para investigar essa possibilidade.",
  },
  {
    question: "E se a hipótese de TEA não for confirmada?",
    answer:
      "A avaliação considera outras hipóteses que possam contribuir para a compreensão das questões apresentadas.",
  },
  {
    question: "Outras possibilidades também são consideradas?",
    answer:
      "Sim. Diagnósticos diferenciais e possíveis condições associadas podem ser considerados durante a avaliação.",
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

export default function TeaPage() {
  return (
    <>
      <section className="hero-photo">
        <div className="hero-photo-media">
          <Image
            src="/tea-hero.png"
            alt="Bruna Kindlein, psicóloga da Clínica PertenSer"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="hero-photo-image hero-photo-tea"
          />
        </div>
        <div className="container">
          <div className="hero-photo-content">
            <p className="eyebrow">TEA em adultos</p>
            <h1>Algumas respostas sobre o presente podem começar pela compreensão da sua história.</h1>
            <p className="lead" style={{ marginTop: 24 }}>
              A avaliação psicológica permite investigar a possibilidade de Transtorno do Espectro Autista (TEA) na vida adulta, considerando o desenvolvimento, as formas de interação e comunicação, o funcionamento atual e diferentes experiências ao longo da vida.
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
                Na investigação de TEA em adultos, são considerados aspectos do desenvolvimento, comunicação e interação social, padrões de comportamento e interesses, sensibilidades e formas de adaptação desenvolvidas ao longo da vida.
              </p>
              <p>
                A avaliação também considera aspectos emocionais e cognitivos, diagnósticos diferenciais e possíveis condições associadas.
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
            note="Em média, o processo acontece ao longo de 8 sessões, podendo variar conforme cada caso."
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

      <Testimonials alt />

      <section className="section">
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
      />
    </>
  );
}
