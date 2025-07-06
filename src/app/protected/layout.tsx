"use client";

import { useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  // If not logged in and trying to access restricted pages, redirect or show limited UI
  useEffect(() => {
    const publicPaths = ["/", "/about", "/contact", "/login", "/register"];
    if (status === "unauthenticated" && !publicPaths.includes(pathname)) {
      router.push("/login");
    }
  }, [pathname, status, router]);

  // Show welcome if not logged in
  if (status === "loading") return <div>Loading...</div>;

  if (!session) {
    return (
      <>
        <Navbar />
        <main className="p-8 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Welcome to ArkLab</h1>
          <p className="text-lg mb-6">Please log in or register to access full features.</p>
        </main>
      </>
    );
  }

  // If logged in show children and full navbar
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
