"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";
import { categoryGroups } from "../../data/ProfessionData";

const FALLOFF_CURVES = {
  linear: (p) => p,
  smooth: (p) => p * p * (3 - 2 * p),
  sharp: (p) => p * p * p,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const targetsRef = useRef([]);
  const currentRef = useRef([]);
  const rafRef = useRef(null);
  const lastRef = useRef(0);
  const activeRef = useRef(activeIndex);

  activeRef.current = activeIndex;

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
      // Memastikan item yang aktif selalu mendapat nilai target minimal 1
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
        targetsRef.current[i] = ease(Math.max(0, 1 - distance / 150));
      }
      startLoop();
    },
    [startLoop]
  );

  const handlePointerLeave = useCallback(() => {
    targetsRef.current = targetsRef.current.map(() => 0);
    startLoop();
  }, [startLoop]);

  const handleTouchMove = useCallback(
    (e) => {
      if (e.touches && e.touches[0]) {
        handlePointerMove(e.touches[0]);
      }
    },
    [handlePointerMove]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Set nilai default awal saat drawer dibuka
      setTimeout(() => {
        itemRefs.current.forEach((el, i) => {
          if (el) {
            const val = activeIndex === i ? 1 : 0;
            currentRef.current[i] = val;
            el.style.setProperty("--effect", val.toString());
          }
        });
        startLoop();
      }, 50);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, activeIndex, startLoop]);

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
    <header className="sticky top-0 z-50 bg-slate-950/95 border-b border-slate-800/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-sky-500/10 border border-sky-500/30 rounded-lg group-hover:border-sky-400 transition-colors">
              <Terminal size={20} className="text-sky-400" />
            </div>
            <span className="font-extrabold text-lg text-white tracking-wide">
              IT <span className="gradient-text">Profesi Map</span>
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* OVERLAY NAVIGATION FULLSCREEN (FIXED VISIBILITY) */}
      {isOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 bg-[#030712] z-[999] flex flex-col justify-between overflow-y-auto p-6 sm:p-10">
          <div className="max-w-md mx-auto w-full my-auto py-4">
            <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-8 pl-12">
              Kategori Profesi IT
            </p>

            <nav className="line-sidebar">
              <ul
                ref={listRef}
                className="line-sidebar__list"
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                onTouchMove={handleTouchMove}
                onTouchEnd={handlePointerLeave}
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

          <div className="text-center pt-6 border-t border-slate-800/80 text-slate-500 text-xs">
            IT Profession Map &copy; 2026. Built with Next.js & React Bits.
          </div>
        </div>
      )}
    </header>
  );
}
