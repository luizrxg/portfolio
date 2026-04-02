"use client"

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import './styles.scss';
import separateLetters from "@/utils/elements";
import {useRef} from "react";

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
        opacity: 0.5
      },
      {
        scrollTrigger: {
          trigger: '.intro',
          start: 'top+=200 top',
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
        <h1>{separateLetters("Hi,", "greeting-letter", "greeting-letter")}</h1>
        <h1>{separateLetters("I'm Luiz", "greeting-letter", "greeting-letter")}</h1>
      </div>

      <div className="hills"/>

      <div className="presenting-text-container">
        <h1 className="presenting-text">
          Front-end Developer
        </h1>
      </div>
    </div>
  )
}