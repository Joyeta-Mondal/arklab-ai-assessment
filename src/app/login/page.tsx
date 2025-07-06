"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect logged-in user to dashboard or main page
  useEffect(() => {
    if (session) router.push("/dashboard");
  }, [session, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-700 via-blue-600 to-blue-500 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-700">Welcome Back!</h1>
        <p className="text-center text-gray-600">Sign in to your account to continue</p>

        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center space-x-3 rounded-md bg-red-500 hover:bg-red-600 text-white px-4 py-3 font-semibold transition"
          aria-label="Sign in with Google"
        >
          <svg className="w-6 h-6" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
            {/* Google icon path */}
            <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.4-34-4.1-50.1H272.1v94.9h147.1c-6.3 34-25.5 62.8-54.2 82v67h87.6c51.4-47.4 80.9-117.4 80.9-193.8z" />
            <path fill="#34A853" d="M272.1 544.3c72.9 0 134-24 178.7-65.3l-87.6-67c-24.3 16.3-55.4 25.8-91.1 25.8-69.9 0-129.2-47.3-150.4-111.3h-89.3v69.8c44.7 88.2 136 148 239.7 148z" />
            <path fill="#FBBC05" d="M121.7 321.5c-11.1-33.4-11.1-69.7 0-103.1v-69.8h-89.3c-39.3 76.5-39.3 167.9 0 244.4l89.3-71.5z" />
            <path fill="#EA4335" d="M272.1 213.7c38.9 0 73.8 13.4 101.3 39.6l75.9-75.9c-46-43-106-69.4-177.2-69.4-103.7 0-195 59.7-239.7 148l89.3 69.8c21.2-64 80.5-111.3 150.4-111.3z" />
          </svg>
          <span>Sign in with Google</span>
        </button>

        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-blue-600 hover:underline font-semibold"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}
