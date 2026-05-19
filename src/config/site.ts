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
  businessName: "Partik Gautam",
  shortName: "PG",
  tagline: "Hard work. Play hard. Lead with grace.",
  description:
    "A formal personal profile for leadership, service, business vision, and future public planning rooted in calm traditional values.",
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
    "https://wa.me/9779746407187?text=Namaste%20Partik%20Gautam%2C%20I%20would%20like%20to%20connect.",

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
  { label: "Future Plan", href: "/future-plan" },
  { label: "Business", href: "/business" },
  { label: "Contact", href: "/contact" },
];
