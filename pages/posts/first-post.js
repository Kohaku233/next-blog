import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <p>This is the test first post!</p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
