// pages/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import Hero from "@/components/sections/Hero";
import TextImage from "@/components/sections/TextImage";
import CTA from "@/components/sections/CTA";
import { UrlContext } from "../../constants";

export default function Page({ content }: { content: any }) {
  if (!content) return <p>Not found</p>;

  const { title, seo, blocks = [] } = content;

  return (
    <div className="min-h-screen p-8">
      <Head>
        <title>{seo?.metaTitle || title}</title>
        <meta name="description" content={seo?.metaDescription || ""} />
      </Head>

      <main className="flex flex-col gap-12">
        {blocks.map((block: any, i: number) => {
          switch (block.__component) {
            case "ui.hero":
              return <Hero key={i} {...block} />;
            case "ui.text-image":
              return <TextImage key={i} {...block} />;
            case "ui.cta":
              return <CTA key={i} {...block} />;
            default:
              return null;
          }
        })}
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;

  const url = `${UrlContext.base}/pages?filters[slug][$eq]=${slug}&populate[blocks][populate]=*`;
  const res = await fetch(url);
  const data = await res.json();

  const content = data.data?.[0];
  if (!content) return { notFound: true };

  return {
    props: { content },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${UrlContext.base}/pages`);
  const { data } = await res.json();

  const paths = data
    .filter(
      (page: any) => !!page.slug && page.slug !== "home" && page.slug !== ""
    )
    .map((page: any) => ({
      params: { slug: page.slug },
    }));

  console.log("STATIC PATHS", paths);

  return {
    paths,
    fallback: false, // or "blocking" if you want runtime fallback
  };
};
