import type { ChangeEvent } from "react";
import { siteConfig } from "../../config/site";
import SectionHeading from "../../shared/components/SectionHeading";
import { useContactForm } from "./hooks/useContactForm";

export default function ContactPage() {
  const { formData, handleSubmit, serviceOptions, updateField } = useContactForm();

  return (
    <main>
      <section className="hero-grid inner-hero bg-brand-navy py-14 text-white sm:py-20">
        <div className="inner-hero-shell mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-center lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12 lg:px-8">
          <div className="inner-hero-copy">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Contact</p>
            <h1 className="mt-4 text-5xl font-black text-white sm:text-6xl">
              Connect for leadership, service, or business discussion.
            </h1>
            <div className="gold-rule mt-6 h-px max-w-md" />
            <p className="mt-6 text-lg leading-8 text-white/78">
              Use this page for formal communication with Partik Gautam. Phone, email, address, and the contact form are ready for direct enquiries.
            </p>
            <p className="mt-3 text-base font-semibold leading-7 text-white/70">
              सम्पर्कका लागि फोन, इमेल वा सन्देश फारम प्रयोग गर्न सक्नुहुन्छ।
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-2xl bg-brand-orange px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-blue-950/20 hover:bg-white hover:text-brand-navy"
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a
                className="rounded-2xl bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-brand-navy ring-1 ring-white/30 hover:bg-brand-orange hover:text-white"
                href={siteConfig.phoneHref}
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="responsive-card-grid contact-info-stack grid gap-4">
            <ContactInfo label="Phone" value={siteConfig.phoneDisplay} href={siteConfig.phoneHref} />
            <ContactInfo label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
            <div className="portfolio-dark-card h-full border border-white/15 bg-white/10 p-6 shadow-sm">
              <span className="text-sm font-black uppercase tracking-[0.18em] text-brand-orange">Address</span>
              <p className="mt-2 text-2xl font-black text-white">{siteConfig.location}, Nepal</p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-light-section bg-brand-sky py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[minmax(280px,0.86fr)_minmax(0,1.14fr)] md:items-start lg:gap-12 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Message Form"
              title="Send a formal message."
              description="Submitting prepares an email addressed to Partik with the message details."
            />
            <div className="soft-media-panel soft-media-panel--light mt-6">
              <img
                className="page-media-soft responsive-contact-media relative z-10 w-full object-cover object-center"
                src="/profile/generated/contact-desk.jpg"
                alt="Professional contact desk with phone and envelope"
                loading="lazy"
              />
            </div>
          </div>

          <form className="portfolio-form-card mt-0 grid gap-4 self-start border border-black/10 bg-white p-5 shadow-sm md:p-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField label="Your Name" name="name" value={formData.name} onChange={updateField} required />
              <TextField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={updateField} required />
            </div>
            <TextField label="Organization / Address" name="businessName" value={formData.businessName} onChange={updateField} />
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Purpose
              <select
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/20"
                name="service"
                value={formData.service}
                onChange={updateField}
              >
                {serviceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Message
              <textarea
                className="min-h-28 rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/20"
                name="message"
                value={formData.message}
                onChange={updateField}
                required
              />
            </label>
            <button
              className="rounded-2xl bg-brand-orange px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-blue-950/20 transition hover:bg-brand-navy"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

type ContactInfoProps = {
  label: string;
  value: string;
  href: string;
};

function ContactInfo({ label, value, href }: ContactInfoProps) {
  return (
    <div className="portfolio-dark-card h-full border border-white/15 bg-white/10 p-6 shadow-sm">
      <span className="text-sm font-black uppercase tracking-[0.18em] text-brand-orange">{label}</span>
      <a className="mt-2 block break-all text-2xl font-black text-white hover:text-brand-yellow" href={href}>
        {value}
      </a>
    </div>
  );
}

type TextFieldProps = {
  label: string;
  name: "name" | "phone" | "businessName";
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

function TextField({ label, name, type = "text", value, onChange, required = false }: TextFieldProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-slate-700">
      {label}
      <input
        className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/20"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}
