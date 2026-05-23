import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";

type LogoProps = {
  dark?: boolean;
};

export default function Logo({ dark = false }: LogoProps) {
  return (
    <Link to="/" className="flex items-center gap-4" aria-label={`${siteConfig.businessName} home`}>
      <span className="h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-slate-200 shadow-lg shadow-blue-900/20 lg:h-14 lg:w-14">
        <img
          className="h-full w-full object-cover object-[50%_18%]"
          src="/profile/optimized/partik-logo.jpg"
          alt="Partik Gautam profile"
        />
      </span>
      <span className="leading-tight">
        <span className={`block text-lg font-black lg:text-xl ${dark ? "text-white" : "text-white"}`}>
          {siteConfig.businessName}
        </span>
        <span className={`block text-[0.7rem] font-semibold uppercase tracking-[0.2em] lg:text-xs ${dark ? "text-brand-yellow" : "text-brand-yellow"}`}>
          Leadership Profile
        </span>
      </span>
    </Link>
  );
}
