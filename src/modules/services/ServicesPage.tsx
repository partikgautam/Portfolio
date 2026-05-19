import { packages, processSteps, services } from "../../data/services";
import SectionHeading from "../../shared/components/SectionHeading";
import ServiceCard from "../../shared/components/ServiceCard";

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:px-8">
          <SectionHeading
            light
            eyebrow="Future Plan"
            title="A current website prepared for future public leadership."
            description="The goal is to build a formal base for service, business credibility, and leadership planning."
          />
          <p className="text-lg font-semibold leading-8 text-white/72">
            आजको परिचय, भोलिको योजना। This page can later hold real achievements, party role, public events, social projects, and development commitments.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="Planning Roadmap"
              title="Grow the profile step by step, with dignity."
              description="The website is ready to expand as the real journey becomes stronger."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {processSteps.map((item) => (
                <article key={item.step} className="rounded-lg border border-slate-200 bg-white p-6">
                  <span className="text-sm font-black text-brand-orange">Step {item.step}</span>
                  <h3 className="mt-3 text-xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <SectionHeading
            eyebrow="Future Positioning"
            title="Built to move from profile to public platform."
            description="The current version stays neutral. When you decide exact political alignment, manifesto points, business ventures, or service projects, those can be added without changing the entire website."
          />
          <div className="grid gap-5 sm:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.name}
                className={`rounded-lg p-6 ${
                  item.featured ? "bg-brand-blue text-white shadow-xl shadow-blue-900/20" : "border border-slate-200 bg-white text-slate-950"
                }`}
              >
                <h3 className="text-xl font-black">{item.name}</h3>
                <p className={`mt-2 text-sm leading-6 ${item.featured ? "text-white/75" : "text-slate-600"}`}>
                  {item.description}
                </p>
                <p className={`mt-6 text-2xl font-black ${item.featured ? "text-brand-yellow" : "text-brand-blue"}`}>
                  {item.price}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
