import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";
import { processSteps, services } from "../../data/services";
import { stats } from "../../data/stats";
import CtaButtons from "../../shared/components/CtaButtons";
import SectionHeading from "../../shared/components/SectionHeading";
import ServiceCard from "../../shared/components/ServiceCard";
import { CampaignPreview, StudioVisual } from "../../shared/components/VisualMockups";

export default function HomePage() {
  return (
    <main>
      <section className="hero-grid overflow-hidden bg-blue-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-brand-blue shadow-sm">
              Digital Marketing Agency in Butwal
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Grow your business with video-first digital marketing.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              {siteConfig.description}
            </p>
            <CtaButtons />

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-center">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white p-4 shadow-sm">
                  <strong className="block text-2xl font-black text-brand-blue">{item.value}</strong>
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-500">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <CampaignPreview />
            <div className="absolute -bottom-6 left-6 right-6 rounded-3xl bg-white p-5 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-orange">Business Promotion</p>
              <p className="mt-2 text-lg font-black text-slate-950">
                Videos, social content, ad campaigns, and growth strategy under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                className="h-[460px] w-full object-cover"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Business owners discussing a marketing plan"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="What We Build"
                title="Marketing that makes companies look trusted, active, and ready to buy from."
                description="When a business comes to Grow Up, we help turn its story into a clear campaign: videos, posts, ads, landing pages, and content that people understand quickly."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 p-5">
                  <h3 className="font-black text-slate-950">Video Promotion</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Short reels, business intro videos, service explainers, event clips, and product promotion.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-5">
                  <h3 className="font-black text-slate-950">Digital Campaigns</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Social media plans, ad creatives, launch posts, and performance-focused campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading center light eyebrow="What We Do" title="Services for business growth" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex rounded-full bg-brand-yellow px-7 py-4 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-yellow-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="How It Works"
              title="From business idea to campaign launch."
              description="A simple process for business owners who want marketing without confusion."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {processSteps.map((item) => (
                <div key={item.step} className="rounded-3xl bg-blue-50 p-6">
                  <span className="text-sm font-black text-brand-orange">Step {item.step}</span>
                  <h3 className="mt-3 text-xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-100 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Ready To Grow?"
              title="Do you want to boost your business today?"
              description="Tell us what business you run. We will suggest the right promotion plan for your budget, audience, and location."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-brand-orange px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600"
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Message on WhatsApp
              </a>
              <a
                className="rounded-full bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-brand-blue ring-1 ring-blue-200 hover:text-brand-orange"
                href={siteConfig.phoneHref}
              >
                Call Grow Up
              </a>
            </div>
          </div>
          <StudioVisual />
        </div>
      </section>
    </main>
  );
}
