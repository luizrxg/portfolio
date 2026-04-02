"use client"

import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from "@gsap/react";
import {useRef, useState} from "react";
import Letters from "@/components/letters/letters";
import './styles.scss';
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const [introAnimationCompleted, setIntroAnimationCompleted] = useState(false);
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
        opacity: .8,
        stagger: 0.2,
        ease: "back.out",
        onComplete: () => setIntroAnimationCompleted(true)
      }
    );

    gsap.fromTo(
      '[id^="greeting-letter-"]',
      {
        y: 0,
        filter: 'none',
        opacity: .8
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
          start: 'top+=200 top',
          end: '+=1200',
          scrub: 1,
        },
        x: -2000,
      }
    )

    gsap.fromTo('.cloud', {
      right: 100,
    }, {
      scrollTrigger: {
        trigger: '.intro',
        start: 'top top',
        end: '+=2500',
        scrub: 2,
      },
      right: '100vw',
    })
  }, { scope: container });

  return (
    <div className="intro" ref={container}>

      <Image
        src="/assets/images/cloud.png"
        alt="cloud"
        className="cloud"
        width={800}
        height={345}
      />
      <div className="greeting-text">
        <Letters
          id="greeting-letter"
          letterClassName={`greeting-letter ${introAnimationCompleted ? 'not-animating' : ''}`}
        >
          Hi,
        </Letters>
        <Letters
          id="greeting-letter"
          letterClassName={`greeting-letter ${introAnimationCompleted ? 'not-animating' : ''}`}
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