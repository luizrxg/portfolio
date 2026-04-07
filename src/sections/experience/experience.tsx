'use client'

import './styles.scss';
import {type CSSProperties, type ComponentType, type SVGProps, useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import DottedLineSVG from '@/assets/svgs/misc/dotted-line.svg'
import SpaceshipSVG from '@/assets/svgs/space/spaceship.svg'
import AsteroidSVG from '@/assets/svgs/space/asteroid.svg'
import DeathStarSVG from '@/assets/svgs/space/death-star.svg'
import EarthSVG from '@/assets/svgs/space/earth.svg'
import JupiterSVG from '@/assets/svgs/space/jupiter.svg'
import MarsSVG from '@/assets/svgs/space/mars.svg'
import MoonSVG from '@/assets/svgs/space/moon.svg'
import NeptuneSVG from '@/assets/svgs/space/neptune.svg'
import PlutoSVG from '@/assets/svgs/space/pluto.svg'
import RingShipSVG from '@/assets/svgs/space/ring-ship.svg'
import SatelliteSVG from '@/assets/svgs/space/satellite.svg'
import SaturnSVG from '@/assets/svgs/space/saturn.svg'
import StationSVG from '@/assets/svgs/space/station.svg'
import FireSVG from '@/assets/svgs/misc/fire.svg'
import Galaxy from "@/components/galaxy/galaxy";
import GlassSurface from "@/components/glass-surface/glass-surface";
import TargetCursor from "@/components/target-cursor/target-cursor";
import FuzzyText from "@/components/fuzzy-text/fuzzy-text";

type SvgAsset = ComponentType<SVGProps<SVGSVGElement>>;

type FloatingAsset = {
  id: string;
  Asset: SvgAsset;
  top: string;
  left?: string;
  right?: string;
  size: number;
  opacity: number;
  drift: number;
  duration: number;
  delay: number;
  rotation: number;
  zIndex: number;
};

type FloatingAssetStyle = CSSProperties & {
  '--float-distance': string;
  '--asset-rotation': string;
};

const floatingAssets: FloatingAsset[] = [
  { id: 'asteroid-a', Asset: AsteroidSVG, top: '8%', left: '6%', size: 56, opacity: 0.72, drift: 18, duration: 8.5, delay: -2.1, rotation: -10, zIndex: 0 },
  { id: 'death-star', Asset: DeathStarSVG, top: '18%', right: '9%', size: 128, opacity: 0.45, drift: 24, duration: 12.2, delay: -1.7, rotation: 8, zIndex: 0 },
  { id: 'earth', Asset: EarthSVG, top: '24%', left: '24%', size: 102, opacity: 0.58, drift: 20, duration: 11.4, delay: -4.2, rotation: -6, zIndex: 0 },
  { id: 'jupiter', Asset: JupiterSVG, top: '35%', right: '19%', size: 154, opacity: 0.36, drift: 28, duration: 14.3, delay: -0.8, rotation: 12, zIndex: 0 },
  { id: 'mars', Asset: MarsSVG, top: '44%', left: '11%', size: 74, opacity: 0.69, drift: 16, duration: 9.1, delay: -3.8, rotation: -9, zIndex: 0 },
  { id: 'moon', Asset: MoonSVG, top: '52%', right: '36%', size: 88, opacity: 0.63, drift: 19, duration: 10.5, delay: -5.5, rotation: 4, zIndex: 0 },
  { id: 'neptune', Asset: NeptuneSVG, top: '60%', left: '31%', size: 132, opacity: 0.39, drift: 26, duration: 13.7, delay: -2.8, rotation: 7, zIndex: 0 },
  { id: 'pluto', Asset: PlutoSVG, top: '70%', right: '8%', size: 62, opacity: 0.74, drift: 15, duration: 8.8, delay: -1.1, rotation: -14, zIndex: 0 },
  { id: 'saturn', Asset: SaturnSVG, top: '78%', left: '16%', size: 146, opacity: 0.42, drift: 25, duration: 12.9, delay: -6.1, rotation: 10, zIndex: 0 },
  { id: 'ring-ship-a', Asset: RingShipSVG, top: '14%', left: '44%', size: 76, opacity: 0.63, drift: 21, duration: 9.7, delay: -4.6, rotation: 18, zIndex: 0 },
  { id: 'ring-ship-b', Asset: RingShipSVG, top: '66%', right: '23%', size: 94, opacity: 0.52, drift: 23, duration: 11.8, delay: -3.3, rotation: -22, zIndex: 0 },
  { id: 'satellite-a', Asset: SatelliteSVG, top: '30%', right: '33%', size: 72, opacity: 0.71, drift: 27, duration: 10.2, delay: -5.2, rotation: 14, zIndex: 0 },
  { id: 'satellite-b', Asset: SatelliteSVG, top: '84%', right: '41%', size: 58, opacity: 0.78, drift: 18, duration: 8.6, delay: -2.4, rotation: -12, zIndex: 0 },
  { id: 'station-a', Asset: StationSVG, top: '40%', left: '42%', size: 118, opacity: 0.47, drift: 24, duration: 13.1, delay: -0.5, rotation: -16, zIndex: 0 },
  { id: 'station-b', Asset: StationSVG, top: '90%', left: '56%', size: 82, opacity: 0.6, drift: 20, duration: 10.9, delay: -6.4, rotation: 9, zIndex: 0 },
  { id: 'asteroid-b', Asset: AsteroidSVG, top: '57%', right: '4%', size: 48, opacity: 0.8, drift: 14, duration: 7.9, delay: -1.9, rotation: 23, zIndex: 0 },
];

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
      '.experience-title',
      {
        top: 1500
      },
      {
        scrollTrigger: {
          trigger: '#experience',
          start: 'top+=3000 top',
          end: '+=5000',
          scrub: 1,
        },
        top: -1000
      }
    )

    gsap.fromTo(
      '#job-1',
      {
        filter: 'blur(100px)',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#job-1',
          start: 'top bottom',
          end: '+=500',
          scrub: 1
        },
        filter: 'blur(0px)',
        opacity: 1,
      }
    )

    gsap.fromTo(
      '#job-2',
      {
        filter: 'blur(100px)',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#job-2',
          start: 'top bottom',
          end: '+=500',
          scrub: 1
        },
        filter: 'blur(0px)',
        opacity: 1,
      }
    )

    gsap.fromTo(
      '#job-3',
      {
        filter: 'blur(100px)',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#job-3',
          start: 'top bottom',
          end: '+=500',
          scrub: 1
        },
        filter: 'blur(0px)',
        opacity: 1,
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
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        glitchMode
        enableHover
        className="experience-title cursor-target"
      >
        JOURNEY
      </FuzzyText>
      <DottedLineSVG className="dotted-line cursor-target"/>
      <div className="spaceship-wrapper cursor-target">
        <div className="spaceship">
          <FireSVG id="fire"/>
          <SpaceshipSVG id="spaceship"/>
        </div>
      </div>
      <div className="galaxy-wrapper">
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction
          density={10}
          glowIntensity={0.15}
          twinkleIntensity={0.1}
          rotationSpeed={0}
          repulsionStrength={.1}
          autoCenterRepulsion={0}
          starSpeed={1}
          speed={.1}
        />
      </div>
      <div
        className="space-assets-layer"
        aria-hidden="true"
      >
        {floatingAssets.map((asset) => {
          const assetStyle: FloatingAssetStyle = {
            top: asset.top,
            left: asset.left,
            right: asset.right,
            width: `${asset.size}px`,
            height: `${asset.size}px`,
            opacity: asset.opacity,
            zIndex: asset.zIndex,
            animationDuration: `${asset.duration}s`,
            animationDelay: `${asset.delay}s`,
            '--float-distance': `${asset.drift}px`,
            '--asset-rotation': `${asset.rotation}deg`,
          };

          return (
            <div
              key={asset.id}
              className="space-asset cursor-target"
              style={assetStyle}
            >
              <asset.Asset />
            </div>
          )
        })}
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
