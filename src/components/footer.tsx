"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#070a10]">
      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* Brand row */}
        <div className="flex flex-col items-center text-center">

          <div className="flex items-center gap-3">
            <div className="relative h-5 w-5">
              <Image
                src="/icon.svg"
                alt="In Anime logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="text-left">
              <h3 className="text-lg font-semibold text-white leading-none">
                In Anime!
              </h3>
              <p className="text-xs text-zinc-400">
                Watch anime online
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-md text-sm text-zinc-400">
            Stream anime, read manga, and watch together — all in one place.
          </p>

          {/* Links */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/#features" className="hover:text-white transition">Features</Link>
            <Link href="/#downloads" className="hover:text-white transition">Download</Link>
            <Link href="/changelogs" className="hover:text-white transition">Updates</Link>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} In Anime!. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
