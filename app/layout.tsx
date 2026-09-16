import type { Metadata } from "next";
import { headers } from "next/headers";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { getContent } from "@/lib/store";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { site } = await getContent();
  return {
    title: {
      default: `${site.name} | Avaliação psicológica de adultos`,
      template: `%s | ${site.name}`,
    },
    description:
      "Avaliação psicológica online para adultos, com foco na investigação de TDAH, TEA e diagnósticos diferenciais. Atendimento em todo o Brasil.",
    metadataBase: new URL("https://www.clinicapertenser.com.br"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { site } = await getContent();
  const isAdmin = (await headers()).get("x-pertenser-admin") === "1";

  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${body.variable}`}>
        <SiteShell site={site} isAdmin={isAdmin}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
