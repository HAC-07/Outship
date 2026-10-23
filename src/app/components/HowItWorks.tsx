
import {
  ArrowUpRight,
  Globe,
  Search,
  ListChecks,
  Check,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Globe,
    title: "Add your product",
    description:
      "Tell Outship what you're building. Add your website and a few details to get started.",
    visual: "product",
  },
  {
    number: "02",
    icon: Search,
    title: "Discover relevant directories",
    description:
      "Find directory opportunities tailored to your SaaS, so you spend less time researching and more time building.",
    visual: "directories",
  },
  {
    number: "03",
    icon: ListChecks,
    title: "Launch and track",
    description:
      "Work through your opportunities, record submissions, and keep track of your published listings in one place.",
    visual: "tracking",
  },
];

function StepVisual({ type }: { type: string }) {
  if (type === "product") {
    return (
      <div className="mx-auto w-full max-w-[280px] rounded-xl border border-[#e9e5df] bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff0e8] text-[#ef4d23]">
            <Globe size={16} />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#242321]">
              Your product
            </p>
            <p className="text-[10px] text-[#96918a]">
              Set up your launch
            </p>
          </div>
          <ArrowUpRight className="ml-auto text-[#aaa49b]" size={15} />
        </div>

        <label className="mb-1.5 block text-[10px] font-medium text-[#6d6963]">
          Website URL
        </label>
        <div className="flex items-center gap-2 rounded-lg border border-[#e9e5df] px-3 py-2.5">
          <Globe size={13} className="shrink-0 text-[#96918a]" />
          <span className="truncate text-xs text-[#383631]">
            yourproduct.com
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-lg bg-[#fff3ed] px-3 py-2.5">
          <span className="text-[11px] font-medium text-[#b94728]">
            Product details
          </span>
          <ArrowRight size={14} className="text-[#ef4d23]" />
        </div>
      </div>
    );
  }

  if (type === "directories") {
    const directories = [
      { name: "Product Hunt", category: "Product launches" },
      { name: "AlternativeTo", category: "Software discovery" },
      { name: "SaaSHub", category: "SaaS directory" },
    ];

    return (
      <div className="mx-auto w-full max-w-[280px] rounded-xl border border-[#e9e5df] bg-white p-3 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-semibold text-[#242321]">
            Directory matches
          </p>
          <span className="rounded-full bg-[#fff0e8] px-2 py-1 text-[10px] font-medium text-[#ef4d23]">
            For your SaaS
          </span>
        </div>

        <div className="space-y-2">
          {directories.map((directory, index) => (
            <div
              key={directory.name}
              className="flex items-center gap-2.5 rounded-lg border border-[#f0ede8] p-2.5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f5f2ee] text-[10px] font-semibold text-[#777168]">
                {directory.name.slice(0, 1)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-medium text-[#33312d]">
                  {directory.name}
                </p>
                <p className="text-[10px] text-[#96918a]">
                  {directory.category}
                </p>
              </div>
              {index === 0 && (
                <span className="rounded-full bg-[#fff0e8] px-1.5 py-1 text-[9px] text-[#ef4d23]">
                  Match
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-[10px] text-[#96918a]">
          Example directory recommendations
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[280px] rounded-xl border border-[#e9e5df] bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold text-[#242321]">
          Launch checklist
        </p>
        <span className="text-[10px] text-[#96918a]">Example</span>
      </div>

      <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-[#f0ede8]">
        <div className="h-full w-2/3 rounded-full bg-[#ef4d23]" />
      </div>

      {[
        { label: "Product Hunt", status: "Submitted" },
        { label: "AlternativeTo", status: "Published" },
        { label: "SaaSHub", status: "To do" },
      ].map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between gap-2 border-b border-[#f2efea] py-3 last:border-0"
        >
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fff0e8] text-[#ef4d23]">
              <Check size={11} />
            </div>
            <span className="truncate text-[11px] text-[#44413c]">
              {item.label}
            </span>
          </div>
          <span
            className={`shrink-0 rounded-full px-2 py-1 text-[9px] ${
              item.status === "Published"
                ? "bg-emerald-50 text-emerald-700"
                : item.status === "Submitted"
                  ? "bg-blue-50 text-blue-700"
                  : "bg-[#f5f2ee] text-[#777168]"
            }`}
          >
            {item.status}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="w-full px-3 pt-8 pb-12 sm:px-5 sm:pt-10 sm:pb-14 lg:px-8 lg:pt-12 lg:pb-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ef4d23]/15 bg-white px-3.5 py-1.5 text-xs font-medium text-[#ef4d23]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ef4d23]" />
            Simple by design
          </span>

          <h2
            id="how-it-works-heading"
            className="text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-[#171717] sm:text-4xl lg:text-5xl"
          >
            From idea to{" "}
            <span
              className="italic text-[#ef4d23]"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontWeight: 400,
              }}
            >
              discovered.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#706c66] sm:text-base">
            Your product deserves to be seen. Outship helps you organize
            the work of getting it in front of the right audience.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e7e3dc] bg-white/80 p-4 sm:p-5 lg:p-6"
              >
                {/* Visual panel */}
                <div className="flex min-h-[240px] items-center justify-center overflow-hidden rounded-xl bg-[#f5f2ee] p-4 sm:min-h-[260px]">
                  <StepVisual type={step.visual} />
                </div>

                {/* Step details */}
                <div className="flex items-center gap-2.5 pt-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e9e5df] bg-white text-xs font-medium text-[#ef4d23]">
                    {step.number}
                  </span>
                  <Icon size={17} className="text-[#ef4d23]" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#96918a]">
                    Step {Number(step.number)}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[#171717]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#706c66]">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Closing line */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:mt-10 sm:flex-row">
          <p className="text-sm text-[#777168]">
            Less manual research. A more organized launch.
          </p>
          <a
            href="#early-access"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#ef4d23] transition-colors hover:text-[#d9431d]"
          >
            Get early access
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
