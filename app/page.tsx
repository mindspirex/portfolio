import Hello from "@/components/Hello";
import Technologies from "@/components/Technologies";
import CompetitiveProgramming from "@/components/CompetitiveProgramming";
import Projects from "@/components/Projects";
import Typing from "@/components/Typing";

export default function Home() {
  return (
    <main>
      <Hello />
      <Technologies />
      <CompetitiveProgramming />
      <Projects />
      <Typing />
    </main>
  );
}
