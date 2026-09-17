"use client";

import { FormEvent, useState } from "react";
import {
  HiArrowRight,
  HiCheckCircle,
  HiMapPin,
  HiPhone,
  HiTruck,
} from "react-icons/hi2";

export default function RequestDeliveryPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#F8FAF8]">

      {/* =========================
          PAGE HEADER
      ========================= */}
      <section className="bg-[#14532D] px-5 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
            MARKET2DOOR DELIVERY
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Request a Delivery
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Tell us where your package needs to be picked up and where it
            should be delivered. We&apos;ll handle the rest.
          </p>

        </div>
      </section>


      {/* =========================
          MAIN CONTENT
      ========================= */}
      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_380px]">

          {/* =========================
              DELIVERY FORM
          ========================= */}
          <div className="rounded-2xl border border-[#E2E8E3] bg-white p-6 shadow-sm sm:p-8">

            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-[#14532D]">
                Delivery Details
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#647067]">
                Please provide the details below so we can arrange your
                delivery.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-2xl bg-[#F8FAF8] p-8 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#166534]">
                  <HiCheckCircle className="text-3xl text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#14532D]">
                  Request Received
                </h3>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#647067]">
                  Thank you. We&apos;ve received your delivery request. Our
                  team will contact you to confirm the details.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-lg bg-[#166534] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#14532D]"
                >
                  Make Another Request
                </button>

              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* =========================
                    CUSTOMER INFORMATION
                ========================= */}
                <div>
                  <h3 className="text-lg font-bold text-[#14532D]">
                    Your Information
                  </h3>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-[#1F2933]"
                      >
                        Full Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="w-full rounded-lg border border-[#E2E8E3] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold text-[#1F2933]"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="0800 000 0000"
                        className="w-full rounded-lg border border-[#E2E8E3] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                      />
                    </div>

                  </div>
                </div>


                {/* =========================
                    PICKUP DETAILS
                ========================= */}
                <div>
                  <h3 className="text-lg font-bold text-[#14532D]">
                    Pickup Details
                  </h3>

                  <div className="mt-5 grid gap-5">

                    <div>
                      <label
                        htmlFor="pickup-location"
                        className="mb-2 block text-sm font-semibold text-[#1F2933]"
                      >
                        Pickup Location
                      </label>

                      <input
                        id="pickup-location"
                        name="pickup-location"
                        type="text"
                        required
                        placeholder="e.g. Igbona Market, Osogbo"
                        className="w-full rounded-lg border border-[#E2E8E3] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="pickup-details"
                        className="mb-2 block text-sm font-semibold text-[#1F2933]"
                      >
                        Pickup Details
                      </label>

                      <textarea
                        id="pickup-details"
                        name="pickup-details"
                        rows={3}
                        placeholder="Tell us where the rider should meet you..."
                        className="w-full resize-none rounded-lg border border-[#E2E8E3] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                      />
                    </div>

                  </div>
                </div>


                {/* =========================
                    DELIVERY DETAILS
                ========================= */}
                <div>
                  <h3 className="text-lg font-bold text-[#14532D]">
                    Delivery Details
                  </h3>

                  <div className="mt-5 grid gap-5">

                    <div>
                      <label
                        htmlFor="delivery-location"
                        className="mb-2 block text-sm font-semibold text-[#1F2933]"
                      >
                        Delivery Location
                      </label>

                      <input
                        id="delivery-location"
                        name="delivery-location"
                        type="text"
                        required
                        placeholder="Enter delivery address"
                        className="w-full rounded-lg border border-[#E2E8E3] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="recipient-name"
                        className="mb-2 block text-sm font-semibold text-[#1F2933]"
                      >
                        Recipient Name
                      </label>

                      <input
                        id="recipient-name"
                        name="recipient-name"
                        type="text"
                        required
                        placeholder="Who will receive the package?"
                        className="w-full rounded-lg border border-[#E2E8E3] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="recipient-phone"
                        className="mb-2 block text-sm font-semibold text-[#1F2933]"
                      >
                        Recipient Phone
                      </label>

                      <input
                        id="recipient-phone"
                        name="recipient-phone"
                        type="tel"
                        required
                        placeholder="Recipient phone number"
                        className="w-full rounded-lg border border-[#E2E8E3] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                      />
                    </div>

                  </div>
                </div>


                {/* =========================
                    PACKAGE INFORMATION
                ========================= */}
                <div>
                  <h3 className="text-lg font-bold text-[#14532D]">
                    Package Information
                  </h3>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="package-type"
                        className="mb-2 block text-sm font-semibold text-[#1F2933]"
                      >
                        Package Type
                      </label>

                      <select
                        id="package-type"
                        name="package-type"
                        required
                        defaultValue=""
                        className="w-full rounded-lg border border-[#E2E8E3] bg-white px-4 py-3 text-sm text-[#1F2933] outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                      >
                        <option value="" disabled>
                          Select package type
                        </option>

                        <option value="food">
                          Food / Groceries
                        </option>

                        <option value="clothing">
                          Clothing / Fashion
                        </option>

                        <option value="electronics">
                          Electronics
                        </option>

                        <option value="documents">
                          Documents
                        </option>

                        <option value="other">
                          Other
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="package-size"
                        className="mb-2 block text-sm font-semibold text-[#1F2933]"
                      >
                        Package Size
                      </label>

                      <select
                        id="package-size"
                        name="package-size"
                        required
                        defaultValue=""
                        className="w-full rounded-lg border border-[#E2E8E3] bg-white px-4 py-3 text-sm text-[#1F2933] outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                      >
                        <option value="" disabled>
                          Select package size
                        </option>

                        <option value="small">
                          Small
                        </option>

                        <option value="medium">
                          Medium
                        </option>

                        <option value="large">
                          Large
                        </option>
                      </select>
                    </div>

                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="package-description"
                      className="mb-2 block text-sm font-semibold text-[#1F2933]"
                    >
                      Package Description
                    </label>

                    <textarea
                      id="package-description"
                      name="package-description"
                      rows={3}
                      required
                      placeholder="Briefly describe what you are sending..."
                      className="w-full resize-none rounded-lg border border-[#E2E8E3] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                    />
                  </div>
                </div>


                {/* =========================
                    SUBMIT
                ========================= */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#166534] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#14532D]"
                >
                  Submit Delivery Request
                  <HiArrowRight className="text-lg" />
                </button>

              </form>
            )}

          </div>


          {/* =========================
              SIDEBAR
          ========================= */}
          <aside className="space-y-6">

            {/* Delivery Info */}
            <div className="rounded-2xl bg-[#14532D] p-7 text-white">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C]">
                <HiTruck className="text-2xl text-[#14532D]" />
              </div>

              <h2 className="mt-6 text-xl font-bold">
                How your delivery works
              </h2>

              <div className="mt-6 space-y-5">

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold">
                    1
                  </div>

                  <div>
                    <p className="font-semibold">
                      Submit your request
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/65">
                      Give us your pickup and delivery details.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold">
                    2
                  </div>

                  <div>
                    <p className="font-semibold">
                      We contact you
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/65">
                      Our team confirms the delivery details with you.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold">
                    3
                  </div>

                  <div>
                    <p className="font-semibold">
                      Rider picks up
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/65">
                      We assign an available rider to collect your package.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D4A72C] text-sm font-bold text-[#14532D]">
                    4
                  </div>

                  <div>
                    <p className="font-semibold">
                      Delivered
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/65">
                      Your package is delivered to your customer.
                    </p>
                  </div>
                </div>

              </div>
            </div>


            {/* Contact Card */}
            <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7">

              <h3 className="text-lg font-bold text-[#14532D]">
                Need help?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#647067]">
                If you have questions about your delivery, contact our team.
              </p>

              <div className="mt-5 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8FAF8]">
                    <HiPhone className="text-[#166534]" />
                  </div>

                  <div>
                    <p className="text-xs text-[#647067]">
                      Call us
                    </p>

                    <p className="text-sm font-semibold text-[#1F2933]">
                      +234 7039406230
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8FAF8]">
                    <HiMapPin className="text-[#166534]" />
                  </div>

                  <div>
                    <p className="text-xs text-[#647067]">
                      Service Area
                    </p>

                    <p className="text-sm font-semibold text-[#1F2933]">
                      Osogbo, Osun State
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </aside>

        </div>
      </section>

    </main>
  );
}