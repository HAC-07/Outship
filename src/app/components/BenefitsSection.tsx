
import {
  ArrowUpRight,
  Search,
  Sparkles,
  Globe2,
  Check,
  Layers3,
  ExternalLink,
  TrendingUp,
} from "lucide-react";

const directories = [
  { name: "Product Hunt", letter: "P", color: "bg-[#fff0e8] text-[#ef4d23]" },
  { name: "AlternativeTo", letter: "A", color: "bg-[#eaf3e8] text-[#477b42]" },
  { name: "SaaSHub", letter: "S", color: "bg-[#e9efff] text-[#4969b0]" },
];

const tasks = [
  { name: "Find relevant directories", done: true },
  { name: "Prepare your submissions", done: true },
  { name: "Track published listings", done: false },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-heading"
      className="w-full px-3 py-8 sm:px-5 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ef4d23]/15 bg-white px-3.5 py-1.5 text-xs font-medium text-[#ef4d23]">
            <Sparkles size={14} />
            Why Outship
          </span>

          <h2
            id="benefits-heading"
            className="text-balance text-3xl font-medium leading-tight tracking-[-0.045em] text-[#171717] sm:text-4xl lg:text-5xl"
          >
            Distribution, without{" "}
            <span
              className="italic text-[#ef4d23]"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontWeight: 400,
              }}
            >
              the busywork.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#706c66] sm:text-base">
            Spend less time searching for places to launch and more time
            building a product people want.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:gap-5">

          {/* Large card: Directory discovery */}
          <article className="group relative overflow-hidden rounded-3xl border border-[#e7e3dc] bg-white p-4 sm:p-8 md:col-span-4">
            <div className="relative z-10 max-w-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0e8] text-[#ef4d23]">
                <Search size={19} />
              </div>

              <h3 className="mt-5 text-2xl font-medium tracking-[-0.04em] text-[#171717] sm:text-3xl">
                Find directories that fit your product.
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-[#706c66]">
                Cut down the manual research. Discover relevant places to
                list your SaaS instead of submitting everywhere blindly.
              </p>
            </div>

            {/* Directory preview */}
            <div className="relative mt-7 rounded-2xl border border-[#e9e5df] bg-[#faf9f7] p-3 sm:ml-8 sm:mt-8 sm:p-4">
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-[#ef4d23]" />
                  <span className="text-xs font-semibold text-[#34312d]">
                    Directory opportunities
                  </span>
                </div>
                <span className="rounded-full bg-white px-2.5 py-1 text-[10px] text-[#777168]">
                  Example preview
                </span>
              </div>

              <div className="space-y-2">
                {directories.map((directory, index) => (
                  <div
                    key={directory.name}
                    className="flex items-center gap-3 rounded-xl border border-[#eeeae4] bg-white p-3 transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-semibold ${directory.color}`}
                    >
                      {directory.letter}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-[#34312d]">
                        {directory.name}
                      </p>
                      <p className="mt-1 text-[10px] text-[#96918a]">
                        {index === 0
                          ? "Product launch platform"
                          : index === 1
                            ? "Software discovery"
                            : "SaaS listing"}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-[#aaa49b]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Card: SEO */}
          <article className="flex flex-col overflow-hidden rounded-3xl border border-[#e7e3dc] bg-[#f5f2ee] p-6 sm:p-7 md:col-span-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#ef4d23]">
              <TrendingUp size={19} />
            </div>

            <h3 className="mt-5 text-xl font-medium leading-snug tracking-[-0.035em] text-[#171717]">
              Build your search presence.
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#706c66]">
              Discover potential backlink and SEO opportunities through
              relevant product listings.
            </p>

            <div className="mt-auto pt-7">
              <div className="rounded-2xl border border-[#e7e3dc] bg-white p-4">
                <div className="flex items-center gap-2">
                  <Globe2 size={15} className="text-[#ef4d23]" />
                  <span className="text-xs font-semibold text-[#34312d]">
                    Online presence
                  </span>
                </div>

                <div className="mt-4 flex items-end gap-1.5">
                  {[24, 34, 29, 43, 38, 53, 64, 58, 76, 88, 72, 100].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-sm bg-[#ef4d23]/80"
                        style={{ height: `${height * 0.48}px` }}
                      />
                    ),
                  )}
                </div>

                <p className="mt-3 text-[10px] leading-4 text-[#96918a]">
                  Illustrative visual, not measured SEO results
                </p>
              </div>
            </div>
          </article>

          {/* Card: AI discovery */}
          <article className="flex flex-col overflow-hidden rounded-3xl border border-[#e7e3dc] bg-white p-6 sm:p-7 md:col-span-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0eaff] text-[#8059ba]">
              <Sparkles size={19} />
            </div>

            <h3 className="mt-5 text-xl font-medium tracking-[-0.035em] text-[#171717]">
              Be present across the web.
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#706c66]">
              Build a stronger product footprint on relevant websites
              that customers—and AI-powered discovery tools—may use.
            </p>

            <div className="mt-6 rounded-2xl bg-[#f7f4fb] p-4 sm:p-5">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#8059ba]">
                  <Sparkles size={15} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#34312d]">
                    Product discoverability
                  </p>
                  <p className="mt-0.5 text-[10px] text-[#96918a]">
                    A broader distribution strategy
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Relevant listings", "Consistent presence", "More touchpoints"].map(
                  (label) => (
                    <span
                      key={label}
                      className="rounded-full border border-[#e9e1f2] bg-white px-3 py-1.5 text-[10px] text-[#6e578d]"
                    >
                      {label}
                    </span>
                  ),
                )}
              </div>
            </div>
          </article>

          {/* Card: Workflow */}
          <article className="flex flex-col overflow-hidden rounded-3xl border border-[#e7e3dc] bg-[#fff8f3] p-6 sm:p-7 md:col-span-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#ef4d23]">
              <Layers3 size={19} />
            </div>

            <h3 className="mt-5 text-xl font-medium tracking-[-0.035em] text-[#171717]">
              Your launch, all in one workflow.
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#706c66]">
              Keep your research, submissions, and listing progress
              organized instead of scattered across spreadsheets.
            </p>

            <div className="mt-6 rounded-2xl border border-[#f0e4da] bg-white p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#34312d]">
                  Launch checklist
                </span>
                <span className="text-[10px] text-[#96918a]">
                  Example
                </span>
              </div>

              <div className="space-y-3">
                {tasks.map((task) => (
                  <div key={task.name} className="flex items-center gap-2.5">
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        task.done
                          ? "bg-[#fff0e8] text-[#ef4d23]"
                          : "border border-[#e7e3dc] text-transparent"
                      }`}
                    >
                      {task.done && <Check size={12} />}
                    </span>

                    <span
                      className={`text-xs ${
                        task.done
                          ? "text-[#34312d]"
                          : "text-[#777168]"
                      }`}
                    >
                      {task.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#f0ede8]">
                <div className="h-full w-2/3 rounded-full bg-[#ef4d23]" />
              </div>
            </div>
          </article>
        </div>

        {/* Closing CTA */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:mt-10 sm:flex-row">
          <p className="text-sm text-[#777168]">
            Make distribution part of your launch—not another full-time job.
          </p>

          <a
            href="#early-access"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#ef4d23] transition-colors hover:text-[#d9431d]"
          >
            Get early access
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
