"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  
  HiClipboardDocumentList,
 
  HiArrowRightOnRectangle,

  HiCurrencyYen,
  HiClock,
  HiCheckCircle,
} from "react-icons/hi2";
import { supabase } from "@/lib/supabaseClient";

export default function SellerDashboardPage() {
  const router = useRouter();

  const [sellerName, setSellerName] = useState("Seller");
  const [businessName, setBusinessName] = useState("Your Business");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSeller = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/seller/login");
        return;
      }

      const { data, error } = await supabase
        .from("sellers")
        .select("full_name, business_name, payment_status")
        .eq("user_id", user.id)
        .single();

      if (error) {
        console.error("Seller profile error:", error);
      }

      if (data) {
        setSellerName(data.full_name || "Seller");
        setBusinessName(data.business_name || "Your Business");
      }

      setLoading(false);
    };

    getSeller();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/seller/login");
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8FAF8]">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#166534] border-t-transparent"></div>

          <p className="mt-4 text-[#647067]">
            Loading your dashboard...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAF8]">

      {/* TOP NAVIGATION */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          <div>
           

            
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            <HiArrowRightOnRectangle className="text-lg" />
            Logout
          </button>

        </div>
      </header>

      {/* DASHBOARD */}
      <div className="mx-auto max-w-7xl px-5 py-8">

        {/* WELCOME */}
        <section className="rounded-2xl bg-[#166534] p-6 text-white shadow-sm md:p-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <div>
              <p className="text-sm text-green-100">
                Welcome back
              </p>

              <h1 className="mt-1 text-3xl font-extrabold md:text-4xl">
                {sellerName}
              </h1>

              <p className="mt-2 text-green-100">
                {businessName}
              </p>
            </div>

           
          </div>

        </section>

        {/* STAT CARDS */}
        <section className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* ORDERS */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Total Orders
                </p>

                <h2 className="mt-2 text-3xl font-extrabold text-gray-800">
                  0
                </h2>
              </div>

              <div className="rounded-lg bg-green-100 p-3">
                <HiClipboardDocumentList className="text-2xl text-[#166534]" />
              </div>

            </div>

          </div>

          {/* PENDING */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Pending Orders
                </p>

                <h2 className="mt-2 text-3xl font-extrabold text-gray-800">
                  0
                </h2>
              </div>

              <div className="rounded-lg bg-yellow-100 p-3">
                <HiClock className="text-2xl text-yellow-600" />
              </div>

            </div>

          </div>

          {/* COMPLETED */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Completed
                </p>

                <h2 className="mt-2 text-3xl font-extrabold text-gray-800">
                  0
                </h2>
              </div>

              <div className="rounded-lg bg-green-100 p-3">
                <HiCheckCircle className="text-2xl text-[#166534]" />
              </div>

            </div>

          </div>

          {/* SALES */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Total Sales
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-gray-800">
                  ₦0
                </h2>
              </div>

              <div className="rounded-lg bg-yellow-100 p-3">
                <HiCurrencyYen className="text-2xl text-yellow-600" />
              </div>

            </div>

          </div>

        </section>

      

        {/* ACCOUNT STATUS */}
        <section className="mt-8 rounded-xl border border-green-200 bg-green-50 p-5">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">

              <div className="rounded-full bg-green-100 p-2">
                <HiCheckCircle className="text-xl text-[#166534]" />
              </div>

              <div>
                <p className="font-bold text-[#166534]">
                  Seller Account Active
                </p>

                <p className="text-sm text-green-700">
                  Your ₦500 registration payment has been completed.
                </p>
              </div>

            </div>

            <span className="w-fit rounded-full bg-green-600 px-4 py-1.5 text-xs font-bold text-white">
              ACTIVE
            </span>

          </div>

        </section>

      </div>

    </main>
  );
}