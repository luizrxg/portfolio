'use client';

import { useCallback, useEffect, useMemo, useRef, type MouseEvent } from 'react';
import gsap from 'gsap';
import './styles.scss';

interface StringProps {
  width: number;
  height?: number;
}

export default function String({
  width,
  height = 500
}: StringProps) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const safeWidth = useMemo(() => Math.max(Math.round(width), 60), [width]);
  const startX = 20;
  const endX = Math.max(safeWidth - 10, startX + 10);
  const centerY = height / 2;
  const centerX = (startX + endX) / 2;
  const finalPath = useMemo(
    () => `M ${startX} ${centerY} Q ${centerX} ${centerY} ${endX} ${centerY}`,
    [centerX, centerY, endX]
  );

  const animateToPointer = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (!pathRef.current || !svgRef.current) {
        return;
      }

      const rect = svgRef.current.getBoundingClientRect();
      const scaleX = safeWidth / rect.width;
      const scaleY = height / rect.height;
      const x = (event.clientX - rect.left) * scaleX;
      const y = (event.clientY - rect.top) * scaleY;
      const path = `M ${startX} ${centerY} Q ${x} ${y} ${endX} ${centerY}`;

      gsap.to(pathRef.current, {
        attr: { d: path },
        duration: 0.3,
        ease: 'power3.out',
        overwrite: true,
      });
    },
    [centerY, endX, height, safeWidth]
  );

  const resetPath = useCallback(() => {
    if (!pathRef.current) {
      return;
    }

    gsap.to(pathRef.current, {
      attr: { d: finalPath },
      duration: 1.5,
      ease: 'elastic.out(1,0.2)',
      overwrite: true,
    });
  }, [finalPath]);

  useEffect(() => {
    const pathElement = pathRef.current;

    if (!pathElement) {
      return;
    }

    pathElement.setAttribute('d', finalPath);

    return () => {
      gsap.killTweensOf(pathElement);
    };
  }, [finalPath]);

  return (
    <div className="string" onMouseMove={animateToPointer} onMouseLeave={resetPath}>
      <svg ref={svgRef} className="string-svg" width={safeWidth} height={height} viewBox={`0 0 ${safeWidth} ${height}`}>
        <path ref={pathRef} d={finalPath} className="string-path" />
      </svg>
    </div>
  );
}

