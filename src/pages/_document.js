import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <meta
            name="description"
            content="Desenvolvimento Web e Mobile moderno"
          />
          <meta property="og:title" content="Lacerda53" />
          <meta
            property="og:description"
            content="Portfolio desenvolvedor Web e Mobile moderno"
          />
          <meta property="og:url" content="https://www.lacerda53.me/" />
          <meta property="og:type" content="website"></meta>
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
