'use client'

import './styles.scss'
import GlassSurface from "@/components/glass-surface/glass-surface";

export default function Lanyard({
  ...props
} : {
  [key: string]: any
}) {
  return (
    <div className="lanyard-container">
      <div
        className="lanyard"
        {...props}
      >
        <GlassSurface
          width={400}
          height={600}
          borderRadius={30}
          displace={0}
          distortionScale={0}
          redOffset={0}
          greenOffset={0}
          blueOffset={0}
          brightness={50}
          opacity={0.93}
          mixBlendMode="color-burn"
          isDarkMode={true}
        />
        <aside className="lanyard-content">
          <div>
            <h1>Front-end Dev</h1>
            <h1>Luiz Gomes</h1>
          </div>
        </aside>
      </div>
    </div>
  )
}