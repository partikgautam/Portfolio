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
      <section className="hero-grid bg-brand-navy py-14 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:px-8">
          <div className="soft-media-panel">
            <img
              className="about-portrait-focus page-media-soft responsive-page-media relative z-10 w-full"
              src="/profile/optimized/partik-service.jpg"
              alt="Front-facing formal portrait of Partik Gautam"
              loading="eager"
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">
              About Partik Gautam
            </p>
            <h1 className="mt-4 text-5xl font-black text-white sm:text-6xl">
              A personal brand for leadership, service, and future planning.
            </h1>
            <div className="gold-rule mt-6 h-px max-w-md" />
            <p className="mt-6 text-lg leading-8 text-white/78">
              Partik Gautam presents himself with a formal, calm, and
              traditional leadership style. This profile is built around
              credibility, public identity, business direction, and
              service-minded growth.
            </p>
            <p className="mt-4 text-base font-semibold leading-7 text-white/70">
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

      <section className="bg-brand-sky py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <SectionHeading
              eyebrow="Core Values"
              title="Formal presence with practical purpose."
            />
            <div className="responsive-card-grid grid gap-4 sm:grid-cols-3">
              {values.map((item) => (
                <article
                  key={item.title}
                  className="collection-card h-full rounded-lg border border-black/10 p-6 shadow-sm"
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

      <section className="bg-brand-blue py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:px-8">
          <SectionHeading
            light
            eyebrow="Leadership Principles"
            title="Neutral, respectful, and prepared for public responsibility."
          />
          <div className="responsive-card-grid grid gap-4 sm:grid-cols-2">
            {principles.map((item) => (
              <div
                key={item}
                className="h-full rounded-lg border border-white/15 bg-white/10 p-6 backdrop-blur"
              >
                <p className="text-base font-semibold leading-7 text-white/80">
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
