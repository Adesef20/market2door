
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { HiEye, HiEyeSlash } from "react-icons/hi2";

export default function SellerLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    try {
      // 1. Login with Supabase Auth
      const { data: authData, error: loginError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (loginError) {
        setErrorMessage(loginError.message);
        return;
      }

      if (!authData.user) {
        setErrorMessage("Unable to login. Please try again.");
        return;
      }

      // 2. Find the seller profile
      const { data: seller, error: sellerError } = await supabase
        .from("sellers")
        .select("*")
        .eq("user_id", authData.user.id)
        .single();

      if (sellerError) {
        console.error("Seller lookup error:", sellerError);

        setErrorMessage(
          "Your account was found, but your seller profile could not be found."
        );

        return;
      }

      // 3. Check payment status
      if (seller.payment_status !== "paid") {
        router.push("/seller/payment");
        return;
      }

      // 4. Seller is fully activated
      router.push("/seller/dashboard");
    } catch (error) {
      console.error("Login error:", error);

      setErrorMessage(
        "Something went wrong while logging in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] px-6 py-18">
      <div className="mx-auto max-w-md">

        {/* Header */}
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="text-3xl font-extrabold tracking-tight text-[#166534]"
          >
            MARKET<span className="text-[#D4A72C]">2</span>DOOR
          </Link>

          <h1 className="mt-8 text-2xl font-extrabold text-[#1F2933]">
            Seller Login
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#647067]">
            Login to access your MARKET2DOOR seller account.
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-[#E2E8E3] bg-white p-7 shadow-sm sm:p-8">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Error Message */}
            {errorMessage && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
                {errorMessage}
              </div>
            )}

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

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-bold text-[#1F2933]"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-lg border border-[#E2E8E3] px-4 py-3 pr-12 text-sm outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-[#166534]"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? (
                    <HiEyeSlash className="h-5 w-5" />
                  ) : (
                    <HiEye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                href="/seller/forgot-password"
                className="text-sm font-semibold text-[#166534] hover:text-[#14532D]"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer rounded-lg bg-[#166534] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#14532D] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          {/* Register */}
          <div className="mt-7 border-t border-[#E2E8E3] pt-6 text-center">
            <p className="text-sm text-[#647067]">
              Don&apos;t have a seller account?
            </p>

            <Link
              href="/seller/register"
              className="mt-2 inline-block text-sm font-bold text-[#166534] hover:text-[#14532D]"
            >
              Register as a Seller
            </Link>
          </div>

        </div>

        {/* Back Home */}
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

