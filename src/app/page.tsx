import Intro from "@/sections/intro/intro";
import About from "@/sections/about/about";
import Stacks from "../sections/stacks/stacks";
import Experience from "@/sections/experience/experience";
import Footer from "@/sections/footer/footer";
import ResolutionWarning from "@/components/resolution-warning/resolution-warning";

export default function Home() {
  return (
    <>
      <ResolutionWarning />
      <Intro />
      <About />
      <Stacks />
      <Experience />
      <Footer />
    </>
  );
}
