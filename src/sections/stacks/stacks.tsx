'use client'

import StickerPeel from "@/components/sticker-peel/sticker-peel";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useMemo, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import './styles.scss';
import TextPressure from "@/components/text-pressure/text-pressure";
import ClickSpark from "@/components/click-spark/click-spark";
import SpikesSVG from "@/assets/svgs/dividers/spikes.svg";
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
      { imageSrc: '/assets/images/react.png',      peelDirection: 41,  rotate: -11, initialPosition: { x: 704, y: 16  } },
      { imageSrc: '/assets/images/node.png',       peelDirection: 227, rotate: -3,  initialPosition: { x: 113, y: 342 } },
      { imageSrc: '/assets/images/angular.png',    peelDirection: 153, rotate: 12,  initialPosition: { x: 289, y: 55  } },
      { imageSrc: '/assets/images/gsap.png',       peelDirection: 318, rotate: -8,  initialPosition: { x: 357, y: 134 } },
      { imageSrc: '/assets/images/typescript.png', peelDirection: 19,  rotate: 9,   initialPosition: { x: 651, y: 249 } },
      { imageSrc: '/assets/images/bun.png',        peelDirection: 204, rotate: 6,   initialPosition: { x: 694, y: 146 } },
      { imageSrc: '/assets/images/sass.png',       peelDirection: 344, rotate: -13, initialPosition: { x: 586, y: 5   } },
      { imageSrc: '/assets/images/next.png',       peelDirection: 88,  rotate: 10,  initialPosition: { x: 179, y: 7   } },
      { imageSrc: '/assets/images/vite.png',       peelDirection: 271, rotate: -9,  initialPosition: { x: 13,  y: 102 } },
      { imageSrc: '/assets/images/npm.png',        peelDirection: 126, rotate: 3,   initialPosition: { x: 150, y: 273 } },
      { imageSrc: '/assets/images/yarn.png',       peelDirection: 239, rotate: -2,  initialPosition: { x: 502, y: 265 } },
      { imageSrc: '/assets/images/java.png',       peelDirection: 12,  rotate: 8,   initialPosition: { x: 429, y: 348 } },
      { imageSrc: '/assets/images/docker.png',     peelDirection: 329, rotate: -5,  initialPosition: { x: 77,  y: 195 } },
      { imageSrc: '/assets/images/jest.png',       peelDirection: 63,  rotate: 2,   initialPosition: { x: 5,   y: 278 } },
      { imageSrc: '/assets/images/git.png',        peelDirection: 287, rotate: 14,  initialPosition: { x: 512, y: 74  } },
      { imageSrc: '/assets/images/tailwind.png',   peelDirection: 173, rotate: -7,  initialPosition: { x: 647, y: 95  } },
      { imageSrc: '/assets/images/postgresql.png', peelDirection: 301, rotate: 5,   initialPosition: { x: 586, y: 351 } },
      { imageSrc: '/assets/images/springboot.png', peelDirection: 146, rotate: -4,  initialPosition: { x: 561, y: 174 } },
      { imageSrc: '/assets/images/c-sharp.png',    peelDirection: 258, rotate: 11,  initialPosition: { x: 235, y: 351 } },
      { imageSrc: '/assets/images/figma.png',      peelDirection: 35,  rotate: -10, initialPosition: { x: 409, y: 169 } },
      { imageSrc: '/assets/images/zod.png',        peelDirection: 352, rotate: 7,   initialPosition: { x: 7,   y: 7   } },
      { imageSrc: '/assets/images/zustand.png',    peelDirection: 97,  rotate: -6,  initialPosition: { x: 393, y: 7   } },
      { imageSrc: '/assets/images/three.png',      peelDirection: 214, rotate: -15, initialPosition: { x: 470, y: 111 } },
      { imageSrc: '/assets/images/storybook.png',  peelDirection: 281, rotate: -1,  initialPosition: { x: 700, y: 300 } },
      { imageSrc: '/assets/images/graphql.png',    peelDirection: 118, rotate: 13,  initialPosition: { x: 272, y: 238 } },
      { imageSrc: '/assets/images/html.png',       peelDirection: 45,  rotate: 3,   initialPosition: { x: 171, y: 157 } },
      { imageSrc: '/assets/images/css.png',        peelDirection: 265, rotate: 9,   initialPosition: { x: 370, y: 296 } },
      { imageSrc: '/assets/images/php.png',        peelDirection: 72,  rotate: 0,   initialPosition: { x: 144, y: 63  } },
      { imageSrc: '/assets/images/kotlin.png',     peelDirection: 270, rotate: 9,   initialPosition: { x: 493, y: 7   } },
      { imageSrc: '/assets/images/android.png',    peelDirection: 45,  rotate: -11, initialPosition: { x: 270, y: 150 } },
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
        <div className="drag-tip">
          <p>
            Drag them around
          </p>
          <Image
            src="/assets/images/looping-arrow.png"
            alt="Looping arrow"
            className="arrow"
            width={2048}
            height={2048}
          />
        </div>
        <SpikesSVG className="spikes"/>

      </ClickSpark>
    </div>
  )
}