import { ArrowRight, Check, Globe, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";


const platforms = [
  "Product Hunt",
  "Peerlist",
  "Indie Hackers",
  "BetaList",
  "SaaSHub",
  "AlternativeTo",
];

const features = [
  {
    icon: Sparkles,
    title: "Find where to launch",
    description:
      "Get a focused list of relevant directories and communities for your product instead of wasting hours searching.",
  },
  {
    icon: Zap,
    title: "Generate your listings",
    description:
      "Turn your product URL into platform-ready descriptions, tags and launch copy in seconds.",
  },
  {
    icon: Globe,
    title: "Autofill everything",
    description:
      "Use the Outship Chrome extension to fill repetitive submission forms without copying and pasting.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#171717]">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="text-xl font-bold tracking-tight">
          Outship<span className="text-[#777]">.in</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-[#555] md:flex">
          <a href="#how-it-works" className="transition hover:text-black">
            How it works
          </a>
          <a href="#pricing" className="transition hover:text-black">
            Pricing
          </a>
        </div>

        <Button className="rounded-full bg-[#171717] px-5 text-white hover:bg-[#333]">
          Launch your product
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-20 text-center md:pt-28">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-[#555] shadow-sm">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Built for SaaS founders
        </div>

        <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
          Launch your SaaS
          <br />
          <span className="text-[#777]">everywhere that matters.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#666] md:text-xl">
          Find the right places to launch your product, generate listing copy,
          and autofill submissions — without spending your entire day doing it
          manually.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="h-12 rounded-full bg-[#171717] px-7 text-base text-white hover:bg-[#333]"
          >
            Launch my product
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <a
            href="#how-it-works"
            className="flex h-12 items-center rounded-full px-6 text-sm font-medium text-[#555] transition hover:bg-white"
          >
            See how it works
          </a>
        </div>

        <p className="mt-5 text-sm text-[#888]">
          Launch offer: <span className="font-semibold text-[#555]">$24.99</span>{" "}
          for the first 10 customers
        </p>
      </section>

      {/* Product preview */}
      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-2 border-b border-black/5 px-5 py-4">
            <div className="h-2.5 w-2.5 rounded-full bg-[#ddd]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#ddd]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#ddd]" />
            <div className="ml-4 h-7 flex-1 rounded-lg bg-[#f5f5f5]" />
          </div>

          <div className="grid gap-8 p-7 md:grid-cols-[1fr_1.2fr] md:p-10">
            <div>
              <p className="text-sm font-medium text-[#999]">
                YOUR PRODUCT
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Your SaaS product
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#777]">
                Outship analyzes your product and finds relevant places where
                your target users already discover new products.
              </p>

              <div className="mt-7 rounded-xl border border-black/5 bg-[#f7f4ee] p-4">
                <p className="text-xs text-[#999]">PRODUCT URL</p>
                <p className="mt-1 text-sm font-medium">
                  https://yourproduct.com
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#f7f4ee] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Recommended places</p>
                  <p className="mt-1 text-xs text-[#888]">
                    6 relevant opportunities found
                  </p>
                </div>

                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium">
                  Ready
                </span>
              </div>

              <div className="mt-5 space-y-2">
                {platforms.map((platform, index) => (
                  <div
                    key={platform}
                    className="flex items-center justify-between rounded-xl bg-white px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#171717] text-xs font-bold text-white">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium">{platform}</span>
                    </div>

                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#999]">
              How it works
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              From product URL
              <br />
              to distribution.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-black/8 bg-[#f7f4ee] p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#171717] text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-sm text-[#aaa]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#777]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl bg-[#171717] px-7 py-16 text-white md:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-white/50">
              STOP WASTING HOURS ON SUBMISSIONS
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Your product deserves more than one launch post.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              Outship helps founders turn one product launch into a repeatable
              distribution process.
            </p>

            <Button className="mt-8 h-12 rounded-full bg-white px-7 text-[#171717] hover:bg-white/90">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#999]">
            Launch offer
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Simple pricing.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[#777]">
            No complicated subscription. Get your product launch workflow
            running today.
          </p>

          <div className="mx-auto mt-12 max-w-md rounded-3xl border border-black/10 bg-[#f7f4ee] p-8 text-left shadow-sm">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-lg font-semibold">Launch</p>
                <p className="mt-1 text-sm text-[#888]">
                  Everything you need to launch
                </p>
              </div>

              <div className="text-right">
                <span className="text-4xl font-semibold">$24.99</span>
                <p className="text-xs text-[#999]">first 10 customers</p>
              </div>
            </div>

            <div className="my-7 h-px bg-black/8" />

            <div className="space-y-3">
              {[
                "Product analysis",
                "Recommended launch opportunities",
                "AI-generated listing copy",
                "Submission tracker",
                "Chrome autofill extension",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 text-green-600" />
                  {item}
                </div>
              ))}
            </div>

            <Button className="mt-8 h-12 w-full rounded-full bg-[#171717] text-white hover:bg-[#333]">
              Launch my product
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-6 py-28 text-center">
        <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Build it.
          <br />
          <span className="text-[#888]">Then Outship it.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-[#777]">
          Stop wondering where to promote your SaaS. Start shipping it to the
          places that matter.
        </p>

        <Button
          size="lg"
          className="mt-8 h-12 rounded-full bg-[#171717] px-8 text-white hover:bg-[#333]"
        >
          Get started with Outship
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-[#888] md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Outship.in. Built for founders who ship.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-black">
              X
            </a>
            <a href="#" className="hover:text-black">
              Privacy
            </a>
            <a href="#" className="hover:text-black">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}