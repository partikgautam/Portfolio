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
  Each item automatically appears on the Future Plan page.
*/
export const services: Service[] = [
  {
    id: "public-service",
    eyebrow: "Service",
    title: "Public Service Foundation",
    summary:
      "Build trust by staying connected with people, listening to local needs, and supporting meaningful social work.",
    features: ["Community listening", "Youth support", "Local development priorities"],
    accent: "blue",
  },
  {
    id: "youth-leadership",
    eyebrow: "Youth",
    title: "Youth Leadership",
    summary:
      "Encourage young people toward discipline, education, employment, and responsible civic participation.",
    features: ["Mentorship mindset", "Skill direction", "Positive public involvement"],
    accent: "orange",
  },
  {
    id: "business-growth",
    eyebrow: "Business",
    title: "Business Growth",
    summary:
      "Create a practical business identity that values trust, planning, and long-term economic contribution.",
    features: ["Trust-based relationships", "Future ventures", "Local economic thinking"],
    accent: "yellow",
  },
  {
    id: "education",
    eyebrow: "Education",
    title: "Education and Skills",
    summary:
      "Keep education, practical skills, and confidence-building as central themes in future public work.",
    features: ["Skill programs", "Career awareness", "Learning culture"],
    accent: "blue",
  },
  {
    id: "community-development",
    eyebrow: "Community",
    title: "Community Development",
    summary:
      "Focus future planning on basic needs, shared progress, and respectful communication with residents.",
    features: ["Local issues", "Public coordination", "Visible accountability"],
    accent: "orange",
  },
  {
    id: "public-identity",
    eyebrow: "Profile",
    title: "Public Identity",
    summary:
      "Maintain a dignified image that can grow into political, social, or business leadership without losing grace.",
    features: ["Formal profile", "Clear values", "Prepared public presence"],
    accent: "yellow",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Build credibility",
    text: "Start with a simple, respectful public profile that explains values clearly.",
  },
  {
    step: "02",
    title: "Serve consistently",
    text: "Add real community work, meetings, and achievements as the journey grows.",
  },
  {
    step: "03",
    title: "Grow business direction",
    text: "Present business interests with trust, practical planning, and local relevance.",
  },
  {
    step: "04",
    title: "Prepare for leadership",
    text: "Use the website as a future base for public plans, events, and leadership updates.",
  },
];

/*
  FUTURE USE:
  Replace "Custom" with your real package prices when you decide them.
*/
export const packages: ServicePackage[] = [
  {
    name: "Present",
    description: "A clean profile for current identity and values.",
    price: "Now",
  },
  {
    name: "Prepare",
    description: "A space for future service, planning, and public work.",
    price: "Next",
    featured: true,
  },
  {
    name: "Lead",
    description: "A stronger public platform as responsibilities grow.",
    price: "Future",
  },
];
