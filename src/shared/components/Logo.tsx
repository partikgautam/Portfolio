import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";

type LogoProps = {
  dark?: boolean;
};

export default function Logo({ dark = false }: LogoProps) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${siteConfig.businessName} home`}>
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-blue text-sm font-black text-white shadow-lg shadow-blue-900/20">
        {siteConfig.shortName}
      </span>
      <span className="leading-tight">
        <span className={`block text-lg font-black tracking-tight ${dark ? "text-white" : "text-slate-950"}`}>
          {siteConfig.businessName}
        </span>
        <span className={`block text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-brand-yellow" : "text-brand-orange"}`}>
          Digital Growth
        </span>
      </span>
    </Link>
  );
}
