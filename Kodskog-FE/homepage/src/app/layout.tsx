import { useSession, getSession } from "next-auth/react";
import Head from 'next/head';
import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import SessionProviderWrapper from '../../utils/sessionProviderWrapper';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <title>Hadi | KodSkog </title>
          <meta name="description" content="Welcome to the KodSkog!" />
          <link rel="icon" href="/assets/favicon.ico" />
        </Head>
        <SessionProviderWrapper>
          <NavBar />
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
