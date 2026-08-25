"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#030712]/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo dengan Gradient Text */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Terminal className="text-blue-500" />
            <span className="text-white">IT</span>
            <span className="gradient-text">Profesi Map</span>
          </Link>

          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="text-gray-300 hover:text-white transition">Beranda</Link>
            <Link href="#profesi" className="text-gray-300 hover:text-white transition">Profesi</Link>
            <Link href="#tentang" className="text-gray-300 hover:text-white transition">Tentang</Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-2 pb-4 space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-white">Beranda</Link>
          <Link href="#profesi" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-white">Profesi</Link>
          <Link href="#tentang" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-white">Tentang</Link>
        </div>
      )}
    </nav>
  );
}
