import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contract from '../components/Contact' 
import SessionProviderWrapper from '../../utils/sessionProviderWrapper';

export default function Home() {


  return (
    <SessionProviderWrapper>
    <div>
      <Head>
        <title>Hadi | Full-Stack Developer</title>
        <meta name="description" content="I’m a full stack developer." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contract />
    </div>
    </SessionProviderWrapper>
  )
}
