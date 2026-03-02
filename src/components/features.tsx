"use client";

import { Tv, Users, Download, MessageCircle, Zap, Sparkles } from "lucide-react";
import SpotlightCard from "./blocks/Components/SpotlightCard/SpotlightCard";
import ScrollFloat from "./blocks/TextAnimations/ScrollFloat/ScrollFloat";

export function Features() {
  const features = [
    {
      icon: <Tv className="h-6 w-6" />,
      title: "Stream Without Limits",
      description:
        "Watch anime in sub, dub, and Hindi dub with smooth playback and minimal buffering.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Watch Together",
      description:
        "Create synchronized watch rooms and enjoy episodes with friends in real time.",
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Offline Downloads",
      description:
        "Save episodes locally and watch anytime without relying on internet speed.",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Community Built-In",
      description:
        "Global chat, friends messaging, and social features designed for anime fans.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Optimized Engine",
      description:
        "Fast loading, smart caching, and optimized streaming infrastructure.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Anime-First Experience",
      description:
        "Everything from UI to features is crafted specifically for anime lovers.",
    },
  ];

  return (
    <section id="features" className="py-28 relative overflow-hidden">

      {/* soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f19] to-transparent opacity-70 pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-5">
        <div className="text-center mb-20">
          <ScrollFloat
            textClassName="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=40%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Built for Anime Fans
          </ScrollFloat>

          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            In Anime combines streaming, community, and personalization into one seamless anime platform.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <SpotlightCard
              key={index}
              className="group h-full p-7 transition duration-300 hover:scale-[1.02]"
            >
              <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2 tracking-tight">
                {feature.title}
              </h3>

              <p className="text-white/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
