import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dịch vụ internet VNPT</title>
        <link rel="icon" href="icon.png"></link>
        <meta name="description" content="Dịch vụ internet VNPT" />

        <meta content="Dịch vụ internet VNPT" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
