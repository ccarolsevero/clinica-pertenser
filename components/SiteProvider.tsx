"use client";

import { createContext, useContext } from "react";
import type { SiteInfo } from "@/lib/types";
import { teamMessage, whatsappUrl } from "@/lib/site";

const SiteContext = createContext<SiteInfo | null>(null);

export function SiteProvider({ site, children }: { site: SiteInfo; children: React.ReactNode }) {
  return <SiteContext.Provider value={site}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const site = useContext(SiteContext);
  if (!site) {
    throw new Error("useSite precisa estar dentro de SiteProvider");
  }
  return site;
}

export function useWhatsapp(message?: string) {
  const site = useSite();
  return message ? whatsappUrl(site.whatsapp, message) : whatsappUrl(site.whatsapp);
}

export function useTeamMessage() {
  const site = useSite();
  return teamMessage(site.whatsapp);
}
