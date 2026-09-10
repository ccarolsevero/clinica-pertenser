import Link from "next/link";
import { footerNav, site } from "@/lib/site";
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
              <strong>Responsável técnica</strong>
              {site.responsible.name}
              <br />
              {site.responsible.role}
            </p>
          </div>

          <div>
            <h4>Contato</h4>
            <ul>
              <li>
                WhatsApp:{" "}
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
                  {site.whatsappDisplay}
                </a>
              </li>
              <li>
                E-mail:{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                Instagram:{" "}
                <a href={site.instagramUrl} target="_blank" rel="noreferrer">
                  @{site.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Links</h4>
            <ul>
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Clínica PertenSer. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
