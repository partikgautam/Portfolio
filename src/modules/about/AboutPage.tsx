import { siteConfig } from "../../config/site";
import CtaButtons from "../../shared/components/CtaButtons";
import SectionHeading from "../../shared/components/SectionHeading";
import { StrategyVisual } from "../../shared/components/VisualMockups";

const values = [
  {
    title: "Clear",
    text: "Messaging customers understand",
    className: "bg-blue-50 text-brand-blue",
  },
  {
    title: "Active",
    text: "Content that keeps pages alive",
    className: "bg-orange-50 text-brand-orange",
  },
  {
    title: "Trusted",
    text: "Brand presence that builds confidence",
    className: "bg-yellow-50 text-yellow-600",
  },
];

const reasons = [
  {
    title: "Business-first planning",
    text: "We start with your business goal, not just random posts or videos.",
  },
  {
    title: "Video-led content",
    text: "Short video is the strongest way to explain, promote, and build trust quickly.",
  },
  {
    title: "Local market understanding",
    text: "Based in Butwal, we understand how local business owners and customers think.",
  },
  {
    title: "Direct communication",
    text: "Clients can call or message directly, making work faster and easier.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-blue-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">About Grow Up</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
              We turn local businesses into brands people remember.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Grow Up is built for business owners who want better visibility, better content, and better customer response from digital platforms.
            </p>
            <CtaButtons secondaryTo="/portfolio" secondaryLabel="See Ideas" />
          </div>
          <StrategyVisual />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <SectionHeading eyebrow="Our Belief" title="A business grows when people understand it quickly." />
            <div className="lg:col-span-2">
              <p className="text-lg leading-8 text-slate-600">
                Many companies have good services, but their digital presence does not explain the value clearly.
                {` ${siteConfig.businessName}`} helps fix that with simple messaging, strong visuals, short videos, and campaigns that make customers take action.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {values.map((item) => (
                  <div key={item.title} className={`rounded-3xl p-6 ${item.className}`}>
                    <strong className="block text-3xl font-black">{item.title}</strong>
                    <span className="mt-2 block text-sm font-semibold text-slate-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              light
              eyebrow="Why Choose Us"
              title="We focus on promotion that creates real enquiries."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {reasons.map((item) => (
                <article key={item.title} className="rounded-3xl bg-white p-6 text-slate-900">
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
