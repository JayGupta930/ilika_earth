'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ClosingBrandCta() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#f7faf7] px-4 pb-16 pt-5 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24 lg:pt-8">
      <div
        ref={sectionRef}
        className={`mx-auto max-w-[1400px] translate-y-6 opacity-0 transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : ''
        }`}
      >
        <div className="group relative isolate flex h-[390px] items-center justify-center overflow-hidden rounded-[28px] text-center sm:h-[440px] lg:h-[520px] lg:rounded-[32px]">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            style={{ backgroundImage: "url('/Image/herotwo.jpg')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/15 via-black/20 to-black/35" aria-hidden="true" />

          <div className="max-w-3xl px-6 sm:px-10">
            <p className="text-xs font-bold tracking-[0.22em] text-white/90 sm:text-sm">
              ROOTED IN IMPACT
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Technology for a more sustainable future.
            </h2>
            <p className="mt-6 text-xs font-semibold tracking-[0.18em] text-white/90 sm:text-sm">
              POWERED BY ILIKA.EARTH
            </p>
            <Link
              href="/contact"
              className="group/button mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#12572b] shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-[1.03] hover:bg-[#edf8ef] hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-4 focus:ring-white/35"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
