"use client";

import Link from "next/link";
import { useState } from "react";
import {
  HiArrowLeft,
  HiCheckCircle,
  HiBuildingStorefront,
  HiUser,
  HiPhone,
  HiEnvelope,
  HiMapPin,
  HiLockClosed,
} from "react-icons/hi2";

export default function SellerRegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    businessLocation: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Seller registration:", formData);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8]">

      {/* Header */}
      <section className="border-b border-[#E2E8E3] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#166534] transition hover:text-[#14532D]"
          >
            <HiArrowLeft />
            Back to Market2Door
          </Link>

        </div>
      </section>

      {/* Main */}
      <main className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10">

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_420px]">

          {/* Left Side */}
          <div>

            <div className="max-w-2xl">

              <p className="text-sm font-bold uppercase tracking-widest text-[#D4A72C]">
                Become a Seller
              </p>

              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#1F2933] sm:text-5xl">
                Register your business with
                <span className="text-[#166534]"> MARKET2DOOR.</span>
              </h1>

              <p className="mt-5 text-lg leading-8 text-[#647067]">
                Join MARKET2DOOR and make it easier for your customers to
                receive products from your shop or market stall.
              </p>

            </div>

            {/* Benefits */}
            <div className="mt-10 space-y-5">

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#166534]/10 text-xl text-[#166534]">
                  <HiBuildingStorefront />
                </div>

                <div>
                  <h3 className="font-bold text-[#1F2933]">
                    Reach your customers
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#647067]">
                    Get your products delivered directly to your customers
                    without having to arrange every delivery yourself.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4A72C]/15 text-xl text-[#166534]">
                  <HiCheckCircle />
                </div>

                <div>
                  <h3 className="font-bold text-[#1F2933]">
                    Simple seller access
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#647067]">
                    Manage your delivery requests from your MARKET2DOOR
                    seller account.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#166534]/10 text-xl text-[#166534]">
                  <HiMapPin />
                </div>

                <div>
                  <h3 className="font-bold text-[#1F2933]">
                    Built for local businesses
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#647067]">
                    Designed for market sellers, shops and small businesses
                    operating in Osogbo.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Registration Card */}
          <div className="rounded-3xl border border-[#E2E8E3] bg-white p-6 shadow-sm sm:p-8">

            {/* Fee */}
            <div className="rounded-2xl bg-[#14532D] p-6 text-white">

              <p className="text-sm font-semibold text-white/70">
                Seller Registration
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl font-extrabold">
                  ₦500
                </span>

                <span className="mb-1 text-sm text-white/70">
                  one-time fee
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-white/70">
                A one-time registration fee is required before your seller
                account can be activated.
              </p>

            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold text-[#1F2933]"
                >
                  Full Name
                </label>

                <div className="relative">
                  <HiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-[#647067]" />

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-[#E2E8E3] bg-white py-3 pl-10 pr-4 text-sm text-[#1F2933] outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                  />
                </div>
              </div>

              {/* Business Name */}
              <div>
                <label
                  htmlFor="businessName"
                  className="mb-2 block text-sm font-semibold text-[#1F2933]"
                >
                  Business / Shop Name
                </label>

                <div className="relative">
                  <HiBuildingStorefront className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-[#647067]" />

                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Enter your business name"
                    className="w-full rounded-lg border border-[#E2E8E3] bg-white py-3 pl-10 pr-4 text-sm text-[#1F2933] outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-[#1F2933]"
                >
                  Phone Number
                </label>

                <div className="relative">
                  <HiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-[#647067]" />

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="08012345678"
                    className="w-full rounded-lg border border-[#E2E8E3] bg-white py-3 pl-10 pr-4 text-sm text-[#1F2933] outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#1F2933]"
                >
                  Email Address
                </label>

                <div className="relative">
                  <HiEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-[#647067]" />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-[#E2E8E3] bg-white py-3 pl-10 pr-4 text-sm text-[#1F2933] outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="businessLocation"
                  className="mb-2 block text-sm font-semibold text-[#1F2933]"
                >
                  Business Location
                </label>

                <div className="relative">
                  <HiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-[#647067]" />

                  <input
                    id="businessLocation"
                    name="businessLocation"
                    type="text"
                    required
                    value={formData.businessLocation}
                    onChange={handleChange}
                    placeholder="e.g. Igbona Market, Osogbo"
                    className="w-full rounded-lg border border-[#E2E8E3] bg-white py-3 pl-10 pr-4 text-sm text-[#1F2933] outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-[#1F2933]"
                >
                  Password
                </label>

                <div className="relative">
                  <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-[#647067]" />

                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    minLength={6}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="w-full rounded-lg border border-[#E2E8E3] bg-white py-3 pl-10 pr-4 text-sm text-[#1F2933] outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-[#1F2933]"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-[#647067]" />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    minLength={6}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="w-full rounded-lg border border-[#E2E8E3] bg-white py-3 pl-10 pr-4 text-sm text-[#1F2933] outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-[#166534] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#14532D]"
              >
                Register & Continue to Payment
              </button>

              <p className="text-center text-xs leading-5 text-[#647067]">
                By registering, you agree to the MARKET2DOOR seller terms.
                Your account will only be activated after the ₦500 registration
                payment is confirmed.
              </p>

            </form>

            {/* Login */}
            <div className="mt-6 border-t border-[#E2E8E3] pt-6 text-center">
              <p className="text-sm text-[#647067]">
                Already have a seller account?{" "}
                <Link
                  href="/seller/login"
                  className="font-bold text-[#166534] hover:text-[#14532D]"
                >
                  Login
                </Link>
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}