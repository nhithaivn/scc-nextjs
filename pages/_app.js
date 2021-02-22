import App, { Container } from "next/app";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme/theme.js";
import { appWithTranslation } from "../i18n";
import Header from "../components/Header";
import AppLayout from "../components/AppLayout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
          <Header />
          <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
};

async function getProps(appContext) {
  return await App.getInitialProps(appContext);
}

MyApp.getInitialProps = getProps;

export default appWithTranslation(MyApp);
