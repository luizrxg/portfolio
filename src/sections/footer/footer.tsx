'use client'

import SpikesSVG from "@/assets/svgs/dividers/spikes.svg";
import './styles.scss';
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {IconAsterisk} from "@tabler/icons-react";
import copyToClipboard from "@/utils/string";

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

  const copyInfo = (e: any) => {
    e.preventDefault();
    copyToClipboard(e.target.innerHTML);
    e.target.classList.add('copied');
    setTimeout(() => {
      e.target.classList.remove('copied');
    }, 3000)
  }

  return (
    <footer
      ref={container}
      id="footer"
    >
      <SpikesSVG className="spikes-footer"/>
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
      <div className="contact">
        <div>
          <h2>E-MAIL</h2>
          <h1
            onClick={(e) => copyInfo(e)}
          >
            luizrxg@gmail.com
          </h1>
          <span>Copied</span>
        </div>
        <div>
          <h2>PHONE</h2>
          <h1
            onClick={(e) => copyInfo(e)}
          >
            +55 34 99840 4105
          </h1>
          <span>Copied</span>
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
        </div>
      </div>
    </footer>
  )
}