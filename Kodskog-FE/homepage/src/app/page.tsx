// page.tsx
import RootLayout from './layout'; // Import your RootLayout component
import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import Projects from '../components/Projects'
import Articles from '../components/Articles'
import Skills from '../components/Skills'
import Contract from '../components/Contact'

export default function Home() {
  return (
    <RootLayout>
      <Head>
        <title>Hadi | KodSkog </title>
        <meta name="description" content="Welcome to the KodSkog!" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Articles />
      <Projects />
      {/* <Skills /> */}
      <Contract />
    </RootLayout>
  );
}
