import { ArrowRight, ChartNoAxesColumnIncreasing, Paintbrush, Box, Eye, UsersRound, Headset } from "lucide-react";
import ServiceIllustration from "@/components/ServiceIllustration";
import styles from "./services.module.css";

const services = [
  { title: "Analytics", description: "Detailed analytics and insights to track your environmental impact and design performance.", kind: "analytics", icon: ChartNoAxesColumnIncreasing },
  { title: "Design Tools", description: "Advanced design tools for creating sustainable and eco-friendly products with precision and creativity.", kind: "design", icon: Paintbrush },
  { title: "Material Library", description: "Extensive collection of sustainable fabrics and materials to choose from for your eco-conscious projects.", kind: "materials", icon: Box },
  { title: "Real-time Preview", description: "High-resolution 2D and 3D previews to visualize your designs before committing to production.", kind: "preview", icon: Eye },
  { title: "Collaboration", description: "Seamless collaboration tools for teams to work together on sustainable design projects.", kind: "collaboration", icon: UsersRound },
  { title: "Support", description: "Comprehensive customer support and resources to help you succeed with your sustainable projects.", kind: "support", icon: Headset },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 md:text-5xl lg:text-6xl mt-24">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of sustainable solutions designed
              to help you create environmentally responsible products and
              services.
            </p>
          </div>
        </div>
      </div>
      <section className={styles.section} aria-label="Services overview">
        <div className={styles.grid}>
          {services.map(({ title, description, kind, icon: Icon }, index) => (
            <article key={kind} className={`${styles.card} ${styles[kind]}`}>
              <div className={styles.topline}>
                <span className={styles.icon}><Icon size={30} strokeWidth={2.2} aria-hidden="true" /></span>
                <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
              {/* Decorative CTA: these services do not yet have individual destinations. */}
              <span className={styles.cta}>Learn more <span className={styles.arrow}><ArrowRight size={22} aria-hidden="true" /></span></span>
              <div className={styles.illustration}><ServiceIllustration kind={kind} /></div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
