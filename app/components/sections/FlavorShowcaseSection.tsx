import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const products = [
  {
    title: "Churros + Chocolate",
    description: "Klasik, rich, dan selalu jadi favorit untuk recharge energi.",
    image: "/images/churros-chocolate.svg",
  },
  {
    title: "Churros + Matcha",
    description:
      "Perpaduan manis dan earthy yang bikin rasa lebih berkarakter.",
    image: "/images/churros-matcha.svg",
  },
  {
    title: "Churros + Strawberry",
    description:
      "Manis segar dengan sentuhan fruity yang fun di setiap gigitan.",
    image: "/images/churros-strawberry.svg",
  },
];

export default function FlavorShowcaseSection() {
  return (
    <section id="produk" className="py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Showcase Produk"
          title="Tiga saus, tiga mood, satu solusi grab and go"
          description="Silakan ganti gambar di bawah dengan asset final milikmu. Struktur showcase sudah siap dipakai untuk materi promosi."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.title} delay={120 * (index + 1)}>
              <article className="interactive-card group overflow-hidden rounded-3xl border border-[color:var(--stroke)] bg-[color:var(--cream-100)]">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-[color:var(--ink-900)]">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-700)]">
                    {product.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
