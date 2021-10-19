import "../styles/globals.css";

import PageWrapper from "../components/PageWrapper";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
