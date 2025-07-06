"use client";

import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-700 via-green-600 to-green-500 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-green-700">Create Account</h1>
        <p className="text-center text-gray-600">
          Registration is currently handled via Google OAuth.
        </p>

        <button
          onClick={() => router.push("/login")}
          className="w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 font-semibold transition"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
