import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";
import SectionHeading from "../../shared/components/SectionHeading";

const businessPoints = [
  {
    title: "Trust First",
    text: "Business identity should feel reliable, respectful, and clear before it tries to look big.",
  },
  {
    title: "Long-Term Planning",
    text: "The profile leaves space for future ventures, partnerships, and public-facing business work.",
  },
  {
    title: "Local Contribution",
    text: "Business growth can support employment, service, and community development over time.",
  },
];

export default function PortfolioPage() {
  return (
    <main>
      <section className="bg-stone-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Business"
              title="A business-minded profile with a formal public tone."
              description="This section presents business as part of Partik Gautam's wider leadership identity: practical, formal, and built on trust."
            />
            <p className="mt-6 text-base font-semibold leading-7 text-slate-600">
              व्यवसाय केवल नाफा होइन; विश्वास, योजना र समाजमा योगदान पनि हो।
            </p>
          </div>
          <div className="overflow-hidden rounded-lg bg-slate-200 shadow-soft">
            <img
              className="h-[560px] w-full object-cover object-[50%_20%]"
              src="/profile/partik-full.jpeg"
              alt="Partik Gautam standing in formal attire"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {businessPoints.map((item) => (
              <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-7">
                <h3 className="text-2xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <SectionHeading
            light
            eyebrow="Future Business Direction"
            title="Ready to add ventures, partnerships, and achievements when they become official."
            description="For now, the page keeps the tone serious and future-ready. Later, it can include business names, projects, investments, teams, and press mentions."
          />
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-brand-blue hover:text-brand-orange"
              href={siteConfig.phoneHref}
            >
              Call
            </a>
            <Link
              className="rounded-full border border-white/25 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white hover:border-brand-yellow hover:text-brand-yellow"
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
