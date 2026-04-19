import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const points = [
  {
    title: "Mahasiswa butuh solusi cepat",
    copy: "Mobilitas tinggi dan jadwal padat membuat camilan praktis jadi pilihan utama di sela aktivitas.",
  },
  {
    title: "Comfort food jadi kebutuhan",
    copy: "Tekanan akademik bikin mahasiswa mencari makanan manis untuk bantu memperbaiki mood sementara.",
  },
  {
    title: "Ada celah pasar di kampus",
    copy: "Banyak produk hanya unggul di satu sisi. Hitam Manis hadir dengan praktis, terjangkau, dan nikmat sekaligus.",
  },
];

export default function InsightSection() {
  return (
    <section id="tentang" className="py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Tentang"
          title="Dirancang untuk gaya hidup mahasiswa modern"
          description="Hitam Manis bukan sekadar camilan. Ini adalah jawaban untuk kebutuhan konsumsi yang cepat, efisien, dan tetap menyenangkan."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {points.map((point, index) => (
            <article
              key={point.title}
              className="fade-in-up rounded-3xl border border-[color:var(--stroke)] bg-[color:var(--cream-100)] p-6 transition-transform duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${100 * (index + 1)}ms` }}
            >
              <h3 className="font-display text-2xl font-semibold text-[color:var(--ink-900)]">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-700)]">
                {point.copy}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
