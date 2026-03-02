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
    <section id="changelogs" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">
            Release Notes
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">
            Product Updates
          </h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Every improvement, feature, and fix shipped to make In Anime better.
          </p>
        </div>

        {/* Empty */}
        {changelogs.length === 0 && (
          <div className="rounded-xl border border-white/10 bg-white/5 p-10 text-center text-white/60">
            No updates yet — first release coming soon.
          </div>
        )}

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-8 space-y-10">
          {changelogs.map((changelog, index) => (
            <motion.article
              key={changelog.id ?? index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="relative"
            >
              {/* timeline dot */}
              <div className="absolute -left-[34px] top-2 h-4 w-4 rounded-full bg-gradient-primary shadow-glow" />

              {/* card */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur p-6">

                {/* header row */}
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">

                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white">
                    <Tag className="h-4 w-4" />
                    Version {changelog.version || "0.0.0"}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <CalendarDays className="h-4 w-4" />
                    {changelog.date
                      ? new Date(changelog.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                      : "Unknown date"}
                  </div>
                </div>

                {/* description */}
                {changelog.description && (
                  <div className="prose prose-invert max-w-none prose-p:text-white/70 prose-headings:text-white">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {changelog.description}
                    </ReactMarkdown>
                  </div>
                )}

                {/* changes */}
                {changelog.changes && changelog.changes.length > 0 && (
                  <ul className="mt-6 space-y-2 text-white/70 text-sm">
                    {changelog.changes.map((c, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/40" />
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
