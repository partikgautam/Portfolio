import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";

type LogoProps = {
  dark?: boolean;
};

export default function Logo({ dark = false }: LogoProps) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${siteConfig.businessName} home`}>
      <span className="h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-slate-200 shadow-lg shadow-blue-900/20">
        <img
          className="h-full w-full object-cover object-[50%_18%]"
          src="/profile/partik-profile.jpeg"
          alt="Partik Gautam profile"
        />
      </span>
      <span className="leading-tight">
        <span className={`block text-lg font-black tracking-tight ${dark ? "text-white" : "text-slate-950"}`}>
          {siteConfig.businessName}
        </span>
        <span className={`block text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-brand-yellow" : "text-brand-orange"}`}>
          Leadership Profile
        </span>
      </span>
    </Link>
  );
}
