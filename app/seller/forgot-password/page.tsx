"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Supabase password reset will be connected here later.
    console.log("Password reset requested for:", email);

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] px-5 py-16">
      <div className="mx-auto max-w-md">

        {/* Header */}
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-[#166534]"
          >
            MARKET<span className="text-[#D4A72C]">2</span>DOOR
          </Link>

          <h1 className="mt-8 text-3xl font-extrabold text-[#1F2933]">
            Forgot Password?
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#647067]">
            Enter the email address connected to your seller account and
            we&apos;ll help you reset your password.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7 shadow-sm sm:p-8">

          {submitted ? (
            <div className="text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#166534]/10 text-2xl text-[#166534]">
                ✓
              </div>

              <h2 className="mt-5 text-xl font-bold text-[#1F2933]">
                Check your email
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#647067]">
                If an account exists with this email address, you will
                receive instructions to reset your password.
              </p>

              <Link
                href="/seller/login"
                className="mt-6 inline-flex rounded-lg bg-[#166534] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#14532D]"
              >
                Back to Login
              </Link>

            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-[#1F2933]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-[#E2E8E3] px-4 py-3 text-sm outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-[#166534] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#14532D]"
              >
                Send Reset Instructions
              </button>

            </form>
          )}

          {/* Login Link */}
          {!submitted && (
            <div className="mt-7 border-t border-[#E2E8E3] pt-6 text-center">
              <p className="text-sm text-[#647067]">
                Remember your password?
              </p>

              <Link
                href="/seller/login"
                className="mt-2 inline-block text-sm font-bold text-[#166534] hover:text-[#14532D]"
              >
                Back to Login
              </Link>
            </div>
          )}

        </div>

        {/* Home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm font-semibold text-[#647067] hover:text-[#166534]"
          >
            ← Back to MARKET2DOOR
          </Link>
        </div>

      </div>
    </div>
  );
}