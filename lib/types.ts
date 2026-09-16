export type Responsible = {
  name: string;
  shortName: string;
  crp: string;
  role: string;
  credentials: string;
  title: string;
  founder: string;
};

export type SiteInfo = {
  name: string;
  shortName: string;
  tagline: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  instagram: string;
  instagramUrl: string;
  responsible: Responsible;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  content: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  title: string;
  text: string;
};

export type SiteContent = {
  site: SiteInfo;
  testimonials: string[];
  processes: {
    evaluation: ProcessStep[];
    tdah: ProcessStep[];
    tea: ProcessStep[];
    therapy: ProcessStep[];
  };
  blog: {
    categories: string[];
    articles: Article[];
  };
  pages: Record<string, Record<string, unknown>>;
};
