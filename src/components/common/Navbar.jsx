"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";
import { categoryGroups } from "../../data/ProfessionData";
import "./LineSidebar.css";

const FALLOFF_CURVES = {
  linear: (p) => p,
  smooth: (p) => p * p * (3 - 2 * p),
  sharp: (p) => p * p * p,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // References untuk logika LineSidebar React Bits
  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const targetsRef = useRef([]);
  const currentRef = useRef([]);
  const rafRef = useRef(null);
  const lastRef = useRef(0);
  const activeRef = useRef(activeIndex);

  activeRef.current = activeIndex;

  // Single rAF loop dari kode LineSidebar kamu
  const runFrame = useCallback((now) => {
    const dt = Math.min((now - lastRef.current) / 1000, 0.05);
    lastRef.current = now;
    const tau = 80 / 1000;
    const k = 1 - Math.exp(-dt / tau);

    let moving = false;
    const items = itemRefs.current;
    for (let i = 0; i < items.length; i++) {
      const el = items[i];
      if (!el) continue;
      const target = Math.max(targetsRef.current[i] || 0, activeRef.current === i ? 1 : 0);
      const cur = currentRef.current[i] || 0;
      const next = cur + (target - cur) * k;
      const settled = Math.abs(target - next) < 0.0015;
      const value = settled ? target : next;
      currentRef.current[i] = value;
      el.style.setProperty("--effect", value.toFixed(4));
      if (!settled) moving = true;
    }

    rafRef.current = moving ? requestAnimationFrame(runFrame) : null;
  }, []);

  const startLoop = useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
    }
    lastRef.current = performance.now();
    rafRef.current = requestAnimationFrame(runFrame);
  }, [runFrame]);

  const handlePointerMove = useCallback(
    (e) => {
      const list = listRef.current;
      if (!list) return;
      const rect = list.getBoundingClientRect();
      const pointerY = e.clientY - rect.top;
      const ease = FALLOFF_CURVES.smooth;
      const items = itemRefs.current;
      for (let i = 0; i < items.length; i++) {
        const el = items[i];
        if (!el) continue;
        const center = el.offsetTop + el.offsetHeight / 2;
        const distance = Math.abs(pointerY - center);
        targetsRef.current[i] = ease(Math.max(0, 1 - distance / 100));
      }
      startLoop();
    },
    [startLoop]
  );

  const handlePointerLeave = useCallback(() => {
    targetsRef.current = targetsRef.current.map(() => 0);
    startLoop();
  }, [startLoop]);

  // Lock scroll background saat menu overlay aktif
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      startLoop();
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, startLoop]);

  // Auto detect active item saat user scroll halaman utama
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (let i = 0; i < categoryGroups.length; i++) {
        const group = categoryGroups[i];
        const element = document.getElementById(group.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (index, targetId) => {
    setActiveIndex(index);
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
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

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <a href="#support-group" className="hover:text-white transition-colors">
              Peta Kategori
            </a>
          </nav>

          {/* Hamburger Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* FULLSCREEN OVERLAY DENGAN REACT BITS LINE SIDEBAR */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-slate-950/95 backdrop-blur-2xl z-50 flex flex-col justify-between overflow-y-auto p-6 sm:p-10 animate-fade-in-up">
          <div className="max-w-lg mx-auto w-full my-auto py-4">
            <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-8 pl-12">
              Kategori Profesi IT
            </p>

            {/* Komponen LineSidebar Asli React Bits */}
            <nav className="line-sidebar line-sidebar--markers line-sidebar--scale-tick">
              <ul
                ref={listRef}
                className="line-sidebar__list"
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
              >
                {categoryGroups.map((group, index) => (
                  <li
                    key={group.id}
                    ref={(el) => (itemRefs.current[index] = el)}
                    className="line-sidebar__item"
                    aria-current={activeIndex === index ? "true" : undefined}
                    onClick={() => handleItemClick(index, group.id)}
                  >
                    <span className="line-sidebar__marker" aria-hidden="true" />
                    <span className="line-sidebar__label">
                      <span className="line-sidebar__index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="line-sidebar__text">{group.title}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="text-center pt-6 border-t border-slate-900 text-slate-500 text-xs">
            IT Profession Map &copy; 2026. Built with Next.js & React Bits.
          </div>
        </div>
      )}
    </header>
  );
}
