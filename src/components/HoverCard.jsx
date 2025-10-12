import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "GHG Emission Tool",
    description:
      "Track, analyze, and report greenhouse gas emissions for your organization with advanced analytics and compliance-ready outputs.",
    link: "#",
    icon: "🌱",
  },
  {
    title: "Risk Compliances",
    description:
      "Automate risk assessment and compliance management to ensure your business meets regulatory standards efficiently.",
    link: "#",
    icon: "🛡️",
  },
  {
    title: "Health & Safety",
    description:
      "Monitor workplace health and safety metrics, incidents, and training to foster a safer environment for all employees.",
    link: "#",
    icon: "🏥",
  },
  {
    title: "ESG Consulting",
    description:
      "Expert guidance and solutions for Environmental, Social, and Governance (ESG) strategy, reporting, and improvement.",
    link: "#",
    icon: "📊",
  },
  {
    title: "Coming Soon",
    description:
      "Stay tuned for more innovative tools and solutions coming soon.",
    link: "#",
    icon: "🚀",
  },
  {
    title: "Coming Soon",
    description:
      "Stay tuned for more innovative tools and solutions coming soon.",
    link: "#",
    icon: "🚀",
  },
];
