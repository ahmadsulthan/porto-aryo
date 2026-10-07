import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Research from "@/components/sections/Research";
import Experience from "@/components/sections/Experience";
import Statistics from "@/components/sections/Statistics";
import Skills from "@/components/sections/Skills";
import CVSection from "@/components/sections/CVSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Research />
        <Experience />
        <Statistics />
        <Skills />
        <CVSection />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
