'use client'

import './styles.scss';
import Lanyard from "@/components/lanyard/lanyard";
import WaveSVG from "@/assets/svgs/waves.svg";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";

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
      '.lanyard-wrapper',
      {
        x: 2000,
      },
      {
        scrollTrigger: {
          trigger: '.about',
          start: 'top+=500 top',
        },
        x: 0,
        ease: "elastic.out",
      }
    )
  }, { scope: container })

  return (
    <div
      ref={container}
      className="about"
    >
      <Lanyard />
      <WaveSVG className="waves"/>
    </div>
  )
}