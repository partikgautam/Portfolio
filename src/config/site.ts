export type SocialPlatform = "youtube" | "instagram" | "linkedin" | "facebook" | "tiktok";

export type SiteConfig = {
  businessName: string;
  shortName: string;
  tagline: string;
  description: string;
  location: string;
  email: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  socialLinks: Record<SocialPlatform, string>;
};

export type NavLink = {
  label: string;
  href: string;
};

export const siteConfig: SiteConfig = {
  businessName: "Grow Up",
  shortName: "GU",
  tagline: "Video-first digital marketing for growing businesses.",
  description:
    "Grow Up helps companies attract customers through promotion videos, social media content, paid ads, branding, and practical marketing strategy.",
  location: "Butwal",
  email: "partikgautam11@gmail.com",

  /*
    PHONE AND WHATSAPP:
    Nepal country code is +977.
    If your number changes later, update all three values below.
  */
  phoneDisplay: "9746407187",
  phoneHref: "tel:+9779746407187",
  whatsappHref:
    "https://wa.me/9779746407187?text=Hello%20Grow%20Up%2C%20I%20want%20digital%20marketing%20for%20my%20business.",

  /*
    SOCIAL MEDIA LINKS:
    YouTube is already added.
    NON-CODER EDIT:
    Replace the # values with your real profile/page links when ready.
    Keep the quotation marks around each link.
  */
  socialLinks: {
    youtube: "https://www.youtube.com/@PartikVlogs/featured",
    instagram: "#", // TODO: Paste your Instagram profile link here.
    linkedin: "#", // TODO: Paste your LinkedIn profile or company page link here.
    facebook: "#", // TODO: Paste your Facebook page link here.
    tiktok: "#", // TODO: Paste your TikTok profile link here.
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];
