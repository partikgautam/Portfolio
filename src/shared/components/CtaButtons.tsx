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
        className="premium-action premium-action--primary rounded-2xl px-6 py-4 text-center text-xs font-black uppercase tracking-wide text-white shadow-xl shadow-blue-950/20 transition sm:px-7 sm:text-sm"
      >
        Connect on WhatsApp
      </a>
      <Link
        to={secondaryTo}
        className="premium-action premium-action--secondary rounded-2xl px-6 py-4 text-center text-xs font-black uppercase tracking-wide text-white ring-1 ring-white/30 transition sm:px-7 sm:text-sm"
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}
