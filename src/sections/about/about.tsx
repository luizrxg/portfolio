'use client'

import './styles.scss';
import Lanyard from "@/components/lanyard/lanyard";
import WaveSVG from "@/assets/svgs/waves.svg";
import {useGSAP} from "@gsap/react";
import {useMemo, useRef, useState} from "react";
import gsap from "gsap";
import StickerPeel from "@/components/sticker-peel/sticker-peel";
import Image from "next/image";
import Hyperspeed from "@/components/hyperspeed/hyperspeed";

export default function About() {

  const [macbookOpen, setMacbookOpen] = useState(false);

  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.waves',
      {
        x: -4000,
        scale: 1,
      },
      {
        scrollTrigger: {
          trigger: '#about',
          start: 'top top',
          end: '+=8000',
          scrub: 1,
        },
        scale: 10,
        x: 4000,
      }
    )

    gsap.fromTo(
      '.tilted-card-wrapper',
      {
        x: -2000,
      },
      {
        scrollTrigger: {
          trigger: '#about',
          start: 'top+=1000 top',
        },
        x: 0,
        ease: "power2.out",
        duration: 2,
      }
    )

    gsap.fromTo(
      '.macbook',
      {
        rotateX: 90,
        y: -60,
      },
      {
        scrollTrigger: {
          trigger: '#about',
          start: 'top+=1000 top',
          end: '+=400',
          scrub: 1,

        },
        rotateX: 0,
        y: 0,
        onComplete: () => setMacbookOpen(true),
      }
    )

    gsap.to(
      '.stickers-container',
      {
        scrollTrigger: {
          trigger: '#about',
          start: 'top+=1400 top',
          end: '+=400',
          scrub: 1,
          pin: true
        },
        rotateY: 180,
        filter: 'none',
      }
    )

    gsap.fromTo(
      '.stickers-zone',
      {
        rotateX: 90,
        y: -52,
      },
      {
        scrollTrigger: {
          trigger: '#about',
          start: 'top+=1000 top',
          end: '+=400',
          scrub: 1,
        },
        rotateX: 0,
        y: 0,
      }
    )
  }, { scope: container })

  const stickerProps = {
    width: 150,
    peelBackHoverPct: 20,
    peelBackActivePct: 30,
    shadowIntensity: .5,
    lightingIntensity: .1,
  }

  const stickerItems = useMemo(() => {

    return [
      { imageSrc: '/assets/images/react.png',      peelDirection: 41,  rotate: -11, initialPosition: { x: 72,  y: 648 } },
      { imageSrc: '/assets/images/node.png',       peelDirection: 227, rotate: -3,  initialPosition: { x: 156, y: 566 } },
      { imageSrc: '/assets/images/angular.png',    peelDirection: 153, rotate: 12,  initialPosition: { x: 854, y: 84 } },
      { imageSrc: '/assets/images/gsap.png',       peelDirection: 318, rotate: -8,  initialPosition: { x: 493, y: 247 } },
      { imageSrc: '/assets/images/typescript.png', peelDirection: 19,  rotate: 9,   initialPosition: { x: 932, y: 361 } },
      { imageSrc: '/assets/images/bun.png',        peelDirection: 204, rotate: 6,   initialPosition: { x: 771, y: 188 } },
      { imageSrc: '/assets/images/sass.png',       peelDirection: 344, rotate: -13, initialPosition: { x: 664, y: 43 } },
      { imageSrc: '/assets/images/next.png',       peelDirection: 88,  rotate: 10,  initialPosition: { x: 304, y: 117 } },
      { imageSrc: '/assets/images/vite.png',       peelDirection: 271, rotate: -9,  initialPosition: { x: 51,  y: 236 } },
      { imageSrc: '/assets/images/npm.png',        peelDirection: 126, rotate: 3,   initialPosition: { x: 200, y: 300 } },
      { imageSrc: '/assets/images/yarn.png',       peelDirection: 239, rotate: -2,  initialPosition: { x: 529, y: 400 } },
      { imageSrc: '/assets/images/java.png',       peelDirection: 12,  rotate: 8,   initialPosition: { x: 427, y: 612 } },
      { imageSrc: '/assets/images/docker.png',     peelDirection: 329, rotate: -5,  initialPosition: { x: 133, y: 686 } },
      { imageSrc: '/assets/images/jest.png',       peelDirection: 63,  rotate: 2,   initialPosition: { x: 28,  y: 399 } },
      { imageSrc: '/assets/images/git.png',        peelDirection: 287, rotate: 14,  initialPosition: { x: 575, y: 194 } },
      { imageSrc: '/assets/images/tailwind.png',   peelDirection: 173, rotate: -7,  initialPosition: { x: 889, y: 271 } },
      { imageSrc: '/assets/images/postgresql.png', peelDirection: 301, rotate: 5,   initialPosition: { x: 715, y: 444 } },
      { imageSrc: '/assets/images/springboot.png', peelDirection: 146, rotate: -4,  initialPosition: { x: 626, y: 557 } },
      { imageSrc: '/assets/images/c#.png',         peelDirection: 258, rotate: 11,  initialPosition: { x: 246, y: 521 } },
      { imageSrc: '/assets/images/figma.png',      peelDirection: 35,  rotate: -10, initialPosition: { x: 373, y: 312 } },
      { imageSrc: '/assets/images/zod.png',        peelDirection: 352, rotate: 7,   initialPosition: { x: 112, y: 95 } },
      { imageSrc: '/assets/images/tanstack.png',   peelDirection: 97,  rotate: -6,  initialPosition: { x: 472, y: 81 } },
      { imageSrc: '/assets/images/three.png',      peelDirection: 214, rotate: -15,   initialPosition: { x: 400, y: 151 } },
      { imageSrc: '/assets/images/storybook.png',  peelDirection: 281, rotate: -1,  initialPosition: { x: 847, y: 583 } },
      { imageSrc: '/assets/images/graphql.png',    peelDirection: 118, rotate: 13,  initialPosition: { x: 289, y: 292 } },
    ]
  }, []);

  return (
    <div
      ref={container}
      id="about"
    >
      <WaveSVG className="waves"/>
      <Lanyard />
      <div
        className="stickers-container"
      >
        <div
          className="macbook-base"
        />
        <Image
          src="/assets/images/macbook.png"
          alt="Macbook"
          width={3629}
          height={2453}
          loading="eager"
          priority
          className={`macbook ${macbookOpen ? 'open' : ''}`}
        />
        <div className={`stickers-zone ${macbookOpen ? 'open' : ''}`}>
          {stickerItems.map((sticker) => (
            <StickerPeel
              key={sticker.imageSrc}
              imageSrc={sticker.imageSrc}
              initialPosition={sticker.initialPosition}
              peelDirection={sticker.peelDirection}
              rotate={sticker.rotate}
              {...stickerProps}
            />
          ))}
        </div>
      </div>
    </div>
  )
}