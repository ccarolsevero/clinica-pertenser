"use client";

import type { SiteInfo } from "@/lib/types";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SiteProvider } from "./SiteProvider";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function SiteShell({
  site,
  isAdmin,
  children,
}: {
  site: SiteInfo;
  isAdmin?: boolean;
  children: React.ReactNode;
}) {
  return (
    <SiteProvider site={site}>
      {isAdmin ? (
        children
      ) : (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </>
      )}
    </SiteProvider>
  );
}
