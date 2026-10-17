"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  HiOutlineSquares2X2,
  HiOutlineBuildingStorefront,
  HiOutlineTruck,
  HiOutlineClipboardDocumentList,
  HiOutlineCreditCard,
  HiOutlineCog6Tooth,
  HiOutlineArrowRightOnRectangle,
  HiOutlineBars3,
  HiOutlineXMark,
  HiOutlineMagnifyingGlass,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineUsers,
} from "react-icons/hi2";

import { supabase } from "@/lib/supabaseClient";

type Seller = {
  user_id: string | null;
  full_name: string | null;
  business_name: string | null;
  payment_status: string | null;
};

export default function AdminDashboardPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let active = true;

    async function loadDashboard() {
      try {
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();

        if (sessionError || !session?.access_token) {
          router.replace("/admin/login");
          return;
        }

        const response = await fetch("/api/admin/dashboard", {
          cache: "no-store",
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        if (response.status === 401 || response.status === 403) {
          await supabase.auth.signOut();
          router.replace("/admin/login");
          return;
        }

        if (!response.ok) {
          const errorDetails = await response.text();

          console.error("Admin API status:", response.status);
          console.error("Admin API response:", errorDetails);

          throw new Error(
            `Admin dashboard failed with status ${response.status}: ${errorDetails}`
          );
        }

        const result = await response.json();

        if (active) {
          setSellers(result.sellers ?? []);
          setErrorMessage("");
        }
      } catch (error) {
        console.error("Admin dashboard error:", error);

        if (active) {
          setErrorMessage(
            "We could not load the dashboard. Please check your connection and try again."
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadDashboard();

    return () => {
      active = false;
    };
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  const filteredSellers = sellers.filter((seller) => {
    const query = search.toLowerCase();

    return (
      (seller.full_name ?? "").toLowerCase().includes(query) ||
      (seller.business_name ?? "").toLowerCase().includes(query)
    );
  });

  const paidSellers = sellers.filter(
    (seller) => seller.payment_status?.toLowerCase() === "paid"
  ).length;

  const pendingSellers = sellers.length - paidSellers;

  const navigation = [
    {
      label: "Overview",
      href: "/admin/dashboard",
      icon: HiOutlineSquares2X2,
    },
    {
      label: "Sellers",
      href: "/admin/sellers",
      icon: HiOutlineBuildingStorefront,
    },
    {
      label: "Riders",
      href: "/admin/riders",
      icon: HiOutlineTruck,
    },
    {
      label: "Orders",
      href: "/admin/orders",
      icon: HiOutlineClipboardDocumentList,
    },
    {
      label: "Payments",
      href: "/admin/payments",
      icon: HiOutlineCreditCard,
    },
    {
      label: "Settings",
      href: "/admin/settings",
      icon: HiOutlineCog6Tooth,
    },
  ];

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8FAF8]">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#166534] border-t-transparent" />
          <p className="mt-4 text-sm text-gray-600">
            Loading Market2Door Admin...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAF8]  text-[#202820]">
      {menuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-gray-200 bg-white transition-transform lg:translate-x-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-gray-100 px-6">
          <Link
            href="/admin/dashboard"
            className="text-2xl font-black tracking-tight text-[#166534]"
          >
            MARKET<span className="text-[#D4A017]">2</span>DOOR
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
          >
            <HiOutlineXMark size={24} />
        </button>
        </div>

        <div className="px-6 py-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
            Administration
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Manage your marketplace
          </p>
        </div>

        <nav className="flex-1 space-y-1 px-4">
          {navigation.map((item) => {
            const isActive = item.href === "/admin/dashboard";
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[#166534] text-white shadow-sm"
                    : "text-gray-600 hover:bg-green-50 hover:text-[#166534]"
                }`}
              >
                <Icon size={21} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="m-4 rounded-2xl bg-[#F8FAF8] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-[#166534]">
              <HiOutlineUsers size={22} />
            </div>

            <div>
              <p className="text-sm font-bold">Admin Portal</p>
              <p className="text-xs text-gray-500">Market2Door</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            <HiOutlineArrowRightOnRectangle size={19} />
            Sign out
          </button>
        </div>
      </aside>

      <div className="min-h-screen lg:pl-72">
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-200 bg-white/95 px-4 backdrop-blur sm:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Open navigation menu"
              onClick={() => setMenuOpen(true)}
              className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
            >
              <HiOutlineBars3 size={25} />
            </button>

            <div>
              <h1 className="text-lg font-extrabold sm:text-xl">
                Dashboard Overview
              </h1>
              <p className="hidden text-xs text-gray-500 sm:block">
                Monitor your marketplace activity
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-[#166534] sm:flex">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            Admin Portal
          </div>
        </header>

        <div className="mx-auto max-w-7xl space-y-8 p-4 sm:p-8">
          <section className="relative overflow-hidden rounded-2xl bg-[#166534] p-6 text-white sm:p-8">
            <div className="relative z-10 max-w-2xl">
              <p className="text-sm font-medium text-green-100">
                MARKET2DOOR ADMINISTRATION
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Your marketplace, at a glance.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-green-100 sm:text-base">
                Manage sellers, monitor registration payments, and keep your
                local marketplace organized from one place.
              </p>
            </div>

            <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border-35 border-white/10" />
            <div className="pointer-events-none absolute -bottom-24 right-28 h-52 w-52 rounded-full bg-[#D4A017]/20" />
          </section>

          {errorMessage && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              label="Registered Sellers"
              value={String(sellers.length)}
              description="Seller accounts"
              icon={<HiOutlineBuildingStorefront size={24} />}
            />

            <StatCard
              label="Paid Activations"
              value={String(paidSellers)}
              description="₦500 fee marked paid"
              icon={<HiOutlineCheckCircle size={24} />}
            />

            <StatCard
              label="Pending Payments"
              value={String(pendingSellers)}
              description="Requires review"
              icon={<HiOutlineClock size={24} />}
            />

            <StatCard
              label="Total Revenue"
              value={`₦${(paidSellers * 500).toLocaleString("en-NG")}`}
              description="Seller activation fees only"
              icon={<HiOutlineCreditCard size={24} />}
            />
          </section>

          <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <h3 className="text-lg font-extrabold">Recent Sellers</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Seller accounts retrieved from your database
                </p>
              </div>

              <label className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 sm:w-72">
                <HiOutlineMagnifyingGlass
                  className="text-gray-400"
                  size={20}
                />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search sellers..."
                  aria-label="Search sellers"
                  className="w-full bg-transparent text-sm outline-none"
                />
              </label>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-150 text-left text-sm">
                <thead className="bg-[#F8FAF8] text-xs uppercase tracking-wide text-gray-500">
                  <tr>
                    <th className="px-6 py-4 font-bold">Seller</th>
                    <th className="px-6 py-4 font-bold">Business</th>
                    <th className="px-6 py-4 font-bold">Payment</th>
                    <th className="px-6 py-4 font-bold">Account</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {filteredSellers.map((seller, index) => {
                    const paid =
                      seller.payment_status?.toLowerCase() === "paid";

                    return (
                      <tr
                        key={seller.user_id || `seller-${index}`}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 font-semibold">
                          {seller.full_name || "Unnamed seller"}
                        </td>

                        <td className="px-6 py-4 text-gray-600">
                          {seller.business_name || "Not provided"}
                        </td>

                        <td className="px-6 py-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-bold ${
                              paid
                                ? "bg-green-100 text-green-700"
                                : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {paid ? "Paid" : "Pending"}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-gray-600">
                          {paid ? "Activated" : "Awaiting payment"}
                        </td>
                      </tr>
                    );
                  })}

                  {filteredSellers.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-6 py-12 text-center text-gray-500"
                      >
                        {search
                          ? "No sellers match your search."
                          : "No seller records found."}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="border-t border-gray-100 px-6 py-4 text-xs text-gray-500">
              Showing {filteredSellers.length} of {sellers.length} sellers
            </div>
          </section>

          <p className="pb-4 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Market2Door. Admin Portal.
          </p>
        </div>
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  description,
  icon,
}: {
  label: string;
  value: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <p className="mt-3 text-3xl font-black tracking-tight">{value}</p>
          <p className="mt-2 text-xs text-gray-500">{description}</p>
        </div>

        <div className="rounded-xl bg-green-50 p-3 text-[#166534]">
          {icon}
        </div>
      </div>
    </div>
  );
}