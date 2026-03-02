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
{ title: "Multi-Language Audio", description: "Sub, Dub, Hindi Dub support.", icon: Languages },
{ title: "Release Tracking", description: "Follow ongoing anime updates.", icon: CalendarDays },
{ title: "Offline Downloads", description: "Save episodes and watch later.", icon: Download },
{ title: "Integrated Manga", description: "Read manga inside the app.", icon: BookOpenText },
{ title: "Community Chat", description: "Talk with fans or friends.", icon: MessageSquare },
{ title: "Watch Together", description: "Create synced watch rooms.", icon: Users },
{ title: "Profile & Progress", description: "Earn streaks & rewards.", icon: Trophy },
{ title: "Personal Feed", description: "Home adapts to your history.", icon: UserCircle2 },
];

export default function Home() {
const [versions, setVersions] = useState<Release[]>([]);
const [totalDownloads, setTotalDownloads] = useState(0);

useEffect(() => {
fetch("/api/releases")
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
{ label: "Latest Version", value: "v" + APP_VERSION },
{
label: "Total Downloads",
value:
totalDownloads > 0
? totalDownloads.toLocaleString() + "+"
: "10,000+",
},
{ label: "Core Modules", value: "Streaming • Manga • Social" },
],
[totalDownloads]
);

const renderLivePanel = () => (
<div className="rounded-2xl border border-zinc-700 bg-zinc-900/70 p-5 mt-6 lg:mt-0">
<div className="flex justify-between mb-4">
<p className="font-semibold text-white">
Live Room: Weekly Drop Party
</p>
<span className="text-xs flex items-center gap-1 text-zinc-400">
<Radio className="h-3 w-3" /> ON AIR
</span>
</div>

  <div className="space-y-3">
    {quickStats.map((s) => (
      <div key={s.label} className="border border-zinc-700 rounded-xl p-3">
        <p className="text-xs text-zinc-400">{s.label}</p>
        <p className="font-semibold text-white">{s.value}</p>
      </div>
    ))}
  </div>
</div>

);

return (
<main className="min-h-screen bg-[#05070d] text-zinc-100">
<Navbar />

  {/* HERO */}
  <section className="relative mx-auto max-w-7xl px-4 pt-24 pb-12 grid lg:grid-cols-2 gap-10 items-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="/anime-banner.jpg"   // 👈 apni image yaha rakho (public folder me)
      alt="Anime background"
      fill
      priority
      className="object-cover opacity-40"
    />
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-[#05070d]/80 backdrop-blur-[2px]" />
  </div>

  {/* LEFT CONTENT */}
  <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-4 mb-4"
    >
      <div className="relative h-12 w-12 sm:h-14 sm:w-14">
        <Image
          src="/icon.svg"
          alt="In Anime logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
        In Anime
      </h1>
    </motion.div>

    <p className="text-zinc-300 mb-6 max-w-lg">
      Stream, download, read manga, and watch together —
      everything anime in one platform.
    </p>

    <div className="flex flex-wrap gap-2 mb-6">
      {["Sub | Dub | Hindi", "Downloads", "Global Chat", "Read Manga", "Watch Rooms"].map((t) => (
        <span key={t} className="px-3 py-1 rounded-full border border-zinc-600 text-sm">
          {t}
        </span>
      ))}
    </div>

    <div className="flex flex-wrap gap-3">
      <a
        href={androidDownloadUrl}
        className="px-6 py-3 rounded-xl bg-slate-500 hover:bg-slate-400 text-white font-semibold transition"
      >
        Download for Android
      </a>

      <a
        href={latestRelease?.windows?.downloadLink || "#"}
        className="px-6 py-3 rounded-xl border border-zinc-600 hover:border-zinc-400 transition"
      >
        Download for Windows
      </a>

      <Link
        href="/changelogs"
        className="px-6 py-3 rounded-xl border border-zinc-600 hover:border-zinc-400 transition flex items-center gap-1"
      >
        Changelogs <ArrowUpRight className="h-4 w-4"/>
      </Link>
    </div>

  </motion.div>

  {/* RIGHT PANEL */}
  <div>{renderLivePanel()}</div>

</section>

  {/* FEATURES */}
  <section className="mx-auto max-w-7xl px-4 pb-24">
    <h2 className="text-3xl font-black mb-8">
      Built for Modern Anime Fans
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {featureCards.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="border border-zinc-700 rounded-2xl p-5">
            <Icon className="mb-3 text-zinc-300"/>
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-zinc-400">{item.description}</p>
          </div>
        );
      })}
    </div>
  </section>

  <Footer />
</main>

);
        }
