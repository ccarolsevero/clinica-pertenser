import type { SiteInfo } from "./types";

export const nav = [
  { href: "/", label: "Início" },
  {
    href: "/avaliacao-psicologica",
    label: "Avaliação Psicológica",
    children: [
      { href: "/tdah-em-adultos", label: "TDAH em Adultos" },
      { href: "/tea-em-adultos", label: "TEA em Adultos" },
    ],
  },
  { href: "/psicoterapia", label: "Psicoterapia" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
];

export const footerNav = [
  { href: "/", label: "Início" },
  { href: "/avaliacao-psicologica", label: "Avaliação Psicológica" },
  { href: "/avaliacao-psicologica#como-funciona", label: "Como funciona" },
  { href: "/avaliacao-psicologica#perguntas-frequentes", label: "Perguntas frequentes" },
  { href: "/tdah-em-adultos", label: "TDAH em Adultos" },
  { href: "/tea-em-adultos", label: "TEA em Adultos" },
  { href: "/psicoterapia", label: "Psicoterapia" },
  { href: "/sobre", label: "Sobre" },
  { href: "/sobre#fundadora", label: "Bruna Kindlein" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
] as const;

export function whatsappUrl(whatsapp: string, message?: string) {
  const base = `https://wa.me/${whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function teamMessage(whatsapp: string) {
  return whatsappUrl(whatsapp, "Olá, gostaria de falar com a equipe da PertenSer.");
}

export function pageText(pages: Record<string, Record<string, unknown>>, page: string, key: string) {
  const value = pages[page]?.[key];
  return typeof value === "string" ? value : "";
}

export function pageFaqs(pages: Record<string, Record<string, unknown>>, page: string) {
  const value = pages[page]?.faqs;
  if (!Array.isArray(value)) return [];
  return value.filter(
    (item): item is { question: string; answer: string } =>
      Boolean(item) && typeof item === "object" && "question" in item && "answer" in item,
  );
}

export type { SiteInfo };
