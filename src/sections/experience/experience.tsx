'use client'

import './styles.scss';
import {type CSSProperties, type ComponentType, type SVGProps, useEffect, useRef, useState} from "react";
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
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  preventOverlaps: true,
});

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
  '--asset-opacity': string;
  '--float-distance': string;
  '--float-distance-negative': string;
  '--asset-rotation': string;
};

type PlasmaShot = {
  id: string;
  fromX: number;
  fromY: number;
  dx: number;
  dy: number;
};

type ImpactBloom = {
  id: string;
  x: number;
  y: number;
};

type ScorePopup = {
  id: string;
  x: number;
  y: number;
  value: number;
};

type PlasmaShotStyle = CSSProperties & {
  '--shot-dx': string;
  '--shot-dy': string;
};

const EXPLOSION_DURATION_MS = 300;
const SHOT_DURATION_MS = 200;
const BLOOM_DURATION_MS = 300;
const SCORE_POP_DURATION_MS = 650;
const GAME_OVER_BLINK_MS = 3000;
const GAME_OVER_TO_PLAY_AGAIN_DELAY_MS = 3000;
const BLOOM_PARTICLE_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315] as const;

const PLANET_IDS = new Set(['earth', 'jupiter', 'mars', 'moon', 'neptune', 'pluto', 'saturn']);

type ScoreOutcome = {
  points: number;
  isGameOver: boolean;
};

const getScoreOutcome = (assetId: string): ScoreOutcome => {
  if (PLANET_IDS.has(assetId)) {
    return { points: 0, isGameOver: true };
  }

  if (assetId.startsWith('asteroid-')) {
    return { points: 50, isGameOver: false };
  }

  if (assetId === 'death-star') {
    return { points: 100, isGameOver: false };
  }

  if (assetId.startsWith('satellite-') || assetId.startsWith('ring-ship-') || assetId.startsWith('station-')) {
    return { points: -30, isGameOver: false };
  }

  return { points: 0, isGameOver: false };
};

