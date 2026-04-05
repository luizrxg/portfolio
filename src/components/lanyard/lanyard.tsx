'use client'

import './styles.scss'
import GlassSurface from "@/components/glass-surface/glass-surface";
import {IconRepeat, IconFingerprint} from "@tabler/icons-react";
import {useState} from "react";
import Image from "next/image";
import TiltedCard from "@/components/tilted-card/titled-card";

export default function Lanyard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="tilted-card-wrapper">
      <TiltedCard>
        <div
          onClick={flipCard}
          className="lanyard-wrapper"
        >
          <div className={`lanyard-container ${isFlipped ? 'flipped' : ''}`}>
            <Image
              src="/assets/images/me.png"
              alt="Human"
              className="me"
              width={960}
              height={1280}
              loading="eager"
              priority
            />
            <div
              className="lanyard-flip-icon"
            >
              <IconRepeat />
            </div>
            <div
              className="lanyard-fingerprint-icon"
            >
              <IconFingerprint />
            </div>
            <aside className="lanyard-content">
              <div>
                <h2>Front-end Dev</h2>
                <h1>Luiz Gomes</h1>
              </div>
            </aside>
          </div>
          <div className={`lanyard-back-container ${isFlipped ? 'flipped' : ''}`}>
            <div
              className="lanyard-flip-icon"
            >
              <IconRepeat />
            </div>
            <aside className="lanyard-back-content">
              <div>
                <h2>Email</h2>
                <h1>luizrxg@gmail.com</h1>
              </div>
              <div>
                <h2>Phone</h2>
                <h1>+55 34 99840 4105</h1>
              </div>
              <div>
                <h2>Github</h2>
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
                <h2>LinkedIn</h2>
                <h1>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/luiz-ricardo-xavier-gomes-1a9838209/"
                  >
                    Luiz Ricardo Xavier Gomes
                  </a>
                </h1>
              </div>
            </aside>
          </div>
          <div className={`glass-wrapper ${isFlipped ? 'flipped' : ''}`}>
            <GlassSurface
              width={400}
              height={600}
              borderRadius={45}
              displace={0}
              distortionScale={0}
              redOffset={0}
              greenOffset={0}
              blueOffset={0}
              brightness={50}
              opacity={0.93}
              borderWidth={0}
              mixBlendMode="color-burn"
              isDarkMode={true}
            />
          </div>
        </div>
      </TiltedCard>
    </div>
  )
}