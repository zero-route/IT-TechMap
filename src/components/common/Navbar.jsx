"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowDown, Menu, X } from "lucide-react";
import { categoryGroups } from "../../data/ProfessionData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-inner page-width">
        <Link href="/" className="brand" onClick={() => setIsOpen(false)}>
          <span className="brand-mark">IT</span><span>Profesi<span className="brand-light">Map</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          <a href="/#direktori">Direktori <ArrowDown size={14} /></a>
          <a href="/#tentang">Tentang</a>
        </nav>
        <button className="menu-toggle" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? "Tutup menu" : "Buka menu"} aria-expanded={isOpen}>{isOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </div>
      {isOpen && <div className="mobile-menu page-width">
        <a href="/#direktori" onClick={() => setIsOpen(false)}>Direktori profesi</a>
        <a href="/#tentang" onClick={() => setIsOpen(false)}>Tentang proyek</a>
        <div className="mobile-menu-categories">{categoryGroups.map((group) => <a key={group.id} href={`/#${group.id}`} onClick={() => setIsOpen(false)}>{group.title}</a>)}</div>
      </div>}
    </header>
  );
}
