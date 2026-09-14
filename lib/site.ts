export const site = {
  name: "Clínica PertenSer",
  shortName: "PertenSer",
  tagline: "Avaliação psicológica e psicoterapia para adultos.",
  whatsapp: "5551992535092",
  whatsappDisplay: "(51) 99253-5092",
  email: "pertencer.psi@gmail.com",
  instagram: "clinicapertenser",
  instagramUrl: "https://www.instagram.com/clinicapertenser/",
  responsible: {
    name: "Bruna de Freitas Navarro Kindlein",
    shortName: "Bruna Kindlein",
    crp: "CRP 07/31496",
    role: "Psicóloga | CRP 07/31496",
    specialty: "Especialista em Neuropsicologia",
    title: "Fundadora e responsável técnica da Clínica PertenSer",
  },
} as const;

export const whatsappUrl = (message?: string) => {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

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
  { href: "/tdah-em-adultos", label: "TDAH em Adultos" },
  { href: "/tea-em-adultos", label: "TEA em Adultos" },
  { href: "/psicoterapia", label: "Psicoterapia" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
] as const;
