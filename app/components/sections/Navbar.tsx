import Container from "../ui/Container";

const menuItems = [
  { label: "Tentang", href: "#tentang" },
  { label: "Produk", href: "#produk" },
  { label: "Kenapa Kami", href: "#nilai" },
  { label: "Pesan", href: "#pesan" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--stroke)] bg-[color:var(--bg-overlay)] backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--accent-900)] text-sm font-bold text-[color:var(--cream-100)] transition-transform duration-300 group-hover:rotate-6">
            HM
          </span>
          <span className="font-display text-xl font-semibold text-[color:var(--ink-900)]">
            Hitam Manis
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[color:var(--ink-700)] transition-colors duration-300 hover:text-[color:var(--accent-900)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#pesan"
          className="rounded-full border border-[color:var(--accent-900)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--accent-900)] transition-all duration-300 hover:bg-[color:var(--accent-900)] hover:text-[color:var(--cream-100)]"
        >
          Coba Sekarang
        </a>
      </Container>
    </header>
  );
}