const floatingAssets: FloatingAsset[] = [
  { id: 'asteroid-a', Asset: AsteroidSVG, top: '8%', left: '6%', size: 76, opacity: 1, drift: 18, duration: 8.5, delay: -2.1, rotation: -10, zIndex: 0 },
  { id: 'asteroid-b', Asset: AsteroidSVG, top: '57%', right: '4%', size: 80, opacity: 1, drift: 14, duration: 7.9, delay: -1.9, rotation: 23, zIndex: 0 },
  { id: 'asteroid-c', Asset: AsteroidSVG, top: '19%', left: '54%', size: 74, opacity: 1, drift: 16, duration: 8.7, delay: -3.3, rotation: 14, zIndex: 0 },
  { id: 'asteroid-d', Asset: AsteroidSVG, top: '46%', right: '28%', size: 92, opacity: 1, drift: 21, duration: 9.4, delay: -2.6, rotation: -18, zIndex: 0 },
  { id: 'asteroid-e', Asset: AsteroidSVG, top: '73%', left: '39%', size: 52, opacity: 1, drift: 13, duration: 7.4, delay: -4.1, rotation: 27, zIndex: 0 },
  { id: 'asteroid-f', Asset: AsteroidSVG, top: '88%', right: '16%', size: 70, opacity: 1, drift: 18, duration: 8.9, delay: -1.4, rotation: -7, zIndex: 0 },
  { id: 'death-star', Asset: DeathStarSVG, top: '18%', right: '9%', size: 128, opacity: 1, drift: 24, duration: 12.2, delay: -1.7, rotation: 8, zIndex: 0 },
  { id: 'earth', Asset: EarthSVG, top: '24%', left: '24%', size: 102, opacity: 1, drift: 20, duration: 11.4, delay: -4.2, rotation: -6, zIndex: 0 },
  { id: 'jupiter', Asset: JupiterSVG, top: '35%', right: '19%', size: 154, opacity: 1, drift: 28, duration: 14.3, delay: -0.8, rotation: 12, zIndex: 0 },
  { id: 'mars', Asset: MarsSVG, top: '34%', left: '11%', size: 74, opacity: 1, drift: 16, duration: 9.1, delay: -3.8, rotation: -9, zIndex: 0 },
  { id: 'moon', Asset: MoonSVG, top: '52%', right: '36%', size: 88, opacity: 1, drift: 19, duration: 10.5, delay: -5.5, rotation: 4, zIndex: 0 },
  { id: 'neptune', Asset: NeptuneSVG, top: '60%', left: '31%', size: 132, opacity: 1, drift: 26, duration: 13.7, delay: -2.8, rotation: 7, zIndex: 0 },
  { id: 'pluto', Asset: PlutoSVG, top: '70%', right: '8%', size: 62, opacity: 1, drift: 15, duration: 8.8, delay: -1.1, rotation: -14, zIndex: 0 },
  { id: 'saturn', Asset: SaturnSVG, top: '78%', left: '16%', size: 146, opacity: 1, drift: 25, duration: 12.9, delay: -6.1, rotation: 10, zIndex: 0 },
  { id: 'ring-ship-a', Asset: RingShipSVG, top: '14%', left: '44%', size: 76, opacity: 1, drift: 21, duration: 9.7, delay: -4.6, rotation: 18, zIndex: 0 },
  { id: 'ring-ship-b', Asset: RingShipSVG, top: '66%', right: '23%', size: 94, opacity: 1, drift: 23, duration: 11.8, delay: -3.3, rotation: -22, zIndex: 0 },
  { id: 'satellite-a', Asset: SatelliteSVG, top: '30%', right: '33%', size: 72, opacity: 1, drift: 27, duration: 10.2, delay: -5.2, rotation: 14, zIndex: 0 },
  { id: 'satellite-b', Asset: SatelliteSVG, top: '84%', right: '41%', size: 58, opacity: 1, drift: 18, duration: 8.6, delay: -2.4, rotation: -12, zIndex: 0 },
  { id: 'station-a', Asset: StationSVG, top: '40%', left: '42%', size: 118, opacity: 1, drift: 24, duration: 13.1, delay: -0.5, rotation: -16, zIndex: 0 },
  { id: 'station-b', Asset: StationSVG, top: '90%', left: '56%', size: 82, opacity: 1, drift: 20, duration: 10.9, delay: -6.4, rotation: 9, zIndex: 0 },
];

