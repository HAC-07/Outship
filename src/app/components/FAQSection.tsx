"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Outship?",
    answer:
      "Outship helps SaaS founders discover directories matched to their products and simplify distribution. Choose a self-service plan to manage submissions yourself, or select our done-for-you service to have us handle the submission work.",
  },
  {
    question: "How does Outship match directories to my product?",
    answer:
      "Outship uses your product information and category to identify relevant directory opportunities. Instead of giving you only a generic list, the goal is to help you prioritize platforms that fit your product and audience.",
  },
  {
    question: "What's included in each plan?",
    answer:
      "Our self-service plans cover 30+, 60+, or 100+ matched directory opportunities. They include directory recommendations, submission links and requirements, and submission workflow features according to your selected plan. Done-for-you packages cover 30+, 60+, or 100+ submission targets, with submission handling and reporting.",
  },
  {
    question: "Which platforms are included?",
    answer:
      "Depending on your product and package, opportunities may include SaaS directories, AI tool directories, startup listings, software platforms, product launch sites, developer communities, publishing platforms, and relevant niche websites. The final selection depends on product fit and each platform's eligibility requirements.",
  },
  {
    question: "What's the difference between the two submission options?",
    answer:
      "With 'Submit with Outship', you use our matched directory recommendations and manage submissions yourself. With 'We submit for you', we handle the submission work included in your selected package and provide a report of the submissions and their status.",
  },
  {
    question: "Are submissions made manually?",
    answer:
      "For our done-for-you service, submissions are handled manually so product details can be adapted to each platform's requirements. The self-service option gives you the information and links you need to submit your product yourself.",
  },
  {
    question: "How many directories will you submit my product to?",
    answer:
      "Our packages cover 30+, 60+, or 100+ directory opportunities, depending on your plan. We prioritize relevant opportunities rather than padding a list with unrelated sites. The number of submission targets is not a guarantee that every listing will be approved or published.",
  },
  {
    question: "Are all placements on unique directories?",
    answer:
      "A campaign may include different types of platforms, such as software directories, launch sites, communities, and publishing platforms. We aim to avoid knowingly submitting duplicate listings, but the final mix depends on product fit, existing listings, and platform eligibility.",
  },
  {
    question: "Will I get backlinks?",
    answer:
      "Some approved listings may include a link to your website. Each platform controls whether it publishes a link and whether that link is follow, nofollow, or uses another link attribute. We do not guarantee a specific number of live backlinks.",
  },
  {
    question: "Will directory submissions improve my SEO or AI visibility?",
    answer:
      "Relevant listings can help people discover your product and may contribute to your broader online presence. However, search rankings, Domain Rating, traffic, indexing, and citations in AI-generated answers depend on many factors and are not guaranteed.",
  },
  {
    question: "Will every directory approve my submission?",
    answer:
      "No. Each directory has its own eligibility rules, moderation process, and publication policies. We report submission progress and any available listing links, but approval and publication remain outside our control.",
  },
  {
    question: "How long does the done-for-you service take?",
    answer:
      "The timeline depends on your package, the completeness of your product information, and each platform's submission requirements. Directory reviews and publication may take additional time. We will communicate the expected delivery window for your campaign before work begins.",
  },
  {
    question: "What if my product is already listed?",
    answer:
      "We aim to avoid knowingly creating duplicate listings. If we identify an existing listing, we can record it in the campaign report where appropriate. Existing listings may affect the number of new submissions we can complete.",
  },
  {
    question: "Which products can use Outship?",
    answer:
      "Outship is designed for SaaS products, AI tools, software, web apps, developer tools, and other legitimate digital products. Whether a product can be listed depends on the eligibility rules of each directory or platform.",
  },
  {
    question: "Is Outship a subscription?",
    answer:
      "The packages shown on our pricing page are one-time purchases, not recurring monthly subscriptions. Each purchase covers the deliverables associated with the selected plan. Check your plan details before checkout for the exact scope.",
  },
  {
    question: "Can I submit more than one product?",
    answer:
      "The packages are intended for the product covered by your purchase. If you want to submit multiple products, contact us to confirm the best option for your requirements.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Section introduction */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <span className="inline-flex rounded-full border border-[#ef4d23]/20 bg-[#ef4d23]/5 px-3 py-1.5 text-xs font-medium tracking-wide text-[#ef4d23]">
            FAQ
          </span>

          <h2 className="mt-5 text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
            Questions?
            <br />
            <span className="font-serif italic text-[#ef4d23]">
              We&apos;ve got answers.
            </span>
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-6 text-[#737373] sm:text-base sm:leading-7">
            Everything you need to know about matched directories, submissions,
            and getting your product discovered.
          </p>

          <p className="mt-6 text-sm text-[#737373]">
            Still have questions?{" "}
            <a
              href="mailto:himanshu@outship.in"
              className="font-medium text-[#171717] underline decoration-[#ef4d23] underline-offset-4 transition hover:text-[#ef4d23]"
            >
              Contact us
            </a>
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="divide-y divide-[#e7e3dc] border-y border-[#e7e3dc]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div key={faq.question} className="py-1">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onMouseEnter={() => {
                    // Hover opens questions only on devices with a mouse.
                    if (
                      window.matchMedia("(hover: hover) and (pointer: fine)")
                        .matches
                    ) {
                      setOpenIndex(index);
                    }
                  }}
                  onClick={() => {
                    // Click remains available for touchscreens and keyboard users.
                    setOpenIndex((current) =>
                      current === index ? null : index,
                    );
                  }}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
                >
                  <span className="text-base font-medium leading-6 text-[#171717] transition-colors duration-200 sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isOpen
                        ? "border-[#ef4d23]/30 bg-[#ef4d23]/5 text-[#ef4d23]"
                        : "border-[#e7e3dc] text-[#737373]"
                    }`}
                  >
                    <ChevronDown
                      size={17}
                      className={`transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* Animated answer */}
                <div
                  id={answerId}
                  aria-hidden={!isOpen}
                  className={`grid ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  } transition-all duration-500 ease-in-out`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="pb-6 pr-10 text-sm leading-7 text-[#737373] sm:text-base">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
