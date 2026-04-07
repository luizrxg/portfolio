'use client'

import SpikesSVG from "@/assets/svgs/dividers/spikes.svg";
import './styles.scss';
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export default function Footer() {

  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.spikes-footer',
      {
        x: -7000,
      },
      {
        scrollTrigger: {
          scroller: document.body,
          trigger: '#stacks',
          start: 'top+=3000 top',
          end: '+=10000',
          scrub: 1,
        },
        x: 1000,
      }
    )

  }, { scope: container })

  return (
    <footer
      ref={container}
      id="footer"
    >
      <SpikesSVG className="spikes-footer"/>
    </footer>
  )
}