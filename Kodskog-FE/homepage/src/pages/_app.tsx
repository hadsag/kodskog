import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import RootLayout from "../app/layout"; // Import your layout component

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </SessionProvider>
  );
}

export default MyApp;
