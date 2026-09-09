'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Check, Leaf } from 'lucide-react';
import { useRouter } from 'next/navigation';

const features = [
  'Custom set of features based on your enterprise requirements',
  'Advanced dashboards and detailed reports',
  'Dedicated customer success manager',
  'Priority support and onboarding',
  'Custom integrations and workflows',
];

export default function EnterprisePricing() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const revealClass = isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0';

  return (
    <section className="overflow-hidden bg-[#f7faf7] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`relative isolate flex min-h-[250px] items-center justify-center overflow-hidden rounded-[24px] border border-[#dce9df] bg-[#dceee1] px-5 py-10 text-center shadow-[0_20px_60px_rgba(15,70,36,0.12)] transition-all duration-700 sm:min-h-[280px] sm:px-10 ${revealClass}`}>
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_12%,rgba(255,255,255,0.92),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(111,199,135,0.56),transparent_28%),linear-gradient(120deg,#edf6ee_0%,#d9ebdc_48%,#b8d8bf_100%)]" />
          <div className="absolute -bottom-28 -left-16 -z-10 h-64 w-[62%] rotate-[-8deg] rounded-[50%] border-[28px] border-[#9ccba6]/30 bg-[#6fae79]/15" />
          <div className="absolute -right-16 -top-28 -z-10 h-72 w-72 rounded-full border border-white/70 bg-white/20" />
          <div className="absolute right-[12%] top-[20%] -z-10 h-24 w-24 rounded-full border border-[#377b49]/15" />
          <div className="absolute inset-0 -z-10 bg-white/25 backdrop-blur-[1px]" />

          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center justify-center rounded-full border border-[#1c6438]/10 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#1c6438] backdrop-blur-sm">
              Built for measurable impact
            </div>
            <h2 className="text-3xl font-bold tracking-[-0.035em] text-[#173522] sm:text-4xl lg:text-[2.75rem]">
              Ready to transform your sustainability management?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#3d5a46] sm:text-lg">
              Discover how our platform can simplify your environmental data and reporting.
            </p>
            <button type="button" onClick={() => router.push('/contact')} className="group mt-7 inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#075126] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(7,81,38,0.24)] transition duration-300 hover:scale-[1.03] hover:bg-[#063f20] hover:shadow-[0_14px_28px_rgba(7,81,38,0.3)] focus:outline-none focus:ring-4 focus:ring-[#4fae6b]/30">
              Book a Demo
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className={`mx-auto mt-20 max-w-4xl text-center transition-all delay-100 duration-700 sm:mt-24 ${revealClass}`}>
          <span className="inline-flex rounded-full border border-[#b9ddc1] bg-[#e8f5ea] px-4 py-2 text-xs font-bold tracking-[0.14em] text-[#1b6738]">PLAN FOR ENTERPRISE</span>
          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#1d2d22] sm:text-4xl lg:text-5xl">
            Lead in sustainability with tools designed for comprehensive environmental management.
          </h2>
        </div>

        <div className={`mx-auto mt-12 max-w-[500px] transition-all delay-200 duration-700 sm:mt-14 ${revealClass}`}>
          <article className="group rounded-[22px] border border-[#dce7de] bg-white p-6 shadow-[0_12px_35px_rgba(21,58,31,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(21,58,31,0.14)] sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-[#287442]">Enterprise</p>
                <h3 className="mt-2 text-4xl font-bold tracking-[-0.04em] text-[#1d2d22]">Ask for Price</h3>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f5ea] text-[#18713a]"><Leaf className="h-5 w-5" aria-hidden="true" /></div>
            </div>
            <p className="mt-5 text-base leading-7 text-[#607064]">For large organizations with custom sustainability and environmental management needs.</p>
            <p className="mt-3 text-sm font-medium text-[#4e6655]">Custom solution tailored to your organization</p>
            <button type="button" onClick={() => router.push('/contact')} className="mt-8 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1e8243] to-[#075126] px-5 py-4 text-base font-semibold text-white shadow-[0_10px_20px_rgba(7,81,38,0.2)] transition duration-300 hover:scale-[1.015] hover:shadow-[0_14px_28px_rgba(7,81,38,0.3)] focus:outline-none focus:ring-4 focus:ring-[#4fae6b]/30">
              Contact Sales <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="mt-8 border-t border-[#e3ece4] pt-7">
              <h4 className="text-base font-bold text-[#26362b]">Includes</h4>
              <ul className="mt-5 space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[#526456] sm:text-[15px]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e5f5e8] text-[#19713a]"><Check className="h-3.5 w-3.5 stroke-[3]" aria-hidden="true" /></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
