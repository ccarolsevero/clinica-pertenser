import { getTestimonials } from "@/lib/content";

export async function Testimonials({ alt }: { alt?: boolean }) {
  const testimonials = await getTestimonials();

  return (
    <section className={`section${alt ? " alt" : ""}`}>
      <div className="container">
        <div className="section-head">
          <h2>Avaliações sobre a PertenSer</h2>
        </div>
        <div className="testimonials">
          {testimonials.map((text) => (
            <figure className="testimonial" key={text.slice(0, 40)}>
              <p className="stars" aria-label="Cinco de cinco estrelas">
                <span aria-hidden="true">★★★★★</span>
              </p>
              <blockquote>{text}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
