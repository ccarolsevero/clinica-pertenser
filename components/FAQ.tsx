type Item = {
  question: string;
  answer: string;
};

export function FAQ({ items }: { items: Item[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
