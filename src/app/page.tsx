import Intro from "@/sections/intro/intro";
import About from "@/sections/about/about";
import Stacks from "../sections/stacks/stacks";
import Experience from "@/sections/experience/experience";
import GradualBlur from "@/components/gradual-blur/gradual-blur";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Stacks />
      <Experience />
      {/*<GradualBlur*/}
      {/*  target="page"*/}
      {/*  position="bottom"*/}
      {/*  height="4rem"*/}
      {/*  strength={2}*/}
      {/*  divCount={5}*/}
      {/*  curve="bezier"*/}
      {/*  exponential*/}
      {/*  opacity={1}*/}
      {/*/>*/}
    </>
  );
}
