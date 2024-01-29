import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Head>
        <title>The KodSkog </title>
        <meta name="description" content="Welcome to the KodSkog!" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
