import type { Metadata } from "next";
import { headers } from "next/headers";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { organizationJsonLd } from "@/lib/seo";
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
  const title = `${site.name} | Avaliação psicológica de adultos`;
  const description =
    "Avaliação psicológica online para adultos, com foco na investigação de TDAH, TEA e diagnósticos diferenciais. Atendimento em todo o Brasil.";
  return {
    title: {
      default: title,
      template: `%s | ${site.name}`,
    },
    description,
    metadataBase: new URL("https://www.clinicapertenser.com.br"),
    alternates: {
      canonical: "/",
    },
    verification: {
      google: "FLDcvlZqTHQPKNU0rMVwRn8Vc8amOgL5Bhhodu7_5ms",
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: "https://www.clinicapertenser.com.br",
      siteName: site.name,
      title,
      description,
    },
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
        <JsonLd data={organizationJsonLd(site)} />
        <SiteShell site={site} isAdmin={isAdmin}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
