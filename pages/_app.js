/** @jsxImportSource theme-ui */

import { ThemeProvider } from "theme-ui";
import theme from "../theme";
// import Nav from '../components/Nav'
import { MainProvider } from "../contexts/MainContext";
import Alert from "../components/Alert";
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Mechnicki Transporte München</title>
        </Head>
        <MainProvider>
          
          <Component {...pageProps} />
        </MainProvider>
      </div>
    </ThemeProvider>
  );
}

