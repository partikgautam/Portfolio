import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";

type LogoProps = {
  dark?: boolean;
};

export default function Logo({ dark = false }: LogoProps) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${siteConfig.businessName} home`}>
      <span className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-slate-200 shadow-lg shadow-blue-900/20">
        <img
          className="h-full w-full object-cover object-[50%_18%]"
          src="/profile/optimized/partik-logo.jpg"
          alt="Partik Gautam profile"
        />
      </span>
      <span className="leading-tight">
        <span className={`block text-base font-black ${dark ? "text-white" : "text-white"}`}>
          {siteConfig.businessName}
        </span>
        <span className={`block text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${dark ? "text-brand-yellow" : "text-brand-yellow"}`}>
          Leadership Profile
        </span>
      </span>
    </Link>
  );
}
