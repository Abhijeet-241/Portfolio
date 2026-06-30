import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Experience } from "@/sections/experience";
import { Projects } from "@/sections/projects";
import { Skills } from "@/sections/skills";
import { Contact } from "@/sections/contact";
import { Marquee } from "@/components/marquee";

const marqueeItems = [
  "Flutter",
  "Dart",
  "Python",
  "TypeScript",
  "LangGraph",
  "RAG",
  "Android",
  "Firebase",
  "Docker",
  "Kubernetes",
  "FastAPI",
  "Next.js",
  "Accessibility",
  "Terraform",
];

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={marqueeItems} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
