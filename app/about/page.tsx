import Link from "next/link";
import {
  HiArrowRight,
  HiCheckCircle,
  HiClipboardDocumentList,
  HiMapPin,
  HiTruck,
  HiUserGroup,
} from "react-icons/hi2";

export default function AboutPage() {
  return (
    <main className="bg-[#F8FAF8] text-[#1F2933]">

      {/* HERO */}
      <section className="bg-[#14532D] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
            HOW IT WORKS
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Delivery that works around your business.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            MARKET2DOOR connects market sellers, shops and small businesses
            with local delivery riders, making it easier to get products from
            where they are sold to where they need to go.
          </p>
        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
              Simple From Start to Finish
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#14532D] sm:text-4xl">
              You sell. We handle the movement.
            </h2>

            <p className="mt-5 leading-7 text-[#647067]">
              Running a business is already demanding enough. When a customer
              needs their order delivered, you should not have to spend your
              time searching for a rider or figuring out how to get the
              package there.
            </p>

            <p className="mt-4 leading-7 text-[#647067]">
              MARKET2DOOR is designed to make local delivery straightforward.
              You provide the details, we coordinate the delivery.
            </p>

            <Link
              href="/request-delivery"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#166534] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#14532D]"
            >
              Request a Delivery
              <HiArrowRight />
            </Link>
          </div>


          {/* Highlight Card */}
          <div className="rounded-3xl bg-[#14532D] p-8 text-white sm:p-10">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4A72C]">
              <HiTruck className="text-3xl text-[#14532D]" />
            </div>

            <h3 className="mt-7 text-2xl font-bold">
              From the Market to Your Door
            </h3>

            <p className="mt-4 leading-7 text-white/70">
              Whether you are sending goods from Igbona Market, a local shop,
              or another pickup point in our service area, we help coordinate
              the journey to your customer.
            </p>

            <div className="mt-7 space-y-4">

              <div className="flex items-center gap-3">
                <HiCheckCircle className="shrink-0 text-xl text-[#D4A72C]" />
                <span className="text-sm text-white/80">
                  Local delivery coordination
                </span>
              </div>

              <div className="flex items-center gap-3">
                <HiCheckCircle className="shrink-0 text-xl text-[#D4A72C]" />
                <span className="text-sm text-white/80">
                  Pickup and delivery information
                </span>
              </div>

              <div className="flex items-center gap-3">
                <HiCheckCircle className="shrink-0 text-xl text-[#D4A72C]" />
                <span className="text-sm text-white/80">
                  Rider assignment
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* PROCESS */}
      <section className="bg-[#F8FAF8] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
              The Process
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#14532D] sm:text-4xl">
              Four simple steps
            </h2>

            <p className="mt-4 leading-7 text-[#647067]">
              Our delivery process is designed to stay simple for both
              businesses and their customers.
            </p>
          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* 01 */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#166534]">
                <HiClipboardDocumentList className="text-2xl text-white" />
              </div>

              <p className="mt-6 text-xs font-bold tracking-widest text-[#D4A72C]">
                STEP 01
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#14532D]">
                Request
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Submit the pickup location, delivery address and package
                details.
              </p>
            </div>


            {/* 02 */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#166534]">
                <HiUserGroup className="text-2xl text-white" />
              </div>

              <p className="mt-6 text-xs font-bold tracking-widest text-[#D4A72C]">
                STEP 02
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#14532D]">
                We Assign
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Our team coordinates the request and assigns an available
                delivery rider.
              </p>
            </div>


            {/* 03 */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#166534]">
                <HiMapPin className="text-2xl text-white" />
              </div>

              <p className="mt-6 text-xs font-bold tracking-widest text-[#D4A72C]">
                STEP 03
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#14532D]">
                Pickup
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                The rider collects the package from the agreed pickup
                location.
              </p>
            </div>


            {/* 04 */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#D4A72C]">
                <HiTruck className="text-2xl text-[#14532D]" />
              </div>

              <p className="mt-6 text-xs font-bold tracking-widest text-[#D4A72C]">
                STEP 04
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#14532D]">
                Delivery
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                The package is taken to the recipient at the specified
                delivery location.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* WHO WE SERVE */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
              Who We Serve
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#14532D] sm:text-4xl">
              Built around local businesses
            </h2>
          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-[#F8FAF8] p-8">
              <h3 className="text-xl font-bold text-[#14532D]">
                Market Sellers
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#647067]">
                Sell your products at the market and let us help get customer
                orders to their destination.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8FAF8] p-8">
              <h3 className="text-xl font-bold text-[#14532D]">
                Shop Owners
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#647067]">
                Keep serving customers while we help coordinate local
                deliveries from your shop.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8FAF8] p-8">
              <h3 className="text-xl font-bold text-[#14532D]">
                Small Businesses
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#647067]">
                Give your customers a convenient delivery option without
                needing your own delivery fleet.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="bg-[#F8FAF8] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#166534] px-6 py-14 text-center sm:px-10">

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Need something delivered?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Send your delivery request and let MARKET2DOOR coordinate the
            journey.
          </p>

          <Link
            href="/request-delivery"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#D4A72C] px-7 py-3.5 text-sm font-bold text-[#14532D] transition hover:bg-[#E5BC45]"
          >
            Request a Delivery
            <HiArrowRight />
          </Link>

        </div>
      </section>

    </main>
  );
}