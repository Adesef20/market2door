import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(request: Request) {
  try {
    const { reference, userId } = await request.json();

    if (!reference || !userId) {
      return NextResponse.json(
        { error: "Payment reference and user ID are required." },
        { status: 400 }
      );
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;

    if (!secretKey) {
      console.error("PAYSTACK_SECRET_KEY is missing.");

      return NextResponse.json(
        { error: "Paystack secret key is not configured." },
        { status: 500 }
      );
    }

    // Ask Paystack to verify the transaction
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(
        reference
      )}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (!response.ok || !data.status) {
      console.error("Paystack verification error:", data);

      return NextResponse.json(
        {
          error: data.message || "Unable to verify payment.",
        },
        { status: 400 }
      );
    }

    const transaction = data.data;

    // Make sure payment was successful
    if (transaction.status !== "success") {
      return NextResponse.json(
        {
          error: "Payment was not successful.",
          status: transaction.status,
        },
        { status: 400 }
      );
    }

    // Make sure payment was exactly ₦500
    if (transaction.amount !== 50000) {
      console.error("Incorrect payment amount:", transaction.amount);

      return NextResponse.json(
        { error: "Payment amount is incorrect." },
        { status: 400 }
      );
    }

    // Make sure this payment belongs to this seller
    if (transaction.metadata?.user_id !== userId) {
      console.error("Payment user mismatch.");

      return NextResponse.json(
        { error: "Payment does not belong to this seller." },
        { status: 403 }
      );
    }

    // Mark seller as paid
    const { error: sellerError } = await supabaseServer
      .from("sellers")
      .update({
        payment_status: "paid",
      })
      .eq("user_id", userId);

    if (sellerError) {
      console.error("Seller payment update error:", sellerError);

      return NextResponse.json(
        {
          error:
            "Payment succeeded but seller account could not be updated.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully.",
    });
  } catch (error) {
    console.error("Payment verification error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong while verifying payment.",
      },
      { status: 500 }
    );
  }
}