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

const businessTimeline = [
  ["Now", "Build trust and present a formal identity."],
  ["Next", "Add official business work and partnerships."],
  ["Future", "Show ventures, achievements, and public contribution."],
];

export default function PortfolioPage() {
  return (
    <main>
      <section className="hero-grid inner-hero bg-brand-navy py-14 text-white sm:py-20">
        <div className="inner-hero-shell mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:px-8">
          <div className="inner-hero-copy">
            <SectionHeading
              light
              eyebrow="Business"
              title="A business-minded profile with a formal public tone."
              description="This section presents business as part of Partik Gautam's wider leadership identity: practical, formal, and built on trust."
            />
            <div className="gold-rule mt-6 h-px max-w-md" />
            <p className="mt-6 text-base font-semibold leading-7 text-white/70">
              व्यवसाय केवल नाफा होइन; विश्वास, योजना र समाजमा योगदान पनि हो।
            </p>
          </div>
          <div className="soft-media-panel inner-media-panel">
            <img
              className="page-media-soft responsive-page-media relative z-10 w-full object-cover object-center"
              src="/profile/generated/business-planning.jpg"
              alt="Professional business planning desk"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="portfolio-light-section bg-brand-sky py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="responsive-card-grid grid gap-6 md:grid-cols-3">
            {businessPoints.map((item, index) => (
              <article key={item.title} className="portfolio-feature-card collection-card h-full border border-black/10 p-7 shadow-sm">
                <span className="text-5xl font-black text-brand-orange/15">0{index + 1}</span>
                <h3 className="text-2xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:px-8">
          <SectionHeading
            eyebrow="Business Roadmap"
            title="A static, professional space for business growth."
            description="Clear blocks can later hold real company names, projects, teams, and business milestones."
          />
          <div className="responsive-card-grid grid gap-4 md:grid-cols-3">
            {businessTimeline.map(([time, text]) => (
              <div key={time} className="portfolio-roadmap-card h-full border border-black/10 bg-brand-sky p-5">
                <strong className="text-sm font-black uppercase tracking-[0.18em] text-brand-orange">
                  {time}
                </strong>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-blue py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:px-8">
          <SectionHeading
            light
            eyebrow="Future Business Direction"
            title="Ready to add ventures, partnerships, and achievements when they become official."
            description="For now, the page keeps the tone serious and future-ready. Later, it can include business names, projects, investments, teams, and press mentions."
          />
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              className="rounded-2xl bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-brand-blue hover:bg-brand-orange hover:text-white"
              href={siteConfig.phoneHref}
            >
              Call
            </a>
            <Link
              className="rounded-2xl border border-white/25 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white hover:border-brand-orange hover:text-brand-orange"
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
