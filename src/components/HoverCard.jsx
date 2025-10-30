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
    title: "Disclosure reporting",
    description:
      "With ilika disclose your report based on BRSR, GRI, CBAM, CSRD etc. Consolidate sustainability data, automate disclosures, and stay audit-ready across every framework.",
    link: "#",
    icon: "📄",
  },
  {
    title: "AI Embedded Tool",
    description:
      "Developing AI based tool Unlock predictive insights, streamline ESG decision-making, and surface intelligent recommendations powered by embedded AI.",
    link: "#",
    icon: "🤖",
  },
];
