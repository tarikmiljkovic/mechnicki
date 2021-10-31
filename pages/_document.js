import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Mechnicki Transporte München</title>
          <meta name="description" content="Emil Mechnicki Transporte München" />
          <meta name="author" content="miljkovic.at" />

          <meta property="og:url" content="https://mechnicki.de" />
          <meta property="og:site_name" content="Emil Mechnicki Transporte München" />
          <meta
            name="keywords"
            content="transport transporte münchen munich deutschland germany lkw fahrer fahren"
          />

          <meta property="og:locale" content="de_DE" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Emil Mechnicki Transporte München" />
          <meta name="twitter:card" content="Emil Mechnicki Transporte München" />
          <meta name="twitter:title" content="Emil Mechnicki Transporte München" />

          <meta property="og:title" content="Mechnicki Transporte München" />
          <meta property="og:site_name" content="Mechnicki Transporte München" />
          <meta
            property="og:description"
            content="Emil Mechnicki Transporte München"
          />
          <meta property="og:image" content="./maci.JPG" key="ogimage" />
          <meta property="og:image" content="/maci.JPG" key="ogimage" />
          <meta property="og:url" content="http://mechnicki.de" />

          {/* <link rel="icon" href="favicon.ico" />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="favicons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="favicons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="favicons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="favicons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="favicons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="favicons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="favicons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="favicons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="favicons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="favicons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="favicons/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="favicons/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
