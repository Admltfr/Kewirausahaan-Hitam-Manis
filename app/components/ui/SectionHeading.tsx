import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--accent-700)]">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={120}>
        <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight text-[color:var(--ink-900)] md:text-5xl">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={240}>
        <p className="mt-4 text-pretty text-base leading-relaxed text-[color:var(--ink-700)] md:text-lg">
          {description}
        </p>
      </Reveal>
    </div>
  );
}
