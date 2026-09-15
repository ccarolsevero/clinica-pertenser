"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, whatsappUrl } from "@/lib/site";
import { Button } from "./Button";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string, children?: { href: string }[]) =>
    pathname === href || Boolean(children?.some((child) => pathname === child.href));

  return (
    <header className={`header${scrolled || open ? " scrolled" : ""}${open ? " open" : ""}`}>
      <div className="container header-inner">
        <Logo priority />

        <nav className="nav" aria-label="Principal">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="nav-item">
                <Link href={item.href} className={isActive(item.href, item.children) ? "active" : undefined}>
                  {item.label}
                </Link>
                <div className="nav-dropdown">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={pathname === child.href ? "active" : undefined}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "active" : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
          <Button href={whatsappUrl("Olá, gostaria de falar com a equipe da PertenSer.")} variant="coral" external className="nav-cta-mobile">
            Fale conosco
          </Button>
        </nav>

        <Button href={whatsappUrl("Olá, gostaria de falar com a equipe da PertenSer.")} variant="coral" external className="nav-cta-desktop">
          Fale conosco
        </Button>

        <button
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}
