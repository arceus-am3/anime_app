"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpenText,
  CalendarDays,
  Download,
  MessageSquare,
  PlayCircle,
  Radio,
  Sparkles,
  Trophy,
  UserCircle2,
  Users,
  Languages,
} from "lucide-react";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/footer";

type Release = {
  number?: string;
  android?: { downloadLink?: string | null };
  windows?: { downloadLink?: string | null };
};

const featureCards = [
  {
    title: "Sub, Dub, Hindi Dub",
    description: "Switch audio style instantly for every mood and language preference.",
    icon: Languages,
  },
  {
    title: "Smart Schedule",
    description: "Track ongoing anime and never miss weekly episodes.",
    icon: CalendarDays,
  },
  {
    title: "Episode Downloads",
    description: "Save episodes offline with fast and stable download options.",
    icon: Download,
  },
  {
    title: "Manga Section",
    description: "Read manga inside the same app without jumping to other sites.",
    icon: BookOpenText,
  },
  {
    title: "Global + Friends Chat",
    description: "Discuss anime in public rooms or keep it private with friends list chat.",
    icon: MessageSquare,
  },
  {
    title: "Watch Together Rooms",
    description: "Create live rooms and watch episodes with your squad in sync.",
    icon: Users,
  },
  {
    title: "Profile + Quests",
    description: "Level up your profile with missions, streaks, and rewards.",
    icon: Trophy,
  },
  {
    title: "Personal Home Feed",
    description: "Your home page adapts to your watch history and favorites.",
    icon: UserCircle2,
  },
];

export default function Home() {
  const [versions, setVersions] = useState<Release[]>([]);
  const [totalDownloads, setTotalDownloads] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/releases", { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        setVersions(data.versions || []);
        setTotalDownloads(data.totalAppDownloads || 0);
      } catch {
        setVersions([]);
        setTotalDownloads(0);
      }
    };

    fetchData();
  }, []);

  const latestRelease = versions[0] || null;

  const quickStats = useMemo(
    () => [
      {
        label: "Latest Version",
        value: latestRelease?.number ? `v${latestRelease.number}` : "v1.0.0",
      },
      {
        label: "Total Downloads",
        value: totalDownloads > 0 ? `${totalDownloads.toLocaleString()}+` : "10,000+",
      },
      {
        label: "Core Modules",
        value: "Watch, Manga, Social",
      },
    ],
    [latestRelease?.number, totalDownloads]
  );

  const renderLivePanel = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.65, delay: 0.12 }}
      className="relative"
    >
      <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-slate-500/20 via-slate-600/10 to-zinc-500/10 blur-2xl" />
      <div className="rounded-[28px] border border-zinc-700/80 bg-zinc-900/80 p-4 backdrop-blur-xl sm:p-6">
        <div className="mb-4 flex items-center justify-between rounded-2xl border border-zinc-700 bg-zinc-950/70 px-4 py-3">
          <p className="text-base font-semibold text-zinc-200">Live Room: Weekly Drop Party</p>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-400/20 px-2.5 py-1 text-xs font-semibold text-slate-200">
            <Radio className="h-3.5 w-3.5" />
            ON AIR
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 + 0.25 }}
              className="rounded-2xl border border-zinc-700 bg-zinc-950/70 p-4"
            >
              <p className="text-xs uppercase tracking-wide text-zinc-400">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold leading-tight text-white md:text-2xl">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-zinc-700 bg-zinc-950/70 p-4">
          <p className="text-sm font-semibold text-white">This Week Focus</p>
          <ul className="mt-3 space-y-2 text-base text-zinc-200 md:text-sm">
            <li>Episode sync for watch-together room</li>
            <li>Hindi dub discovery rail</li>
            <li>Faster queue + continue watching</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(148,163,184,0.16),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(71,85,105,0.16),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(51,65,85,0.14),transparent_34%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#cbd5e122_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e122_1px,transparent_1px)] [background-size:34px_34px]" />

      <Navbar />

      <section className="relative mx-auto flex max-w-7xl items-center px-4 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
        <div className="pointer-events-none absolute inset-x-4 top-20 -z-10 h-[260px] rounded-3xl bg-[url('/anime-banner.svg')] bg-cover bg-center opacity-35 grayscale sm:inset-x-8 sm:h-[360px]" />
        <div className="pointer-events-none absolute inset-x-4 top-20 -z-10 h-[260px] rounded-3xl bg-gradient-to-b from-[#0b0f16d1] via-[#090d1499] to-[#05070d] sm:inset-x-8 sm:h-[360px]" />

        <div className="grid w-full gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:space-y-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300/25 bg-slate-400/15 px-4 py-2 text-sm font-semibold text-slate-100">
              <Sparkles className="h-4 w-4" />
              Premium Anime Experience
            </span>

            <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-6xl">
              Ek App, <span className="text-gradient">Pura Anime</span> Universe
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-zinc-200/90 sm:text-lg">
              Stream karo Sub, Dub aur Hindi Dub. Episodes download karo, schedule follow karo,
              manga padho, aur live watch-together rooms me doston ke saath enjoy karo.
            </p>

            <div className="flex flex-wrap gap-2.5 text-sm">
              {["Sub", "Dub", "Hindi Dub", "Schedule", "Manga", "Watch Party"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1.5 text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div id="downloads" className="scroll-mt-32 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={latestRelease?.android?.downloadLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-slate-600 to-slate-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/30 transition hover:from-slate-500 hover:to-slate-400 sm:w-auto"
              >
                <Download className="h-4 w-4" />
                Android Download
              </a>
              <a
                href={latestRelease?.windows?.downloadLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-600 bg-zinc-900/75 px-6 py-3.5 text-sm font-semibold text-zinc-100 transition hover:border-slate-300/60 sm:w-auto"
              >
                <PlayCircle className="h-4 w-4" />
                Windows Client
              </a>
              <Link
                href="/changelogs"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-zinc-400 hover:text-white sm:w-auto"
              >
                Latest Changelogs
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-2 border-t border-zinc-800/80 pt-4 text-xs text-zinc-400 sm:grid-cols-3 sm:text-sm">
              <p className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-3 py-2">
                Uptime: <span className="font-semibold text-zinc-200">99.9%</span>
              </p>
              <p className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-3 py-2">
                Streams: <span className="font-semibold text-zinc-200">Sub + Dub + Hindi</span>
              </p>
              <p className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-3 py-2">
                Sync Room: <span className="font-semibold text-zinc-200">Realtime</span>
              </p>
            </div>
          </motion.div>

          <div className="hidden lg:block">{renderLivePanel()}</div>
        </div>
      </section>

      <section id="features" className="relative mx-auto max-w-7xl scroll-mt-32 px-4 pb-24 sm:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300/90">Core Features</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">Built For Real Anime Fans</h2>
          <p className="mt-3 max-w-3xl text-zinc-300">
            Har section intentionally design kiya gaya hai taaki streaming, social aur discovery ek hi place pe mile.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featureCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group rounded-2xl border border-zinc-700 bg-gradient-to-b from-zinc-900/80 to-zinc-900/50 p-5 transition hover:-translate-y-1 hover:border-slate-300/40 hover:bg-zinc-900"
              >
                <div className="mb-4 inline-flex rounded-xl bg-slate-400/15 p-2.5 text-slate-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-8 lg:hidden">
        {renderLivePanel()}
      </section>

      <Footer />
    </main>
  );
}
