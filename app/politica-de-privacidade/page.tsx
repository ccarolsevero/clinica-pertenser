import type { Metadata } from "next";
import { getContent } from "@/lib/store";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a Clínica PertenSer trata dados pessoais em seu site e em seus canais de contato.",
};

export default async function PrivacidadePage() {
  const { site } = await getContent();
  return (
    <section className="section">
      <div className="container prose">
        <p className="eyebrow">Documentos</p>
        <h1>Política de Privacidade</h1>
        <div className="lead" style={{ marginTop: 28 }}>
          <p>
            Esta página descreve, de forma simples, como a Clínica PertenSer trata informações pessoais de quem visita o site ou entra em contato pelos canais oficiais.
          </p>
          <p>
            O site não solicita cadastro e não possui formulário de contato. Os canais principais são WhatsApp, e-mail e Instagram.
          </p>
          <p>
            Quando você inicia uma conversa, podemos receber dados que você escolher enviar — como nome, telefone, e-mail e informações relacionadas ao atendimento. Esses dados são usados apenas para responder à sua solicitação, orientar sobre os serviços e, quando for o caso, dar andamento ao processo de avaliação ou psicoterapia.
          </p>
          <p>
            Informações clínicas eventualmente compartilhadas são tratadas com confidencialidade, de acordo com o Código de Ética Profissional do Psicólogo e com a Lei Geral de Proteção de Dados (LGPD).
          </p>
          <p>
            Não vendemos dados pessoais. Também não utilizamos os canais de contato para envio de comunicações sem relação com o atendimento solicitado.
          </p>
          <p>
            O site pode usar recursos técnicos básicos de funcionamento. Se ferramentas de medição de acesso forem utilizadas no futuro, elas serão configuradas de modo a respeitar a privacidade dos visitantes.
          </p>
          <p>
            Para atualizar, esclarecer ou solicitar informações sobre dados pessoais, fale com a equipe pelo WhatsApp {site.whatsappDisplay} ou pelo e-mail {site.email}.
          </p>
          <p>
            Responsável técnica: {site.responsible.name} — {site.responsible.role}.
          </p>
        </div>
      </div>
    </section>
  );
}
