import { Brain, Rocket, LineChart, type LucideIcon } from "lucide-react";

export const siteConfig = {
  name: "Manish Tripathi",
  tagline: "AI & Product Strategy",
  email: "manish.tripathi@gmail.com",
  ctaPrimary: "Book a Strategy Call",
  ctaSecondary: "See How It Works",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Community", href: "#community" },
];

export type Offer = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export const offers: Offer[] = [
  {
    title: "AI Strategy Sprint",
    description:
      "A focused 2-week engagement to map where AI actually moves your roadmap forward.",
    icon: Brain,
    href: "#contact",
  },
  {
    title: "Product Build Partner",
    description:
      "Hands-on support shipping your AI feature or MVP from spec to production.",
    icon: Rocket,
    href: "#contact",
  },
  {
    title: "Fractional Advisory",
    description:
      "Ongoing monthly advisory for founders and teams scaling an AI-driven product line.",
    icon: LineChart,
    href: "#contact",
  },
];

export const partnerLogos = [
  "Acme Corp",
  "Northwind",
  "Globex",
  "Initech",
  "Umbrella",
  "Stark Industries",
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Manish helped us cut our AI feature timeline in half while keeping the product actually usable.",
    name: "Sarah Chen",
    role: "Head of Product, Northwind",
  },
  {
    quote:
      "The clearest strategic thinking on applied AI I've worked with. Direct, pragmatic, no fluff.",
    name: "David Kim",
    role: "Founder, Globex Labs",
  },
  {
    quote:
      "We went from a vague idea to a shipped AI workflow in six weeks. Worth every session.",
    name: "Priya Nair",
    role: "VP Engineering, Initech",
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/manish-tripathi" },
  { label: "Twitter", href: "https://twitter.com/manishtripathi" },
  { label: "Instagram", href: "https://instagram.com/manishtripat" },
];
