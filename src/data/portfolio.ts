export type PortfolioItem = {
  category: string;
  title: string;
  summary: string;
  visual: "blue" | "orange" | "yellow" | "navy" | "sky" | "mixed";
};

/*
  NON-CODER EDIT:
  These are sample projects. Replace text and image links with real client work later.
*/
export const portfolioItems: PortfolioItem[] = [
  {
    category: "Promotion Video",
    title: "Restaurant Launch Campaign",
    summary:
      "A short-form video campaign to announce opening offers, food visuals, and WhatsApp enquiries.",
    visual: "orange",
  },
  {
    category: "Social Media",
    title: "Retail Store Growth Plan",
    summary:
      "A monthly content system with offers, reels, product posts, and location-based promotions.",
    visual: "blue",
  },
  {
    category: "Paid Ads",
    title: "Lead Generation Campaign",
    summary:
      "A message-focused ad campaign designed to bring enquiries for a service-based company.",
    visual: "navy",
  },
  {
    category: "Strategy",
    title: "Service Brand Positioning",
    summary:
      "A clear message, offer structure, and campaign idea for a local service business.",
    visual: "sky",
  },
  {
    category: "Branding",
    title: "Business Profile Refresh",
    summary:
      "Updated visuals, profile text, and service presentation for stronger first impressions.",
    visual: "yellow",
  },
  {
    category: "Full Campaign",
    title: "Festival Offer Campaign",
    summary:
      "Offer creatives, reels, ad copy, and conversion-focused contact buttons for a seasonal push.",
    visual: "mixed",
  },
];
