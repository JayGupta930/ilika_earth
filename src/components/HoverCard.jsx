'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './SustainableSolutions.module.css';

const projects = [
  {
    title: 'GHG Emission Tool',
    description: 'Track, analyze, and report greenhouse gas emissions for your organization with advanced analytics and compliance-ready outputs.',
    number: '01',
    image: '/Image/first.jpg',
    width: 6000,
    height: 3368,
    alignment: 'left',
  },
  {
    title: 'Risk Compliances',
    description: 'Automate risk assessment and compliance management to ensure your business meets regulatory standards efficiently.',
    number: '02',
    image: '/Image/sixth.png',
    width: 1774,
    height: 887,
    alignment: 'right',
  },
  {
    title: 'Health & Safety',
    description: 'Monitor workplace health and safety metrics, incidents, and training to foster a safer environment for all employees.',
    number: '03',
    image: '/Image/fifth.png',
    width: 1774,
    height: 887,
    alignment: 'left',
  },
  {
    title: 'ESG Consulting',
    description: 'Expert guidance and solutions for Environmental, Social, and Governance (ESG) strategy, reporting, and improvement.',
    number: '04',
    image: '/Image/fourth.png',
    width: 1774,
    height: 887,
    alignment: 'right',
  },
  {
    title: 'Disclosure reporting',
    description: 'With ilika disclose your report based on BRSR, GRI, CBAM, CSRD etc. Consolidate sustainability data, automate disclosures, and stay audit-ready across every framework.',
    number: '05',
    image: '/Image/third.png',
    width: 1774,
    height: 887,
    alignment: 'left',
  },
  {
    title: 'AI Embedded Tool',
    description: 'Developing AI based tool Unlock predictive insights, streamline ESG decision-making, and surface intelligent recommendations powered by embedded AI.',
    number: '06',
    image: '/Image/second.png',
    width: 1774,
    height: 887,
    alignment: 'right',
  },
];

function ServiceRow({ service }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Keep server-rendered content visible; only animate cards below the viewport.
    if (card.getBoundingClientRect().top < window.innerHeight) return;
    card.dataset.reveal = 'pending';
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        card.dataset.reveal = 'visible';
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={styles.reveal}>
      <article className={styles.row} data-alignment={service.alignment} aria-labelledby={`solution-${service.number}`}>
        <div className={styles.imageWrap}>
          <Image
            src={service.image}
            alt={service.title}
            width={service.width}
            height={service.height}
            sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) 50vw, 600px"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <span className={styles.number}>{service.number}</span>
          <h3 id={`solution-${service.number}`} className={styles.title}>{service.title}</h3>
          <p className={styles.description}>{service.description}</p>
          <div className={styles.explore}>
            Explore <ArrowRight size={18} strokeWidth={1.6} aria-hidden="true" />
          </div>
        </div>
      </article>
    </div>
  );
}

export function CardHoverEffectDemo() {
  return (
    <div className={styles.list}>
      {projects.map((service) => (
        <ServiceRow key={service.number} service={service} />
      ))}
    </div>
  );
}
