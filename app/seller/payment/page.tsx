"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  HiArrowLeft,
  HiCheckCircle,
  HiShieldCheck,
  HiCreditCard,
} from "react-icons/hi2";
import { supabase } from "@/lib/supabaseClient";

export default function SellerPaymentPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePayment = async () => {
    try {
      setLoading(true);
      setErrorMessage("");

      // --------------------------------------------------
      // 1. Get the currently logged-in seller
      // --------------------------------------------------

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        setErrorMessage("Please log in before making payment.");
        setLoading(false);
        return;
      }

      if (!user.email) {
        setErrorMessage("Your account does not have an email address.");
        setLoading(false);
        return;
      }

      // --------------------------------------------------
      // 2. Make sure the Paystack public key exists
      // --------------------------------------------------

      const paystackPublicKey =
        process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

      if (!paystackPublicKey) {
        console.error(
          "NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY is missing."
        );

        setErrorMessage(
          "Payment system is not configured. Please contact support."
        );

        setLoading(false);
        return;
      }

      // --------------------------------------------------
      // 3. Ask our server to initialize the transaction
      // --------------------------------------------------

      const response = await fetch("/api/payment/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          userId: user.id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Payment initialization error:", data);

        setErrorMessage(
          data.error ||
            "Unable to start payment. Please try again."
        );

        setLoading(false);
        return;
      }

      if (!data.reference) {
        console.error(
          "No Paystack reference returned:",
          data
        );

        setErrorMessage(
          "Payment could not be initialized. Please try again."
        );

        setLoading(false);
        return;
      }

      // --------------------------------------------------
      // 4. Dynamically load Paystack
      //
      // IMPORTANT:
      // We do NOT import PaystackPop at the top of this file.
      // This prevents the "window is not defined" error.
      // --------------------------------------------------

      const PaystackPop = (
        await import("@paystack/inline-js")
      ).default;

      // --------------------------------------------------
      // 5. Create Paystack checkout
      // --------------------------------------------------

      const paystack = new PaystackPop();

      paystack.newTransaction({
        key: paystackPublicKey,

        email: user.email,

        // ₦500 = 50,000 kobo
        amount: 50000,

        reference: data.reference,

        onSuccess: async (transaction) => {
          try {
            setErrorMessage("");

            // --------------------------------------------------
            // 6. Verify payment on our server
            // --------------------------------------------------

            const verifyResponse = await fetch(
              "/api/payment/verify",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  reference: transaction.reference,
                  userId: user.id,
                }),
              }
            );

            const verifyData =
              await verifyResponse.json();

            if (
              !verifyResponse.ok ||
              !verifyData.success
            ) {
              console.error(
                "Payment verification failed:",
                verifyData
              );

              setErrorMessage(
                verifyData.error ||
                  "Payment was received but could not be verified."
              );

              setLoading(false);
              return;
            }

            // --------------------------------------------------
            // 7. Payment verified successfully
            // --------------------------------------------------

            setLoading(false);

            alert(
              "Payment successful! Your seller account is now activated."
            );

            router.push("/seller/dashboard");
          } catch (error) {
            console.error(
              "Payment verification error:",
              error
            );

            setErrorMessage(
              "Payment was successful, but verification failed. Please contact support."
            );

            setLoading(false);
          }
        },

        onCancel: () => {
          setLoading(false);
          setErrorMessage("Payment was cancelled.");
        },
      });
    } catch (error) {
      console.error("Payment error:", error);

      setErrorMessage(
        "Something went wrong while starting your payment. Please try again."
      );

      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-2xl">

        {/* Back */}
        <Link
          href="/seller/login"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800"
        >
          <HiArrowLeft className="h-5 w-5" />
          Back to Seller Login
        </Link>

        {/* Card */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">

          {/* Header */}
          <div className="bg-green-800 px-6 py-8 text-center text-white">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <HiCreditCard className="h-8 w-8" />
            </div>

            <h1 className="text-3xl font-extrabold">
              Activate Your Seller Account
            </h1>

            <p className="mt-3 text-green-100">
              Complete your one-time seller registration fee
              to access MARKET2DOOR.
            </p>
          </div>

          <div className="p-6 md:p-8">

            {/* Amount */}
            <div className="mb-8 rounded-xl border border-green-100 bg-green-50 p-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                Seller Registration & Access Fee
              </p>

              <p className="mt-2 text-5xl font-extrabold text-green-800">
                ₦500
              </p>

              <p className="mt-2 text-sm text-gray-600">
                One-time payment
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-8 space-y-4">

              {/* Benefit 1 */}
              <div className="flex items-start gap-3">
                <HiCheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-green-600" />

                <div>
                  <p className="font-semibold text-gray-800">
                    Seller account activation
                  </p>

                  <p className="text-sm text-gray-600">
                    Get access to your MARKET2DOOR seller
                    dashboard.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-start gap-3">
                <HiCheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-green-600" />

                <div>
                  <p className="font-semibold text-gray-800">
                    Start receiving delivery requests
                  </p>

                  <p className="text-sm text-gray-600">
                    Manage your orders and delivery requests
                    from your seller account.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-start gap-3">
                <HiShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-green-600" />

                <div>
                  <p className="font-semibold text-gray-800">
                    Secure payment
                  </p>

                  <p className="text-sm text-gray-600">
                    Your payment is securely processed by
                    Paystack.
                  </p>
                </div>
              </div>
            </div>

            {/* Error */}
            {errorMessage && (
              <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                {errorMessage}
              </div>
            )}

            {/* Payment Button */}
            <button
              type="button"
              onClick={handlePayment}
              disabled={loading}
              className="w-full rounded-xl bg-yellow-500 px-6 py-4 text-lg font-bold text-gray-900 transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Starting Payment..."
                : "Pay ₦500 & Activate Account"}
            </button>

            {/* Information */}
            <p className="mt-5 text-center text-xs leading-5 text-gray-500">
              This ₦500 payment is the seller registration/access
              fee. Delivery charges are separate.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}