"use client"

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import './styles.scss';
import separateLetters from "@/utils/elements";
import {useRef} from "react";
import Letters from "@/components/common/text/letters/letters";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {

  const container = useRef(null);

  useGSAP(() => {
    const introAnim = gsap.fromTo(
      '[id^="greeting-letter-"]',
      {
        opacity: 0,
        y: 300
      },
      {
        duration: .5,
        y: 0,
        opacity: .5,
        stagger: 0.2,
        ease: "back.out"
      }
    );

    gsap.fromTo(
      '[id^="greeting-letter-"]',
      {
        y: 0,
        filter: 'none',
        opacity: 0.5
      },
      {
        scrollTrigger: {
          trigger: '.intro',
          start: 'top top',
          end: '+=300',
          scrub: 1,
          onUpdate: () => {
            if (introAnim.isActive()) {
              introAnim.progress(1);
            }
          }
        },
        y: -300,
        opacity: 0,
        filter: 'blur(20px)',
        stagger: 0.2,
        immediateRender: false
      }
    )

    gsap.fromTo(
      '.presenting-text-container',
      {
        x: 2000,
      },
      {
        scrollTrigger: {
          trigger: '.intro',
          pin: true,
          start: 'top top',
          end: '+=1000',
          scrub: 1,
        },
        x: -2000,
      }
    )
  }, { scope: container });

  return (
    <div className="intro" ref={container}>
      <div className="greeting-text">
        <Letters
          id="greeting-letter"
          letterClassName="greeting-letter"
        >
          Hi,
        </Letters>
        <Letters
          id="greeting-letter"
          letterClassName="greeting-letter"
        >
          I'm Luiz
        </Letters>
      </div>

      <div className="hills"/>

      <div className="presenting-text-container">
        <Letters
          id="presenting-letter"
          letterClassName="presenting-letter"
          containerClassName="presenting-text"
        >
          Front-end Developer
        </Letters>
      </div>
    </div>
  )
}