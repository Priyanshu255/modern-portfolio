"use client";

import { useEffect, useRef } from "react";

const DOTS = 20;
const SIZE = 26;

type Dot = {
  x: number;
  y: number;
  scale: number;
  el: HTMLSpanElement;
};

export default function InkCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Build dots
    for (let i = 0; i < DOTS; i++) {
      const span = document.createElement("span");
      const scale = 1 - i * 0.05;

      span.style.transform = `translate(-50%, -50%) scale(${scale})`;
      cursor.appendChild(span);

      dotsRef.current.push({
        x: 0,
        y: 0,
        scale,
        el: span,
      });
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const render = () => {
      let x = mouseRef.current.x;
      let y = mouseRef.current.y;

      dotsRef.current.forEach((dot, i) => {
        dot.x = x;
        dot.y = y;

        dot.el.style.transform = `
          translate(${dot.x}px, ${dot.y}px)
          translate(-50%, -50%)
          scale(${dot.scale})
        `;

        const next = dotsRef.current[i + 1] || dotsRef.current[0];
        x += (next.x - dot.x) * 0.35;
        y += (next.y - dot.y) * 0.35;
      });

      rafRef.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      cursor.innerHTML = "";
      dotsRef.current = [];
    };
  }, []);

  return (
    <>
      {/* Gooey filter */}
      <svg style={{ display: "none" }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 35 -15"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div ref={cursorRef} className="ink-cursor" />
    </>
  );
}
