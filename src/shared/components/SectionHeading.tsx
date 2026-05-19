type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className={`text-sm font-black uppercase tracking-[0.2em] ${light ? "text-brand-yellow" : "text-brand-orange"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-4 text-4xl font-black sm:text-5xl ${light ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-8 ${light ? "text-white/70" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
