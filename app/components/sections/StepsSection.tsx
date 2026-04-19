import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const steps = [
  "Pilih varian saus favoritmu",
  "Grab and go dalam hitungan detik",
  "Nikmati di sela kelas, rapat, atau perjalanan",
];

export default function StepsSection() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="rounded-[2rem] border border-[color:var(--stroke)] bg-[color:var(--ink-900)] px-7 py-12 md:px-12">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--cream-300)]">
              Cara Menikmati
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold leading-tight text-[color:var(--cream-100)] md:text-5xl">
              Simpel, cepat, dan langsung bikin hari terasa lebih ringan
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step} delay={220 + 120 * index}>
                <article className="interactive-card rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--cream-300)]">
                    Step 0{index + 1}
                  </p>
                  <p className="mt-2 text-base text-[color:var(--cream-100)]">
                    {step}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
