import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";
import { portfolioItems } from "../../data/portfolio";
import PortfolioCard from "../../shared/components/PortfolioCard";
import SectionHeading from "../../shared/components/SectionHeading";

export default function PortfolioPage() {
  return (
    <main>
      <section className="bg-blue-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:px-8">
          <SectionHeading eyebrow="Portfolio" title="Campaign styles your clients can ask for." />
          <p className="text-lg leading-8 text-slate-700">
            These are sample portfolio blocks. Replace the titles, images, and descriptions with your real client work after you complete projects.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <SectionHeading
            light
            eyebrow="Need A Similar Campaign?"
            title="Send your business details and we will plan the right promotion idea."
          />
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              className="rounded-full bg-brand-orange px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600"
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message Grow Up
            </a>
            <Link
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-brand-blue hover:text-brand-orange"
              to="/contact"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
