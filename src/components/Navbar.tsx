
"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Agents", href: "/agents" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#00548C]/60 backdrop-blur-md text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo & Desktop Menu */}
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-2xl font-extrabold select-none cursor-pointer hover:text-blue-300 transition text-black"
            >
              ArkLab
            </Link>
            <ul className="hidden md:flex space-x-8 font-semibold">
              {menuItems.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`transition-colors ${
                      pathname === href ? "underline text-slate-900" : "text-gray-700 hover:text-gray-500"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Login/User and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {status === "loading" ? (
              <div className="text-sm font-medium animate-pulse">Loading...</div>
            ) : session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-white rounded-full"
                    aria-label="User menu"
                  >
                    {session.user.image ? (
                      <Image
                        src={session.user.image}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-black"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
                        {session.user.name?.[0] || "U"}
                      </div>
                    )}
                    <span className="hidden sm:block font-medium text-black">{session.user.name}</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  sideOffset={6}
                  className="w-40 bg-white text-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                >
                  <DropdownMenuItem
                    onSelect={async () => {
                      await signOut({ callbackUrl: "/" });
                    }}
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={() => signIn("google")}
                variant="default"
                className="bg-green-600 hover:bg-green-700 transition px-5 py-2 rounded-md text-sm font-semibold shadow"
                aria-label="Login with Google"
              >
                Login with Google
              </Button>
            )}

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#00548C] focus:ring-white"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#00548C] px-4 pt-2 pb-4 space-y-2 font-semibold">
          {menuItems.map(({ label, href }) => (
            <Link key={href} href={href}>
              <div
                className={`block rounded-md px-3 py-2 hover:bg-blue-700 transition cursor-pointer ${
                  pathname === href ? "underline bg-blue-800" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
