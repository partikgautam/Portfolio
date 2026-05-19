import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";

type CtaButtonsProps = {
  secondaryTo?: string;
  secondaryLabel?: string;
};

export default function CtaButtons({ secondaryTo = "/future-plan", secondaryLabel = "Future Plan" }: CtaButtonsProps) {
  return (
    <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-brand-orange px-6 py-4 text-center text-xs font-black uppercase tracking-wide text-white shadow-xl shadow-blue-950/20 transition hover:bg-brand-yellow hover:text-brand-navy sm:px-7 sm:text-sm"
      >
        Connect on WhatsApp
      </a>
      <Link
        to={secondaryTo}
        className="rounded-full bg-white px-6 py-4 text-center text-xs font-black uppercase tracking-wide text-brand-navy ring-1 ring-white/30 transition hover:text-brand-orange hover:ring-brand-orange sm:px-7 sm:text-sm"
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}
