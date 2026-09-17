import Link from "next/link";
import {
  HiArrowRight,
  HiCheckCircle,
  HiClock,
  HiMapPin,
  HiPhone,
  HiTruck,
  HiUserPlus,
} from "react-icons/hi2";

export default function RiderPage() {
  return (
    <main className="bg-[#F8FAF8] text-[#1F2933]">

      {/* =========================
          HERO
      ========================= */}
      <section className="bg-[#14532D] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
            BECOME A MARKET2DOOR RIDER
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Deliver locally.
            <span className="block text-[#D4A72C]">
              Grow with us.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Join our growing network of delivery riders serving businesses and
            customers around Osogbo. Receive delivery requests and help move
            products from the market to their destination.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4A72C] px-6 py-3.5 text-sm font-bold text-[#14532D] transition hover:bg-[#E5BC45]"
            >
              Become a Rider
              <HiArrowRight />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#14532D]"
            >
              How It Works
            </Link>

          </div>

        </div>
      </section>


      {/* =========================
          INTRO
      ========================= */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
              FOR LOCAL RIDERS
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#14532D] sm:text-4xl">
              Put your motorcycle to work with local deliveries.
            </h2>

            <p className="mt-5 leading-7 text-[#647067]">
              MARKET2DOOR works with existing dispatch riders to help connect
              local businesses with customers who need their products
              delivered.
            </p>

            <p className="mt-4 leading-7 text-[#647067]">
              Our goal is to create a straightforward system where riders can
              receive delivery opportunities while businesses have a reliable
              way to move their goods.
            </p>

          </div>


          {/* Rider Card */}
          <div className="rounded-3xl bg-[#F8FAF8] p-8 sm:p-10">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#166534]">
              <HiTruck className="text-3xl text-white" />
            </div>

            <h3 className="mt-7 text-2xl font-bold text-[#14532D]">
              What you can expect
            </h3>

            <div className="mt-6 space-y-4">

              <div className="flex gap-3">
                <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-[#166534]" />
                <p className="text-sm leading-6 text-[#647067]">
                  Local delivery opportunities.
                </p>
              </div>

              <div className="flex gap-3">
                <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-[#166534]" />
                <p className="text-sm leading-6 text-[#647067]">
                  Clear pickup and delivery information.
                </p>
              </div>

              <div className="flex gap-3">
                <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-[#166534]" />
                <p className="text-sm leading-6 text-[#647067]">
                  A simple process for handling delivery requests.
                </p>
              </div>

              <div className="flex gap-3">
                <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-[#166534]" />
                <p className="text-sm leading-6 text-[#647067]">
                  An opportunity to build relationships with local businesses.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================
          BENEFITS
      ========================= */}
      <section className="bg-[#F8FAF8] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
              WHY RIDE WITH US
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#14532D] sm:text-4xl">
              Built around local delivery
            </h2>

            <p className="mt-4 leading-7 text-[#647067]">
              MARKET2DOOR is starting with a simple local model focused on
              connecting businesses, customers and riders.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* Card 1 */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#166534]">
                <HiMapPin className="text-2xl text-white" />
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#14532D]">
                Local Routes
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Focus on delivery opportunities within the local service
                area.
              </p>

            </div>


            {/* Card 2 */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#166534]">
                <HiClock className="text-2xl text-white" />
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#14532D]">
                Flexible Opportunities
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Delivery requests can provide additional opportunities for
                riders already working locally.
              </p>

            </div>


            {/* Card 3 */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#166534]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C]/15 text-2xl font-bold text-white"> ₦</div>
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#14532D]">
                Earn Per Delivery
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Delivery earnings and rider terms will be agreed clearly
                before each service begins.
              </p>

            </div>


            {/* Card 4 */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C]">
                <HiUserPlus className="text-2xl text-[#14532D]" />
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#14532D]">
                Join the Network
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Become part of a local network connecting riders with
                businesses that need delivery support.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* =========================
          HOW RIDER PROCESS WORKS
      ========================= */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
              THE RIDER PROCESS
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#14532D] sm:text-4xl">
              How deliveries work for riders
            </h2>

            <p className="mt-4 leading-7 text-[#647067]">
              We want the process to be clear from the moment a delivery is
              assigned until the package reaches the customer.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* Step 1 */}
            <div className="rounded-2xl bg-[#F8FAF8] p-7">

              <span className="text-sm font-bold text-[#D4A72C]">
                01
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#14532D]">
                Receive Request
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Receive the pickup, destination and package information for an
                available delivery.
              </p>

            </div>


            {/* Step 2 */}
            <div className="rounded-2xl bg-[#F8FAF8] p-7">

              <span className="text-sm font-bold text-[#D4A72C]">
                02
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#14532D]">
                Confirm
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Confirm that you can handle the delivery and understand the
                pickup and destination details.
              </p>

            </div>


            {/* Step 3 */}
            <div className="rounded-2xl bg-[#F8FAF8] p-7">

              <span className="text-sm font-bold text-[#D4A72C]">
                03
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#14532D]">
                Pick Up
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Collect the package from the agreed pickup point and prepare
                it for delivery.
              </p>

            </div>


            {/* Step 4 */}
            <div className="rounded-2xl bg-[#F8FAF8] p-7">

              <span className="text-sm font-bold text-[#D4A72C]">
                04
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#14532D]">
                Deliver
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Take the package to the specified customer and complete the
                delivery.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* =========================
          RIDER REQUIREMENTS
      ========================= */}
      <section className="bg-[#14532D] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
              RIDER REQUIREMENTS
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Who can apply?
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-white/70">
              We are looking for responsible local riders who can provide
              reliable delivery service to businesses and their customers.
            </p>

          </div>


          <div className="space-y-4">

            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-[#D4A72C]" />

              <div>
                <h3 className="font-bold">
                  Valid identification
                </h3>

                <p className="mt-1 text-sm leading-6 text-white/60">
                  Applicants should be able to provide appropriate
                  identification.
                </p>
              </div>
            </div>


            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-[#D4A72C]" />

              <div>
                <h3 className="font-bold">
                  Suitable motorcycle
                </h3>

                <p className="mt-1 text-sm leading-6 text-white/60">
                  Riders should have access to a suitable motorcycle for
                  local deliveries.
                </p>
              </div>
            </div>


            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-[#D4A72C]" />

              <div>
                <h3 className="font-bold">
                  Knowledge of Osogbo
                </h3>

                <p className="mt-1 text-sm leading-6 text-white/60">
                  Familiarity with local roads and neighborhoods is useful for
                  local delivery work.
                </p>
              </div>
            </div>


            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-[#D4A72C]" />

              <div>
                <h3 className="font-bold">
                  Professional attitude
                </h3>

                <p className="mt-1 text-sm leading-6 text-white/60">
                  Riders should communicate respectfully with businesses and
                  customers.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          CTA
      ========================= */}
      <section className="bg-[#F8FAF8] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white px-6 py-14 text-center shadow-sm ring-1 ring-[#E2E8E3] sm:px-10">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#166534]">
            <HiTruck className="text-2xl text-white" />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold text-[#14532D] sm:text-4xl">
            Ready to join MARKET2DOOR?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#647067]">
            Get in touch with our team and tell us a little about yourself
            and your delivery experience.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#166534] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#14532D]"
            >
              Contact Us
              <HiPhone />
            </Link>

            <Link
              href="/request-delivery"
              className="inline-flex items-center justify-center rounded-lg border border-[#166534] px-7 py-3.5 text-sm font-bold text-[#166534] transition hover:bg-[#166534] hover:text-white"
            >
              See Delivery Process
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}