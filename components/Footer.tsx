import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";
import { Button } from "./Button";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo className="logo-plate" width={240} height={136} />
            <p>{site.tagline}</p>
            <p className="signature">
              <strong>{site.responsible.name}</strong>
              {site.responsible.credentials}
              <br />
              {site.responsible.founder}
            </p>
          </div>

          <div className="footer-contact">
            <h3>Contato</h3>
            <div className="footer-contact-actions">
              <Button href={whatsappUrl()} variant="coral" external>
                WhatsApp
              </Button>
              <Button href={`mailto:${site.email}`} variant="light">
                E-mail
              </Button>
              <Button href={site.instagramUrl} variant="ghost" external>
                Instagram
              </Button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Clínica PertenSer. Todos os direitos
            reservados.
          </span>
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
