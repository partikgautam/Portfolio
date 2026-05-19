import type { ChangeEvent } from "react";
import { siteConfig } from "../../config/site";
import SectionHeading from "../../shared/components/SectionHeading";
import { useContactForm } from "./hooks/useContactForm";

export default function ContactPage() {
  const { formData, handleSubmit, serviceOptions, updateField } = useContactForm();

  return (
    <main>
      <section className="bg-stone-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Contact</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
              Connect for leadership, service, or business discussion.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Use this page for formal communication with Partik Gautam. Phone, email, address, and the contact form are ready for direct enquiries.
            </p>
            <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
              सम्पर्कका लागि फोन, इमेल वा सन्देश फारम प्रयोग गर्न सक्नुहुन्छ।
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-brand-orange px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600"
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a
                className="rounded-full bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-brand-blue ring-1 ring-blue-200 hover:text-brand-orange"
                href={siteConfig.phoneHref}
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <ContactInfo label="Phone" value={siteConfig.phoneDisplay} href={siteConfig.phoneHref} />
            <ContactInfo label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <span className="text-sm font-black uppercase tracking-[0.18em] text-brand-orange">Address</span>
              <p className="mt-2 text-2xl font-black text-slate-950">{siteConfig.location}, Nepal</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Message Form"
              title="Send a formal message."
              description="Submitting opens your email app with the message details. A backend can be connected later when the website becomes more public."
            />
          </div>

          <form className="grid gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField label="Your Name" name="name" value={formData.name} onChange={updateField} required />
              <TextField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={updateField} required />
            </div>
            <TextField label="Organization / Address" name="businessName" value={formData.businessName} onChange={updateField} />
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Purpose
              <select
                className="rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
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
                className="min-h-36 rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
                name="message"
                value={formData.message}
                onChange={updateField}
                required
              />
            </label>
            <button
              className="rounded-full bg-brand-orange px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600"
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
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <span className="text-sm font-black uppercase tracking-[0.18em] text-brand-orange">{label}</span>
      <a className="mt-2 block break-all text-2xl font-black text-slate-950 hover:text-brand-orange" href={href}>
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
        className="rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}
