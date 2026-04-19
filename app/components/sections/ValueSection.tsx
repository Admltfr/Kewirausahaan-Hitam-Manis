import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const values = [
  {
    metric: "100%",
    title: "Ready to consume",
    description:
      "Tanpa waktu tunggu lama, cocok untuk jadwal kuliah yang mepet.",
  },
  {
    metric: "Ramah",
    title: "Harga mahasiswa",
    description:
      "Harga dibuat tetap masuk akal tanpa mengorbankan pengalaman rasa.",
  },
  {
    metric: "3 Pilihan",
    title: "Saus favorit",
    description:
      "Chocolate, matcha, dan strawberry untuk menyesuaikan mood harian.",
  },
];

export default function ValueSection() {
  return (
    <section id="nilai" className="py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Kenapa Kami"
          title="Praktis bukan berarti biasa"
          description="Hitam Manis memadukan kenyang, rasa, dan efisiensi dalam satu porsi yang siap mendukung produktivitas mahasiswa."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {values.map((item, index) => (
            <Reveal key={item.title} delay={120 * (index + 1)}>
              <article className="interactive-card glass-card rounded-3xl border border-[color:var(--stroke)] p-7">
                <p className="font-display text-4xl font-semibold text-[color:var(--accent-900)]">
                  {item.metric}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-[color:var(--ink-900)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-700)]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
