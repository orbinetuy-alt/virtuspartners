"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SOMOS", href: "#somos" },
  { label: "SERVICIOS", href: "#servicios" },
  { label: "CONTACTO", href: "#contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-auto flex items-center justify-between px-6 md:px-12 py-5 md:py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-virtus.png"
            alt="Virtus Partners"
            width={140}
            height={38}
            priority
            className="object-contain"
            style={{ height: "auto" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-xs font-semibold tracking-widest text-neutral-700 hover:text-black transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#C9A55A] after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger button (mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.25 w-8 h-8"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-neutral-800 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.75" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-neutral-800 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-neutral-800 transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.75" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-neutral-100 px-6 pb-6">
          <ul className="flex flex-col gap-5 pt-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-xs font-semibold tracking-widest text-neutral-700 hover:text-black transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
