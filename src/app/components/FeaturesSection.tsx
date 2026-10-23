
import {
  Search,
  FileText,
  Send,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: Search,
    title: "Discover opportunities",
    description:
      "Find relevant directories for your product and niche without endless searching.",
    detail: "Find your best-fit directories",
  },
  {
    number: "02",
    icon: FileText,
    title: "Save hours of research",
    description:
      "Spend less time hunting for directories and more time building your product.",
    detail: "Less research, more building",
  },
  {
    number: "03",
    icon: Send,
    title: "Launch with confidence",
    description:
      "Follow a structured distribution plan to prepare and organize your launch.",
    detail: "A clearer path to launch",
  },
  {
    number: "04",
    icon: ChartNoAxesColumnIncreasing,
    title: "Track your progress",
    description:
      "Keep your directory opportunities and submission progress organized in one place.",
    detail: "Stay on top of every step",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative w-full px-3 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ef4d23]/15 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-[#ef4d23]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ef4d23]" />
            Why Outship
          </span>

          <h2
            id="features-heading"
            className="text-balance text-3xl font-medium leading-tight tracking-[-0.035em] text-[#171717] sm:text-4xl lg:text-5xl"
          >
            Why founders choose{" "}
            <span
              className="font-normal italic text-[#ef4d23]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Outship
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#66645f] sm:text-base">
            Everything you need to get your SaaS in front of more buyers,
            without the manual work.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-2xl border border-[#e7e3dc] bg-white/90 p-5 transition-colors duration-200 hover:border-[#ef4d23]/35 sm:min-h-[270px] sm:p-6"
              >
                {/* Card top row */}
                <div className="mb-7 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0e8] text-[#ef4d23]">
                    <Icon
                      size={22}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="font-mono text-xs text-[#aaa49b]">
                    {feature.number}
                  </span>
                </div>

                {/* Card content */}
                <h3 className="text-lg font-semibold tracking-[-0.025em] text-[#171717]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#706c66]">
                  {feature.description}
                </p>

                {/* Bottom detail */}
                <div className="mt-auto flex items-center gap-2 pt-6 text-xs font-medium text-[#8a8178]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ef4d23]" />
                  {feature.detail}
                </div>

                {/* Subtle bottom accent */}
                <div className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-[#ef4d23] transition-transform duration-200 group-hover:scale-x-100" />
              </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-6 flex flex-col items-center justify-center gap-2 text-center sm:mt-8 sm:flex-row">
          <span className="text-sm text-[#777168]">
            Less busywork. More time to build.
          </span>
          <span className="hidden text-[#ef4d23] sm:inline">✳</span>
          <span className="text-sm font-medium text-[#171717]">
            Built for founders who ship.
          </span>
        </div>
      </div>
    </section>
  );
}
