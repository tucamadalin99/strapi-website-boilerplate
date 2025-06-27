type Feature = {
  title: string;
  description?: string;
};

type FeaturesProps = {
  items: Feature[];
};

export default function Features({ items }: FeaturesProps) {
  return (
    <section className="features">
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            <h3>{item.title}</h3>
            {item.description && <p>{item.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
