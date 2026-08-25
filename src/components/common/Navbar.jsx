"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";
import { categoryGroups } from "../../data/ProfessionData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Auto-highlight menu berdasarkan section yang sedang di-scroll oleh user
  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const group of categoryGroups) {
        const element = document.getElementById(group.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(group.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check posisi awal saat menu dibuka

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Lock body scroll saat menu drawer terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const scrollToSection = (id) => {
    setIsOpen(false);
    setActiveSection(id);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-sky-500/10 border border-sky-500/30 rounded-lg group-hover:border-sky-400 transition-colors">
              <Terminal size={20} className="text-sky-400" />
            </div>
            <span className="font-extrabold text-lg text-white tracking-wide">
              IT <span className="gradient-text">Profesi Map</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <a href="#support-group" className="hover:text-white transition-colors">
              Kategori Profesi
            </a>
          </nav>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* REACT BITS STYLE FULLSCREEN OVERLAY MENU */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-slate-950/95 backdrop-blur-xl z-50 flex flex-col justify-between overflow-y-auto p-6 sm:p-10 animate-fade-in-up">
          <div className="max-w-xl mx-auto w-full my-auto py-4">
            <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-6">
              Navigasi Kategori Profesi
            </p>

            {/* Stepper Vertical Menu List */}
            <div className="relative pl-6 space-y-5 border-l border-slate-800">
              {categoryGroups.map((group, idx) => {
                const isActive = activeSection === group.id;
                const formattedNumber = String(idx + 1).padStart(2, "0");

                return (
                  <div key={group.id} className="relative group/item">
                    {/* Visual Line Accent Indicator di Sebelah Kiri */}
                    <div
                      className={`absolute -left-[25px] top-1/2 -translate-y-1/2 transition-all duration-300 ${
                        isActive
                          ? "w-7 h-[2px] bg-purple-500 shadow-[0_0_12px_#a855f7]"
                          : "w-3 h-[1px] bg-slate-700 group-hover/item:w-5 group-hover/item:bg-slate-400"
                      }`}
                    />

                    <button
                      onClick={() => scrollToSection(group.id)}
                      className="flex items-center gap-4 text-left w-full group/btn py-1"
                    >
                      {/* Nomor Stepper 01, 02, 03... */}
                      <span
                        className={`text-sm font-mono transition-colors duration-300 ${
                          isActive
                            ? "text-purple-400 font-bold"
                            : "text-slate-500 group-hover/btn:text-slate-300"
                        }`}
                      >
                        {formattedNumber}
                      </span>

                      {/* Judul Kategori */}
                      <span
                        className={`text-base sm:text-lg font-medium transition-all duration-300 ${
                          isActive
                            ? "text-purple-300 font-bold translate-x-1"
                            : "text-slate-300 group-hover/btn:text-white group-hover/btn:translate-x-1"
                        }`}
                      >
                        {group.title}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer Overlay */}
          <div className="text-center pt-6 border-t border-slate-900 text-slate-500 text-xs">
            Peta Profesi IT &copy; 2026. All rights reserved.
          </div>
        </div>
      )}
    </header>
  );
}
