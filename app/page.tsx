import Link from "next/link";
import {
  HiArrowRight,
  HiCheckCircle,
  HiClock,
  HiMapPin,
  HiTruck,
} from "react-icons/hi2";

export default function Home() {
  return (
    <main className="bg-[#F8FAF8] text-[#1F2933]">

      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:px-10">

          {/* Hero Content */}
          <div className="max-w-2xl">

            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4A72C]/30 bg-[#D4A72C]/10 px-4 py-2 text-sm font-semibold text-[#14532D]">
              <span className="h-2 w-2 rounded-full bg-[#D4A72C]" />
              Local delivery made simple
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#14532D] sm:text-5xl lg:text-6xl">
              From the Market
              <span className="block text-[#D4A72C]">
                to Your Door.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-[#647067] sm:text-lg">
              Reliable local delivery for market sellers, shops and small
              businesses in Osogbo. We pick up your goods and get them safely
              to your customer.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/request-delivery"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#166534] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#14532D]"
              >
                Request a Delivery
                <HiArrowRight className="text-lg" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-[#166534] px-6 py-3.5 text-sm font-bold text-[#166534] transition hover:bg-[#166534] hover:text-white"
              >
                How It Works
              </Link>

            </div>

            {/* Trust Points */}
            <div className="mt-9 flex flex-col gap-3 text-sm text-[#647067] sm:flex-row sm:flex-wrap sm:gap-6">

              <div className="flex items-center gap-2">
                <HiCheckCircle className="text-lg text-[#166534]" />
                Reliable Riders
              </div>

              <div className="flex items-center gap-2">
                <HiCheckCircle className="text-lg text-[#166534]" />
                Local Delivery
              </div>

              <div className="flex items-center gap-2">
                <HiCheckCircle className="text-lg text-[#166534]" />
                Simple Process
              </div>

            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">

            {/* Main Card */}
            <div className="relative mx-auto max-w-lg overflow-hidden rounded-3xl bg-[#14532D] p-6 shadow-2xl sm:p-8">

              {/* Decorative Circle */}
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#D4A72C]/20" />
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5" />

              <div className="relative">

                {/* Delivery Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/60">
                      MARKET2DOOR
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-white">
                      Your delivery is on the way
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A72C]">
                    <HiTruck className="text-2xl text-[#14532D]" />
                  </div>
                </div>

                {/* Delivery Route */}
                <div className="mt-8 rounded-2xl bg-white p-5">

                  <div className="flex items-start gap-4">

                    <div className="flex flex-col items-center">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#166534] text-white">
                        <HiMapPin />
                      </div>

                      <div className="h-12 w-px border-l border-dashed border-[#D4A72C]" />

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4A72C] text-[#14532D]">
                        <HiMapPin />
                      </div>
                    </div>

                    <div className="flex-1 space-y-8">

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#647067]">
                          Pickup
                        </p>

                        <p className="mt-1 font-bold text-[#1F2933]">
                          Igbona Market
                        </p>

                        <p className="mt-1 text-sm text-[#647067]">
                          Osogbo, Osun State
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#647067]">
                          Delivery
                        </p>

                        <p className="mt-1 font-bold text-[#1F2933]">
                          Customer&apos;s Door
                        </p>

                        <p className="mt-1 text-sm text-[#647067]">
                          Osogbo, Osun State
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Delivery Status */}
                <div className="mt-5 flex items-center gap-3 rounded-xl bg-white/10 p-4">
                  <HiClock className="text-xl text-[#D4A72C]" />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Delivery in progress
                    </p>

                    <p className="text-xs text-white/60">
                      Rider is on the way
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          HOW IT WORKS
      ========================= */}
      <section className="bg-[#F8FAF8] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#14532D] sm:text-4xl">
              Delivery made simple
            </h2>

            <p className="mt-4 text-[#647067]">
              No complicated process. Request your delivery and let us handle
              the rest.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* Step 1 */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#166534] text-lg font-bold text-white">
                01
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#14532D]">
                Request
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Tell us where your package should be picked up and delivered.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#166534] text-lg font-bold text-white">
                02
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#14532D]">
                We Assign
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                We connect your delivery request with an available rider.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#166534] text-lg font-bold text-white">
                03
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#14532D]">
                We Pick Up
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Your rider picks up the package from the seller or market.
              </p>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C] text-lg font-bold text-[#14532D]">
                04
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#14532D]">
                Delivered
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Your package arrives safely at your customer&apos;s door.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          FOR BUSINESSES
      ========================= */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
              For Businesses
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#14532D] sm:text-4xl">
              Focus on selling.
              <span className="block text-[#D4A72C]">
                Leave the delivery to us.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-[#647067]">
              Whether you run a market stall, shop or small business, we help
              you get your products from your location to your customers
              without the stress of arranging delivery yourself.
            </p>

            <div className="mt-7">
              <Link
                href="/business"
                className="inline-flex items-center gap-2 font-bold text-[#166534] transition hover:text-[#14532D]"
              >
                Learn more for businesses
                <HiArrowRight />
              </Link>
            </div>
          </div>

          {/* Business Benefits */}
          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl bg-[#F8FAF8] p-6">
              <HiTruck className="text-3xl text-[#166534]" />

              <h3 className="mt-5 font-bold text-[#14532D]">
                Reliable Riders
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#647067]">
                Work with riders available for your local delivery needs.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8FAF8] p-6">
              <HiClock className="text-3xl text-[#166534]" />

              <h3 className="mt-5 font-bold text-[#14532D]">
                Save Time
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#647067]">
                Spend more time serving customers and growing your business.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8FAF8] p-6">
              <HiMapPin className="text-3xl text-[#166534]" />

              <h3 className="mt-5 font-bold text-[#14532D]">
                Local Knowledge
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#647067]">
                Built around local delivery needs in Osogbo.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8FAF8] p-6">
              <HiCheckCircle className="text-3xl text-[#166534]" />

              <h3 className="mt-5 font-bold text-[#14532D]">
                Simple Process
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#647067]">
                Request, assign, pick up and deliver. That&apos;s it.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          WHY MARKET2DOOR
      ========================= */}
      <section className="bg-[#14532D] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
              Why Market2Door
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Built for local businesses
            </h2>

            <p className="mt-4 leading-7 text-white/70">
              We understand the everyday challenges of moving goods from
              markets and shops to customers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-lg font-bold">
                Local First
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                Starting with the communities and businesses we know in
                Osogbo.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-lg font-bold">
                Simple &amp; Practical
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                No complicated process. Just tell us what needs to be
                delivered and where it should go.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-lg font-bold">
                Built to Grow
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                Starting simple today, with technology that can grow alongside
                local businesses.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          FINAL CTA
      ========================= */}
      <section className="bg-[#F8FAF8] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#166534] px-6 py-14 text-center shadow-xl sm:px-10">

          <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
            Ready to Deliver?
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Let&apos;s get your delivery moving.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/75">
            Whether you&apos;re sending one package or delivering products to
            your customers, Market2Door is here to help.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/request-delivery"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4A72C] px-7 py-3.5 text-sm font-bold text-[#14532D] transition hover:bg-[#E5BC45]"
            >
              Request a Delivery
              <HiArrowRight />
            </Link>

            <Link
              href="/rider"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#14532D]"
            >
              Become a Rider
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}