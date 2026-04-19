import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function ClosingCTASection() {
  return (
    <section id="pesan" className="pb-24 pt-12 md:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--stroke)] bg-[color:var(--cream-200)] px-8 py-12 md:px-14 md:py-16">
          <div className="hero-glow hero-glow-left" aria-hidden />
          <div className="hero-glow hero-glow-right" aria-hidden />

          <div className="relative z-10 max-w-3xl">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[color:var(--accent-700)]">
                Saatnya Coba
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight text-[color:var(--ink-900)] md:text-5xl">
                Hitam Manis, teman manis di tengah jadwal yang dinamis.
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--ink-700)] md:text-lg">
                Grab your churros. Boost your mood. Stay on the move.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#home"
                  className="rounded-full bg-[color:var(--accent-900)] px-8 py-3 text-center text-sm font-semibold text-[color:var(--cream-100)] transition-transform duration-300 hover:-translate-y-1"
                >
                  Kembali ke Atas
                </a>
                <a
                  href="#produk"
                  className="rounded-full border border-[color:var(--stroke-strong)] px-8 py-3 text-center text-sm font-semibold text-[color:var(--ink-900)] transition-colors duration-300 hover:bg-[color:var(--cream-100)]"
                >
                  Lihat Showcase Produk
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
