"use client";

import { motion } from "framer-motion";
import { CalendarDays, Tag } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ChangelogEntry = {
  id?: string | number;
  version?: string;
  date?: string;
  description?: string;
  changes?: string[];
};

export function Changelogs({ changelogs = [] }: { changelogs?: ChangelogEntry[] }) {
  return (
    <section id="changelogs" className="relative pb-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300/80">Release Notes</p>
          <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">What Changed Recently</h1>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
            Track every improvement, fix, and new feature shipped for In Anime!.
          </p>
        </motion.div>

        <div className="space-y-5">
          {changelogs.length === 0 && (
            <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-8 text-center text-zinc-300">
              No changelog entries found yet.
            </div>
          )}

          {changelogs.map((changelog, index) => (
            <motion.article
              key={changelog.id ?? `${changelog.version}-${index}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-2xl border border-zinc-700 bg-zinc-900/70 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-300/30 bg-slate-400/10 px-3 py-1.5 text-sm font-semibold text-slate-100">
                  <Tag className="h-4 w-4" />
                  v{changelog.version || "0.0.0"}
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-zinc-400">
                  <CalendarDays className="h-4 w-4" />
                  {changelog.date
                    ? new Date(changelog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Unknown date"}
                </div>
              </div>

              {changelog.description && (
                <div className="prose prose-invert max-w-none prose-p:text-zinc-300 prose-headings:text-white prose-strong:text-white prose-a:text-slate-300 hover:prose-a:text-slate-200 prose-code:text-slate-200 prose-code:bg-zinc-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{changelog.description}</ReactMarkdown>
                </div>
              )}

              {changelog.changes && changelog.changes.length > 0 && (
                <div className="mt-6 border-t border-zinc-700 pt-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-zinc-300">Highlights</p>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                    {changelog.changes.map((change, changeIndex) => (
                      <li key={`${changelog.id}-change-${changeIndex}`} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-300" />
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
