type TestimonialProps = {
  quote: string;
  name: string;
  avatar?: { url: string };
};

export default function Testimonial({ quote, name, avatar }: TestimonialProps) {
  return (
    <section className="testimonial">
      <blockquote>&quot;{quote}&quot;</blockquote>
      <div>
        {avatar?.url && <img src={avatar.url} alt={name} width={50} />}
        <p>{name}</p>
      </div>
    </section>
  );
}
