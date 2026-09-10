type Step = {
  title: string;
  text: string;
};

export function ProcessSteps({
  steps,
  note,
}: {
  steps: Step[];
  note?: string;
}) {
  return (
    <>
      <div className="steps">
        {steps.map((step, index) => (
          <article className="step" key={step.title}>
            <div className="num">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <h3>{step.title}</h3>
              <p className="lead" style={{ marginTop: 10 }}>
                {step.text}
              </p>
            </div>
          </article>
        ))}
      </div>
      {note ? <p className="note">{note}</p> : null}
    </>
  );
}