export default function Experience() {

  const container = useRef<HTMLDivElement | null>(null);
  const floatingAssetRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const timeoutRefs = useRef<number[]>([]);
  const shotCounter = useRef(0);

  const [activeShots, setActiveShots] = useState<PlasmaShot[]>([]);
  const [activeBlooms, setActiveBlooms] = useState<ImpactBloom[]>([]);
  const [activeScorePopups, setActiveScorePopups] = useState<ScorePopup[]>([]);
  const [targetedAssets, setTargetedAssets] = useState<Set<string>>(new Set());
  const [explodingAssets, setExplodingAssets] = useState<Set<string>>(new Set());
  const [destroyedAssets, setDestroyedAssets] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isScoreBlinking, setIsScoreBlinking] = useState(false);
  const [canPlayAgain, setCanPlayAgain] = useState(false);
  const [isRespawningAssets, setIsRespawningAssets] = useState(false);
  const scoreElementRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach((timerId) => window.clearTimeout(timerId));
      timeoutRefs.current = [];
    }
  }, []);

  const launchPlasmaShot = (assetId: string) => {
    if (isGameOver || targetedAssets.has(assetId) || explodingAssets.has(assetId) || destroyedAssets.has(assetId)) {
      return;
    }

    const sectionElement = container.current;
    const assetElement = floatingAssetRefs.current[assetId];

    if (!sectionElement || !assetElement) {
      return;
    }

    const assetRect = assetElement.getBoundingClientRect();

    const fromX = window.innerWidth / 2;
    const fromY = window.innerHeight - 40;
    const toX = assetRect.left + (assetRect.width / 2);
    const toY = assetRect.top + (assetRect.height / 2);
    const shotId = `${assetId}-${shotCounter.current}`;
    shotCounter.current += 1;

    setTargetedAssets((previous) => {
      const next = new Set(previous);
      next.add(assetId);
      return next;
    });

    setActiveShots((previous) => [
      ...previous,
      {
        id: shotId,
        fromX,
        fromY,
        dx: toX - fromX,
        dy: toY - fromY,
      }
    ]);

    const hitTimeout = window.setTimeout(() => {
      setActiveShots((previous) => previous.filter((shot) => shot.id !== shotId));
      const bloomId = `bloom-${shotId}`;
      const scorePopId = `score-pop-${shotId}`;
      const outcome = getScoreOutcome(assetId);

      setActiveBlooms((previous) => [
        ...previous,
        {
          id: bloomId,
          x: toX,
          y: toY,
        }
      ]);

      const bloomTimeout = window.setTimeout(() => {
        setActiveBlooms((previous) => previous.filter((bloom) => bloom.id !== bloomId));
      }, BLOOM_DURATION_MS);

      if (!outcome.isGameOver && outcome.points !== 0) {
        setActiveScorePopups((previous) => [
          ...previous,
          {
            id: scorePopId,
            x: toX + 24,
            y: toY - 12,
            value: outcome.points,
          }
        ]);

        const scorePopTimeout = window.setTimeout(() => {
          setActiveScorePopups((previous) => previous.filter((popup) => popup.id !== scorePopId));
        }, SCORE_POP_DURATION_MS);

        timeoutRefs.current.push(scorePopTimeout);
      }

      setTargetedAssets((previous) => {
        const next = new Set(previous);
        next.delete(assetId);
        return next;
      });

      setExplodingAssets((previous) => {
        const next = new Set(previous);
        next.add(assetId);
        return next;
      });

      const removeTimeout = window.setTimeout(() => {
        setExplodingAssets((previous) => {
          const next = new Set(previous);
          next.delete(assetId);
          return next;
        });

        setDestroyedAssets((previous) => {
          const next = new Set(previous);
          next.add(assetId);
          return next;
        });

        if (outcome.isGameOver) {
          setIsGameOver(true);
          setIsScoreBlinking(true);

          const stopBlinkTimeout = window.setTimeout(() => {
            setIsScoreBlinking(false);

            const showPlayAgainTimeout = window.setTimeout(() => {
              setCanPlayAgain(true);
            }, GAME_OVER_TO_PLAY_AGAIN_DELAY_MS);

            timeoutRefs.current.push(showPlayAgainTimeout);
          }, GAME_OVER_BLINK_MS);

          timeoutRefs.current.push(stopBlinkTimeout);
          return;
        }

        setScore((previous) => Math.max(0, previous + outcome.points));
      }, EXPLOSION_DURATION_MS);

      timeoutRefs.current.push(removeTimeout);
      timeoutRefs.current.push(bloomTimeout);
    }, SHOT_DURATION_MS);

    timeoutRefs.current.push(hitTimeout);
  };

  const restartGame = () => {
    setScore(0);
    setIsGameOver(false);
    setIsScoreBlinking(false);
    setCanPlayAgain(false);
    setActiveBlooms([]);
    setActiveScorePopups([]);
    setTargetedAssets(new Set());
    setExplodingAssets(new Set());
    setDestroyedAssets(new Set());

    setIsRespawningAssets(true);
    const respawnFadeTimeout = window.setTimeout(() => {
      setIsRespawningAssets(false);
    }, 40);

    timeoutRefs.current.push(respawnFadeTimeout);
  };

  const shootPlayAgain = () => {
    if (!canPlayAgain || !scoreElementRef.current) {
      return;
    }

    const scoreRect = scoreElementRef.current.getBoundingClientRect();
    const fromX = window.innerWidth / 2;
    const fromY = window.innerHeight - 40;
    const toX = scoreRect.left + (scoreRect.width / 2);
    const toY = scoreRect.top + (scoreRect.height / 2);
    const shotId = `restart-${shotCounter.current}`;
    shotCounter.current += 1;

    setActiveShots((previous) => [
      ...previous,
      {
        id: shotId,
        fromX,
        fromY,
        dx: toX - fromX,
        dy: toY - fromY,
      }
    ]);

    const restartTimeout = window.setTimeout(() => {
      setActiveShots((previous) => previous.filter((shot) => shot.id !== shotId));
      restartGame();
    }, SHOT_DURATION_MS);

    timeoutRefs.current.push(restartTimeout);
  };

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
      '.score',
      {
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: '#experience',
          start: 'top+=3500 top',
          end: '+=200',
          scrub: 1,
        },
        opacity: 1,
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
      <h1
        ref={scoreElementRef}
        className={`score ${isScoreBlinking ? 'is-blinking' : ''} ${canPlayAgain ? 'cursor-target is-play-again' : ''}`}
        onClick={shootPlayAgain}
      >
        {canPlayAgain ? 'PLAY AGAIN ?' : isGameOver ? 'GAME OVER' : `SCORE ${score}`}
      </h1>
      <DottedLineSVG className="dotted-line"/>
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
        className={`space-assets-layer ${isRespawningAssets ? 'is-respawning' : ''}`}
        aria-hidden="true"
      >
        {floatingAssets.map((asset) => {
          if (destroyedAssets.has(asset.id)) {
            return null;
          }

          const assetStyle: FloatingAssetStyle = {
            top: asset.top,
            left: asset.left,
            right: asset.right,
            width: `${asset.size}px`,
            height: `${asset.size}px`,
            '--asset-opacity': `${asset.opacity}`,
            zIndex: asset.zIndex,
            animationDuration: `${asset.duration}s`,
            animationDelay: `${asset.delay}s`,
            '--float-distance': `${asset.drift}px`,
            '--float-distance-negative': `-${asset.drift}px`,
            '--asset-rotation': `${asset.rotation}deg`,
          };

          return (
            <div
              key={asset.id}
              ref={(element) => {
                floatingAssetRefs.current[asset.id] = element;
              }}
              className={`space-asset cursor-target ${PLANET_IDS.has(asset.id) ? 'is-planet' : ''} ${explodingAssets.has(asset.id) ? 'is-exploding' : ''}`}
              style={assetStyle}
              onClick={() => launchPlasmaShot(asset.id)}
            >
              <asset.Asset />
            </div>
          )
        })}
      </div>
      <div
        className="experience-effects-layer"
        aria-hidden="true"
      >
        {activeShots.map((shot) => {
          const shotStyle: PlasmaShotStyle = {
            left: `${shot.fromX}px`,
            top: `${shot.fromY}px`,
            '--shot-dx': `${shot.dx}px`,
            '--shot-dy': `${shot.dy}px`,
            animationDuration: `${SHOT_DURATION_MS}ms`
          };

          return (
            <span
              key={shot.id}
              className="plasma-bullet"
              style={shotStyle}
            />
          )
        })}
        {activeBlooms.map((bloom) => (
          <span
            key={bloom.id}
            className="impact-bloom"
            style={{
              left: `${bloom.x}px`,
              top: `${bloom.y}px`,
              animationDuration: `${BLOOM_DURATION_MS}ms`
            }}
          >
            {BLOOM_PARTICLE_ANGLES.map((angle) => (
              <span
                key={`${bloom.id}-${angle}`}
                className="impact-particle"
                style={{
                  '--particle-angle': `${angle}deg`
                } as CSSProperties}
              />
            ))}
          </span>
        ))}
        {activeScorePopups.map((popup) => (
          <span
            key={popup.id}
            className={`score-pop ${popup.value < 0 ? 'is-negative' : 'is-positive'}`}
            style={{
              left: `${popup.x}px`,
              top: `${popup.y}px`,
              animationDuration: `${SCORE_POP_DURATION_MS}ms`
            }}
          >
            {popup.value > 0 ? `+${popup.value}` : popup.value}
          </span>
        ))}
      </div>
      <div
        id="job-1"
        className="job"
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
        className="job"
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
        className="job"
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
