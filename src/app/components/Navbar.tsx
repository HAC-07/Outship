"use client";

import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Directories", href: "#directories" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative z-50 flex justify-center px-3 pt-4 sm:px-4 sm:pt-6">
      <nav
        className="relative flex w-full max-w-[900px] items-center justify-between rounded-3xl border border-neutral-200 bg-white py-2.5 pl-5 pr-5 shadow-sm"
        aria-label="Main navigation"
      >
        {/* Logo */}
        {/* <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ef4d23]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L4 7v10l8 5 8-5V7l-8-5z"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M12 8l4 2.5v5L12 18l-4-2.5v-5L12 8z"
                fill="white"
                opacity="0.9"
              />
              <path
                d="M12 2v6M4 7l4 3.5M20 7l-4 3.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-[#171717]">
            Outship
          </span>
        </a> */}

        <a href="/" className="flex shrink-0 items-center ">
          <Image
            src="/outship-logo.png"
            alt="Outship"
            width={100}
            height={10}
            className="h-10 w-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13.5px] font-medium text-[#66645f] transition-colors hover:text-[#171717]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <a
            href="#early-access"
            className="hidden items-center gap-1 rounded-full bg-[#ef4d23] py-2 pl-5 pr-2 text-[13px] font-medium text-white transition-colors hover:bg-[#d9431d] md:inline-flex"
          >
            Get early access
            <span className="ml-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              <ChevronRight className="h-3.5 w-3.5" />
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#171717] transition-colors hover:bg-neutral-100 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute left-3 right-3 top-[72px] z-50 rounded-2xl border border-neutral-200 bg-white p-3 shadow-lg sm:left-4 sm:right-4 sm:top-[80px]">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-[14px] font-medium text-[#171717] transition-colors hover:bg-neutral-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#early-access"
              onClick={() => setMobileOpen(false)}
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-[#ef4d23] px-4 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#d9431d]"
            >
              Get early access
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
