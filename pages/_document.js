import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* Tracking Codes */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-21532676-6"></script>
                    <script src="../lib/ga.js" async></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
