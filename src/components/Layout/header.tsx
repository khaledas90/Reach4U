"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomeLocale = pathname === "/en" || pathname === "/ar";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className={`text-2xl font-bold ${isHomeLocale ? (scrolled ? "text-orange-500" : "text-white") : "text-orange-500"}`}
          >
            Reach4U
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors hover:text-primary-500 ${
                    isHomeLocale
                      ? (isActive
                          ? "text-primary-500"
                          : scrolled
                            ? "text-neutral-900"
                            : "text-white")
                      : (isActive ? "text-primary-500" : "text-neutral-900")
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-1 w-1 rounded-full bg-primary-500 transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
            <Button className="bg-primary-500 hover:bg-primary-600">
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const isActive = item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative block px-3 py-2 text-base font-medium transition-colors hover:text-primary-500 ${
                      isHomeLocale
                        ? (isActive
                            ? "text-primary-500"
                            : scrolled
                              ? "text-neutral-900"
                              : "text-white")
                        : (isActive ? "text-primary-500" : "text-neutral-900")
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-1 w-1 rounded-full bg-primary-500 transition-opacity duration-200 ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                );
              })}
              <div className="px-3 py-2">
                <Button className="w-full bg-primary-500 hover:bg-primary-600">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
