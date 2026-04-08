'use client'

import SpikesSVG from "@/assets/svgs/dividers/spikes.svg";
import './styles.scss';
import { useEffect, useRef, useState, type MouseEvent } from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {IconAsterisk, IconCopy, IconExternalLinkFilled} from "@tabler/icons-react";
import copyToClipboard from "@/utils/string";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import String from "@/components/string/string";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  preventOverlaps: true,
});

export default function Footer() {

  const container = useRef<HTMLElement | null>(null);
  const toast = useRef<HTMLSpanElement>(null);
  const toastTimeline = useRef<gsap.core.Timeline | null>(null);
  const [footerWidth, setFooterWidth] = useState(1800);

  useEffect(() => {
    if (!container.current) {
      return;
    }

    const updateWidth = () => {
      if (!container.current) {
        return;
      }

      setFooterWidth(container.current.clientWidth - 160);
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(container.current);

    return () => {
      observer.disconnect();
    };
  }, []);

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

  const copyInfo = (e: MouseEvent<HTMLHeadingElement>) => {
    e.preventDefault();
    copyToClipboard(e.currentTarget.innerHTML);

    if (!toast.current) return;

    toastTimeline.current?.kill();
    gsap.killTweensOf(toast.current);

    toastTimeline.current = gsap
      .timeline({overwrite: 'auto'})
      .fromTo(
        toast.current,
        {
          autoAlpha: 0,
          y: 100,
          scale: 0,
          filter: 'blur(10px)',
        },
        {
          autoAlpha: 1,
          y: -50,
          scale: 1,
          ease: 'elastic.out(1, .5)',
          duration: 1.5,
          filter: 'blur(0px)',
        }
      )
      .to(toast.current, {
        autoAlpha: 0,
        y: 100,
        scale: 0,
        ease: 'power2.in',
        duration: 0.6,
        delay: 0,
        filter: 'blur(10px)',
      });
  }

  return (
    <footer
      ref={container}
      id="footer"
    >
      <SpikesSVG className="spikes-footer"/>
      <div className="footer-container">
        <nav className="sections">
          <div>
            <IconAsterisk />
            <a href="#intro">INTRO</a>
            <IconAsterisk />
          </div>
          <div>
            <IconAsterisk />
            <a href="#about">ABOUT ME</a>
            <IconAsterisk />
          </div>
          <div>
            <IconAsterisk />
            <a href="#stacks">STACKS</a>
            <IconAsterisk />
          </div>
          <div>
            <IconAsterisk />
            <a href="#experience">JOURNEY</a>
            <IconAsterisk />
          </div>
        </nav>
        <div className="info">
          <div>
            <h2>E-MAIL</h2>
            <h1
              onClick={copyInfo}
            >
              luizrxg@gmail.com
            </h1>
            <IconCopy />
          </div>
          <div>
            <h2>PHONE</h2>
            <h1
              onClick={copyInfo}
            >
              +55 34 99840 4105
            </h1>
            <IconCopy />
          </div>
          <div>
            <h2>GITHUB</h2>
            <h1>
              <a
                target="_blank"
                href="https://github.com/luizrxg"
              >
                github.com/luizrxg
              </a>
            </h1>
            <IconExternalLinkFilled />
          </div>
          <div>
            <h2>LINKEDIN</h2>
            <h1>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/luiz-ricardo-xavier-gomes-1a9838209/"
              >
                Luiz Ricardo Xavier Gomes
              </a>
            </h1>
            <IconExternalLinkFilled />
          </div>
        </div>
      </div>
      <String
        width={footerWidth}
        height={300}
      />
      <span>Made with Green Sock Animation Platform ©</span>
      <span
        ref={toast}
        className="copied-toast"
      >
        Copied
      </span>
    </footer>
  )
}