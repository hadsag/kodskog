import Main from "../components/Main";
import { Metadata } from "next";
import About from "../components/About";
import Projects from "../components/Projects";
import Articles from "../components/Articles";
import Contract from "../components/Contact";
import RootLayout from "../app/layout"; // Make sure to import RootLayout
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import SessionProviderWrapper from "../../utils/sessionProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hadi | KodSkog",
};

export default function Home() {
  return (
    <RootLayout>
      <Analytics />
      <Main />
      <About />
      <Articles />
      <Projects />
      <Contract />
    </RootLayout>
  );
}
