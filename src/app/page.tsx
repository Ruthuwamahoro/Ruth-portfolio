import About from "@/components/Aboutme";
import { Hero } from "@/components/LandingPage";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About />
      <Skills />
    </div>
  );
}
