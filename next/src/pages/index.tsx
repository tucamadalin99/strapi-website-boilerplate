// pages/index.tsx
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Landing page" />
      </Head>

      <main className="prose">
        <h1>Hello 👋</h1>
        <p>This is your landing page.</p>
      </main>
    </div>
  );
}
