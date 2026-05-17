import { siteConfig } from "../../config/site";
import type { SocialPlatform } from "../../config/site";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
  YoutubeIcon,
} from "../icons/SocialIcons";

const icons = {
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
  tiktok: TiktokIcon,
};

const labels: Record<SocialPlatform, string> = {
  youtube: "YouTube",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  facebook: "Facebook",
  tiktok: "TikTok",
};

type SocialLinksProps = {
  className?: string;
};

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {(Object.entries(siteConfig.socialLinks) as Array<[SocialPlatform, string]>).map(([key, href]) => {
        const Icon = icons[key];
        const disabled = href === "#";

        return (
          <a
            key={key}
            href={href}
            aria-label={labels[key]}
            title={labels[key]}
            target={disabled ? undefined : "_blank"}
            rel={disabled ? undefined : "noopener noreferrer"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-brand-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
