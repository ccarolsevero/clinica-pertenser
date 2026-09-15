import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";
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
            <div className="footer-social">
              <a
                className="footer-social-link"
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="Falar no WhatsApp"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.46 0 .1 5.36.1 11.96c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a11.9 11.9 0 0 0 5.86 1.5h.01c6.6 0 11.96-5.36 11.96-11.96 0-3.2-1.25-6.2-3.51-8.44ZM12.07 21.15h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.68.96.98-3.58-.23-.37a9.88 9.88 0 0 1-1.52-5.3c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.44 9.87-9.94 9.87Zm5.44-7.4c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.08 2.89 1.23 3.09c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
                </svg>
              </a>
              <a
                className="footer-social-link"
                href={`mailto:${site.email}`}
                aria-label="Enviar e-mail"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
                </svg>
              </a>
              <a
                className="footer-social-link"
                href={site.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.67.51.73.28 1.36.66 1.98 1.28.62.62 1 1.25 1.28 1.98.27.7.46 1.5.51 2.67.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.51 2.67a5.63 5.63 0 0 1-1.28 1.98 5.63 5.63 0 0 1-1.98 1.28c-.7.27-1.5.46-2.67.51-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.67-.51a5.63 5.63 0 0 1-1.98-1.28 5.63 5.63 0 0 1-1.28-1.98c-.27-.7-.46-1.5-.51-2.67-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.24-1.97.51-2.67.28-.73.66-1.36 1.28-1.98.62-.62 1.25-1 1.98-1.28.7-.27 1.5-.46 2.67-.51 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07 5.76.13 4.84.36 4.04.67a7.8 7.8 0 0 0-2.83 1.84A7.8 7.8 0 0 0 .67 5.34C.36 6.14.13 7.06.07 8.35.01 9.63 0 10.04 0 13.3s.01 3.67.07 4.95c.06 1.29.29 2.21.6 3.01a7.8 7.8 0 0 0 1.84 2.83 7.8 7.8 0 0 0 2.83 1.84c.8.31 1.72.54 3.01.6 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.29-.06 2.21-.29 3.01-.6a7.8 7.8 0 0 0 2.83-1.84 7.8 7.8 0 0 0 1.84-2.83c.31-.8.54-1.72.6-3.01.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.29-.29-2.21-.6-3.01a7.8 7.8 0 0 0-1.84-2.83A7.8 7.8 0 0 0 19.96.67C19.16.36 18.24.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84A6.46 6.46 0 1 0 18.46 12 6.46 6.46 0 0 0 12 5.84ZM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm6.41-10.85a1.51 1.51 0 1 1-1.51-1.51 1.51 1.51 0 0 1 1.51 1.51Z" />
                </svg>
              </a>
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
