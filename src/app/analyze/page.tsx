"use client";

import {
  ArrowRight,
  Check,
  Globe,
  Sparkles,
  Target,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const demoProduct = {
  name: "Outship",
  url: "https://outship.in",
  description:
    "Launch your SaaS across the web without manually filling dozens of submission forms.",
  category: "SaaS / Developer Tools",
  audience: "Indie hackers, SaaS founders and startups",
  features: [
    "Directory discovery",
    "Personalized launch opportunities",
    "Chrome autofill",
    "Launch tracking",
  ],
};

const opportunities = [
  {
    name: "Product Hunt",
    reason: "High visibility for newly launched SaaS products",
    type: "Launch",
  },
  {
    name: "BetaList",
    reason: "Good fit for early-stage startups and new products",
    type: "Startup",
  },
  {
    name: "Uneed",
    reason: "Strong match for SaaS and developer tools",
    type: "Directory",
  },
  {
    name: "SaaSHub",
    reason: "Relevant audience actively discovering SaaS products",
    type: "Directory",
  },
  {
    name: "AlternativeTo",
    reason: "Useful if your product replaces an existing workflow",
    type: "Discovery",
  },
];

export default function AnalyzePage() {
  const [url, setUrl] = useState("");
  const [analyzed, setAnalyzed] = useState(false);

  const handleAnalyze = () => {
    if (!url) return;
    setAnalyzed(true);
  };

  if (analyzed) {
    return (
      <main className="min-h-screen bg-[#f7f5ef] px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <p className="mb-3 flex items-center gap-2 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Outship Launch Analysis
            </p>

            <h1 className="text-4xl font-semibold tracking-tight">
              Your launch plan is ready.
            </h1>

            <p className="mt-3 text-muted-foreground">
              We found the places that look most relevant for your product.
            </p>
          </div>

          {/* Product profile */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-black text-xl font-semibold text-white">
                O
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-semibold">
                  {demoProduct.name}
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  {demoProduct.url}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-6">
                  {demoProduct.description}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 border-t pt-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Category
                </p>
                <p className="mt-1 font-medium">{demoProduct.category}</p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Target audience
                </p>
                <p className="mt-1 font-medium">{demoProduct.audience}</p>
              </div>
            </div>
          </div>

          {/* Opportunities */}
          <div className="mt-10">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-semibold">
                  Top launch opportunities
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Start with these platforms first.
                </p>
              </div>

              <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                5 matches
              </span>
            </div>

            <div className="space-y-3">
              {opportunities.map((opportunity, index) => (
                <div
                  key={opportunity.name}
                  className="flex items-center gap-4 rounded-2xl border bg-white p-5 shadow-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f1efe8] text-sm font-semibold">
                    {index + 1}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold">
                        {opportunity.name}
                      </h3>

                      <span className="rounded-full bg-[#f1efe8] px-2.5 py-1 text-xs">
                        {opportunity.type}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {opportunity.reason}
                    </p>
                  </div>

                  <Check className="h-5 w-5" />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl bg-black p-8 text-white">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">
                  Ready to launch?
                </h2>
                <p className="mt-2 max-w-xl text-sm text-white/70">
                  Use Outship to fill your launch profiles faster and track
                  where you've submitted.
                </p>
              </div>

              <Button className="rounded-xl bg-white text-black hover:bg-white/90">
                Start launching
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f5ef] px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm">
          <Sparkles className="h-4 w-4" />
          Outship Launch Engine
        </div>

        <h1 className="text-5xl font-semibold tracking-tight">
          Where should your SaaS
          <br />
          launch first?
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Enter your product URL and Outship will create a personalized
          launch plan for the best places to distribute your product.
        </p>

        <div className="mx-auto mt-10 flex max-w-2xl items-center gap-3 rounded-2xl border bg-white p-3 shadow-sm">
          <Globe className="ml-3 h-5 w-5 text-muted-foreground" />

          <input
            type="url"
            placeholder="https://yourproduct.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 bg-transparent px-2 py-3 outline-none"
          />

          <Button
            onClick={handleAnalyze}
            disabled={!url}
            className="rounded-xl px-6"
          >
            Analyze
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            Personalized
          </span>

          <span className="flex items-center gap-2">
            <Check className="h-4 w-4" />
            Verified opportunities
          </span>
        </div>
      </div>
    </main>
  );
}