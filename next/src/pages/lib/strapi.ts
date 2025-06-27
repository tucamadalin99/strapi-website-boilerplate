export const getPageContent = async (slug: string) => {
  const res = await fetch(
    `http://localhost:1337/api/pages?filters[slug][$eq]=${slug}&populate=deep`
  );
  const data = await res.json();

  if (!data.data || data.data.length === 0) return null;

  return data.data[0];
};
