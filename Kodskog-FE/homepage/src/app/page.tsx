import Main from "../components/Main";
import { Metadata } from "next";
import About from "../components/About";
import Projects from "../components/Projects";
import Articles from "../components/Articles";
import Contract from "../components/Contact";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hadi | KodSkog",
};

export default function Home() {
  return (
    <div>
      <link rel="icon" href="/assets/favicon.ico" />
      <Main />
      <About />
      <Articles />
      <Projects />
      {/* <Contract /> */}
    </div>
  );
}
