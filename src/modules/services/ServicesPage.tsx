import { packages, services } from "../../data/services";
import SectionHeading from "../../shared/components/SectionHeading";
import ServiceCard from "../../shared/components/ServiceCard";

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            light
            eyebrow="Services"
            title="Everything your business needs to look active online."
            description="Choose one service or combine video, social media, ads, and strategy into one complete growth campaign."
          />
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

      <section className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Packages"
              title="Start small or launch a complete campaign."
              description="Prices can be added later after you decide your service package. Use these blocks as package examples."
            />
            <div className="grid gap-5 sm:grid-cols-3">
              {packages.map((item) => (
                <article
                  key={item.name}
                  className={`rounded-3xl p-6 shadow-sm ${
                    item.featured ? "bg-brand-blue text-white shadow-xl shadow-blue-900/20" : "bg-white text-slate-950"
                  }`}
                >
                  <h3 className="text-xl font-black">{item.name}</h3>
                  <p className={`mt-2 text-sm ${item.featured ? "text-white/75" : "text-slate-600"}`}>
                    {item.description}
                  </p>
                  {/* Add your real package price here when ready. */}
                  <p className={`mt-6 text-2xl font-black ${item.featured ? "text-brand-yellow" : "text-brand-blue"}`}>
                    {item.price}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
