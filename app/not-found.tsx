import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Página não encontrada</p>
        <h1>Esse endereço não existe ou foi movido.</h1>
        <p className="lead" style={{ marginTop: 20 }}>
          Volte à página inicial da PertenSer ou fale com a equipe se precisar de ajuda.
        </p>
        <div className="actions">
          <Button href="/">Ir para o início</Button>
        </div>
      </div>
    </section>
  );
}
