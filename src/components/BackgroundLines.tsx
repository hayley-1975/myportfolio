import React from "react";

export function BackgroundLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Primary animated line layer */}
      <svg
        className="absolute -top-20 -left-20 w-[140vw] h-[140vh] opacity-45 animate-wave-slow stroke-cerulean-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 1200"
      >
        <path
          d="M-200 200 C 400 50, 600 500, 1200 150 C 1500 0, 1700 350, 1900 300"
          strokeWidth="1.5"
          strokeDasharray="8 6"
        />
        <path
          d="M-100 450 C 350 250, 700 700, 1100 400 C 1450 150, 1600 650, 1850 600"
          strokeWidth="1.2"
        />
        <path
          d="M-50 800 C 450 600, 800 1000, 1300 750 C 1600 580, 1750 900, 1900 850"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Secondary reverse counter-wave layer */}
      <svg
        className="absolute top-10 right-0 w-[130vw] h-[130vh] opacity-35 animate-wave-reverse stroke-cerulean-400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 1200"
      >
        <path
          d="M 1800 100 C 1300 300, 1000 100, 500 500 C 200 750, 0 600, -200 800"
          strokeWidth="1.2"
        />
        <path
          d="M 1700 400 C 1200 700, 900 400, 400 900 C 150 1100, 50 950, -150 1100"
          strokeWidth="1"
          strokeDasharray="6 6"
        />
      </svg>

      {/* Soft radial ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cerulean-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cerulean-300/15 rounded-full blur-3xl" />
    </div>
  );
}