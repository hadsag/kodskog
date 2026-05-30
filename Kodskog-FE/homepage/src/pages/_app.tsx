import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import "../app/globals.css";

// Pages Router wrapper — provides NavBar for all pages/* routes.
// App Router (src/app/) uses layout.tsx instead.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
