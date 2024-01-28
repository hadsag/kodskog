import Main from '../components/Main';
import About from '../components/About';
import Projects from '../components/Projects';
import Articles from '../components/Articles';
import Contract from '../components/Contact';
import RootLayout from '../app/layout'; // Make sure to import RootLayout

export default function Home() {
  return (
    <RootLayout>
      <Main />
      <About />
      <Articles />
      <Projects />
      <Contract />
    </RootLayout>
  );
}
