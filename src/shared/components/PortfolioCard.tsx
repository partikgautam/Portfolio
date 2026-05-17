import type { PortfolioItem } from "../../data/portfolio";

type PortfolioCardProps = {
  item: PortfolioItem;
};

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <article className="card-hover overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* NON-CODER EDIT:
        This is a local visual block, so it works without internet.
        Later, you can replace this <ProjectVisual /> with an <img /> tag for real client photos.
      */}
      <ProjectVisual item={item} />
      <div className="p-6">
        <span className="text-xs font-black uppercase tracking-[0.18em] text-brand-orange">{item.category}</span>
        <h3 className="mt-3 text-2xl font-black text-slate-950">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p>
      </div>
    </article>
  );
}

const visualClasses: Record<PortfolioItem["visual"], string> = {
  blue: "from-brand-blue via-blue-500 to-blue-200",
  orange: "from-brand-orange via-orange-400 to-yellow-200",
  yellow: "from-yellow-300 via-brand-yellow to-orange-200",
  navy: "from-brand-navy via-brand-blue to-slate-400",
  sky: "from-blue-100 via-white to-brand-orange",
  mixed: "from-brand-blue via-brand-orange to-brand-yellow",
};

function ProjectVisual({ item }: PortfolioCardProps) {
  return (
    <div className={`h-64 bg-gradient-to-br ${visualClasses[item.visual]} p-5`}>
      <div className="flex h-full flex-col justify-between rounded-3xl bg-white/90 p-5 shadow-soft backdrop-blur">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-orange">{item.category}</p>
          <h4 className="mt-3 max-w-xs text-3xl font-black leading-tight text-slate-950">{item.title}</h4>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <span className="h-10 rounded-xl bg-brand-blue" />
          <span className="h-10 rounded-xl bg-brand-orange" />
          <span className="h-10 rounded-xl bg-brand-yellow" />
        </div>
      </div>
    </div>
  );
}
