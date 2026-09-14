import type { Metadata } from "next";
import Image from "next/image";
import { BlogList } from "@/components/BlogList";
import { CTA } from "@/components/CTA";
import { teamMessage } from "@/lib/content";
import { getArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conteúdos sobre avaliação psicológica, TDAH, autismo na vida adulta e outros temas para ajudar você a compreender melhor suas dúvidas.",
};

export default function BlogPage() {
  const articles = getArticles();

  return (
    <>
      <section className="hero-photo">
        <div className="hero-photo-media">
          <Image
            src="/bruna-blog-hero.png"
            alt="Bruna Kindlein, psicóloga da Clínica PertenSer"
            fill
            priority
            sizes="100vw"
            className="hero-photo-image"
          />
        </div>
        <div className="container">
          <div className="hero-photo-content">
            <p className="eyebrow">Conteúdos PertenSer</p>
            <h1>Informação para ajudar você a compreender melhor as suas dúvidas.</h1>
            <div className="lead" style={{ marginTop: 24 }}>
              <p>
                Conteúdos sobre avaliação psicológica, TDAH, autismo na vida adulta e outros temas relacionados à compreensão do funcionamento psicológico.
              </p>
              <p>Informação cuidadosa para orientar — sem transformar conteúdo em autodiagnóstico.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Conteúdos recentes</h2>
          </div>
          <BlogList articles={articles} />
        </div>
      </section>

      <CTA
        title="Está buscando mais do que informação?"
        text="Se você tem dúvidas sobre seu funcionamento ou deseja investigar alguma hipótese, conheça o processo de avaliação psicológica da PertenSer."
        primary={{ href: "/avaliacao-psicologica", label: "Conheça a avaliação psicológica" }}
        secondary={{ href: teamMessage, label: "Falar com a equipe", external: true }}
      />
    </>
  );
}
