import 'react-toastify/dist/ReactToastify.min.css';
import { createGlobalStyle } from 'styled-components';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { ToastContainer } from 'react-toastify';

      
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
  }

  #__next {
    height: 100%;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <GlobalStyles />

        <Component {...pageProps} />
        <ToastContainer />
    </MantineProvider>
  );
}

export default MyApp;
