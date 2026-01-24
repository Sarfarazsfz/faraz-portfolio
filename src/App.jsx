import Navbar from './components/Navbar';
import WelcomeIntro from './components/WelcomeIntro';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <WelcomeIntro />
      <main>
        <Hero />
        <div className="section-divider"></div>

        <About />
        <div className="section-divider"></div>

        <Experience />
        <div className="section-divider"></div>

        <Skills />
        <div className="section-divider"></div>

        <Projects />
        <div className="section-divider"></div>

        <Certifications />
        <div className="section-divider"></div>
      </main>
      <Footer />
    </>
  );
}
