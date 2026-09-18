export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function organizationJsonLd(site: {
  name: string;
  whatsappDisplay: string;
  email: string;
  instagramUrl: string;
  responsible: { name: string; credentials: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: site.name,
    url: "https://www.clinicapertenser.com.br",
    email: site.email,
    telephone: site.whatsappDisplay,
    sameAs: [site.instagramUrl],
    areaServed: "BR",
    founder: {
      "@type": "Person",
      name: site.responsible.name,
      jobTitle: "Psicóloga",
      description: site.responsible.credentials,
    },
  };
}

export function faqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function webPageJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: `https://www.clinicapertenser.com.br${input.path}`,
    inLanguage: "pt-BR",
    isPartOf: {
      "@type": "WebSite",
      name: "Clínica PertenSer",
      url: "https://www.clinicapertenser.com.br",
    },
  };
}
