import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import { Provider } from 'react-redux';
import store from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
