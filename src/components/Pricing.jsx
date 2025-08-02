'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: '₹0',
      description: 'For your hobby',
      features: [
        'Basic design tools',
        'Limited fabric and color options',
        'Standard customer support',
        'Access to community forums',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: isAnnual ? '₹1 099' : '₹99',
      description: 'For small business',
      features: [
        'Advanced design tools',
        'Unlimited fabric and color options',
        'Priority customer support',
        'Access to exclusive design templates',
        'High-resolution 2D previews',
        'Feedback and adjustment tools',
      ],
      cta: 'Upgrade to Pro',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For multiple teams',
      features: [
        'All Pro features',
        'Custom branding options',
        'Dedicated account manager',
        'Enterprise-level support',
        'Custom integrations',
        'Bulk design options',
      ],
      cta: 'Start with Enterprise',
      highlighted: false,
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl">
            Plans and Pricing
          </h1>
          <p className="mb-6 text-lgm text-zinc-600">
            Receive unlimited credits when you pay yearly, and save on your plan
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center rounded-full bg-black/5 p-1 dark:bg-white/5">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 text-sm font-medium transition-colors rounded-full ${
                !isAnnual
                  ? 'bg-black/10 text-black dark:bg-white/10'
                  : 'text-zinc-600 hover:text-black -400'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 text-sm font-medium transition-colors rounded-full ${
                isAnnual
                  ? 'bg-black/10 text-black dark:bg-white/10'
                  : 'text-zinc-600 hover:text-black -400'
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        {/* Plan cards */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 transition-all duration-300 ${
                plan.highlighted
                  ? 'scale-[1.02] border-black/10 bg-black/5 shadow-xl dark:bg-white/5'
                  : 'border-black/10 hover:border-black/20'
              }`}
            >
              {/* “Most Popular” badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-black/10 blur-[2px] dark:bg-white/10" />
                    <div className="relative rounded-full border border-black/10 bg-black/5 px-4 py-1.5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-block h-1 w-1 animate-pulse rounded-full bg-black/60 dark:bg-white/60" />
                        <span className="text-xs font-medium text-black/80 ">
                          Most Popular
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6 ">
                <h3 className="mb-2 text-xl font-medium text-black ">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-black ">
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="text-sm text-zinc-600">
                      per user/{isAnnual ? 'year' : 'month'}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm text-zinc-600">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-black/40 /40" />
                    <span className="text-sm text-zinc-700 -300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                type="button"
                className={`w-full rounded-xl py-2.5 px-4 text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? 'bg-black hover:bg-black/90'
                    : 'border border-black/10 text-black hover:bg-black/5  dark:hover:bg-white/5'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
