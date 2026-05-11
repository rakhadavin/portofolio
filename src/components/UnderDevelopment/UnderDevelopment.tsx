"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  duration: Math.random() * 6 + 5,
  delay: Math.random() * 4,
}));

const CODE_LINES = [
  "const future = await build();",
  "if (ready) deploy();",
  "// TODO: launch 🚀",
  "git commit -m 'almost there'",
  "npm run build -- --prod",
  "return <MagicHappensHere />;",
];

export default function UnderDevelopment() {
  const [typed, setTyped] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = CODE_LINES[lineIndex];

    if (charIndex < current.length) {
      const t = setTimeout(() => {
        setTyped((p) => p + current[charIndex]);
        setCharIndex((c) => c + 1);
      }, 45);

      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setTyped("");
      setCharIndex(0);
      setLineIndex((l) => (l + 1) % CODE_LINES.length);
    }, 1800);

    return () => clearTimeout(t);
  }, [charIndex, lineIndex]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark-purple font-sans">
      {/* Dot-grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:32px_32px]" />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="pointer-events-none absolute rounded-full bg-purple-main/55 animate-float-up"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            ["--dur" as string]: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Ambient blob — top-left */}
      <div className="pointer-events-none absolute -left-36 -top-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,var(--color-purple-main),transparent_70%)] opacity-35 blur-[90px] animate-blob1" />

      {/* Ambient blob — bottom-right */}
      <div className="pointer-events-none absolute -bottom-28 -right-28 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,var(--color-pink-main),transparent_70%)] opacity-35 blur-[90px] animate-blob2" />

      {/* Glass card */}
      <main className="relative z-10 flex w-[90vw] max-w-[540px] animate-fade-up flex-col items-center rounded-3xl border border-purple-main/25 bg-white/5 px-12 py-14 text-center shadow-[0_32px_80px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-[18px]">
        {/* Badge row */}
        <div className="mb-7 flex items-center gap-2.5">
          <span className="rounded-full border border-pink-main/30 bg-pink-main/10 px-3 py-1 font-mono text-[11px] tracking-[0.14em] text-pink-main">
            WORK IN PROGRESS
          </span>

          <span className="h-1 w-1 rounded-full bg-white/20" />

          <span className="font-mono text-[11px] tracking-[0.14em] text-black-main/35">
            COMING SOON
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-4 text-[clamp(2rem,5vw,3rem)] font-extrabold leading-tight tracking-tight text-white">
          Under <span className="text-white bg-pink-main/30 px-2 rounded-sm">Development</span>
        </h1>

        {/* Sub-copy */}
        <p className="mb-8 text-[15px] leading-[1.7] text-black-main/50">
          This page is being crafted with care.
          <br />
          Check back soon — something great is on its way.
        </p>

        {/* Terminal block */}
        <div className="mb-8 w-full rounded-xl border border-purple-main/20 bg-black/40 px-4 py-3.5 text-left">
          <div className="mb-2.5 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] opacity-85" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e] opacity-85" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840] opacity-85" />
          </div>

          <p className="m-0 min-h-[20px] font-mono text-[13px] text-black-main/70">
            <span className="mr-1.5 text-purple-main">▶</span>
            {typed}
            <span className="inline-block animate-blink text-pink-main">|</span>
          </p>
        </div>

        {/* Divider */}
        <div className="mb-7 h-px w-full bg-gradient-to-r from-transparent via-purple-main/25 to-transparent" />

        {/* Back link */}
        <Link
          href="/"
          className="font-mono text-[13px] tracking-[0.05em] text-black-main/40 no-underline transition-colors duration-200 hover:text-black-main/70"
        >
          ← Back to Home
        </Link>
      </main>
    </div>
  );
}