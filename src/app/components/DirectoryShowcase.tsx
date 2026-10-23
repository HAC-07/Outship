
import {
  ArrowUpRight,
  ExternalLink,
  Search,
  Sparkles,
} from "lucide-react";

const directories = [
  {
    name: "Product Hunt",
    category: "Product launches",
    description: "Launch your product to a community of makers and early adopters.",
    letter: "P",
    color: "bg-[#fff0e8] text-[#ef4d23]",
    tag: "Launch platform",
  },
  {
    name: "AlternativeTo",
    category: "Software discovery",
    description: "Help users discover your product while comparing software alternatives.",
    letter: "A",
    color: "bg-[#eaf4e8] text-[#477b42]",
    tag: "Discovery",
  },
  {
    name: "SaaSHub",
    category: "SaaS directory",
    description: "Give potential customers another place to find your software.",
    letter: "S",
    color: "bg-[#e9efff] text-[#4969b0]",
    tag: "SaaS listing",
  },
  {
    name: "BetaList",
    category: "Startup launches",
    description: "Introduce your new product to people interested in emerging startups.",
    letter: "B",
    color: "bg-[#f4eaff] text-[#8959b5]",
    tag: "Early adopters",
  },
  {
    name: "Indie Hackers",
    category: "Founder community",
    description: "Connect with builders and share what you're creating.",
    letter: "I",
    color: "bg-[#fff1d9] text-[#b77b20]",
    tag: "Community",
  },
  {
    name: "There's An AI For That",
    category: "AI tool discovery",
    description: "Explore discovery opportunities for products built around AI.",
    letter: "T",
    color: "bg-[#e6f5f3] text-[#34867d]",
    tag: "AI directory",
  },
];

export default function DirectoryShowcase() {
  return (
    <section
      id="directories"
      aria-labelledby="directories-heading"
      className="w-full px-3 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ef4d23]/15 bg-white px-3.5 py-1.5 text-xs font-medium text-[#ef4d23]">
            <Sparkles size={14} />
            Find your opportunities
          </span>

          <h2
            id="directories-heading"
            className="text-balance text-3xl font-medium leading-tight tracking-[-0.045em] text-[#171717] sm:text-4xl lg:text-5xl"
          >
            Get discovered in the{" "}
            <span
              className="italic text-[#ef4d23]"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontWeight: 400,
              }}
            >
              right places.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#706c66] sm:text-base">
            From launch platforms to niche software directories, discover
            places where your product can get in front of more people.
          </p>
        </div>

        {/* Search-style visual */}
        <div className="mx-auto mb-6 flex max-w-2xl items-center gap-3 rounded-2xl border border-[#e7e3dc] bg-white px-4 py-3.5 shadow-sm sm:mb-8 sm:px-5">
          <Search size={18} className="shrink-0 text-[#ef4d23]" />

          <span className="flex-1 text-sm text-[#96918a]">
            Discover directories relevant to your SaaS...
          </span>

          <span className="hidden rounded-lg bg-[#f5f2ee] px-2.5 py-1.5 text-xs text-[#777168] sm:inline-flex">
            Personalized
          </span>
        </div>

        {/* Directory cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {directories.map((directory) => (
            <article
              key={directory.name}
              className="group flex h-full flex-col rounded-2xl border border-[#e7e3dc] bg-white/80 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#ef4d23]/30 hover:bg-white hover:shadow-md sm:p-6"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-semibold ${directory.color}`}
                >
                  {directory.letter}
                </div>

                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="font-semibold tracking-tight text-[#171717]">
                    {directory.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#96918a]">
                    {directory.category}
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="shrink-0 text-[#aaa49b] transition-colors group-hover:text-[#ef4d23]"
                />
              </div>

              <p className="mt-5 flex-1 text-sm leading-6 text-[#706c66]">
                {directory.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-[#f0ede8] pt-4">
                <span className="rounded-full bg-[#f5f2ee] px-2.5 py-1 text-[11px] font-medium text-[#777168]">
                  {directory.tag}
                </span>

                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#ef4d23]">
                  Opportunity
                  <ExternalLink size={12} />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-8 flex flex-col items-center gap-3 text-center sm:mt-10">
          <p className="text-sm text-[#777168]">
            The goal isn't to submit everywhere. It's to find the right places.
          </p>

          <a
            href="#early-access"
            className="inline-flex items-center gap-2 rounded-full bg-[#ef4d23] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#d9431d]"
          >
            Find your opportunities
            <ArrowUpRight size={16} />
          </a>
        </div>

        <p className="mt-5 text-center text-[11px] leading-5 text-[#96918a]">
          Examples shown for illustration. Availability, relevance, and
          submission requirements should be verified for each directory.
        </p>
      </div>
    </section>
  );
}
