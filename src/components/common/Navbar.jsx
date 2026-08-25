"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";
import { categoryGroups } from "../../data/ProfessionData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

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
    <header className="sticky top-0 z-50 bg-[#030712]/95 border-b border-slate-800/80 backdrop-blur-md">
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

      {/* DROPDOWN MENU DENGAN BACKGROUND HITAM PEKAT + BLUR */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#030712]/95 backdrop-blur-xl border-b border-slate-800/90 shadow-2xl p-6 z-[9999]">
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4 pl-1">
              Kategori Profesi IT
            </p>

            <div className="line-sidebar-dropdown">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
                {categoryGroups.map((group, index) => {
                  const isActive = activeId === group.id;
                  const formattedIndex = String(index + 1).padStart(2, "0");

                  return (
                    <div
                      key={group.id}
                      className="line-sidebar__item group flex items-center cursor-pointer py-1.5 transition-all duration-200"
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => handleItemClick(group.id)}
                    >
                      {/* Indikator Garis Kiri */}
                      <span className={`h-[2px] rounded-full transition-all duration-300 mr-3 ${
                        isActive 
                          ? "w-8 bg-purple-400 shadow-[0_0_8px_#c084fc]" 
                          : "w-5 bg-slate-700 group-hover:w-7 group-hover:bg-purple-400"
                      }`} />
                      
                      {/* Teks & Nomor Stepper */}
                      <span className={`flex items-center text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "text-purple-300 font-semibold translate-x-2"
                          : "text-slate-300 group-hover:text-purple-300 group-hover:translate-x-2"
                      }`}>
                        <span className="font-mono text-xs mr-2 text-slate-500 group-hover:text-purple-400">
                          {formattedIndex}
                        </span>
                        {group.title}
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
