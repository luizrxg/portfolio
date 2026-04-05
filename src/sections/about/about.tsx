'use client'

import './styles.scss';
import Lanyard from "@/components/lanyard/lanyard";
import WaveSVG from "@/assets/svgs/waves.svg";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import StickerPeel from "@/components/sticker-peel/sticker-peel";

export default function About() {

  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.waves',
      {
        x: -4000,
      },
      {
        scrollTrigger: {
          trigger: '.about',
          start: 'top top',
          end: '+=6000',
          scrub: 1,
        },
        x: 4000,
      }
    )

    gsap.fromTo(
      '.tilted-card-wrapper',
      {
        x: -2000,
        rotate3d: '0, 1, 0, 720deg',
      },
      {
        scrollTrigger: {
          trigger: '.about',
          start: 'top+=1000 top',
        },
        x: 0,
        rotate3d: '0, 1, 0, 0deg',
        ease: "elastic.out(.2, 0.1)",
        duration: 2,
      }
    )

    gsap.fromTo(
      '.stickers-container',
      {
        scale: 0,
      },
      {
        scrollTrigger: {
          trigger: '.about',
          start: 'top+=1000 top',
        },
        scale: 1,
        ease: "elastic.out",
        duration: 2,
      }
    )
  }, { scope: container })

  const stickerProps = {
    width: 200,
    rotate: 0,
    peelBackHoverPct: 40,
    peelBackActivePct: 50,
    shadowIntensity: 0,
    lightingIntensity: 1,
  }

  return (
    <div
      ref={container}
      className="about"
    >
      <WaveSVG className="waves"/>
      <Lanyard />
      <div
        className="stickers-container"
      >
        <div className="stickers-zone">
          <StickerPeel
            imageSrc={'/assets/images/react.png'}
            initialPosition={{ x: 0, y: 0 }}
            peelDirection={67}
            {...stickerProps}
          />
          <StickerPeel
            imageSrc={'/assets/images/node.png'}
            initialPosition={{ x: 50, y: 70 }}
            peelDirection={243}
            {...stickerProps}
          />
          <StickerPeel
            imageSrc={'/assets/images/angular.png'}
            initialPosition={{ x: 50, y: 70 }}
            peelDirection={243}
            {...stickerProps}
          />
          <StickerPeel
            imageSrc={'/assets/images/gsap.png'}
            initialPosition={{ x: 50, y: 70 }}
            peelDirection={243}
            {...stickerProps}
          />
          <StickerPeel
            imageSrc={'/assets/images/typescript.png'}
            initialPosition={{ x: 50, y: 70 }}
            peelDirection={30}
            {...stickerProps}
          />
        </div>
      </div>
    </div>
  )
}