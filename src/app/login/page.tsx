"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);
      setLoading(true);
      const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="text-sm opacity-70 mt-1">Masuk untuk akses dashboard.</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm">Email</label>
            <input
              className="w-full rounded-xl border px-3 py-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@mail.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm">Password</label>
            <input
              className="w-full rounded-xl border px-3 py-2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          {errorMsg && (
            <div className="rounded-xl border px-3 py-2 text-sm">
              {errorMsg}
            </div>
          )}

          <button
            disabled={loading}
            className="w-full rounded-xl border px-3 py-2 font-medium"
            type="submit"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <p className="text-sm mt-4 opacity-80">
          Belum punya akun?{" "}
          <Link className="underline" href="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}