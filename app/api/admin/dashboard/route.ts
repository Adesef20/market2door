
import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const publicKey =
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    const adminEmails = (process.env.ADMIN_EMAILS ?? "")
      .split(",")
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean);

    if (
      !supabaseUrl ||
      !publicKey ||
      !serviceRoleKey ||
      adminEmails.length === 0
    ) {
      console.error("Admin API configuration is incomplete.");
      return NextResponse.json(
        { error: "Admin API is not configured." },
        { status: 500 }
      );
    }

    const authorization = request.headers.get("authorization");
    const token = authorization?.startsWith("Bearer ")
      ? authorization.slice(7)
      : null;

    if (!token) {
      return NextResponse.json(
        { error: "Authentication required." },
        { status: 401 }
      );
    }

    // Verify the signed-in user with Supabase Auth.
    const authClient = createClient(supabaseUrl, publicKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const {
      data: { user },
      error: authError,
    } = await authClient.auth.getUser(token);

    if (authError || !user || !user.email) {
      return NextResponse.json(
        { error: "Invalid or expired session." },
        { status: 401 }
      );
    }

    // Only explicitly approved administrator emails may continue.
    if (!adminEmails.includes(user.email.toLowerCase())) {
      return NextResponse.json(
        { error: "Administrator access denied." },
        { status: 403 }
      );
    }

    // Use the service-role key only on the server, after authorization.
    const adminClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { data: sellers, error: sellersError } = await adminClient
      .from("sellers")
      .select("user_id, full_name, business_name, payment_status");

    if (sellersError) {
      console.error("Admin sellers query failed:", sellersError.message);

      return NextResponse.json(
        { error: "Unable to retrieve seller records." },
        { status: 500 }
      );
    }

    return NextResponse.json({ sellers: sellers ?? [] });
  } catch (error) {
    console.error("Admin dashboard API error:", error);

    return NextResponse.json(
      { error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}
