import Intro from "@/sections/intro/intro";
import About from "@/sections/about/about";
import FluidGlass from "@/components/fluid-glass/fluid-glass";


export default function Home() {
  return (
    <>
      <Intro />
      <About />
      {/*<FluidGlass*/}
      {/*  lensProps={{*/}
      {/*    scale: 0.25,*/}
      {/*    ior: 1.15,*/}
      {/*    thickness: 5,*/}
      {/*    chromaticAberration: 0.1,*/}
      {/*    anisotropy: 0.01*/}
      {/*  }}*/}
      {/*/>*/}
    </>
  );
}
