import Head from "next/head";
import "../styles/base.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>test-next-tail-emo</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
