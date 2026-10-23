import { ChevronRight, Play } from "lucide-react";
import Navbar from "./components/Navbar";
import DashboardPreview from "./components/DashboardPreview";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorks from "./components/HowItWorks";
import DirectoryShowcase from "./components/DirectoryShowcase";
import BenefitsSection from "./components/BenefitsSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      {/* Hero container */}

      <div className="relative w-full min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] overflow-hidden bg-[#f5f5f4] rounded-2xl sm:rounded-3xl pb-8 sm:pb-10 lg:pb-14">
        {/* Navbar */}
        <Navbar />

        {/* Hero content */}
        <section className="flex flex-col items-center px-4 pt-8 pb-6 text-center sm:px-4 sm:pt-16 sm:pb-12">
          <div className="w-full max-w-[900px]">
            {/* Eyebrow badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[12.5px] font-medium text-[#66645f] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#ef4d23]" />
                Built for SaaS founders
              </div>
            </div>

            {/* Main headline */}

            <h1
              className="mx-auto mt-6 max-w-[900px] text-balance font-medium text-[#171717]"
              style={{
                fontSize: "clamp(34px, 6.5vw, 60px)",
                lineHeight: 1.08,
                letterSpacing: "-0.045em",
              }}
            >
              Get your product{" "}
              <span
                className="italic text-[#ef4d23]"
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontWeight: 400,
                }}
              >
                discovered
              </span>
              {" "}
              by
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Google, LLMs, and Buyers
            </h1>

            {/* Subtitle */}

            <p
              className="mx-auto mt-4 max-w-[580px] px-1 text-[#474540] sm:mt-6 sm:px-0"
              style={{
                fontSize: "clamp(15px, 1.8vw, 17px)",
                lineHeight: 1.65,
              }}
            >
              Submit your product to the directories that drive Google
              rankings (SEO), AI answers (AEO), and buyers traffic.
            </p>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
              <a
                href="#early-access"
                className="inline-flex items-center gap-1 rounded-full bg-[#ef4d23] py-2 pl-5 pr-2 text-[14px] font-medium text-white hover:bg-[#d9431d] sm:py-2.5 sm:pl-6"
              >
                Get early access
                <span className="ml-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                  <ChevronRight className="h-4 w-4" />
                </span>
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-[#d5d3ce] bg-white px-5 py-2 text-[14px] font-medium text-[#171717] hover:bg-neutral-50 sm:py-2.5"
              >
                <Play className="h-3.5 w-3.5" />
                See how it works
              </a>
            </div>

            {/* Trust line */}
            <p className="mt-5 text-xs text-[#9a9893] sm:mt-6 sm:text-[13px]">
              Built for founders who ship.
            </p>
          </div>
        </section>

        {/* Dashboard preview */}
        <DashboardPreview />
      </div>
      <FeaturesSection />
      <HowItWorks />
      <DirectoryShowcase />
      <BenefitsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
