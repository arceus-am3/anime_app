"use client";

import React, { useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(120,160,255,0.35)",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<Position>({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={`
        relative overflow-hidden rounded-2xl
        border border-white/10
        bg-gradient-to-b from-white/[0.04] to-white/[0.02]
        backdrop-blur-xl
        shadow-lg shadow-black/20
        transition-all duration-300
        hover:border-white/20 hover:shadow-xl hover:shadow-black/30
        ${className}
      `}
    >
      {/* glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: visible ? 1 : 0,
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />

      {/* subtle shine overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 hover:opacity-100 transition duration-500" />

      <div className="relative z-10 p-7">{children}</div>
    </div>
  );
};

export default SpotlightCard;
