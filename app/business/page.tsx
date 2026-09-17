import Link from "next/link";
import {
  HiArrowRight,
  HiCheckCircle,
  HiClock,
  HiCube,
  HiPhone,
  HiTruck,
} from "react-icons/hi2";

export default function BusinessPage() {
  return (
    <main className="bg-[#F8FAF8] text-[#1F2933]">

      {/* =========================
          HERO
      ========================= */}
      <section className="bg-[#14532D] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
            FOR BUSINESSES
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            You focus on selling.
            <span className="block text-[#D4A72C]">
              We handle the delivery.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            MARKET2DOOR helps market sellers, shop owners and small businesses
            move products from their location to their customers through
            simple local delivery.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/request-delivery"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4A72C] px-6 py-3.5 text-sm font-bold text-[#14532D] transition hover:bg-[#E5BC45]"
            >
              Request a Delivery
              <HiArrowRight />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#14532D]"
            >
              Contact Us
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
              Built For Local Business
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#14532D] sm:text-4xl">
              Your customer should not have to worry about how their order
              gets there.
            </h2>

            <p className="mt-5 leading-7 text-[#647067]">
              As a business owner, your priority is serving customers and
              growing your business. MARKET2DOOR helps take the delivery part
              off your hands.
            </p>

            <p className="mt-4 leading-7 text-[#647067]">
              Instead of searching for a rider every time a customer needs
              something delivered, you can send us the delivery details and
              let our team coordinate the process.
            </p>
          </div>


          {/* Highlight */}
          <div className="rounded-3xl bg-[#F8FAF8] p-8 sm:p-10">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#166534]">
              <HiTruck className="text-3xl text-white" />
            </div>

            <h3 className="mt-7 text-2xl font-bold text-[#14532D]">
              A simpler way to deliver
            </h3>

            <div className="mt-6 space-y-4">

              <div className="flex gap-3">
                <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-[#166534]" />
                <p className="text-sm leading-6 text-[#647067]">
                  Submit your delivery details.
                </p>
              </div>

              <div className="flex gap-3">
                <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-[#166534]" />
                <p className="text-sm leading-6 text-[#647067]">
                  We coordinate an available rider.
                </p>
              </div>

              <div className="flex gap-3">
                <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-[#166534]" />
                <p className="text-sm leading-6 text-[#647067]">
                  Your package is picked up.
                </p>
              </div>

              <div className="flex gap-3">
                <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-[#166534]" />
                <p className="text-sm leading-6 text-[#647067]">
                  Your customer receives the order.
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
              Why Businesses Use Us
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#14532D] sm:text-4xl">
              Delivery without the extra stress
            </h2>

            <p className="mt-4 leading-7 text-[#647067]">
              MARKET2DOOR is designed around the everyday needs of local
              businesses.
            </p>
          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* Card 1 */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#166534]">
                <HiTruck className="text-2xl text-white" />
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#14532D]">
                Local Riders
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Connect your delivery needs with riders serving your local
                area.
              </p>

            </div>


            {/* Card 2 */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#166534]">
                <HiClock className="text-2xl text-white" />
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#14532D]">
                Save Time
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Spend less time arranging deliveries and more time serving
                customers.
              </p>

            </div>


            {/* Card 3 */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#166534]">
                <HiCube className="text-2xl text-white" />
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#14532D]">
                Simple Process
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Give us the pickup and delivery details and let us coordinate
                the next steps.
              </p>

            </div>


            {/* Card 4 */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C]">
                <HiCheckCircle className="text-2xl text-[#14532D]" />
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#14532D]">
                Customer Convenience
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                Give your customers an easier way to receive their purchases.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* =========================
          WHO CAN USE MARKET2DOOR
      ========================= */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
              Who We Work With
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#14532D] sm:text-4xl">
              From market stalls to growing businesses
            </h2>
          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-[#F8FAF8] p-8">

              <span className="text-sm font-bold text-[#D4A72C]">
                01
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#14532D]">
                Market Sellers
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#647067]">
                Selling food, clothing, household products or other goods?
                MARKET2DOOR can help move customer orders from the market to
                their destination.
              </p>

            </div>


            <div className="rounded-2xl bg-[#F8FAF8] p-8">

              <span className="text-sm font-bold text-[#D4A72C]">
                02
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#14532D]">
                Shop Owners
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#647067]">
                Give your customers a delivery option while keeping your
                attention on your shop and daily operations.
              </p>

            </div>


            <div className="rounded-2xl bg-[#F8FAF8] p-8">

              <span className="text-sm font-bold text-[#D4A72C]">
                03
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#14532D]">
                Small Businesses
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#647067]">
                If your business sells products locally, we can help you
                coordinate deliveries without maintaining your own rider
                network.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* =========================
          HOW IT HELPS
      ========================= */}
      <section className="bg-[#14532D] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
              Your Business. Your Customers.
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Let delivery become part of your customer experience.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-white/70">
              A smooth delivery process can make it easier for customers to
              receive what they buy from your business. MARKET2DOOR helps
              coordinate that local movement.
            </p>

            <Link
              href="/request-delivery"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#D4A72C] px-6 py-3.5 text-sm font-bold text-[#14532D] transition hover:bg-[#E5BC45]"
            >
              Start a Delivery
              <HiArrowRight />
            </Link>
          </div>


          {/* Steps */}
          <div className="space-y-4">

            <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4A72C] font-bold text-[#14532D]">
                1
              </div>

              <div>
                <h3 className="font-bold">
                  You receive an order
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Your customer wants something delivered.
                </p>
              </div>
            </div>


            <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4A72C] font-bold text-[#14532D]">
                2
              </div>

              <div>
                <h3 className="font-bold">
                  You request delivery
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Send us the pickup and customer details.
                </p>
              </div>
            </div>


            <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4A72C] font-bold text-[#14532D]">
                3
              </div>

              <div>
                <h3 className="font-bold">
                  We coordinate the rider
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Our delivery process takes it from there.
                </p>
              </div>
            </div>


            <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4A72C] font-bold text-[#14532D]">
                4
              </div>

              <div>
                <h3 className="font-bold">
                  Your customer receives the package
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  The delivery reaches the specified destination.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          CONTACT CTA
      ========================= */}
      <section className="bg-[#F8FAF8] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white px-6 py-14 text-center shadow-sm ring-1 ring-[#E2E8E3] sm:px-10">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#166534]">
            <HiPhone className="text-2xl text-white" />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold text-[#14532D] sm:text-4xl">
            Have questions about business deliveries?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#647067]">
            Talk to MARKET2DOOR about your delivery needs and how we can
            support your business.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-[#166534] px-7 py-3.5 text-sm font-bold text-[#166534] transition hover:bg-[#166534] hover:text-white"
            >
              Contact Us
            </Link>

            <Link
              href="/request-delivery"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#166534] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#14532D]"
            >
              Request a Delivery
              <HiArrowRight />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}