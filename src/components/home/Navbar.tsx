"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-red-700">
          Radhe <span className="text-yellow-600">Sweet House</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li>
            <Link href="#home" className="hover:text-red-700 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-red-700 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#menu" className="hover:text-red-700 transition">
              Sweets
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-red-700 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="#order"
            className="px-5 py-2 rounded-full bg-red-700 text-white font-semibold hover:bg-red-800 transition"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-6 font-medium text-gray-700">
            <li>
              <Link onClick={() => setMenuOpen(false)} href="#home">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpen(false)} href="#about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpen(false)} href="#menu">
                Sweets
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpen(false)} href="#contact">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#order"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-block text-center px-5 py-2 rounded-full bg-red-700 text-white font-semibold"
              >
                Order Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
