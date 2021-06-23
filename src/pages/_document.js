import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <meta
            name="description"
            content="Portfolio com projetos de estudo e produção desenvolvidos nas mais modernas tecnologias."
          />
          <meta property="og:image" content="/img/shared.png" />
          <meta property="og:title" content="Guilherme Lacerda" />
          <meta
            property="og:description"
            content="Portfolio com projetos de estudo e produção desenvolvidos nas mais modernas tecnologias."
          />
          <meta property="og:url" content="https://www.lacerda53.me" />
          <meta property="og:type" content="website"></meta>
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-P6ZNFNDWGM"
          ></script>
          <script>
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-P6ZNFNDWGM');
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
