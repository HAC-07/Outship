
"use client";

import { useState } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";

type Plan = {
  name: string;
  count: string;
  description: string;
  price: string;
  originalPrice?: string;
  recommended?: boolean;
  features: string[];
  cta: string;
};



const diyPlans: Plan[] = [
  {
    name: "Launch",
    count: "30+ MATCHED DIRECTORIES",
    description:
      "Get 30+ directories matched to your product not a generic list.",
    price: "$24.99",
    originalPrice: "$30",
    features: [
      "30+ directories matched to your product",
      "Personalized directory recommendations",
      "Direct submission links and listing requirements",
      "Prioritized directories for your launch",
      "Track your submission progress",
    ],
    cta: "Get started",
  },
  {
    name: "Growth",
    count: "60+ MATCHED DIRECTORIES",
    description:
      "Get a broader, product-matched directory list to expand your distribution opportunities.",
    price: "$59",
    features: [
      "60+ directories matched to your product",
      "Everything in Launch",
      "Expanded coverage across SaaS and startup directories",
      "Submission links and listing requirements",
      "Centralized submission tracking and reporting",
    ],
    cta: "Choose Growth",
  },
  {
    name: "Ultimate",
    count: "100+ MATCHED DIRECTORIES",
    description:
      "Get comprehensive, product-matched directory recommendations for a wider launch strategy.",
    price: "$99",
    recommended: true,
    features: [
      "100+ directories matched to your product",
      "Everything in Growth",
      "Broader directory and community coverage",
      "Organized workflow for managing submissions",
      "Priority access to newly discovered directories",
    ],
    cta: "Choose Ultimate",
  },
];



const doneForYouPlans: Plan[] = [
  {
    name: "Launch",
    count: "30+ DIRECTORIES",
    description:
      "Let us handle the repetitive submission work while you focus on building your product.",
    price: "$49",
    features: [
      "30+ directory submission targets",
      "We handle the submission process",
      "Relevant SaaS and startup directories",
      "Submission status report",
    ],
    cta: "Get started",
  },
  {
    name: "Growth",
    count: "60+ DIRECTORIES",
    description:
      "Reach more relevant directories without managing every submission yourself.",
    price: "$99",
    features: [
      "Everything in Launch",
      "60+ directory submission targets",
      "Broader platform coverage",
      "Submission report with live links where available",
    ],
    cta: "Choose Growth",
  },
  {
    name: "Ultimate",
    count: "100+ DIRECTORIES",
    description:
      "Our most comprehensive submission service for a wider launch footprint.",
    price: "$149",
    recommended: true,
    features: [
      "Everything in Growth",
      "100+ directory submission targets",
      "Relevant SaaS, startup, and software directories",
      "Detailed submission status report",
      "Priority processing",
    ],
    cta: "Choose Ultimate",
  },
];

