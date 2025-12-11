import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 md:px-24">
      <div className="w-full max-w-5xl">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
