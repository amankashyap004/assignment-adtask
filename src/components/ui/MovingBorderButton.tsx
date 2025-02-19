"use client";

import React from "react";

export const MovingBorderButton = ({
  children,
  outerColor = "bg-[#7687B5]/30",
  innerColor = "bg-[#263048]",
  glowColor = "bg-[#E6EDFF]",
}: {
  children: React.ReactNode;
  outerColor?: string;
  innerColor?: string;
  glowColor?: string;
}) => {
  return (
    <button className="relative w-[185px] h-[48px] rounded-full overflow-hidden text-[#E2E8F8]">
      <div
        className={`absolute -bottom-2 left-1/2 -translate-x-1/2 transform h-3 w-2/5 blur-lg ${glowColor} rounded-full z-40`}
      />
      <div className="absolute inset-0 bg-[conic-gradient(transparent_270deg,#7687B5,transparent)] w-full h-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-rotate rounded-full" />
      <div
        className={`absolute inset-[1.2px] ${innerColor} rounded-full flex items-center justify-center `}
      />
      <div
        className={`absolute inset-0 ${outerColor} rounded-full flex items-center justify-center z-30`}
      >
        {children}
      </div>
      <div className="absolute inset-1 flex items-center justify-center z-40">
        <GrowingStars />
      </div>
    </button>
  );
};

const GrowingStars = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-transparent">
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-0 animate-twinkle"
            style={{
              width: `${Math.random() * 1 + 2}px`,
              height: `${Math.random() * 1 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
