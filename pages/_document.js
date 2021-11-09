import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            type="image/png"
            href="/imgs/monogram.png"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Playfair+Display+SC&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@700&family=Playfair+Display:wght@700&display=swap"
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

export default CustomDocument;
