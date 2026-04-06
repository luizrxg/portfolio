'use client'

import './styles.scss';
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export default function Experience() {

  const container = useRef(null);

  useGSAP(() => {
    //
    // gsap.fromTo(
    //   '.spikes',
    //   {
    //     x: -7000,
    //   },
    //   {
    //     scrollTrigger: {
    //       scroller: document.body,
    //       trigger: '#experience',
    //       start: 'top top',
    //       end: '+=10000',
    //       scrub: 1,
    //     },
    //     x: 4000,
    //   }
    // )
  }, { scope: container })


    return (
    <div
      ref={container}
      id="experience"
    >
    </div>
  )
}