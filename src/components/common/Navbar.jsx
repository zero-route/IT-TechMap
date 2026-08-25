"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";
import { categoryGroups } from "../../data/ProfessionData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  // Deteksi kategori aktif saat halaman di-scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const group of categoryGroups) {
        const element = document.getElementById(group.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(group.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (targetId) => {
    setActiveId(targetId);
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 border-b border-slate-800/80 backdrop-blur-md">
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

          {/* Tombol Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* DROPDOWN MENU HAMBURGER (TIDAK MAKAN FULL PAGE) */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-950/98 border-b border-slate-800/90 shadow-2xl p-5 sm:p-6 animate-fade-in-up">
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-4 pl-1">
              Kategori Profesi IT
            </p>

            <div className="line-sidebar-dropdown">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-6">
                {categoryGroups.map((group, index) => {
                  const isActive = activeId === group.id;
                  const formattedIndex = String(index + 1).padStart(2, "0");

                  return (
                    <div
                      key={group.id}
                      className="line-sidebar__item"
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => handleItemClick(group.id)}
                    >
                      <span className="line-sidebar__marker" aria-hidden="true" />
                      <span className="line-sidebar__label">
                        <span className="line-sidebar__index">{formattedIndex}</span>
                        <span className="line-sidebar__text">{group.title}</span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
