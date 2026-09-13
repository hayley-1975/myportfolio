import React from "react";

export function BackgroundLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Primary light cerulean moving path */}
      <svg
        className="absolute -top-20 -left-20 w-[145vw] h-[135vh] opacity-35 animate-wave-fast stroke-cerulean-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 1200"
      >
        <path
          d="M-200 220 C 350 40, 650 520, 1150 140 C 1450 -20, 1680 340, 1920 280"
          strokeWidth="1.2"
        />
        <path
          d="M-100 480 C 380 240, 720 740, 1120 380 C 1480 140, 1620 680, 1880 580"
          strokeWidth="1"
          strokeDasharray="8 6"
        />
        <path
          d="M-80 780 C 420 540, 820 1020, 1320 720 C 1620 540, 1780 920, 1940 820"
          strokeWidth="0.9"
        />
      </svg>

      {/* Reverse subtle counter wave */}
      <svg
        className="absolute top-5 right-0 w-[135vw] h-[135vh] opacity-25 animate-wave-reverse-fast stroke-cerulean-200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 1200"
      >
        <path
          d="M 1850 80 C 1320 320, 980 80, 480 520 C 180 780, -20 620, -220 820"
          strokeWidth="1.2"
        />
        <path
          d="M 1720 380 C 1180 720, 880 380, 380 920 C 120 1120, 20 960, -180 1120"
          strokeWidth="1"
          strokeDasharray="10 8"
        />
      </svg>

      {/* Ambient background glow highlights */}
      <div className="absolute top-10 right-1/4 w-[380px] h-[380px] bg-cerulean-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-cerulean-200/20 rounded-full blur-3xl" />
    </div>
  );
}