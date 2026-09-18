import { slugify } from "@/lib/seo";

type Item = {
  question: string;
  answer: string;
};

export function FAQ({ items }: { items: Item[] }) {
  return (
    <div className="faq">
      {items.map((item) => {
        const id = `faq-${slugify(item.question)}`;
        return (
          <details key={item.question} id={id}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        );
      })}
    </div>
  );
}
