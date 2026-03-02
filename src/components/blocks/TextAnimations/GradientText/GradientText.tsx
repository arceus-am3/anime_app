"use client";

import React, { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
  colors?: string[];
  speed?: number;
}

export default function GradientText({
  children,
  className = "",
  gradient = false,
  colors = ["#7dd3fc", "#a78bfa", "#7dd3fc"],
  speed = 10,
}: GradientTextProps) {
  const style = gradient
    ? {
        backgroundImage: `linear-gradient(to right, ${colors.join(",")})`,
        animationDuration: `${speed}s`,
        backgroundSize: "300% 100%",
      }
    : {};

  return (
    <span
      className={`
        relative font-semibold tracking-tight
        ${gradient ? "text-transparent bg-clip-text animate-gradient" : "text-white"}
        ${className}
      `}
      style={style}
    >
      {children}
    </span>
  );
}
