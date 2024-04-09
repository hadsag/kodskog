"use client";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <title> The KodSkog </title>
        <meta name="description" content="Welcome to the KodSkog!" />
        <link rel="icon" href="/assets/favicon.ico" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <body className={inter.className}>
        <Analytics />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
