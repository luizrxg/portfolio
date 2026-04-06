'use client'

import './styles.scss';
import Lanyard from "@/components/lanyard/lanyard";
import WaveSVG from "@/assets/svgs/waves.svg";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import Image from "next/image";

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
          scroller: document.body,
          trigger: '#about',
          start: 'top top',
          end: '+=10000',
          scrub: 1,
        },
        x: 4000,
      }
    )

    gsap.fromTo(
      '.tilted-card-wrapper',
      {
        y: 1000,
      },
      {
        scrollTrigger: {
          scroller: document.body,
          trigger: '#about',
          start: 'top+=800 top',
          end: '+=500',
        },
        y: 0,
        ease: 'back.out',
        duration: 2,
      }
    )

    gsap.fromTo(
      '.flip-me-tip',
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          scroller: document.body,
          trigger: '#about',
          start: 'top+=800 top',
          end: '+=500',
        },
        opacity: 1,
        ease: 'power1.out',
        duration: 2,
      }
    )

    gsap.to(
      '.about-title',
      {
        scrollTrigger: {
          scroller: document.body,
          trigger: '#about',
          start: 'top+=400 top',
        },
        animation: 'flicker-light 5s forwards',
        ease: 'back.out',
        delay: 3,
        duration: 5
      }
    )
  }, { scope: container })


  const aboutMeText = `

    `

  return (
    <div
      ref={container}
      id="about"
    >
      <WaveSVG className="waves"/>
      <div className="about-text-container">
        <h1 className="about-title">
          About me
        </h1>
        <p className="about-text">
          <span>
            I'm a Front-end Developer with 4 years of experience, skilled in technologies such as React,
            Next.js, Angular, Tailwind, PHP, Wordpress, C#, ASP. NET, Node.js, JavaScript/TypeScript,
            Kotlin, Jetpack Compose, Android, SQL, Java and Spring Boot and also specialized in UX/UI,
            APIs REST, web applications e agile methodologies. I have a strong passion for creating intuitive,
            user-friendly and unique interfaces and I am always looking for new challenges to expand my knowledge and skills.
            I am also very proactive and collaborative, always willing to learn and share my knowledge with the team
          </span>
          <span>_</span>
        </p>
      </div>
      <Lanyard />
      <div className="flip-me-tip">
        <p>
          Flip me
        </p>
        <Image
          src="/assets/images/looping-arrow.png"
          alt="Looping arrow"
          className="arrow"
          width={2048}
          height={2048}
        />
      </div>
    </div>
  )
}