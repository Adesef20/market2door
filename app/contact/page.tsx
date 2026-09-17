
import Link from "next/link";
import {
  HiEnvelope,
  HiPhone,
  HiMapPin,
  HiClock,
} from "react-icons/hi2";

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAF8]">

      {/* Hero */}
      <section className="border-b border-[#E2E8E3] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">

          <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
            Contact MARKET2DOOR
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-[#1F2933] sm:text-5xl lg:text-6xl">
            We&apos;re here to help with your
            <span className="text-[#166534]"> delivery needs.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#647067]">
            Have a question about our delivery service, seller registration,
            becoming a rider, or your delivery request? Get in touch with us.
          </p>

        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {/* Location */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#166534]/10 text-xl text-[#166534]">
                <HiMapPin />
              </div>

              <h2 className="mt-5 text-lg font-bold text-[#1F2933]">
                Location
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Igbona Market &amp; Orisunmibare
                <br />
                Osogbo, Osun State
                <br />
                Nigeria
              </p>
            </div>

            {/* Phone */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C]/15 text-xl text-[#166534]">
                <HiPhone />
              </div>

              <h2 className="mt-5 text-lg font-bold text-[#1F2933]">
                Phone
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Speak with our team about your delivery or seller account.
              </p>

              <a
                href="tel:+2340000000000"
                className="mt-3 block text-sm font-bold text-[#166534] hover:text-[#14532D]"
              >
                +234 000 000 0000
              </a>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#166534]/10 text-xl text-[#166534]">
                <HiEnvelope />
              </div>

              <h2 className="mt-5 text-lg font-bold text-[#1F2933]">
                Email
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Send us your questions and we&apos;ll get back to you.
              </p>

              <a
                href="mailto:hello@market2door.com"
                className="mt-3 block break-all text-sm font-bold text-[#166534] hover:text-[#14532D]"
              >
                hello@market2door.com
              </a>
            </div>

            {/* Hours */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C]/15 text-xl text-[#166534]">
                <HiClock />
              </div>

              <h2 className="mt-5 text-lg font-bold text-[#1F2933]">
                Business Hours
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Monday – Saturday
                <br />
                8:00 AM – 6:00 PM
              </p>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">

            {/* Help Card */}
            <div className="rounded-3xl bg-[#14532D] p-8 text-white sm:p-10">

              <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
                Need a Delivery?
              </p>

              <h2 className="mt-3 text-3xl font-extrabold">
                Let us move it for you.
              </h2>

              <p className="mt-5 leading-7 text-white/75">
                Tell us where your package is being picked up and where it
                needs to go. We&apos;ll handle the delivery.
              </p>

              <Link
                href="/request-delivery"
                className="mt-7 inline-flex rounded-lg bg-[#D4A72C] px-6 py-3.5 text-sm font-bold text-[#14532D] transition hover:bg-[#E5BC45]"
              >
                Request a Delivery
              </Link>

            </div>

            {/* Seller Card */}
            <div className="rounded-3xl border border-[#E2E8E3] bg-white p-8 sm:p-10">

              <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
                For Sellers
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-[#1F2933]">
                Want to join MARKET2DOOR?
              </h2>

              <p className="mt-5 leading-7 text-[#647067]">
                Register your business and gain access to our seller platform.
                Seller registration currently requires a one-time ₦500
                registration fee.
              </p>

              <Link
                href="/seller/register"
                className="mt-7 inline-flex rounded-lg bg-[#166534] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#14532D]"
              >
                Register as a Seller
              </Link>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

