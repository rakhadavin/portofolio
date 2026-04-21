'use client';

import Link from 'next/link';

export default function AuthCodeErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-midnight via-dark-purple to-indigo-deep flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-9xl font-bold text-pink-main mb-4">⚠️</div>
          <h1 className="text-4xl font-bold text-white font-josefinSans mb-4">
            Verification Failed
          </h1>
          <p className="text-secondary text-lg font-poppins mb-6">
            We couldn't verify your email. The link may be expired or invalid.
            Please try signing up again or request a new verification email.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/login"
            className="w-full bg-gradient-purple-pink text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-200 font-poppins inline-block text-center"
          >
            Go to Login
          </Link>

          <Link
            href="/"
            className="w-full bg-transparent border-2 border-secondary text-secondary font-semibold py-3 px-6 rounded-lg hover:bg-secondary hover:text-white transition-colors duration-200 font-poppins inline-block text-center"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}