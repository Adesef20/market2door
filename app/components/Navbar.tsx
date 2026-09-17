
"use client";

import Link from "next/link";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Top Navbar */}
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-2xl font-extrabold tracking-tight text-[#166534]"
          >
            MARKET
            <span className="text-[#D4A72C]">2</span>
            DOOR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">

            <Link
              href="/"
              className="text-sm font-semibold text-[#1F2933] transition-colors hover:text-[#166534]"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm font-semibold text-[#1F2933] transition-colors hover:text-[#166534]"
            >
              How It Works
            </Link>

            <Link
              href="/business"
              className="text-sm font-semibold text-[#1F2933] transition-colors hover:text-[#166534]"
            >
              For Businesses
            </Link>

            <Link
              href="/rider"
              className="text-sm font-semibold text-[#1F2933] transition-colors hover:text-[#166534]"
            >
              Become a Rider
            </Link>

            <Link
              href="/pricing"
              className="text-sm font-semibold text-[#1F2933] transition-colors hover:text-[#166534]"
            >
              Pricing
            </Link>

          </div>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 md:flex">

            <Link
              href="/seller/register"
              className="rounded-lg border border-[#166534] px-4 py-2.5 text-sm font-bold text-[#166534] transition hover:bg-[#166534] hover:text-white"
            >
              Register
            </Link>

            <Link
              href="/request-delivery"
              className="rounded-lg bg-[#166534] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#14532D]"
            >
              Request Delivery
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-3xl text-[#1F2933] transition-colors hover:bg-[#F8FAF8] hover:text-[#166534] md:hidden"
          >
            {isOpen ? <HiXMark /> : <HiBars3 />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-[#E2E8E3] py-5 md:hidden">

            <div className="flex flex-col gap-1">

              <Link
                href="/"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[#1F2933] hover:bg-[#F8FAF8] hover:text-[#166534]"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[#1F2933] hover:bg-[#F8FAF8] hover:text-[#166534]"
              >
                How It Works
              </Link>

              <Link
                href="/business"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[#1F2933] hover:bg-[#F8FAF8] hover:text-[#166534]"
              >
                For Businesses
              </Link>

              <Link
                href="/rider"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[#1F2933] hover:bg-[#F8FAF8] hover:text-[#166534]"
              >
                Become a Rider
              </Link>

              <Link
                href="/pricing"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[#1F2933] hover:bg-[#F8FAF8] hover:text-[#166534]"
              >
                Pricing
              </Link>

              <div className="my-3 border-t border-[#E2E8E3]" />

              <Link
                href="/seller/register"
                onClick={closeMenu}
                className="rounded-lg border border-[#166534] px-4 py-3 text-center text-sm font-bold text-[#166534] transition hover:bg-[#166534] hover:text-white"
              >
                Register as a Seller
              </Link>

              <Link
                href="/request-delivery"
                onClick={closeMenu}
                className="mt-2 rounded-lg bg-[#166534] px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-[#14532D]"
              >
                Request Delivery
              </Link>

            </div>

          </div>
        )}

      </nav>
    </header>
  );
}

