import { whatsappUrl } from "@/lib/site";
import { Button } from "./Button";

type Props = {
  title: string;
  text: string;
  support?: string;
  primary?: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string; external?: boolean };
};

export function CTA({
  title,
  text,
  support,
  primary = {
    href: whatsappUrl("Olá, gostaria de falar com a equipe da PertenSer."),
    label: "Falar com a equipe da PertenSer",
    external: true,
  },
  secondary,
}: Props) {
  return (
    <section className="cta-band">
      <div className="container">
        <h2>{title}</h2>
        <p className="lead">{text}</p>
        <div className="actions">
          <Button href={primary.href} variant="light" external={primary.external}>
            {primary.label}
          </Button>
          {secondary ? (
            <Button href={secondary.href} variant="ghost" external={secondary.external}>
              {secondary.label}
            </Button>
          ) : null}
        </div>
        {support ? <p className="support">{support}</p> : null}
      </div>
    </section>
  );
}
