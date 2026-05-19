import { Link } from "react-router-dom";
import { navLinks, siteConfig } from "../../config/site";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Logo dark />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
            A formal personal profile for leadership, service, business vision, and future planning.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/60">Pages</h3>
          <div className="mt-5 grid gap-3 text-sm font-semibold text-white/75">
            {navLinks.map((item) => (
              <Link key={item.href} className="hover:text-brand-yellow" to={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/60">Contact</h3>
          <div className="mt-5 grid gap-3 text-sm text-white/75">
            <a className="hover:text-brand-yellow" href={siteConfig.phoneHref}>
              Call: {siteConfig.phoneDisplay}
            </a>
            <a className="break-all hover:text-brand-yellow" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            <span>{siteConfig.location}, Nepal</span>
          </div>
          <SocialLinks className="mt-5" />
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-semibold text-white/55">
        Copyright 2026 Partik Gautam. All rights reserved.
      </div>
    </footer>
  );
}
