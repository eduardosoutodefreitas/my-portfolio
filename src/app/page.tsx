import Projects from './components/sections/Projects/Projects';
import About from './components/sections/about/About';
import Contact from './components/sections/contact/Contact';
import Hero from './components/sections/hero/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