export default function PricingSection() {
  const [mode, setMode] = useState<"diy" | "done">("diy");
  const plans = mode === "diy" ? diyPlans : doneForYouPlans;

  return (
    <section
      id="pricing"
      className="w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ef4d23]/20 bg-[#ef4d23]/5 px-3 py-1.5 text-xs font-medium text-[#ef4d23]">
            <Sparkles size={14} />
            SIMPLE, TRANSPARENT PRICING
          </div>

          <h2 className="text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
            Your launch.{" "}
            <span className="font-serif italic text-[#ef4d23]">
              Your way.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#737373] sm:text-base sm:leading-7">
            Discover relevant directories and manage submissions yourself, or
            let Outship handle the work for you.
          </p>

          {/* Pricing mode toggle */}
          <div className="mt-8 inline-flex w-full max-w-[410px] rounded-2xl border border-[#e7e3dc] bg-[#f5f2ee] p-1.5 sm:w-auto">
            <button
              type="button"
              onClick={() => setMode("diy")}
              aria-pressed={mode === "diy"}
              className={`flex-1 rounded-xl px-4 py-3 text-sm font-medium transition sm:min-w-[185px] ${
                mode === "diy"
                  ? "bg-white text-[#171717] shadow-sm"
                  : "text-[#737373] hover:text-[#171717]"
              }`}
            >
              Submit with Outship
            </button>

            <button
              type="button"
              onClick={() => setMode("done")}
              aria-pressed={mode === "done"}
              className={`flex-1 rounded-xl px-4 py-3 text-sm font-medium transition sm:min-w-[185px] ${
                mode === "done"
                  ? "bg-white text-[#171717] shadow-sm"
                  : "text-[#737373] hover:text-[#171717]"
              }`}
            >
              We submit for you
            </button>
          </div>

          <p className="mt-3 text-xs text-[#8a8a8a]">
            {mode === "diy"
              ? "Find, prioritize, and manage your own directory submissions."
              : "Choose a package and let us handle the submission work."}
          </p>
        </div>

        {/* Early-bird offer */}
        {mode === "diy" && (
          <div className="mx-auto mt-7 flex max-w-2xl flex-col items-center justify-center gap-1 rounded-2xl border border-[#ef4d23]/20 bg-[#fff8f4] px-4 py-3 text-center sm:flex-row sm:gap-2">
            <span className="text-sm font-semibold text-[#ef4d23]">
              Early-bird offer
            </span>
            <span className="text-sm text-[#57534e]">
              First 10 customers get Launch for $24.99 instead of{" "}
              <span className="line-through">$30</span>.
            </span>
          </div>
        )}

        {/* Pricing cards */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-4 md:grid-cols-3 lg:gap-5">
          {plans.map((plan) => {
            const isRecommended = Boolean(plan.recommended);
            const isEarlyBird = mode === "diy" && plan.name === "Launch";

            return (
              <article
                key={`${mode}-${plan.name}`}
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-3 sm:p-3.5 ${
                  isRecommended
                    ? "border-[#242424] bg-[#171717] text-white"
                    : "border-[#e5e0d8] bg-white text-[#171717]"
                }`}
              >
                {/* Highlighted plan name and short description */}
                <div
                  className={`min-h-[145px] rounded-2xl p-5 sm:p-6 ${
                    isRecommended ? "bg-[#292929]" : "bg-[#f4f4f4]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p
                        className={`mb-2 text-[10px] font-medium tracking-[0.12em] ${
                          isRecommended
                            ? "text-[#ff9a52]"
                            : "text-[#ef4d23]"
                        }`}
                      >
                        {plan.count}
                      </p>

                      <h3
                        className={`text-xl font-medium tracking-tight ${
                          isRecommended ? "text-white" : "text-[#171717]"
                        }`}
                      >
                        {plan.name} List
                      </h3>
                    </div>

                    {isRecommended && (
                      <span className="shrink-0 rounded-full bg-[#263b55] px-3 py-1 text-[10px] font-semibold tracking-wide text-[#8fc5ff]">
                        RECOMMENDED
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-3 text-sm leading-6 ${
                      isRecommended ? "text-[#b5b5b5]" : "text-[#666666]"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Price and CTA directly underneath */}
                <div className="px-3 pb-1 pt-6 sm:px-3.5 sm:pt-7">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span
                      className={`text-4xl font-semibold tracking-tight ${
                        isRecommended ? "text-white" : "text-[#171717]"
                      }`}
                    >
                      {plan.price}
                    </span>

                    {plan.originalPrice && (
                      <span
                        className={`text-base ${
                          isRecommended
                            ? "text-[#a3a3a3]"
                            : "text-[#858585]"
                        }`}
                      >
                        <span className="line-through">
                          {plan.originalPrice}
                        </span>
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-1 text-sm ${
                      isRecommended ? "text-[#b5b5b5]" : "text-[#737373]"
                    }`}
                  >
                    One-time payment
                  </p>

                  <a
                    href="/signup"
                    className={`mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
                      isRecommended
                        ? "border-[#333333] bg-[#1c1c1c] text-white hover:bg-[#252525]"
                        : "border-[#dedede] bg-white text-[#171717] hover:border-[#ef4d23]"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight size={17} />
                  </a>

                  {isEarlyBird && (
                    <p className="mt-3 text-center text-xs leading-5 text-[#ef4d23]">
                      Early-bird price: $24.99 for the first 10 customers
                    </p>
                  )}
                </div>

                {/* Included features */}
                <div
                  className={`mx-3 mt-7 flex-1 border-t pt-6 sm:mx-3.5 ${
                    isRecommended
                      ? "border-[#333333]"
                      : "border-[#e7e3dc]"
                  }`}
                >
                  <p
                    className={`mb-5 text-xs font-medium uppercase tracking-wide ${
                      isRecommended ? "text-[#b5b5b5]" : "text-[#737373]"
                    }`}
                  >
                    {plan.name === "Ultimate"
                      ? "Everything in Growth, plus:"
                      : `${plan.name} plan includes:`}
                  </p>

                  <ul className="space-y-4 pb-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6"
                      >
                        <Check
                          size={17}
                          strokeWidth={2}
                          className={`mt-1 shrink-0 ${
                            isRecommended
                              ? "text-[#ff9a52]"
                              : "text-[#ef4d23]"
                          }`}
                        />

                        <span
                          className={
                            isRecommended
                              ? "text-white/90"
                              : "text-[#5f5f5f]"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-7 text-center text-xs leading-5 text-[#8a8a8a]">
          Directory counts refer to target listings, not guaranteed live
          placements. Directory approval, publication, backlinks, rankings,
          and traffic depend on each directory and are not guaranteed.
        </p>
      </div>
    </section>
  );
}
