"use client";

import { Button } from "./Button";
import { useTeamMessage } from "./SiteProvider";

type Props = {
  title: string;
  text: string;
  support?: string;
  primary?: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string; external?: boolean };
};

export function CTA({ title, text, support, primary, secondary }: Props) {
  const team = useTeamMessage();
  const action = primary ?? {
    href: team,
    label: "Falar com a equipe da PertenSer",
    external: true,
  };

  return (
    <section className="cta-band">
      <div className="container">
        <h2>{title}</h2>
        <p className="lead">{text}</p>
        <div className="actions">
          <Button href={action.href} variant="light" external={action.external}>
            {action.label}
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
