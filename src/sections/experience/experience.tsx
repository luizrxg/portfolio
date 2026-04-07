'use client'

import './styles.scss';
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import DottedLineSVG from '@/assets/svgs/misc/dotted-line.svg'
import SpaceshipSVG from '@/assets/svgs/space/spaceship.svg'
import FireSVG from '@/assets/svgs/misc/fire.svg'
import Galaxy from "@/components/galaxy/galaxy";
import GlassSurface from "@/components/glass-surface/glass-surface";
import TargetCursor from "@/components/target-cursor/target-cursor";

export default function Experience() {

  const container = useRef(null);

  useGSAP(() => {
    gsap.to(
      '.spaceship-wrapper',
      {
        scrollTrigger: {
          trigger: '#experience',
          start: 'top+=3000 top',
          end: '+=13000',
          scrub: 1,
        },
        top: 1200,
      }
    )

    gsap.fromTo(
      '.dotted-line',
      {
        height: 80,
      },
      {
        scrollTrigger: {
          trigger: '#experience',
          start: 'top+=3000 top',
          end: '+=13000',
          scrub: 1,
        },
        height: 1280,
      }
    )

    gsap.fromTo(
      '#job-1',
      {
        scale: 0,
      },
      {
        scrollTrigger: {
          trigger: '#experience',
          start: 'top+=4000 top',
        },
        scale: 1,
        ease: 'elastic.out(1, 0.5)',
        duration: 1.5
      }
    )

    gsap.fromTo(
      '#job-2',
      {
        scale: 0,
      },
      {
        scrollTrigger: {
          trigger: '#experience',
          start: 'top+=5000 top',
        },
        scale: 1,
        ease: 'elastic.out(1, 0.5)',
        duration: 1.5
      }
    )

    gsap.fromTo(
      '#job-3',
      {
        scale: 0,
      },
      {
        scrollTrigger: {
          trigger: '#experience',
          start: 'top+=6000 top',
        },
        scale: 1,
        ease: 'elastic.out(1, 0.5)',
        duration: 1.5
      }
    )
  }, { scope: container })


    return (
    <div
      ref={container}
      id="experience"
    >
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <DottedLineSVG className="dotted-line cursor-target"/>
      <div className="spaceship-wrapper cursor-target">
        <div className="spaceship">
          <FireSVG id="fire"/>
          <SpaceshipSVG id="spaceship"/>
        </div>
      </div>
      <div className="galaxy-wrapper">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction
          density={1}
          glowIntensity={0.15}
          twinkleIntensity={0.1}
          rotationSpeed={0}
          repulsionStrength={.5}
          autoCenterRepulsion={0}
          starSpeed={1}
          speed={.1}
        />
      </div>
      <div
        id="job-1"
        className="job cursor-target"
      >
        <GlassSurface
          width={600}
          height={323}
          borderRadius={45}
          displace={2}
          distortionScale={-180}
          redOffset={0}
          greenOffset={10}
          blueOffset={50}
          brightness={100}
          opacity={0.5}
          mixBlendMode="screen"
          isDarkMode={true}
        />
        <h1>ARCOM</h1>
        <h2>
          <span>Full-stack Junior Developer</span>
          <span>•</span>
          <span>3 years</span>
        </h2>
        <aside className="tags">
          <span>React</span>
          <span>Javascript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>SASS</span>
          <span>Vite</span>
          <span>Java</span>
          <span>Node</span>
          <span>SpringBoot</span>
          <span>PostgreSQL</span>
          <span>GraphQL</span>
          <span>npm</span>
          <span>Git</span>
          <span>Figma</span>
          <span>Kotlin</span>
          <span>Android</span>
          <span>Jetpack Compose</span>
        </aside>
      </div>

      <div
        id="job-2"
        className="job cursor-target"
      >
        <GlassSurface
          width={600}
          height={264}
          borderRadius={45}
          displace={2}
          distortionScale={-180}
          redOffset={0}
          greenOffset={10}
          blueOffset={50}
          brightness={100}
          opacity={0.5}
          mixBlendMode="screen"
          isDarkMode={true}
        />
        <h1>BAT (British American Tobacco)</h1>
        <h2>
          <span>Digital Intern</span>
          <span>•</span>
          <span>2 months</span>
        </h2>
        <aside className="tags">
          <span>IoT</span>
          <span>Java</span>
          <span>PowerApps</span>
        </aside>
      </div>

      <div
        id="job-3"
        className="job cursor-target"
      >
        <GlassSurface
          width={600}
          height={323}
          borderRadius={45}
          displace={2}
          distortionScale={-180}
          redOffset={0}
          greenOffset={10}
          blueOffset={50}
          brightness={100}
          opacity={0.5}
          mixBlendMode="screen"
          isDarkMode={true}
        />
        <h1>RTech Solutions Group</h1>
        <h2>
          <span>Front-end Mid-Level Developer</span>
          <span>•</span>
          <span>6 months</span>
        </h2>
        <aside className="tags">
          <span>React</span>
          <span>Next.js</span>
          <span>Angular</span>
          <span>Typescript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>SASS</span>
          <span>Tailwind</span>
          <span>Docker</span>
          <span>Java</span>
          <span>Node</span>
          <span>SpringBoot</span>
          <span>GraphQL</span>
          <span>Bun</span>
          <span>Zod</span>
          <span>Zustand</span>
          <span>Node.js</span>
          <span>Jest</span>
          <span>Git</span>
          <span>Figma</span>
        </aside>
      </div>
    </div>
  )
}
