"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface ChromaGridProps {
  items: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

type SetterFn = (v: number | string) => void;

const CARD_WIDTH = 300;
const GAP = 12; // Tailwind gap-3
const GRID_WIDTH = CARD_WIDTH * 2 + GAP;

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = "",
  radius = 280,
  damping = 0.5,
  fadeOut = 0.7,
  ease = "power3.out",
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);

  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  /* ---------------- measurement ---------------- */

  useEffect(() => {
    const root = rootRef.current;
    const grid = gridRef.current;
    if (!root || !grid) return;

    setX.current = gsap.quickSetter(root, "--x", "px") as SetterFn;
    setY.current = gsap.quickSetter(root, "--y", "px") as SetterFn;


    const measure = () => {
      const r = root.getBoundingClientRect();
      const g = grid.getBoundingClientRect();

      const cx = g.left - r.left + g.width / 2;
      const cy = g.top - r.top + g.height / 2;

      pos.current = { x: cx, y: cy };
      setX.current?.(cx);
      setY.current?.(cy);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(grid);

    return () => ro.disconnect();
  }, []);

  /* ---------------- motion ---------------- */

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      overwrite: true,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const root = rootRef.current!;
    const grid = gridRef.current!;

    const r = root.getBoundingClientRect();
    const g = grid.getBoundingClientRect();

    moveTo(
      clamp(e.clientX - r.left, g.left - r.left, g.right - r.left),
      clamp(e.clientY - r.top, g.top - r.top, g.bottom - r.top)
    );

    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25 });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
    });
  };

  /* ---------------- cards ---------------- */

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  /* ---------------- render ---------------- */

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative flex justify-center ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
          paddingBlock: "2rem",
        } as React.CSSProperties
      }
    >
      {/* GRID (HARD-LOCKED 2×2) */}
      <div
        ref={gridRef}
        className="relative z-10 grid grid-cols-2 gap-3"
        style={{ width: GRID_WIDTH }}
      >
        {items.slice(0, 4).map((c, i) => (
          <article
            key={i}
            onMouseMove={handleCardMove}
            onClick={() => handleCardClick(c.url)}
            className="group relative w-[300px] rounded-[20px] overflow-hidden cursor-pointer"
            style={{
              background: c.gradient,
              "--spotlight-color": "rgba(255,255,255,0.35)",
            } as React.CSSProperties}
          >
            <div
              className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
              }}
            />

            <div className="p-[10px]">
              <div
                className="
                  relative
                  w-full
                  overflow-hidden
                  rounded-[10px]
                  bg-black/20
                "
                style={{ aspectRatio: "4 / 5" }}
              >
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-center
                  "
                />
              </div>
            </div>

            <footer className="p-3 text-white grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
              <h3 className="font-semibold">{c.title}</h3>
              {c.handle && (
                <span className="opacity-80 text-right">{c.handle}</span>
              )}
              <p className="text-sm opacity-85">{c.subtitle}</p>
              {c.location && (
                <span className="text-sm opacity-85 text-right">
                  {c.location}
                </span>
              )}
            </footer>
          </article>
        ))}
      </div>

      {/* MASKS */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, rgba(0,0,0,0.35) 60%, white 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, rgba(0,0,0,0.35) 60%, white 100%)",
        }}
      />

      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none z-40"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y), white 0%, rgba(255,255,255,0.65) 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y), white 0%, rgba(255,255,255,0.65) 60%, transparent 100%)",
        }}
      />
    </div>
  );
};

export default ChromaGrid;