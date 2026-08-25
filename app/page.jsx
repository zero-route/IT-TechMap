"use client";

import React, { useMemo, useState } from "react";
import { TerminalSquare, Layers } from "lucide-react";
import SearchBar from "../src/components/common/SearchBar.jsx";
import CardProfesi from "../src/components/common/CardProfesi.jsx";
import ProfessionData from "../src/data/ProfessionData.js";

export default function HomePage() {
  const [query, setQuery] = useState("");

  const filteredProfessions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ProfessionData;
    return ProfessionData.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.overview.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center gap-6 py-20 text-center sm:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 font-mono text-xs text-purple-300">
          <TerminalSquare size={13} />
          $ profesi --list --field=IT
        </span>

        <h1 className="heading-duotone max-w-3xl text-4xl font-extrabold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
          Peta <span className="word-accent">Profesi IT</span>, dari Layar ke Karier
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
          "IT" itu payung besar yang berisi banyak profesi. IT-TechMap membantumu
          menjelajahi tiap profesi lengkap dengan tugas harian, contoh nyata, serta
          software &amp; hardware yang benar-benar dipakai di lapangan.
        </p>

        <div className="mt-4 w-full">
          <SearchBar
            value={query}
            onChange={setQuery}
            resultCount={filteredProfessions.length}
          />
        </div>
      </section>

      {/* Profession Grid */}
      <section id="daftar-profesi" className="pb-24">
        <div className="mb-8 flex items-center gap-2.5">
          <Layers size={18} className="text-purple-400" />
          <h2 className="heading-duotone text-2xl font-bold text-slate-100">
            Daftar <span className="word-accent">Profesi</span>
          </h2>
        </div>

        {filteredProfessions.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProfessions.map((profession) => (
              <CardProfesi key={profession.id} profession={profession} />
            ))}
          </div>
        ) : (
          <div className="glass-panel flex flex-col items-center gap-2 px-6 py-16 text-center">
            <p className="text-lg font-semibold text-slate-200">Belum ada profesi yang cocok</p>
            <p className="text-sm text-slate-500">Coba gunakan kata kunci lain, misalnya "developer" atau "security".</p>
          </div>
        )}
      </section>
    </div>
  );
}
