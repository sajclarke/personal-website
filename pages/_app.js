import "../styles/globals.css";

import PageWrapper from "../components/PageWrapper";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo
        title="Hi, I'm Shannon Clarke. I am passionate about utilizing technology to empower individuals and build communities"
        description="I believe in a future where modern technology solutions are actively developed by the Caribbean to improve our quality of life."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://www.shannonclarke.com/",
          site_name: "Shannon Clarke",
          description:
            "I believe in a future where modern technology solutions are actively developed by the Caribbean to improve our quality of life.",
          images: [
            {
              url: "https://shannonclarke.com/assets/images/shannon_block.jpg",
            },
          ],
        }}
        twitter={{
          handle: "@shannonajclarke",
          site: "@shannonajclarke",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "shannon clarke, software developer, programming, coding, reactjs, redux, typescript, react, javascript, node, nodejs,barbados",
          },
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; chrome=1",
          },
        ]}
      />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
