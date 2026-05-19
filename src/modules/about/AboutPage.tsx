import CtaButtons from "../../shared/components/CtaButtons";
import SectionHeading from "../../shared/components/SectionHeading";

const values = [
  {
    title: "Grace",
    text: "A calm public presence with respect for tradition and people.",
  },
  {
    title: "Discipline",
    text: "Hard work, consistency, and personal responsibility in every step.",
  },
  {
    title: "Service",
    text: "Leadership that remains close to community needs and public trust.",
  },
];

const principles = [
  "Neutral leadership with a focus on unity",
  "Respect for culture, family values, and public dignity",
  "Business thinking guided by trust and long-term planning",
  "Future political or public work shaped through service first",
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-stone-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="overflow-hidden rounded-lg bg-slate-200 shadow-soft">
            <img
              className="h-[560px] w-full object-cover object-[50%_20%]"
              src="./profile/partik-profile.jpeg"
              alt="Formal profile portrait of Partik Gautam"
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">
              About Partik Gautam
            </p>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
              A personal brand for leadership, service, and future planning.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Partik Gautam presents himself with a formal, calm, and
              traditional leadership style. This profile is not built around
              content creation; it is built around credibility, public identity,
              business direction, and service-minded growth.
            </p>
            <p className="mt-4 text-base font-semibold leading-7 text-slate-600">
              यो परिचय नेतृत्व, सेवा र भविष्यको योजनालाई सम्मानजनक तरिकाले अगाडि
              बढाउन तयार गरिएको हो।
            </p>
            <CtaButtons
              secondaryTo="/future-plan"
              secondaryLabel="Future Plan"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <SectionHeading
              eyebrow="Core Values"
              title="Formal presence with practical purpose."
            />
            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-2">
              {values.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-slate-200 bg-white p-6"
                >
                  <h3 className="text-2xl font-black text-brand-blue">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
          <SectionHeading
            light
            eyebrow="Leadership Principles"
            title="Neutral, respectful, and prepared for public responsibility."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/7 p-6"
              >
                <p className="text-base font-semibold leading-7 text-white/82">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
