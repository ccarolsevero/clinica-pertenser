export type Category =
  | "Avaliação Psicológica"
  | "TDAH em Adultos"
  | "TEA em Adultos"
  | "Psicologia";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  content: string[];
};

export const categories: Category[] = [
  "Avaliação Psicológica",
  "TDAH em Adultos",
  "TEA em Adultos",
  "Psicologia",
];

export const articles: Article[] = [
  {
    slug: "avaliacao-psicologica-nao-e-autodiagnostico",
    title: "Avaliação psicológica não é o mesmo que autodiagnóstico",
    excerpt:
      "Informação pode ajudar a reconhecer dúvidas, mas compreender o que acontece com você pede um processo cuidadoso, individualizado e tecnicamente fundamentado.",
    category: "Avaliação Psicológica",
    date: "2026-09-02",
    content: [
      "É cada vez mais comum encontrar conteúdos sobre TDAH, autismo e outros temas da saúde mental. Essa circulação de informação pode ser útil: muitas pessoas passam a nomear dificuldades que, até então, não tinham sido suficientemente compreendidas.",
      "Ao mesmo tempo, reconhecer-se em uma descrição não é o mesmo que ter uma avaliação. Sintomas semelhantes podem ter explicações diferentes, e uma hipótese inicial — ainda que faça sentido — precisa ser investigada com cuidado.",
      "A avaliação psicológica considera a história de vida, o funcionamento atual e diferentes possibilidades. O objetivo não é confirmar um diagnóstico a qualquer custo, mas construir respostas que façam sentido para a trajetória de cada pessoa.",
      "Por isso, na PertenSer, o conteúdo educativo existe para orientar e ampliar a compreensão — sem transformar informação em conclusão. Se você tem dúvidas sobre o próprio funcionamento, o próximo passo pode ser conversar com a equipe e conhecer o processo de avaliação.",
    ],
  },
  {
    slug: "quando-a-suspeita-de-tdah-aparece-na-vida-adulta",
    title: "Quando a suspeita de TDAH aparece na vida adulta",
    excerpt:
      "Para algumas pessoas, a possibilidade de TDAH só se torna visível depois de anos de dificuldades sem uma explicação clara. A suspeita pode ser um ponto de partida — não uma conclusão.",
    category: "TDAH em Adultos",
    date: "2026-08-20",
    content: [
      "Nem sempre a hipótese de TDAH surge na infância. Na vida adulta, ela pode aparecer quando as demandas aumentam, quando estratégias antigas deixam de ser suficientes ou quando alguém começa a buscar sentido para dificuldades que acompanham há muito tempo.",
      "Desorganização, procrastinação, inquietação interna, dificuldade de manter o foco ou de sustentar rotinas: esses sinais podem estar relacionados ao TDAH, mas também a outras condições ou a uma combinação de fatores.",
      "Por isso, a avaliação não parte da premissa de confirmar o diagnóstico. Ela investiga a hipótese inicial e considera diagnósticos diferenciais e possíveis condições associadas, sempre à luz da história e do funcionamento de cada pessoa.",
      "Você não precisa ter certeza de que é TDAH para procurar uma avaliação. A suspeita é apenas o começo de um processo que busca compreender o que melhor explica as dificuldades vivenciadas.",
    ],
  },
  {
    slug: "autismo-na-vida-adulta-investigar-sem-apressar-respostas",
    title: "Autismo na vida adulta: investigar sem apressar respostas",
    excerpt:
      "A possibilidade de TEA pode surgir somente na vida adulta. A avaliação psicológica oferece um espaço para investigar essa hipótese de forma individualizada, considerando toda a história.",
    category: "TEA em Adultos",
    date: "2026-08-05",
    content: [
      "Algumas pessoas chegam à vida adulta com a sensação de que sempre precisaram se esforçar para compreender regras sociais, lidar com estímulos ou organizar o próprio funcionamento — sem que isso tenha recebido um nome.",
      "Quando surge a hipótese de Transtorno do Espectro Autista, é comum buscar conteúdos, relatos e checklists. Esses materiais podem ajudar a formular perguntas, mas não substituem um processo de investigação.",
      "Na PertenSer, a avaliação de TEA em adultos considera a trajetória, o funcionamento cognitivo, emocional e comportamental, além de outras possibilidades relevantes para o caso. O objetivo não é confirmar TEA a qualquer custo, e sim compreender o que melhor explica as questões que motivaram a procura.",
      "Você não precisa chegar com uma resposta. A avaliação é justamente um espaço de investigação, com rigor técnico e atenção à singularidade de cada história.",
    ],
  },
];

export function getArticles() {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getLatestArticles(count = 3) {
  return getArticles().slice(0, count);
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}
