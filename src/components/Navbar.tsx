"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Downloads", href: "/#downloads" },
  { label: "Changelogs", href: "/changelogs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">

      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className={`
          mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3
          backdrop-blur-xl border transition-all
          ${scrolled
            ? "bg-black/70 border-white/10 shadow-soft"
            : "bg-black/40 border-white/5"}
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Image src="/icon.svg" alt="logo" width={22} height={22} />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white tracking-tight">
              In Anime
            </p>
            <p className="text-[11px] text-white/50">
              Watch Anime Online
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-sm text-white/70 transition hover:text-white"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-white/70 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href="/#downloads"
            className="flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2 text-sm text-white shadow-glow transition hover:scale-[1.04]"
          >
            <Download className="h-4 w-4" />
            Download
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 p-2 text-white/70 md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-white/80 hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/#downloads"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-gradient-primary px-4 py-3 text-center text-white"
              >
                Download App
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
