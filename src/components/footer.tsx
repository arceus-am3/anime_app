"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-zinc-800 bg-[#080b12]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-400/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-bold text-white">AnimeArena</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-400">
              One platform for anime streaming, manga, social features, quests, and watch-together rooms.
            </p>
          </motion.div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">Navigation</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li><Link href="/" className="transition hover:text-white">Home</Link></li>
              <li><Link href="/#features" className="transition hover:text-white">Features</Link></li>
              <li><Link href="/#downloads" className="transition hover:text-white">Downloads</Link></li>
              <li><Link href="/changelogs" className="transition hover:text-white">Changelogs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">Community</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li>Global Chat</li>
              <li>Friends Chat List</li>
              <li>Watch Together Rooms</li>
              <li>Quest Progression</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">Platform</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li>Android App</li>
              <li>Windows Client</li>
              <li>Manga Reader</li>
              <li>Sub, Dub, Hindi Dub</li>
            </ul>
            <Link
              href="/changelogs"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-slate-200"
            >
              See latest updates
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
          Copyright {new Date().getFullYear()} AnimeArena. Crafted for anime fans.
        </div>
      </div>
    </footer>
  );
}
