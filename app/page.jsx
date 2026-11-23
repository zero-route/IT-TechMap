"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight, Search, Monitor, Code2, Shield, BarChart3, Cloud, Network, Database, Layers, Headphones, Briefcase } from "lucide-react";
import { categoryGroups } from "../src/data/ProfessionData";
import Navbar from "../src/components/common/Navbar";
import Footer from "../src/components/common/Footer";

const categoryIcons = [Monitor, Database, Network, Shield, Code2, Cloud, BarChart3, Briefcase, Layers, Headphones];

export default function Home() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredGroups = useMemo(() => categoryGroups.map((group) => ({
    ...group,
    professions: group.professions.filter((profession) =>
      !normalizedQuery || `${profession.name} ${profession.summary} ${group.title}`.toLowerCase().includes(normalizedQuery)
    ),
  })).filter((group) => group.professions.length), [normalizedQuery]);
  const totalProfessions = categoryGroups.reduce((sum, group) => sum + group.professions.length, 0);

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <section className="hero page-width">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> DIREKTORI KARIER TEKNOLOGI</p>
            <h1>Temukan tempatmu<br /><span>di dunia IT.</span></h1>
            <p className="hero-description">Kenali berbagai profesi teknologi, pahami tanggung jawabnya, dan temukan jalur yang ingin kamu tekuni.</p>
            <a className="text-link hero-link" href="#direktori">Jelajahi direktori <ArrowDown size={16} /></a>
          </div>
          <div className="hero-side" aria-hidden="true">
            <div className="glass-orbit orbit-one" />
            <div className="glass-orbit orbit-two" />
          </div>
        </section>

        <section className="directory page-width" id="direktori">
          <div className="section-heading">
            <div>
              <p className="eyebrow">JELAJAHI BERDASARKAN BIDANG</p>
              <h2>Direktori profesi</h2>
            </div>
            <p className="section-count">{String(totalProfessions).padStart(2, "0")} PROFESI TERDAFTAR</p>
          </div>

          <label className="search-field">
            <Search size={19} aria-hidden="true" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari profesi atau bidang..." aria-label="Cari profesi atau bidang" />
            {query && <button type="button" onClick={() => setQuery("")} aria-label="Hapus pencarian">×</button>}
          </label>

          {!normalizedQuery && (
            <nav className="category-index" aria-label="Daftar kategori">
              {categoryGroups.map((group, index) => {
                const Icon = categoryIcons[index % categoryIcons.length];
                return (
                  <a className="category-index-row" href={`#${group.id}`} key={group.id}>
                    <span className="category-icon"><Icon size={20} strokeWidth={1.6} /></span>
                    <span className="category-name">{group.title}</span>
                    <span className="category-total">{String(group.professions.length).padStart(2, "0")}</span>
                    <ArrowRight className="category-arrow" size={17} />
                  </a>
                );
              })}
            </nav>
          )}

          <div className="profession-groups">
            {filteredGroups.map((group, groupIndex) => (
              <section className="profession-group" id={group.id} key={group.id}>
                <div className="group-heading">
                  <span className="group-number">{String(groupIndex + 1).padStart(2, "0")}</span>
                  <h3>{group.title}</h3>
                  <span className="group-rule" />
                  <span className="group-count">{group.professions.length} profesi</span>
                </div>
                <div className="profession-list">
                  {group.professions.map((profession, index) => (
                    <Link className="profession-row" href={`/profesi/${profession.id}`} key={profession.id || index}>
                      <span className="profession-number">{String(index + 1).padStart(2, "0")}</span>
                      <span className="profession-copy">
                        <strong>{profession.name}</strong>
                        <small>{profession.summary}</small>
                      </span>
                      <ArrowRight className="profession-arrow" size={18} />
                    </Link>
                  ))}
                </div>
              </section>
            ))}
            {filteredGroups.length === 0 && <div className="empty-state"><p>Tidak ada profesi yang cocok.</p><button onClick={() => setQuery("")}>Hapus pencarian</button></div>}
          </div>
        </section>

        <section className="closing-panel page-width">
          <div><p className="eyebrow">LANGKAH BERIKUTNYA</p><h2>Mulai dari rasa ingin tahu.</h2><p>Pilih satu profesi, pelajari kesehariannya, lalu tentukan langkah belajarmu.</p></div>
          <a href="#direktori" className="round-link" aria-label="Kembali ke direktori"><ArrowRight size={20} /></a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
