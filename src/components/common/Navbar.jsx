"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TerminalSquare, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Beranda", href: "/" },
    { label: "Profesi", href: "/#daftar-profesi" },
    { label: "Tentang", href: "/#tentang" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-blue-500/10 bg-base-950/70 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-300 transition-all group-hover:shadow-neon-sm">
            <TerminalSquare size={18} />
          </span>
          <span className="font-mono text-lg font-bold tracking-tight text-slate-100">
            IT<span className="text-blue-400">-TechMap</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-blue-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="/#daftar-profesi" className="btn-neon hidden md:inline-flex">
          Jelajahi Profesi
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-blue-500/20 p-2 text-slate-200 md:hidden"
          aria-label="Buka menu navigasi"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-blue-500/10 bg-base-950/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-blue-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}