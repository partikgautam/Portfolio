import type { Service, ServiceAccent } from "../../data/services";

const accentClasses = {
  blue: "bg-blue-100 text-brand-blue",
  orange: "bg-orange-100 text-brand-orange",
  yellow: "bg-yellow-100 text-yellow-700",
} satisfies Record<ServiceAccent, string>;

type ServiceCardProps = {
  service: Service;
  index: number;
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article className="card-hover rounded-3xl border border-slate-200 bg-white p-7">
      <div className="flex items-center justify-between gap-4">
        <span className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em] ${accentClasses[service.accent]}`}>
          {service.eyebrow}
        </span>
        <span className="text-sm font-black text-slate-300">{String(index + 1).padStart(2, "0")}</span>
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
