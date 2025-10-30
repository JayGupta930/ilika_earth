'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function EnterprisePricing() {
  const router = useRouter();

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tab Header */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            <button
              type="button"
              className="cursor-pointer px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-[#7be2a7] to-[#074702] rounded-lg transition-colors shadow-md"
            >
              Plan for Enterprises
            </button>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 max-w-4xl mx-auto">
            Lead in sustainability with tools designed for comprehensive environmental management.
          </h2>
        </div>

        {/* Enterprise Card */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-12">
            {/* Card Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Enterprise
              </h3>
              <p className="text-gray-600 text-base mb-8">
                For large enterprise with custom needs to manage<br />their energy mix
              </p>
              
              {/* Price */}
              <div className="mb-6">
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-[#7be2a7] to-[#074702] text-transparent bg-clip-text">
                  Ask for Price
                </div>
                <div className="text-gray-600">Custom</div>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={() => router.push('/contact')}
                className="cursor-pointer w-full max-w-md mx-auto block rounded-lg bg-gradient-to-r from-[#7be2a7] to-[#074702] px-8 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90"
              >
                Contact Sales
              </button>
            </div>

            {/* Features */}
            <div className="mt-10">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">
                Includes
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-gray-900" />
                  </div>
                  <span className="text-gray-700 text-base">
                    Custom set of features as per the needs of your enterprise
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-gray-900" />
                  </div>
                  <span className="text-gray-700 text-base">
                    Custom dashboards and reports
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-gray-900" />
                  </div>
                  <span className="text-gray-700 text-base">
                    Dedicated customer success manager for your account
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
