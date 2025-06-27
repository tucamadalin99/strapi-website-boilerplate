import Link from "next/link";

type CTAProps = {
  headline: string;
  buttonText: string;
  buttonUrl: string;
};

export default function CTA({ headline, buttonText, buttonUrl }: CTAProps) {
  return (
    <section className="cta">
      <h2>{headline}</h2>
      <Link href={buttonUrl}>
        <button>{buttonText}</button>
      </Link>
    </section>
  );
}
