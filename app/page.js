
import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Section from "./components/Section";

export default function Home() {
  return (
    <main className='w-full mx-auto w-full pt-[50px]'>
      <Hero />
      <Section />
      <AboutSection />
      <Contact />
    </main>
  );
}
