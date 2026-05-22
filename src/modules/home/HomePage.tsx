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

const focusItems = [
  "Leadership",
  "Public Service",
  "Business Vision",
  "Future Planning",
  "Community Trust",
];

const accessItems = [
  ["01", "Public Profile", "Leadership identity"],
  ["02", "Service Focus", "Community trust"],
  ["03", "Future Plan", "Prepared platform"],
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-grid portfolio-hero overflow-hidden bg-brand-navy text-white">
        <div className="responsive-hero-inner portfolio-hero-shell mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:min-h-[calc(100svh-82px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-10 lg:px-8">
          <div className="hero-side-rail hidden lg:flex">
            <span>Profile</span>
            <span>Leadership</span>
          </div>

          <div className="hero-copy relative z-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">
              Personal Leadership Profile
            </p>
            <h1 className="hero-display mt-4 max-w-4xl text-5xl font-black leading-[0.88] text-white min-[390px]:text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">
              Partik Gautam
            </h1>
            <div className="gold-rule mt-5 h-px max-w-md" />
            <p className="mt-5 text-xl font-semibold text-brand-yellow sm:text-2xl">
              Hard work. Play hard. Lead with grace.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              A calm and traditional personal brand built for future leadership,
              public service, and business planning. The focus is neutral,
              disciplined, and rooted in respect.
            </p>
            <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-white/70 sm:text-base sm:leading-7">
              मेहनत, अनुशासन र सेवाको भावनाबाट अगाडि बढ्ने नेतृत्व यात्रा।
            </p>
            <CtaButtons secondaryTo="/about" secondaryLabel="View Profile" />

            <div className="profile-stats-grid portfolio-stat-grid mt-8 grid max-w-2xl gap-2 sm:gap-3">
              {profileStats.map(([label, value]) => (
                <div
                  key={label}
                  className="profile-stat-card portfolio-stat-card border border-white/15 bg-white/10 p-3 backdrop-blur sm:p-4"
                >
                  <strong className="block text-base font-black leading-tight text-white sm:text-xl">
                    {value}
                  </strong>
                  <span className="mt-1 block text-[0.66rem] font-bold uppercase tracking-wide text-white/50 sm:text-xs">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual portfolio-portrait-stage relative mx-auto w-full max-w-[560px] md:max-w-none">
            <div className="home-portrait-frame relative overflow-hidden">
              <div className="absolute inset-x-8 bottom-0 top-12 rounded-full bg-brand-blue/40 blur-3xl" />
              <img
                className="relative z-10 h-full w-full object-cover object-center"
                src="/profile/optimized/home-clean.jpg"
                alt="Partik Gautam full formal portrait"
                loading="eager"
              />
            </div>
            <div className="hero-caption portfolio-floating-caption border border-white/15 bg-brand-blue/75 p-4 backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-orange">Neutral Leadership</p>
              <p className="mt-2 text-base font-black text-white">सेवा, अनुशासन र दीर्घकालीन सोच।</p>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-ticker border-y border-brand-orange/20 bg-brand-blue py-4 text-white">
        <div className="editorial-ticker__track text-sm font-black uppercase tracking-[0.26em] text-white/80">
          {[...focusItems, ...focusItems].map((item, index) => (
            <span className="editorial-ticker__item" key={`${item}-${index}`}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-brand-navy px-4 py-5 text-white sm:px-6 lg:px-8">
        <div className="responsive-card-grid mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
          {accessItems.map(([number, title, text]) => (
            <div
              key={number}
              className="portfolio-access-card grid h-full grid-cols-[52px_minmax(0,1fr)] items-center gap-4 border border-white/15 bg-white/10 px-4 py-4 backdrop-blur"
            >
              <span className="text-lg font-black text-brand-yellow">{number}</span>
              <span>
                <strong className="block text-sm font-black uppercase tracking-[0.16em] text-white">
                  {title}
                </strong>
                <span className="mt-1 block text-sm text-white/68">{text}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-light-section bg-brand-sky py-16">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
            <SectionHeading
              eyebrow="Profile Direction"
              title="A public image that feels steady, respectful, and ready for the future."
              description="This website is designed as a foundation for personal growth: leadership identity today, stronger public planning tomorrow."
            />
            <div className="responsive-card-grid grid gap-4 sm:grid-cols-3">
              {pillars.map((item, index) => (
                <article
                  key={item.title}
                  className="portfolio-feature-card collection-card h-full border border-black/10 p-6 shadow-sm"
                >
                  <span className="text-5xl font-black text-brand-orange/15">0{index + 1}</span>
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-brand-orange">
                    Official Focus
                  </span>
                  <h3 className="text-xl font-black text-slate-950">
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

      <section className="bg-brand-blue py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:px-8">
          <SectionHeading
            light
            eyebrow="Future Planning"
            title="Prepared for business, public service, and responsible leadership."
            description="The current website keeps the tone clean and formal while leaving room to add achievements, political work, community service, and business activity over time."
          />
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              className="rounded-2xl bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-brand-blue hover:bg-brand-orange hover:text-white"
              to="/future-plan"
            >
              See Future Plan
            </Link>
            <a
              className="rounded-2xl border border-white/25 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white hover:border-brand-orange hover:text-brand-orange"
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
