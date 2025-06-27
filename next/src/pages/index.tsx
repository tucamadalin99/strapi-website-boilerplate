import { Geist, Geist_Mono } from "next/font/google";
import axios from "axios";
import { useEffect } from "react";
import { IPostsData } from "@/interface/post.interface";
import BlockRenderer from "@/components/blocks/BlockRenderer";
import { ApiParams, UrlContext } from "../../constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function getServerSideProps() {
  try {
    const res = await axios.get(
      `${UrlContext.base}${UrlContext.posts}${ApiParams.author}`
    );

    return {
      props: {
        posts: res.data,
      },
    };
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default function Home({ posts }: IPostsData) {
  useEffect(() => {
    const fetchGlobal = async () => {
      console.log(
        "BEFORE FETCH",
        `${UrlContext.base}${UrlContext.global}${ApiParams.deep}`
      );
      const global = await axios.get(`${UrlContext.base}${UrlContext.global}`);
      console.log("GLOBAL", global);
    };
    fetchGlobal();
  }, []);
  const postsBlocks = posts.data;
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-start">
        <div>
          <h1>Latest Posts</h1>
          {postsBlocks?.map((postBlock, i) => {
            return (
              <article key={i} className="prose mx-auto">
                <h2>{postBlock?.title}</h2>
                {postBlock?.content?.map((block, i) => (
                  <BlockRenderer key={i} block={block} />
                ))}
              </article>
            );
          })}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
