import Link from "next/link";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#14532D] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight"
            >
              MARKET
              <span className="text-[#D4A72C]">2</span>
              DOOR
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
              Reliable local delivery for market sellers, shops and small
              businesses. From the market to your door, we make delivery
              simple.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg transition hover:bg-[#D4A72C] hover:text-[#14532D]"
              >
                <FaWhatsapp />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-[#D4A72C] hover:text-[#14532D]"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-[#D4A72C] hover:text-[#14532D]"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-[#D4A72C] hover:text-[#14532D]"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-[#D4A72C]">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">
              <Link
                href="/"
                className="block text-sm text-white/75 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="block text-sm text-white/75 transition hover:text-white"
              >
                How It Works
              </Link>

              <Link
                href="/business"
                className="block text-sm text-white/75 transition hover:text-white"
              >
                For Businesses
              </Link>

              <Link
                href="/rider"
                className="block text-sm text-white/75 transition hover:text-white"
              >
                Become a Rider
              </Link>

              <Link
                href="/pricing"
                className="block text-sm text-white/75 transition hover:text-white"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold text-[#D4A72C]">
              Our Services
            </h3>

            <div className="mt-5 space-y-3">
              <p className="text-sm text-white/75">
                Market Pickup & Delivery
              </p>

              <p className="text-sm text-white/75">
                Shop-to-Customer Delivery
              </p>

              <p className="text-sm text-white/75">
                Small Business Delivery
              </p>

              <p className="text-sm text-white/75">
                Same-Day Local Delivery
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-[#D4A72C]">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4 text-sm text-white/75">
              <div>
                <p className="font-semibold text-white">Location</p>
                <p className="mt-1 leading-6">
                  Igbona Market &amp; Orisunmibare
                  <br />
                  Osogbo, Osun State, Nigeria
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">Phone</p>
                <a
                  href="tel:+2340000000000"
                  className="mt-1 block transition hover:text-[#D4A72C]"
                >
                  +234 7039406230
                </a>
              </div>

              <div>
                <p className="font-semibold text-white">Email</p>
                <a
                  href="mailto:hello@market2door.com"
                  className="mt-1 block transition hover:text-[#D4A72C]"
                >
                  hello@market2door.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery CTA */}
        <div className="mt-14 rounded-2xl bg-white/10 px-6 py-7 sm:flex sm:items-center sm:justify-between sm:px-8">
          <div>
            <h3 className="text-xl font-bold">
              Need something delivered?
            </h3>

            <p className="mt-2 text-sm text-white/70">
              Request a delivery and let us take it from the market to your door.
            </p>
          </div>

          <Link
            href="/request-delivery"
            className="mt-5 inline-flex rounded-lg bg-[#D4A72C] px-6 py-3 text-sm font-bold text-[#14532D] transition hover:bg-[#E5BC45] sm:mt-0"
          >
            Request Delivery
          </Link>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} MARKET2DOOR. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="transition hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}