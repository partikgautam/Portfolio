import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";

type CtaButtonsProps = {
  secondaryTo?: string;
  secondaryLabel?: string;
};

export default function CtaButtons({ secondaryTo = "/services", secondaryLabel = "View Services" }: CtaButtonsProps) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-brand-orange px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white shadow-xl shadow-orange-500/25 transition hover:bg-orange-600"
      >
        Start on WhatsApp
      </a>
      <Link
        to={secondaryTo}
        className="rounded-full bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-brand-blue ring-1 ring-blue-200 transition hover:text-brand-orange hover:ring-brand-orange"
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}
