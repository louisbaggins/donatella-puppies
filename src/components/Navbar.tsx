"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur border-b border-dark-600">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="galaxy-text font-crimson font-black text-xl tracking-wide uppercase">
          Donatella&apos;s Pups
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-jakarta text-sm text-stone-300 hover:text-cream transition-colors">
            Início
          </Link>
          <Link href="/#story" className="font-jakarta text-sm text-stone-300 hover:text-cream transition-colors">
            Nossa Saga
          </Link>
          <Link href="/#gallery" className="font-jakarta text-sm text-stone-300 hover:text-cream transition-colors">
            Filhotes
          </Link>
          <Link
            href="/#gallery"
            className="font-jakarta text-sm font-bold bg-red text-white px-5 py-2 rounded-full hover:bg-red-dark transition-colors"
          >
            ADOTAR AGORA
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-cream"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-800 border-t border-dark-600 px-6 py-4 flex flex-col gap-4">
          <Link href="/" className="font-jakarta text-sm text-stone-300" onClick={() => setMenuOpen(false)}>Início</Link>
          <Link href="/#story" className="font-jakarta text-sm text-stone-300" onClick={() => setMenuOpen(false)}>Nossa Saga</Link>
          <Link href="/#gallery" className="font-jakarta text-sm text-stone-300" onClick={() => setMenuOpen(false)}>Manual de Invocação</Link>
          <Link href="/#gallery" className="font-jakarta text-sm font-bold bg-red text-white px-5 py-2 rounded-full text-center" onClick={() => setMenuOpen(false)}>
            ADOTAR AGORA
          </Link>
        </div>
      )}
    </nav>
  );
}
