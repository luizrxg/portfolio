"use client"

import gsap from 'gsap';
import './styles.scss';
import {useRef} from "react";
import {useGSAP} from "@gsap/react";

export default function About() {

  const container = useRef(null);

  const tl = gsap.timeline();

  // useGSAP(() => {
  //   tl.fromTo(
  //
  //   );
  //
  //
  // }, {scope: container});
  //

  return (
    <div
      className="about"
      ref={container}
    >

    </div>
  )
}