import "../styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfólio - Guilherme Lacerda</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
