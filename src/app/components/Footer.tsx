import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const discoverLinks = [
  { label: "Explore directories", href: "#directories" },
  { label: "SaaS directories", href: "#directories" },
  { label: "AI tool directories", href: "#directories" },
  { label: "Startup directories", href: "#directories" },
  { label: "Product launch sites", href: "#directories" },
];

const builderLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Submit with Outship", href: "#pricing" },
  { label: "Done-for-you submissions", href: "#pricing" },
  { label: "Pricing", href: "#pricing" },
  { label: "Get started", href: "/signup" },
];

const resourceLinks = [
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Frequently asked questions", href: "#faq" },
];

const companyLinks = [
  { label: "Contact", href: "mailto:himanshu@outship.in" },
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of service", href: "/terms" },
];

const outshipPrompt =
  "Read https://www.outship.in/llms.txt and explain how Outship works, who it is for, and how it helps founders get their products discovered.";

const aiLinks = [
  {
    name: "ChatGPT",
    href: `https://chatgpt.com/?q=${encodeURIComponent(outshipPrompt)}`,
  },
  {
    name: "Claude",
    href: `https://claude.ai/new?q=${encodeURIComponent(outshipPrompt)}`,
  },
  {
    name: "Perplexity",
    href: `https://www.perplexity.ai/search?q=${encodeURIComponent(outshipPrompt)}`,
  },
  {
    name: "Grok",
    href: `https://grok.com/?q=${encodeURIComponent(outshipPrompt)}`,
  },
];

function FooterLink({ label, href }: { label: string; href: string }) {
  const className =
    "text-sm leading-6 text-[#68645f] transition-colors duration-200 hover:text-[#ef4d23]";

  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={className}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#e8e2d9] bg-[#fbfaf8]">
      {/* CTA banner */}
      <div className="px-4 pb-14 pt-14 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[26px] bg-[#151413] px-5 py-14 text-center sm:px-12 sm:py-16 lg:py-20">
          {/* Subtle warm glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-48 w-3/4 -translate-x-1/2 rounded-full bg-[#ef4d23]/15 blur-[90px]"
          />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#ff9a79]">
              Your next launch starts here
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Stop spending hours submitting your SaaS to directories.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Find relevant directories for your product, or let Outship handle
              the repetitive submission work.
            </p>

            <Link
              href="#pricing"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#ff8a53] bg-[#ef4d23] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(239,77,35,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#d9411c]"
            >
              Explore plans
              <ArrowRight size={17} />
            </Link>

            <p className="mt-4 text-xs text-white/50">
              One-time payment · No recurring subscription
            </p>
          </div>
        </div>
      </div>

      {/* AI discovery */}
      <div className="border-y border-[#e7e0d7] bg-[#f7f5f1]">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#77716a]">
            Ask AI about Outship
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {aiLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#e5ddd2] bg-white px-5 py-3 text-sm transition-colors hover:bg-[#f5f0e9]"
              >
                {item.name}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
            <a
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#e5ddd2] bg-white px-5 py-3 text-sm transition-colors hover:bg-[#f5f0e9]"
            >
              llms.txt <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer navigation */}
      <div className="mx-auto max-w-7xl px-5 pb-6 pt-12 sm:px-8 sm:pt-14 lg:px-10 lg:pt-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1fr_0.9fr] lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 max-w-sm sm:col-span-3 lg:col-span-1">
            <Link
              href="/"
              aria-label="Outship home"
              className="inline-flex items-center gap-2.5"
            >
              <Image
                src="/outship-icon.jpeg"
                alt="Outship"
                width={32}
                height={32}
                className="size-8 rounded-xl object-cover shadow-sm"
              />
              <span className="text-2xl font-semibold tracking-tight text-[#171717]">
                Outship
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#68645f]">
              Get your product in front of buyers, Google, and AI. Discover
              relevant directories and make product distribution easier.
            </p>

            <Link
              href="#pricing"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#ef4d23] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d9411c]"
            >
              Launch your product
              <ArrowRight size={16} />
            </Link>

            {/* Social links: plain text avoids unsupported icon exports */}
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href="https://x.com/outshipin"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="flex h-10 min-w-10 items-center justify-center rounded-xl border border-dashed border-[#ded7ce] px-3 text-2xl font-medium text-[#55504a] transition hover:border-[#ef4d23] hover:text-[#ef4d23]"
              >
                𝕏
              </a>
              {/* <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 min-w-10 items-center justify-center rounded-xl border border-dashed border-[#ded7ce] px-3 text-xs font-bold text-[#55504a] transition hover:border-[#ef4d23] hover:text-[#ef4d23]"
              >
                in
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 min-w-10 items-center justify-center rounded-xl border border-dashed border-[#ded7ce] px-3 text-xs font-medium text-[#55504a] transition hover:border-[#ef4d23] hover:text-[#ef4d23]"
              >
                GitHub
              </a> */}
            </div>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#89837c]">
              Discover
            </h3>
            <ul className="mt-4 space-y-2">
              {discoverLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </div>

          {/* For builders */}
          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#89837c]">
              For builders
            </h3>
            <ul className="mt-4 space-y-2">
              {builderLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#89837c]">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#89837c]">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[#e7e0d7] py-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-[#89837c]">
            © {new Date().getFullYear()} Outship. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/terms"
              className="text-xs text-[#89837c] transition hover:text-[#ef4d23]"
            >
              Terms of service
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-[#89837c] transition hover:text-[#ef4d23]"
            >
              Privacy policy
            </Link>
            <a
              href="mailto:himanshu@outship.in"
              className="text-xs text-[#89837c] transition hover:text-[#ef4d23]"
            >
              Contact
            </a>
          </div>

          <p className="text-xs text-[#89837c]">
            Built for founders, by founders.
          </p>
        </div>
      </div>
    </footer>
  );
}
