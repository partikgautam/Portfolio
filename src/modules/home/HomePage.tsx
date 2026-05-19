import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";
import CtaButtons from "../../shared/components/CtaButtons";
import SectionHeading from "../../shared/components/SectionHeading";

const pillars = [
  {
    title: "Leadership",
    text: "Neutral, disciplined, and focused on service before noise.",
  },
  {
    title: "Service",
    text: "Community-minded planning for education, opportunity, and local progress.",
  },
  {
    title: "Business",
    text: "Practical thinking, patient growth, and respect for long-term trust.",
  },
];

const profileStats = [
  ["Tone", "Formal"],
  ["Focus", "Leadership"],
  ["Language", "English + Nepali"],
];

export default function HomePage() {
  return (
    <main>
      <section className="overflow-hidden bg-stone-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">
              Personal Leadership Profile
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Partik Gautam
            </h1>
            <p className="mt-5 text-2xl font-semibold text-brand-blue">
              Hard work. Play hard. Lead with grace.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              A calm and traditional personal brand built for future leadership, public service, and business planning. The focus is neutral, disciplined, and rooted in respect.
            </p>
            <p className="mt-3 max-w-2xl text-base font-semibold leading-7 text-slate-600">
              मेहनत, अनुशासन र सेवाको भावनाबाट अगाडि बढ्ने नेतृत्व यात्रा।
            </p>
            <CtaButtons secondaryTo="/about" secondaryLabel="View Profile" />

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {profileStats.map(([label, value]) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <strong className="block text-xl font-black text-slate-950">{value}</strong>
                  <span className="mt-1 block text-xs font-bold uppercase tracking-wide text-slate-500">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-slate-200 shadow-soft">
              <img
                className="h-full w-full object-cover object-[50%_12%]"
                src="/profile/partik-full.jpeg"
                alt="Partik Gautam full formal portrait"
              />
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/94 p-5 shadow-lg backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-orange">Neutral Leadership</p>
              <p className="mt-2 text-lg font-black text-slate-950">
                सेवा, अनुशासन र दीर्घकालीन सोच।
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="Profile Direction"
              title="A public image that feels steady, respectful, and ready for the future."
              description="This website is designed as a foundation for personal growth: leadership identity today, stronger public planning tomorrow."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {pillars.map((item) => (
                <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6">
                  <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <SectionHeading
            light
            eyebrow="Future Planning"
            title="Prepared for business, public service, and responsible leadership."
            description="The current website keeps the tone clean and formal while leaving room to add achievements, political work, community service, and business activity over time."
          />
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-brand-blue hover:text-brand-orange"
              to="/future-plan"
            >
              See Future Plan
            </Link>
            <a
              className="rounded-full border border-white/25 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white hover:border-brand-yellow hover:text-brand-yellow"
              href={siteConfig.phoneHref}
            >
              Call Partik
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
