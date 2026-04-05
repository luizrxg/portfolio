"use client"

import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from "@gsap/react";
import {useRef, useState} from "react";
import Letters from "@/components/letters/letters";
import './styles.scss';
import Image from "next/image";
import Ribbons from "@/components/ribbons/ribbons";

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
        duration: 2,
        y: 0,
        opacity: 1,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
        onComplete: () => setIntroAnimationCompleted(true)
      }
    );

    gsap.fromTo(
      '[id^="greeting-letter-"]',
      {
        y: 0,
        filter: 'none',
        opacity: 1
      },
      {
        scrollTrigger: {
          trigger: '#intro',
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
        x: -2000,
      },
      {
        scrollTrigger: {
          trigger: '#intro',
          start: 'top top',
          end: '+=1400',
          scrub: 1,
        },
        x: -6000,
      }
    )

    gsap.fromTo('.cloud', {
      right: 100,
    }, {
      scrollTrigger: {
        trigger: '#intro',
        start: 'top top',
        end: '+=1000',
        scrub: 3,
      },
      right: '100vw',
    })

    gsap.fromTo('.hills', {
      scale: 1,
    }, {
      scrollTrigger: {
        trigger: '#intro',
        start: 'top top',
        end: '+=1000',
        scrub: 3,
      },
      scale: 1.5,
    })
  }, { scope: container });

  return (
    <div
      ref={container}
      id="intro"
    >
      <Image
        src="/assets/images/cloud.png"
        alt="Cloud"
        className="cloud"
        width={800}
        height={345}
        loading="eager"
        priority
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

      <Image
        src="/assets/images/hills.png"
        alt="Hills"
        className="hills"
        width={5760}
        height={3838}
        loading="eager"
        priority
      />

      <div className="presenting-text-container">
        <Letters
          id="presenting-letter"
          letterClassName="presenting-letter"
          containerClassName="presenting-text"
        >
          Front-end Developer ✦ Front-end Developer ✦ Front-end Developer ✦ Front-end Developer
        </Letters>
      </div>
    </div>
  )
}