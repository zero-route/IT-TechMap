"use client";
import { useState } from "react";
import Navbar from "../src/components/common/Navbar";
import SearchBar from "../src/components/common/SearchBar";
import CardProfesi from "../src/components/common/CardProfesi";
import Footer from "../src/components/common/Footer";
import { categoryGroups } from "../src/data/ProfessionData";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen flex flex-col relative z-0">
      <div className="bg-blobs">
        <div className="blob blob-blue"></div>
        <div className="blob blob-purple"></div>
        <div className="blob blob-magenta"></div>
      </div>

      <Navbar />

      <main className="flex-1 max-w-[90rem] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
            <span className="text-white">Peta </span>
            <span className="gradient-text">Profesi IT</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Panduan komprehensif struktur jenjang karier, tugas, dan tools ekosistem dunia IT.
          </p>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <div className="space-y-8" id="profesi">
          {categoryGroups.map((group) => {
            const filteredProfessions = group.professions.filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredProfessions.length === 0) return null;

            return (
              <div key={group.id} className="space-y-4">
                <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-2">
                  {group.title}
                </h2>
                
                {/* 5 Kolom Sejajar Horizontal di Desktop (lg:grid-cols-5) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {filteredProfessions.map((profesi) => (
                    <CardProfesi 
                      key={profesi.id} 
                      profesi={profesi}
                      borderColor={group.cardBorderColor}
                      bgColor={group.cardBgColor}
                      shadowGlow={group.cardGlow}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
