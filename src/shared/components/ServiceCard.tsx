import type { Service, ServiceAccent } from "../../data/services";

const accentClasses = {
  blue: "bg-brand-navy text-white",
  orange: "bg-brand-orange text-white",
  yellow: "bg-brand-yellow text-brand-navy",
} satisfies Record<ServiceAccent, string>;

type ServiceCardProps = {
  service: Service;
  index: number;
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article className="card-hover portfolio-feature-card collection-card h-full border border-black/10 p-7">
      <div className="flex items-center justify-between gap-4">
        <span className={`rounded-2xl px-4 py-2 text-xs font-black uppercase tracking-[0.18em] ${accentClasses[service.accent]}`}>
          {service.eyebrow}
        </span>
        <span className="text-sm font-black text-brand-orange">0{index + 1}</span>
      </div>
      <h3 className="mt-6 text-2xl font-black text-slate-950">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{service.summary}</p>
      <ul className="mt-5 space-y-3 text-sm font-semibold text-slate-700">
        {service.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-brand-orange" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
