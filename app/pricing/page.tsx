import Link from "next/link";
import {
  HiCheckCircle,
  HiMapPin,
  HiCube,
  HiClock,
  HiArrowRight,
} from "react-icons/hi2";

export default function PricingPage() {
  return (
    <div className="bg-[#F8FAF8]">

      {/* Hero */}
      <section className="border-b border-[#E2E8E3] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
              Simple & Transparent
            </p>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#1F2933] sm:text-5xl lg:text-6xl">
              Delivery pricing that
              <span className="text-[#166534]"> makes sense.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#647067]">
              Every delivery is different. Your delivery fee depends on
              factors such as distance, package size and pickup location.
              Request a delivery to get the details for your trip.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/request-delivery"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#166534] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#14532D]"
              >
                Request a Delivery
                <HiArrowRight className="text-lg" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-[#166534] px-6 py-3.5 text-sm font-bold text-[#166534] transition hover:bg-[#166534] hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Determines Your Price */}
      <section className="bg-[#F8FAF8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
              How We Calculate
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1F2933] sm:text-4xl">
              What affects your delivery fee?
            </h2>

            <p className="mt-4 text-base leading-7 text-[#647067]">
              We consider the details of each delivery so the price reflects
              the actual job.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Distance */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#166534]/10 text-2xl text-[#166534]">
                <HiMapPin />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#1F2933]">
                Distance
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#647067]">
                The distance between the pickup point and the customer&apos;s
                delivery location is one of the main factors.
              </p>
            </div>

            {/* Package */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#D4A72C]/15 text-2xl text-[#166534]">
                <HiCube />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#1F2933]">
                Package Size
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#647067]">
                Small packages and larger items may require different handling
                and rider arrangements.
              </p>
            </div>

            {/* Time */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#166534]/10 text-2xl text-[#166534]">
                <HiClock />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#1F2933]">
                Delivery Details
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#647067]">
                Pickup conditions, delivery requirements and other special
                instructions can also affect the final fee.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">

          <div className="rounded-3xl bg-[#14532D] p-8 text-white sm:p-12 lg:p-14">

            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
                Our Approach
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Fair pricing for local delivery.
              </h2>

              <p className="mt-5 leading-8 text-white/75">
                MARKET2DOOR is designed around local deliveries within Osogbo.
                We want our pricing to remain clear, practical and suitable
                for market sellers, shops and small businesses.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl bg-white/10 p-6">
                <HiCheckCircle className="text-2xl text-[#D4A72C]" />

                <h3 className="mt-4 text-lg font-bold">
                  Clear Before Delivery
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  You should know the delivery details before the rider
                  proceeds with the job.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6">
                <HiCheckCircle className="text-2xl text-[#D4A72C]" />

                <h3 className="mt-4 text-lg font-bold">
                  Local Delivery Focus
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  Our initial service focuses on convenient deliveries within
                  Osogbo and surrounding areas.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6">
                <HiCheckCircle className="text-2xl text-[#D4A72C]" />

                <h3 className="mt-4 text-lg font-bold">
                  Suitable for Businesses
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  Sellers and businesses can request deliveries for their
                  customers without managing riders themselves.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6">
                <HiCheckCircle className="text-2xl text-[#D4A72C]" />

                <h3 className="mt-4 text-lg font-bold">
                  No Complicated Process
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  Tell us where to pick up and where to deliver. We handle
                  the movement.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Who Pricing Is For */}
      <section className="bg-[#F8FAF8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
                Built for Local Businesses
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1F2933] sm:text-4xl">
                Delivery should help your business, not complicate it.
              </h2>

              <p className="mt-5 leading-8 text-[#647067]">
                Whether you sell from Igbona Market, operate a shop in
                Orisunmibare or run a small business elsewhere in Osogbo,
                MARKET2DOOR helps move your products to your customers.
              </p>

              <Link
                href="/business"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#166534] transition hover:text-[#14532D]"
              >
                See how we help businesses
                <HiArrowRight />
              </Link>
            </div>

            <div className="rounded-3xl border border-[#E2E8E3] bg-white p-8 shadow-sm sm:p-10">
              <h3 className="text-2xl font-extrabold text-[#1F2933]">
                Need a delivery?
              </h3>

              <p className="mt-4 leading-7 text-[#647067]">
                Submit your pickup and delivery details and we&apos;ll use the
                information to determine the appropriate delivery arrangement.
              </p>

              <div className="mt-7 space-y-4">
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-[#166534]" />
                  <p className="text-sm text-[#647067]">
                    Tell us where we&apos;re picking up from
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-[#166534]" />
                  <p className="text-sm text-[#647067]">
                    Tell us where the package is going
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-[#166534]" />
                  <p className="text-sm text-[#647067]">
                    Provide the package details
                  </p>
                </div>
              </div>

              <Link
                href="/request-delivery"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#166534] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#14532D]"
              >
                Request a Delivery
                <HiArrowRight className="text-lg" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#166534]">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-24">

          <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
            MARKET2DOOR
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Ready to move something?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/75">
            From the market to your customer&apos;s door, we&apos;re here to help make
            local delivery simple.
          </p>

          <Link
            href="/request-delivery"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#D4A72C] px-7 py-3.5 text-sm font-bold text-[#14532D] transition hover:bg-[#E5BC45]"
          >
            Request a Delivery
            <HiArrowRight className="text-lg" />
          </Link>

        </div>
      </section>

    </div>
  );
}