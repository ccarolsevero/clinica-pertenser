import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { PortraitSlot } from "@/components/PortraitSlot";
import { getLatestArticles } from "@/lib/articles";
import { teamMessage } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  const latest = getLatestArticles(3);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Avaliação psicológica de adultos</p>
            <h1>Entender o que acontece com você pode mudar a forma como você compreende toda a sua história.</h1>
            <div className="lead" style={{ marginTop: 24 }}>
              <p>
                Avaliação psicológica online para adultos, com foco na investigação de TDAH, Transtorno do Espectro Autista (TEA) e diagnósticos diferenciais.
              </p>
              <p>
                Um processo cuidadoso para compreender o que pode estar por trás das dificuldades que você vivencia.
              </p>
            </div>
            <div className="actions">
              <Button href="/avaliacao-psicologica">Conheça a avaliação psicológica</Button>
              <Button href={teamMessage} variant="secondary" external>
                Falar com a equipe
              </Button>
            </div>
            <p className="support">Atendimento online em todo o Brasil.</p>
          </div>
          <div className="hero-brand">
            <img src="/logo-pertenser.png" alt="PertenSer — Avaliação Psicológica" />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Como podemos ajudar</p>
            <h2>Cada história pode precisar de um olhar diferente.</h2>
          </div>
          <div className="cards">
            <article className="card">
              <h3>Avaliação psicológica</h3>
              <p>
                Um processo de investigação que considera sua história, seu funcionamento e diferentes hipóteses para compreender o que pode explicar as dificuldades apresentadas.
              </p>
              <Button href="/avaliacao-psicologica" variant="secondary">
                Conheça a avaliação
              </Button>
            </article>
            <article className="card">
              <h3>TDAH em adultos</h3>
              <p>
                Avaliação psicológica para adultos que desejam investigar a possibilidade de TDAH e compreender melhor seu funcionamento e os impactos das dificuldades no cotidiano.
              </p>
              <Button href="/tdah-em-adultos" variant="secondary">
                Saiba mais
              </Button>
            </article>
            <article className="card">
              <h3>TEA em adultos</h3>
              <p>
                Avaliação psicológica para adultos que desejam investigar a possibilidade de Transtorno do Espectro Autista e compreender características presentes ao longo da própria história.
              </p>
              <Button href="/tea-em-adultos" variant="secondary">
                Saiba mais
              </Button>
            </article>
            <article className="card">
              <h3>Psicoterapia</h3>
              <p>
                Acompanhamento psicológico online para adultos, realizado de forma individualizada de acordo com as necessidades de cada pessoa.
              </p>
              <Button href="/psicoterapia" variant="secondary">
                Conheça a psicoterapia
              </Button>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Sobre nós</p>
            <h2>Mais do que buscar um diagnóstico, buscamos compreender a sua história.</h2>
          </div>
          <div>
            <div className="lead">
              <p>
                A PertenSer é uma clínica especializada em avaliação psicológica de adultos, com foco principal na investigação de TDAH e TEA.
              </p>
              <p>
                Acreditamos que uma boa avaliação não deve se limitar a confirmar ou descartar um diagnóstico.
              </p>
              <p>
                Por isso, cada processo considera a história de vida, o funcionamento atual e diferentes hipóteses que possam ajudar a compreender as dificuldades de cada pessoa.
              </p>
            </div>
            <div className="actions">
              <Button href="/sobre">Conheça a PertenSer</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section green">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow light">Nossa forma de trabalhar</p>
            <h2>Uma hipótese é o ponto de partida. Não precisa ser a conclusão.</h2>
          </div>
          <div className="lead">
            <p>
              É comum chegar à avaliação com a suspeita de TDAH ou autismo. Mas dificuldades semelhantes podem ter diferentes explicações.
            </p>
            <p>
              Por isso, na PertenSer, não buscamos confirmar um diagnóstico a qualquer custo.
            </p>
            <p>
              Investigamos a hipótese inicial e também consideramos diagnósticos diferenciais e possíveis condições associadas para compreender o que melhor explica cada caso.
            </p>
          </div>
          <p className="quote light">
            O objetivo não é apenas chegar a um diagnóstico, mas construir respostas que façam sentido para a sua história.
          </p>
          <div className="actions">
            <Button href="/avaliacao-psicologica" variant="light">
              Entenda como funciona a avaliação
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <PortraitSlot
            src="/bruna-kindlein.png"
            alt="Bruna Kindlein, psicóloga e fundadora da Clínica PertenSer"
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
            </div>
            <p className="signature">
              <strong>{site.responsible.name}</strong>
              {site.responsible.role}
              <br />
              {site.responsible.specialty}
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
            <p className="eyebrow">Conteúdos PertenSer</p>
            <h2>Informação também pode ajudar você a encontrar respostas.</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Conteúdos sobre avaliação psicológica, TDAH, autismo na vida adulta e outros temas para ajudar você a compreender melhor suas dúvidas — sem transformar informação em autodiagnóstico.
            </p>
          </div>
          <div className="article-grid">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="actions">
            <Button href="/blog" variant="secondary">
              Ver todos os conteúdos
            </Button>
          </div>
        </div>
      </section>

      <CTA
        title="Buscando compreender melhor o que acontece com você?"
        text="Se você tem dúvidas sobre seu funcionamento ou deseja investigar alguma hipótese, converse com a equipe da PertenSer e conheça o processo de avaliação psicológica."
        support="Avaliação psicológica online para adultos em todo o Brasil."
      />
    </>
  );
}
