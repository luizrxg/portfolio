'use client'

import StickerPeel from "@/components/sticker-peel/sticker-peel";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useMemo, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import './styles.scss';
import TextPressure from "@/components/text-pressure/text-pressure";
import ClickSpark from "@/components/click-spark/click-spark";
import SpikesSVG from "@/assets/svgs/spikes.svg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger)

export default function Stacks() {

  const container = useRef(null);

  useGSAP(() => {
    gsap.set('[id^="my-stacks-letter-"]', { y: -700 })
    gsap.set('.stickers-container', { y: 500 })

    gsap.to(
      '[id^="my-stacks-letter-"]',
      {
        scrollTrigger: {
          trigger: '#stacks',
          start: 'top+=2000 top',
        },
        y: 0,
        filter: 'none',
        opacity: 1,
        stagger: 0.2,
        immediateRender: false,
        ease: 'elastic.out(1, 0.5)',
      }
    )

    gsap.to(
      '.stickers-container',
      {
        scrollTrigger: {
          trigger: '#stacks',
          start: 'top+=2000 top',
          end: '+=400',
          scrub: 1,
        },
        y: -90,
      }
    )

    gsap.fromTo(
      '.spikes',
      {
        x: -7000,
        rotateX: 180,
      },
      {
        scrollTrigger: {
          scroller: document.body,
          trigger: '#stacks',
          start: 'top top',
          end: '+=10000',
          scrub: 1,
        },
        rotateX: 180,
        x: 1000,
      }
    )

  }, { scope: container })

  const stickerItems = useMemo(() => {

    return [
      { imageSrc: '/assets/images/react.png',      peelDirection: 41,  rotate: -11, initialPosition: { x: 720, y: 60  } },
      { imageSrc: '/assets/images/node.png',       peelDirection: 227, rotate: -3,  initialPosition: { x: 266, y: 406 } },
      { imageSrc: '/assets/images/angular.png',    peelDirection: 153, rotate: 12,  initialPosition: { x: 704, y: 84  } },
      { imageSrc: '/assets/images/gsap.png',       peelDirection: 318, rotate: -8,  initialPosition: { x: 493, y: 207 } },
      { imageSrc: '/assets/images/typescript.png', peelDirection: 19,  rotate: 9,   initialPosition: { x: 932, y: 321 } },
      { imageSrc: '/assets/images/bun.png',        peelDirection: 204, rotate: 6,   initialPosition: { x: 720, y: 258 } },
      { imageSrc: '/assets/images/sass.png',       peelDirection: 344, rotate: -13, initialPosition: { x: 664, y: 0   } },
      { imageSrc: '/assets/images/next.png',       peelDirection: 88,  rotate: 10,  initialPosition: { x: 304, y: 57  } },
      { imageSrc: '/assets/images/vite.png',       peelDirection: 271, rotate: -9,  initialPosition: { x: 51,  y: 196 } },
      { imageSrc: '/assets/images/npm.png',        peelDirection: 126, rotate: 3,   initialPosition: { x: 150, y: 330 } },
      { imageSrc: '/assets/images/yarn.png',       peelDirection: 239, rotate: -2,  initialPosition: { x: 529, y: 360 } },
      { imageSrc: '/assets/images/java.png',       peelDirection: 12,  rotate: 8,   initialPosition: { x: 467, y: 482 } },
      { imageSrc: '/assets/images/docker.png',     peelDirection: 329, rotate: -5,  initialPosition: { x: 103, y: 496 } },
      { imageSrc: '/assets/images/jest.png',       peelDirection: 63,  rotate: 2,   initialPosition: { x: 28,  y: 359 } },
      { imageSrc: '/assets/images/git.png',        peelDirection: 287, rotate: 14,  initialPosition: { x: 575, y: 154 } },
      { imageSrc: '/assets/images/tailwind.png',   peelDirection: 173, rotate: -7,  initialPosition: { x: 789, y: 231 } },
      { imageSrc: '/assets/images/postgresql.png', peelDirection: 301, rotate: 5,   initialPosition: { x: 645, y: 374 } },
      { imageSrc: '/assets/images/springboot.png', peelDirection: 146, rotate: -4,  initialPosition: { x: 646, y: 477 } },
      { imageSrc: '/assets/images/c-sharp.png',    peelDirection: 258, rotate: 11,  initialPosition: { x: 286, y: 481 } },
      { imageSrc: '/assets/images/figma.png',      peelDirection: 35,  rotate: -10, initialPosition: { x: 373, y: 272 } },
      { imageSrc: '/assets/images/zod.png',        peelDirection: 352, rotate: 7,   initialPosition: { x: 112, y: 55  } },
      { imageSrc: '/assets/images/zustand.png',    peelDirection: 97,  rotate: -6,  initialPosition: { x: 472, y: 41  } },
      { imageSrc: '/assets/images/three.png',      peelDirection: 214, rotate: -15, initialPosition: { x: 390, y: 171 } },
      { imageSrc: '/assets/images/storybook.png',  peelDirection: 281, rotate: -1,  initialPosition: { x: 847, y: 443 } },
      { imageSrc: '/assets/images/graphql.png',    peelDirection: 118, rotate: 13,  initialPosition: { x: 289, y: 252 } },
      { imageSrc: '/assets/images/html.png',       peelDirection: 45,  rotate: 3,   initialPosition: { x: 180, y: 180 } },
      { imageSrc: '/assets/images/css.png',        peelDirection: 265, rotate: 9,   initialPosition: { x: 400, y: 422 } },
      { imageSrc: '/assets/images/php.png',        peelDirection: 72, rotate: 0,    initialPosition: { x: 254, y: 10  } },
    ]
  }, []);

  return (
    <div
      ref={container}
      id="stacks"
    >
      <ClickSpark
        sparkColor='#fff'
        sparkSize={20}
        sparkRadius={60}
        sparkCount={8}
        duration={400}
        extraScale={.5}
      >
        <div className="stacks-title-container">
          <TextPressure
            text="My⠀Stacks."
            flex={false}
            fontFamily="var(--font-serif)"
            textColor="#ffffff"
            minFontSize={200}
            maxFontSize={200}
            lettersId="my-stacks-letter"
          />
        </div>
        <div
          className="stickers-container"
        >
          <Image
            src="/assets/images/suitcase.png"
            alt="Briefcase"
            width={2849}
            height={2371}
          />
          <div className="stickers-zone">
            {stickerItems.map((sticker) => (
              <StickerPeel
                key={sticker.imageSrc}
                imageSrc={sticker.imageSrc}
                initialPosition={sticker.initialPosition}
                peelDirection={sticker.peelDirection}
                rotate={sticker.rotate}
                width={96}
                peelBackHoverPct={20}
                peelBackActivePct={30}
                shadowIntensity={.5}
                lightingIntensity={.1}
              />
            ))}
          </div>
        </div>
        <SpikesSVG className="spikes"/>

      </ClickSpark>
    </div>
  )
}