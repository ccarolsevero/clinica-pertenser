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
    answer:
      "Não. Você pode procurar a avaliação por iniciativa própria caso tenha dúvidas sobre seu funcionamento ou queira investigar alguma hipótese.",
  },
  {
    question: "E se a avaliação não confirmar TDAH ou TEA?",
    answer:
      "O objetivo é compreender o que melhor explica as dificuldades apresentadas. Mesmo quando a hipótese inicial não é confirmada, os resultados podem ajudar na compreensão do seu funcionamento e orientar os próximos cuidados.",
  },
  {
    question: "Quanto tempo dura a avaliação?",
    answer:
      "A duração pode variar conforme cada caso. Em média, o processo acontece ao longo de 8 sessões.",
  },
  {
    question: "Vou receber um laudo?",
    answer:
      "Sim. Ao final, é realizada uma devolutiva e entregue o laudo psicológico correspondente à avaliação realizada.",
  },
  {
    question: "A avaliação é online?",
    answer:
      "Sim. O processo é realizado online. Caso seja necessário algum procedimento complementar presencial, você será orientado.",
  },
  {
    question: "Vocês atendem por convênio?",
    answer:
      "Não trabalhamos diretamente com convênios. Dependendo do seu plano, pode existir a possibilidade de solicitar reembolso. A equipe pode fornecer a documentação referente ao serviço realizado para que você consulte essa possibilidade junto ao seu convênio.",
  },
];

export default function AvaliacaoPage() {
  return (
    <>
      <section className="hero-photo">
        <Image
          src="/avaliacao-hero-aplicacao.png"
          alt="Aplicação de avaliação psicológica com instrumento e escuta"
          fill
          priority
          sizes="100vw"
          className="hero-photo-image"
        />
        <div className="container">
          <div className="hero-photo-content">
            <p className="eyebrow">Avaliação psicológica para adultos</p>
            <h1>Compreender o que acontece com você vai além de encontrar um diagnóstico.</h1>
            <div className="lead" style={{ marginTop: 24 }}>
              <p>
                A avaliação psicológica é um processo de investigação que considera sua história, seu funcionamento e as dificuldades que você vivencia.
              </p>
              <p>
                Na PertenSer, o foco principal é a investigação de TDAH e Transtorno do Espectro Autista (TEA) em adultos, considerando também diagnósticos diferenciais e possíveis condições associadas.
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
              Dificuldades semelhantes podem ter explicações diferentes. Por isso, o processo considera diferentes aspectos da sua história e do seu funcionamento.
            </p>
          </div>
          <div className="cards">
            <article className="card quiet">
              <p className="index">História</p>
              <h3>História de vida</h3>
              <p>Características, experiências e dificuldades presentes ao longo da sua trajetória.</p>
            </article>
            <article className="card quiet">
              <p className="index">Presente</p>
              <h3>Funcionamento atual</h3>
              <p>Aspectos cognitivos, emocionais e comportamentais e seus impactos no cotidiano.</p>
            </article>
            <article className="card quiet">
              <p className="index">Hipótese</p>
              <h3>Hipótese inicial</h3>
              <p>Investigação das questões que motivaram a procura, especialmente suspeitas de TDAH e TEA.</p>
            </article>
            <article className="card quiet">
              <p className="index">Amplitude</p>
              <h3>Outras possibilidades</h3>
              <p>Diagnósticos diferenciais e possíveis condições associadas que possam contribuir para a compreensão do caso.</p>
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
                É comum chegar à avaliação com a suspeita de TDAH ou autismo. Essa hipótese será investigada, mas não determina o resultado.
              </p>
              <p>
                Na PertenSer, buscamos compreender o que melhor explica as dificuldades apresentadas, considerando as diferentes informações reunidas ao longo do processo.
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
            note="Cada avaliação é individualizada e sua duração pode variar. Em média, o processo acontece ao longo de 8 sessões."
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
              <p className="index">Foco</p>
              <h3>TDAH em adultos</h3>
              <p>
                Avaliação para adultos que desejam investigar a possibilidade de TDAH e compreender melhor aspectos do seu funcionamento e seus impactos no cotidiano.
              </p>
              <Button href="/tdah-em-adultos" variant="secondary">
                TDAH em adultos
              </Button>
            </article>
            <article className="card">
              <p className="index">Foco</p>
              <h3>TEA em adultos</h3>
              <p>
                Avaliação para adultos que desejam investigar a possibilidade de Transtorno do Espectro Autista e compreender características presentes em seu funcionamento e ao longo da sua história.
              </p>
              <Button href="/tea-em-adultos" variant="secondary">
                TEA em adultos
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
              O processo é realizado online, permitindo o atendimento de pessoas de diferentes regiões do país.
            </p>
            <p>
              Caso seja identificada a necessidade de algum procedimento complementar presencial, você será orientado durante a avaliação.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Cuidado na escuta e rigor na investigação.</h2>
            <div className="lead" style={{ marginTop: 20 }}>
              <p>A PertenSer é uma clínica especializada em avaliação psicológica de adultos.</p>
              <p>
                Fundada pela psicóloga e especialista em Neuropsicologia Bruna Kindlein, a clínica conta com uma equipe envolvida nos processos de avaliação, conduzidos com rigor técnico, supervisão e atenção às particularidades de cada história.
              </p>
            </div>
            <p className="signature">
              <strong>{site.responsible.name}</strong>
              {site.responsible.role}
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
