import { siteConfig } from "../../config/site";
import { MailIcon, MapIcon, PhoneIcon } from "../icons/SocialIcons";
import SocialLinks from "./SocialLinks";

export default function TopBar() {
  return (
    <div className="bg-brand-navy text-sm text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a className="inline-flex items-center gap-2 hover:text-brand-yellow" href={siteConfig.phoneHref}>
            <PhoneIcon className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
          <a className="inline-flex items-center gap-2 hover:text-brand-yellow" href={`mailto:${siteConfig.email}`}>
            <MailIcon className="h-4 w-4" />
            {siteConfig.email}
          </a>
          <span className="inline-flex items-center gap-2 text-white/80">
            <MapIcon className="h-4 w-4" />
            {siteConfig.location}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Follow</span>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
