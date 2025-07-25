"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#events", label: "Events" },
    { href: "#partners", label: "Partners" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-[#e62b1e]">
                TED<sup>x</sup>
              </span>
              <span className="text-black">Pasha Street</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-black hover:text-[#e62b1e] px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              {/* <Link href="/admin">
                <Button
                  size="sm"
                  className="bg-[#e62b1e] hover:bg-[#c4251a] text-white"
                >
                  Login
                </Button>
              </Link> */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-black hover:text-[#e62b1e] block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/admin" className="block px-3 py-2">
                <Button variant="outline" size="sm" className="w-full">
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
