'use client'

import './styles.scss';
import Lanyard from "@/components/lanyard/lanyard";
import WavesSVG from "@/assets/svgs/dividers/waves.svg";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import Image from "next/image";
import ScrambledText from "@/components/scrambled-text/scrambled-text";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  preventOverlaps: true,
});

export default function About() {

  const container = useRef(null);

  useGSAP(() => {

    gsap.fromTo(
      '.waves-top',
      {
        x: -4000,
      },
      {
        scrollTrigger: {
          scroller: document.body,
          trigger: '#about',
          start: 'top top',
          end: '+=20000',
          scrub: 1,
        },
        x: 4000,
      }
    )

    gsap.fromTo(
      '.waves-bottom',
      {
        x: -4000,
      },
      {
        scrollTrigger: {
          scroller: document.body,
          trigger: '#about',
          start: 'top top',
          end: '+=20000',
          scrub: 1,
        },
        x: 4000,
      }
    )

    gsap.fromTo(
      '.tilted-card-wrapper',
      {
        x: 1000,
        opacity: 0
      },
      {
        scrollTrigger: {
          scroller: document.body,
          trigger: '#about',
          start: 'top+=800 top',
          end: '+=500',
        },
        x: 0,
        opacity: 1,
        ease: 'back.out',
        duration: 2,
      }
    )

    gsap.fromTo(
      '.flip-tip',
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          scroller: document.body,
          trigger: '#about',
          start: 'top+=1000 top',
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
        animation: 'flicker-light 3s linear forwards',
        ease: 'back.out',
        delay: 3,
        duration: 5
      }
    )
  }, { scope: container })

  return (
    <div
      ref={container}
      id="about"
    >
      <WavesSVG className="waves-top"/>
      <div className="about-text-container">
        <h1 className="about-title">
          About me
        </h1>
        <div className="about-text-wrapper">
          <ScrambledText
            className="about-text"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            <span>I'm a Front-end Developer with 4 years of experience </span>
            <span>skilled in technologies such as React, Next.js, Angular, </span>
            <span>Tailwind, PHP, Wordpress, C#, ASP. NET, Node.js, JavaScript/TypeScript, Kotlin, </span>
            <span>Jetpack Compose, Android, SQL, Java and Spring Boot and also specialized in UX/UI, </span>
            <span>APIs REST, web applications e agile methodologies, </span>
            <span>currently studying Information Systems at the Federal University of Uberlândia. </span>
          </ScrambledText>
          <ScrambledText
            className="about-text"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            <span>I have a strong passion for creating intuitive, </span>
            <span>user-friendly and unique interfaces and I am always looking for new challenges to expand my knowledge and skills.</span>
          </ScrambledText>
          <ScrambledText
            className="about-text"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            <span>I am also very proactive and collaborative, always</span>
            <span>willing to learn and share my knowledge with the team. </span>
          </ScrambledText>
        </div>
      </div>
      <Lanyard />
      <div className="flip-tip">
        <p>
          Flip it
        </p>
        <Image
          src="/assets/images/looping-arrow.png"
          alt="Looping arrow"
          className="arrow"
          width={2048}
          height={2048}
        />
      </div>
      <WavesSVG className="waves-bottom"/>
    </div>
  )
}