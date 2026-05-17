export type ServiceAccent = "blue" | "orange" | "yellow";

export type Service = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  features: string[];
  accent: ServiceAccent;
};

export type ProcessStep = {
  step: string;
  title: string;
  text: string;
};

export type ServicePackage = {
  name: string;
  description: string;
  price: string;
  featured?: boolean;
};

/*
  NON-CODER EDIT:
  Add, remove, or rename services here.
  Each service automatically appears on the Services page.
*/
export const services: Service[] = [
  {
    id: "social-media",
    eyebrow: "Content",
    title: "Social Media Marketing",
    summary:
      "Page management, post design, captions, reels, content calendar, and audience engagement.",
    features: ["Monthly content planning", "Facebook and Instagram growth", "Brand-consistent designs"],
    accent: "blue",
  },
  {
    id: "promo-videos",
    eyebrow: "Video",
    title: "Business Promotion Videos",
    summary:
      "Short videos that introduce your company, explain your services, and help customers trust your business.",
    features: ["Reels and shorts", "Business intro videos", "Product and service videos"],
    accent: "orange",
  },
  {
    id: "paid-ads",
    eyebrow: "Ads",
    title: "Paid Advertising",
    summary:
      "Targeted campaigns that drive calls, messages, traffic, and leads for your business.",
    features: ["Facebook and Instagram ads", "YouTube promotion", "Lead and message campaigns"],
    accent: "yellow",
  },
  {
    id: "branding",
    eyebrow: "Brand",
    title: "Branding and Design",
    summary:
      "Logo direction, colors, business profile designs, offer creatives, and visual identity for your pages.",
    features: ["Visual identity", "Poster and campaign design", "Business profile creatives"],
    accent: "blue",
  },
  {
    id: "landing-pages",
    eyebrow: "Website",
    title: "Landing Pages",
    summary:
      "Simple pages that present your service, build trust, and guide customers to call or message.",
    features: ["Mobile-friendly pages", "WhatsApp and call buttons", "Service and offer sections"],
    accent: "orange",
  },
  {
    id: "strategy",
    eyebrow: "Plan",
    title: "Marketing Strategy",
    summary:
      "Practical campaign planning for business owners who need clarity before spending on marketing.",
    features: ["Audience and offer planning", "Campaign roadmap", "Content and ad direction"],
    accent: "yellow",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand your business",
    text: "We learn about your service, customers, offer, location, and growth goals.",
  },
  {
    step: "02",
    title: "Plan your campaign",
    text: "We choose the right videos, posts, ads, and message for your market.",
  },
  {
    step: "03",
    title: "Create the content",
    text: "We produce visuals that make your business look active and professional.",
  },
  {
    step: "04",
    title: "Launch and improve",
    text: "We publish, promote, track, and improve the campaign based on results.",
  },
];

/*
  FUTURE USE:
  Replace "Custom" with your real package prices when you decide them.
*/
export const packages: ServicePackage[] = [
  {
    name: "Starter",
    description: "For new businesses that need a basic online presence.",
    price: "Custom",
  },
  {
    name: "Growth",
    description: "For businesses that need content plus promotion.",
    price: "Custom",
    featured: true,
  },
  {
    name: "Campaign",
    description: "For launches, events, seasonal sales, and paid ads.",
    price: "Custom",
  },
];
