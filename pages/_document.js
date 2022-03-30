import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* General Stuff */}
          <title>Shannon Clarke</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
            rel="stylesheet"
          />

          <script
            src="https://code.tidio.co/dlhq4e3cswf5n4kg8xeb7vkok05u6iqh.js"
            async
          ></script>
          {/* Tracking Codes */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-71K3TL2YLR"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-71K3TL2YLR');
                            `,
            }}
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
