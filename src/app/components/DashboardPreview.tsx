import { ChevronRight, Sparkles, Activity, Compass, Check, Plus, Bell, Settings } from "lucide-react";
import DirectoryRow from "./DirectoryRow";

export default function DashboardPreview() {
  return (
    <div className="mx-auto w-full max-w-[1000px] px-3 sm:px-4 mt-8 sm:mt-12">
      <div className="rounded-3xl border border-black/5 bg-[#f5f2ee] p-3 shadow-sm sm:p-5 md:p-6">
        {/* Top bar */}
        <div className="mb-4 flex items-center justify-between rounded-xl bg-white px-4 py-3 sm:mb-5 sm:px-5 sm:py-3.5">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#ef4d23]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" stroke="white" strokeWidth="1.5" fill="none" />
                <path d="M12 8l4 2.5v5L12 18l-4-2.5v-5L12 8z" fill="white" opacity="0.9" />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-semibold text-[#171717] sm:text-[14px]">Distribution workspace</span>
              <span className="hidden rounded-full bg-[#f5f2ee] px-2.5 py-0.5 text-[11px] font-medium text-[#66645f] sm:inline-flex">
                Overview
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="hidden h-8 w-8 items-center justify-center rounded-lg text-[#66645f] transition-colors hover:bg-neutral-50 sm:flex" aria-label="Notifications">
              <Bell className="h-4 w-4" />
            </button>
            <button type="button" className="hidden h-8 w-8 items-center justify-center rounded-lg text-[#66645f] transition-colors hover:bg-neutral-50 sm:flex" aria-label="Settings">
              <Settings className="h-4 w-4" />
            </button>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ef4d23] text-[11px] font-semibold text-white">
              OF
            </div>
          </div>
        </div>

        {/* Dashboard heading */}
        <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-[16px] font-semibold text-[#171717] sm:text-[18px]">Your distribution overview</h2>
            <p className="mt-0.5 text-[12px] text-[#66645f] sm:text-[13px]">Find opportunities. Launch smarter. Track your progress.</p>
          </div>
          <button type="button" className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-[#e7e5e4] bg-white px-3 py-2 text-[12px] font-medium text-[#171717] transition-colors hover:bg-neutral-50 sm:text-[13px]">
            <Plus className="h-3.5 w-3.5" />
            Add product
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {/* Card 1 — Directory opportunities */}
          <div className="flex flex-col rounded-2xl bg-white p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-50">
                  <Compass className="h-4 w-4 text-[#ef4d23]" />
                </div>
                <h3 className="text-[13px] font-semibold text-[#171717] sm:text-[14px]">Directory opportunities</h3>
              </div>
              <span className="rounded-full bg-[#f5f2ee] px-2 py-0.5 text-[10px] font-medium text-[#66645f]">
                For your product
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-[36px] font-bold leading-none tracking-tight text-[#171717] sm:text-[42px]">48</span>
                <span className="text-[12px] text-[#66645f]">Relevant directories found</span>
              </div>
              <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-medium text-green-700">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Matched to your niche
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <DirectoryRow name="SaaSHub" category="Software discovery" status="Ready" iconLetter="S" />
              <DirectoryRow name="AlternativeTo" category="Product discovery" status="Ready" iconLetter="A" />
              <DirectoryRow name="There's An AI For That" category="AI tools" status="Ready" iconLetter="T" />
            </div>

            <a href="#directories" className="mt-4 inline-flex items-center gap-1 text-[12px] font-medium text-[#66645f] transition-colors hover:text-[#171717] sm:text-[13px]">
              View opportunities
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Card 2 — AI distribution plan */}
          <div className="flex flex-col rounded-2xl bg-white p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-50">
                  <Sparkles className="h-4 w-4 text-[#ef4d23]" />
                </div>
                <h3 className="text-[13px] font-semibold text-[#171717] sm:text-[14px]">AI distribution plan</h3>
              </div>
              <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-medium text-[#ef4d23]">
                Personalized
              </span>
            </div>

            <div className="mb-4">
              <p className="text-[14px] font-semibold text-[#171717] sm:text-[15px]">Your next best opportunities</p>
              <p className="mt-1 text-[12px] leading-relaxed text-[#66645f]">A prioritized plan based on your product, category, and target audience.</p>
            </div>

            <div className="flex flex-1 flex-col gap-0">
              {[
                "Identify relevant directories",
                "Prioritize high-fit opportunities",
                "Prepare product descriptions",
                "Track submission progress",
              ].map((item, i) => (
                <div key={item} className={`flex items-center gap-3 py-2.5 ${i < 3 ? "border-b border-[#f0eeea]" : ""}`}>
                  <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${i < 2 ? "bg-[#ef4d23]" : "border-[1.5px] border-[#e7e5e4]"}`}>
                    {i < 2 && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <span className={`text-[12.5px] sm:text-[13px] ${i < 2 ? "text-[#171717]" : "text-[#66645f]"}`}>{item}</span>
                </div>
              ))}
            </div>

            <button type="button" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#ef4d23] px-4 py-2.5 text-[12.5px] font-medium text-white transition-colors hover:bg-[#d9431d] sm:text-[13px]">
              Generate my plan
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Card 3 — Launch tracker */}
          <div className="flex flex-col rounded-2xl bg-white p-4 sm:p-5 sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-100">
                  <Activity className="h-4 w-4 text-[#66645f]" />
                </div>
                <h3 className="text-[13px] font-semibold text-[#171717] sm:text-[14px]">Launch tracker</h3>
              </div>
              <span className="rounded-full bg-[#f5f2ee] px-2 py-0.5 text-[10px] font-medium text-[#66645f]">
                Your progress
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <DirectoryRow name="SaaSHub" category="Software discovery" status="Ready" iconLetter="S" />
              <DirectoryRow name="AlternativeTo" category="Product discovery" status="In progress" iconLetter="A" />
              <DirectoryRow name="AI tools directory" category="AI tools" status="To do" iconLetter="AI" />
            </div>

            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#66645f] sm:text-[12px]">Your launch checklist</span>
                <span className="text-[11px] text-[#66645f]">1 of 3</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#e7e5e4]">
                <div className="h-full w-1/3 rounded-full bg-[#ef4d23]" />
              </div>
            </div>

            <a href="#how-it-works" className="mt-4 inline-flex items-center gap-1 text-[12px] font-medium text-[#66645f] transition-colors hover:text-[#171717] sm:text-[13px]">
              View launch plan
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
