import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type");
  const next = searchParams.get("next") ?? "/";

  // Create redirect URL for error cases
  const redirectTo = new URL("/auth/auth-code-error", request.url);

  if (token_hash && type) {
    const supabase = await createClient();

    const { error } = await supabase.auth.verifyOtp({
      type: type as never,
      token_hash,
    });

    if (!error) {
      // Email confirmed successfully, redirect to the next URL or home
      redirectTo.pathname = next;
      return NextResponse.redirect(redirectTo);
    }
  }

  // If we get here, there was an error
  return NextResponse.redirect(redirectTo);
}

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type");
  const next = searchParams.get("next") ?? "/";

  const redirectTo = new URL("/auth/auth-code-error", request.url);

  if (token_hash && type) {
    const supabase = await createClient();

    const { error } = await supabase.auth.verifyOtp({
      type: type as never,
      token_hash,
    });

    if (!error) {
      redirectTo.pathname = next;
      return NextResponse.redirect(redirectTo);
    }
  }

  return NextResponse.redirect(redirectTo);
}
