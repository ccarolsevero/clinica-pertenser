import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { ProcessSteps } from "@/components/ProcessSteps";
import { evaluationProcess, teamMessage } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Avaliação psicológica para adultos",
  description:
    "Avaliação psicológica online para adultos, com foco na investigação de TDAH, TEA e diagnósticos diferenciais. Atendimento em todo o Brasil.",
};

const faqs = [
  {
    question: "Preciso de encaminhamento médico?",
    answer: "Não. A avaliação pode ser procurada por iniciativa própria.",
  },
  {
    question: "E se a hipótese de TDAH ou TEA não for confirmada?",
    answer:
      "A avaliação considera diferentes hipóteses para compreender o que melhor explica as questões apresentadas.",
  },
  {
    question: "Quanto tempo dura?",
    answer: "Em média, 8 sessões, podendo variar conforme cada caso.",
  },
  {
    question: "Vou receber um laudo?",
    answer:
      "Sim. Ao final, é realizada a devolutiva e entregue o laudo psicológico correspondente à avaliação.",
  },
  {
    question: "A avaliação é online?",
    answer: "Sim. A PertenSer atende adultos de todo o Brasil de forma online.",
  },
  {
    question: "Vocês atendem por convênio?",
    answer:
      "O atendimento é particular. Dependendo do plano, pode haver possibilidade de reembolso. A equipe fornece a documentação referente ao serviço realizado.",
  },
];

export default function AvaliacaoPage() {
  return (
    <>
      <section className="hero-photo">
        <div className="hero-photo-media">
          <Image
            src="/avaliacao-hero-bruna-jaleco.png"
            alt="Bruna Kindlein, psicóloga responsável pela avaliação psicológica"
            fill
            priority
            sizes="100vw"
            className="hero-photo-image hero-photo-avaliacao"
          />
        </div>
        <div className="container">
          <div className="hero-photo-content">
            <p className="eyebrow">Avaliação psicológica para adultos</p>
            <h1>Compreender o que acontece com você vai além de encontrar um diagnóstico.</h1>
            <div className="lead" style={{ marginTop: 24 }}>
              <p>
                A avaliação psicológica é um processo de investigação que integra diferentes informações para compreender aspectos cognitivos, emocionais e comportamentais.
              </p>
              <p>
                Na PertenSer, o foco está na avaliação de adultos, especialmente na investigação de TDAH, TEA e diagnósticos diferenciais.
              </p>
            </div>
            <div className="actions">
              <Button href={teamMessage} external>
                Quero conhecer a avaliação
              </Button>
            </div>
            <p className="support">Atendimento online para adultos em todo o Brasil.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Talvez você tenha chegado até aqui buscando respostas.</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>
                A avaliação pode ser procurada por adultos que têm dúvidas sobre o próprio funcionamento, suspeitam de TDAH ou autismo ou convivem com dificuldades que ainda não foram suficientemente compreendidas.
              </p>
              <p>Você não precisa ter certeza sobre uma hipótese antes de começar.</p>
            </div>
            <p className="quote">
              A avaliação existe justamente para investigar o que pode estar por trás dessas dificuldades.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">O que consideramos</p>
            <h2>Uma avaliação não se resume a uma lista de sintomas.</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Dificuldades semelhantes podem ter diferentes explicações. Por isso, a avaliação considera diferentes aspectos do desenvolvimento e do funcionamento de cada pessoa.
            </p>
          </div>
          <div className="cards">
            <article className="card quiet">
              <h3>Desenvolvimento e trajetória</h3>
              <p>Características e dificuldades observadas ao longo da vida.</p>
            </article>
            <article className="card quiet">
              <h3>Funcionamento atual</h3>
              <p>Aspectos cognitivos, emocionais e comportamentais presentes no cotidiano.</p>
            </article>
            <article className="card quiet">
              <h3>Hipótese inicial</h3>
              <p>Questões que motivaram a procura pela avaliação.</p>
            </article>
            <article className="card quiet">
              <h3>Diagnósticos diferenciais</h3>
              <p>Outras hipóteses e possíveis condições associadas relevantes para a compreensão do caso.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section green">
        <div className="container">
          <div className="section-head">
            <h2>A hipótese é o ponto de partida, não uma conclusão.</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>
                É comum iniciar uma avaliação a partir da suspeita de TDAH ou autismo. Essa hipótese orienta a investigação, mas não determina o resultado.
              </p>
              <p>
                O processo considera diferentes possibilidades para construir uma compreensão tecnicamente fundamentada de cada caso.
              </p>
            </div>
            <p className="quote light">
              Mais do que confirmar ou descartar um diagnóstico, buscamos construir respostas que façam sentido para a sua história.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">O processo</p>
            <h2>Como acontece a avaliação psicológica?</h2>
          </div>
          <ProcessSteps
            steps={evaluationProcess}
            note="Em média, o processo acontece ao longo de 8 sessões, podendo variar conforme as necessidades de cada caso."
          />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>O que podemos investigar?</h2>
          </div>
          <div className="cards">
            <article className="card">
              <h3>TDAH em adultos</h3>
              <p>
                Investigação psicológica de TDAH na vida adulta e de seus possíveis impactos no funcionamento cotidiano.
              </p>
              <Button href="/tdah-em-adultos" variant="secondary">
                Saiba mais sobre TDAH em adultos
              </Button>
            </article>
            <article className="card">
              <h3>TEA em adultos</h3>
              <p>
                Investigação psicológica de TEA na vida adulta, considerando desenvolvimento e funcionamento atual.
              </p>
              <Button href="/tea-em-adultos" variant="secondary">
                Saiba mais sobre TEA em adultos
              </Button>
            </article>
          </div>
          <p className="lead" style={{ marginTop: 36 }}>
            Embora TDAH e TEA estejam entre os principais motivos de procura pela PertenSer, outras hipóteses podem ser consideradas durante a avaliação quando forem relevantes para a compreensão do caso.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Onde você estiver</p>
            <h2>Avaliação psicológica online para adultos em todo o Brasil.</h2>
          </div>
          <div className="lead">
            <p>
              O processo é realizado online. Caso seja necessário algum procedimento complementar presencial, a pessoa será orientada durante a avaliação.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Cuidado na escuta e rigor na investigação.</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>
                A PertenSer é uma clínica especializada em avaliação psicológica de adultos, fundada e dirigida tecnicamente pela psicóloga Bruna Kindlein.
              </p>
              <p>
                Os processos são conduzidos de forma individualizada, com rigor técnico e participação da equipe da clínica.
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

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Dúvidas sobre a avaliação psicológica</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTA
        title="Você não precisa ter todas as respostas para começar."
        text="Se você tem dúvidas sobre seu funcionamento ou deseja investigar alguma hipótese, converse com a equipe da PertenSer para entender como funciona a avaliação psicológica e quais são os próximos passos."
        support="Atendimento online para adultos em todo o Brasil."
        showWhatsapp
      />
    </>
  );
}
