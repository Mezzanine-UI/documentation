import { AppProps } from 'next/app';
import { StrictMode } from 'react';
import Head from 'next/head';
import Header from '@core/ui/Header';
import Sidebar from '@core/ui/Sidebar';
import classes from './app.module.scss';
import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <Head>
        <title>Welcome to client!</title>
      </Head>
      <main className={classes.main}>
        <Header />
        <div className={classes.layout}>
          <Sidebar />
          <div className={classes.page}>
            <Component {...pageProps} />
          </div>
        </div>
      </main>
    </StrictMode>
  );
}

export default App;
