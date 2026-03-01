import { Changelogs } from "@/src/components/changelogs";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/footer";
import { getReleasesData } from "@/src/utils/github";

export default async function ChangelogPage() {
  const data = await getReleasesData();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_10%_8%,rgba(148,163,184,0.14),transparent_30%),radial-gradient(circle_at_88%_10%,rgba(71,85,105,0.14),transparent_28%)]" />
      <div className="pointer-events-none fixed inset-0 bg-grid-pattern opacity-[0.06]" />

      <Navbar />
      <section className="relative pt-32">
        <Changelogs changelogs={data.changelogs} />
      </section>
      <Footer />
    </main>
  );
}
