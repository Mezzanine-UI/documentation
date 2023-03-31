import { AppProps } from 'next/app';
import { StrictMode } from 'react';
import Head from 'next/head';
import Header from '@core/components/Header';
import Sidebar from '@core/components/Sidebar';
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

App.getInitialProps = async () => {
  return {};
}

export default App;
