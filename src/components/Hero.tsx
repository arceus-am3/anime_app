"use client";

import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Aurora from "@/src/blocks/Backgrounds/Aurora/Aurora";
import Link from "next/link";

const APP_VERSION = "1.0.0";

export function Hero({
  latestRelease,
  totalDownloads,
}: {
  latestRelease: any;
  totalDownloads: number;
}) {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const resize = () => setIsMobile(window.innerWidth < 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const downloadLink =
    isClient && isMobile
      ? latestRelease?.android?.downloadLink
      : latestRelease?.windows?.downloadLink;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">

      {/* Background */}
      <Aurora
        colorStops={["#5b8cff", "#a855f7", "#ff6b9d"]}
        blend={0.7}
        amplitude={0.6}
        speed={0.35}
      />

      <div className="relative z-10 container mx-auto max-w-5xl px-6 text-center">

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="flex items-center justify-center gap-4"
>
  {/* Logo */}
  <div className="relative h-14 w-14 md:h-16 md:w-16">
    <Image
      src="/icon.svg"
      alt="In Anime logo"
      fill
      className="object-contain"
      priority
    />
  </div>

  {/* App name */}
  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
    In Anime
  </h1>
</motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          Stream anime in sub, dub, and Hindi dub. Chat with fans, download episodes,
          and watch in sync with friends — all inside one seamless platform.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-gradient-primary text-white px-10 py-6 rounded-full text-lg shadow-glow hover:scale-[1.03] transition"
          >
            <a href={downloadLink || "#"} target="_blank">
              <span className="flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Download App
              </span>
            </a>
          </Button>

          <Link
            href="#features"
            className="border border-white/25 text-white px-10 py-6 rounded-full text-lg hover:bg-white/10 transition flex items-center justify-center"
          >
            Explore Features
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>

        {/* Version */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 text-sm text-white/50"
        >
          Latest version v{APP_VERSION}
        </motion.div>

      </div>
    </section>
  );
}
