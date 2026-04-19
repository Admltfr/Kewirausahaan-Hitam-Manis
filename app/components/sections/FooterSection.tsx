import Container from "../ui/Container";

export default function FooterSection() {
  return (
    <footer className="border-t border-[color:var(--stroke)] py-8">
      <Container className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
        <p className="text-sm text-[color:var(--ink-700)]">
          Hitam Manis © {new Date().getFullYear()} - Churros Grab and Go
        </p>
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--ink-500)]">
          Praktis - Terjangkau - Mood Booster
        </p>
      </Container>
    </footer>
  );
}
