"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
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

const APP_VERSION = "1.0.0";

const featureCards = [
{
title: "Multi-Language Audio",
description:
"Watch anime in Sub, Dub, or Hindi Dub with instant switching.",
icon: Languages,
},
{
title: "Smart Release Tracking",
description:
"Follow ongoing series and never miss a new episode.",
icon: CalendarDays,
},
{
title: "Offline Downloads",
description:
"Download episodes and watch anytime without internet.",
icon: Download,
},
{
title: "Integrated Manga",
description:
"Read manga directly inside the platform.",
icon: BookOpenText,
},
{
title: "Community Chat",
description:
"Join public discussions or chat privately with friends.",
icon: MessageSquare,
},
{
title: "Watch-Together Rooms",
description:
"Create synchronized rooms and watch live with friends.",
icon: Users,
},
{
title: "Profiles & Progression",
description:
"Earn streaks and grow your anime profile.",
icon: Trophy,
},
{
title: "Personalized Feed",
description:
"Your home adapts to your watch history and activity.",
icon: UserCircle2,
},
];

export default function Home() {
const [versions, setVersions] = useState<Release[]>([]);
const [totalDownloads, setTotalDownloads] = useState(0);

useEffect(() => {
fetch("/api/releases", { cache: "no-store" })
.then((r) => r.json())
.then((d) => {
setVersions(d.versions || []);
setTotalDownloads(d.totalAppDownloads || 0);
})
.catch(() => {});
}, []);

const latestRelease = versions[0] || null;
const androidDownloadUrl =
process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL ||
latestRelease?.android?.downloadLink ||
"#";

const quickStats = useMemo(
() => [
{ label: "Latest Version", value: "v${APP_VERSION}" },
{
label: "Total Downloads",
value:
totalDownloads > 0
? "${totalDownloads.toLocaleString()}+"
: "10,000+",
},
{ label: "Core Modules", value: "Streaming • Manga • Social" },
],
[totalDownloads]
);

const renderLivePanel = () => (
<motion.div
initial={{ opacity: 0, scale: 0.95 }}
animate={{
opacity: 1,
scale: 1,
boxShadow: [
"0 0 0 rgba(148,163,184,0)",
"0 0 40px rgba(148,163,184,0.15)",
"0 0 0 rgba(148,163,184,0)",
],
}}
transition={{ duration: 4, repeat: Infinity }}
className="rounded-[28px] border border-zinc-700 bg-zinc-900/80 p-6"
>
<div className="mb-4 flex justify-between">
<p className="font-semibold text-zinc-200">
Live Room: Weekly Drop Party
</p>
<span className="flex items-center gap-1 text-xs text-slate-300">
<Radio className="h-3 w-3" /> ON AIR
</span>
</div>

  <div className="grid gap-3 md:grid-cols-3">
    {quickStats.map((s, i) => (
      <motion.div
        key={s.label}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="rounded-xl border border-zinc-700 p-4"
      >
        <p className="text-xs text-zinc-400">{s.label}</p>
        <p className="text-xl font-bold text-white">{s.value}</p>
      </motion.div>
    ))}
  </div>
</motion.div>

);

return (
<main className="min-h-screen bg-[#05070d] text-zinc-100">
<Navbar />

  {/* HERO */}
  <section className="mx-auto max-w-7xl px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-10 items-center">

    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
      <span className="flex items-center gap-2 text-sm mb-4">
        <Image src="/icon.svg" alt="" width={16} height={16} />
        In Anime
      </span>

      <h1 className="text-5xl font-black leading-tight mb-6">
        <span className="bg-gradient-to-r from-white via-slate-300 to-white bg-[length:200%_100%] bg-clip-text text-transparent animate-[shine_6s_linear_infinite]">
          Watch Anime Without Limits
        </span>
      </h1>

      <p className="text-zinc-300 mb-6 max-w-xl">
        Stream, download, track releases, read manga, and watch
        together — all inside one unified anime platform.
      </p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          "Multi-Language Audio",
          "Offline Downloads",
          "Release Tracking",
          "Integrated Manga",
          "Watch Together",
        ].map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.08 }}
            className="border border-zinc-700 bg-zinc-900/70 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </motion.span>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-3">
        <a
          href={androidDownloadUrl}
          className="relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-600 to-slate-500 px-6 py-3 font-semibold"
        >
          Download for Android
        </a>

        <a
          href={latestRelease?.windows?.downloadLink || "#"}
          className="border border-zinc-600 px-6 py-3 rounded-xl"
        >
          Download for Windows
        </a>

        <Link href="/changelogs" className="px-6 py-3 rounded-xl border border-zinc-700 flex items-center gap-1">
          Changelogs <ArrowUpRight className="h-4 w-4"/>
        </Link>
      </div>
    </motion.div>

    <div>{renderLivePanel()}</div>
  </section>

  {/* FEATURES */}
  <section className="mx-auto max-w-7xl px-6 pb-24">
    <h2 className="text-4xl font-black mb-8">
      Built for Modern Anime Fans
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {featureCards.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="border border-zinc-700 rounded-2xl p-6 hover:-translate-y-2 transition duration-500 hover:shadow-[0_0_30px_rgba(148,163,184,0.15)]"
          >
            <motion.div whileHover={{ rotate: 6, scale: 1.1 }}>
              <Icon className="mb-4 text-slate-300"/>
            </motion.div>
            <h3 className="font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-zinc-400">{item.description}</p>
          </motion.div>
        );
      })}
    </div>
  </section>

  <Footer />
</main>

);
  }
