import Container from "../ui/Container";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-28">
      <div className="hero-glow hero-glow-left" aria-hidden />
      <div className="hero-glow hero-glow-right" aria-hidden />
      <Container className="relative grid gap-14 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="fade-in-up inline-flex items-center gap-2 rounded-full border border-[color:var(--accent-300)] bg-[color:var(--cream-200)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-700)]">
            Churros Grab and Go
          </p>
          <h1
            className="fade-in-up mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] text-[color:var(--ink-900)] md:text-6xl"
            style={{ animationDelay: "120ms" }}
          >
            Cemilan praktis, terjangkau, dan mood booster untuk ritme hidup
            mahasiswa.
          </h1>
          <p
            className="fade-in-up mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[color:var(--ink-700)] md:text-lg"
            style={{ animationDelay: "220ms" }}
          >
            Hitam Manis menghadirkan churros hangat dengan saus cokelat, matcha,
            dan stroberi. Mudah dibawa, cepat dinikmati, dan siap menemani
            kelas, organisasi, sampai lembur tugas.
          </p>

          <div
            className="fade-in-up mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "320ms" }}
          >
            <a
              href="#produk"
              className="rounded-full bg-[color:var(--accent-900)] px-7 py-3 text-center text-sm font-semibold text-[color:var(--cream-100)] transition-transform duration-300 hover:-translate-y-1"
            >
              Lihat Menu
            </a>
            <a
              href="#tentang"
              className="rounded-full border border-[color:var(--stroke-strong)] px-7 py-3 text-center text-sm font-semibold text-[color:var(--ink-800)] transition-all duration-300 hover:border-[color:var(--accent-800)] hover:text-[color:var(--accent-900)]"
            >
              Kenapa Hitam Manis?
            </a>
          </div>
        </div>

        <div
          className="fade-in-up glass-card relative overflow-hidden rounded-[2rem] border border-[color:var(--stroke)] p-8"
          style={{ animationDelay: "240ms" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-700)]">
            Value Utama
          </p>
          <div className="mt-6 space-y-5">
            <div className="rounded-2xl bg-[color:var(--cream-100)] p-4 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-[color:var(--ink-900)]">
                Praktis
              </h3>
              <p className="mt-1 text-sm text-[color:var(--ink-700)]">
                Siap santap, mudah dibawa, tanpa ribet.
              </p>
            </div>
            <div className="rounded-2xl bg-[color:var(--cream-100)] p-4 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-[color:var(--ink-900)]">
                Terjangkau
              </h3>
              <p className="mt-1 text-sm text-[color:var(--ink-700)]">
                Cocok untuk kantong mahasiswa setiap hari.
              </p>
            </div>
            <div className="rounded-2xl bg-[color:var(--cream-100)] p-4 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-[color:var(--ink-900)]">
                Mood Booster
              </h3>
              <p className="mt-1 text-sm text-[color:var(--ink-700)]">
                Rasa manis bantu recharge semangat sejenak.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
