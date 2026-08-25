"use client";
import { useState } from "react";
import Navbar from "@/components/common/Navbar";
import SearchBar from "@/components/common/SearchBar";
import CardProfesi from "@/components/common/CardProfesi";
import Footer from "@/components/common/Footer";
import { categoryGroups } from "@/data/ProfessionData";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Dynamic Animated Blobs Background */}
      <div className="bg-blobs">
        <div className="blob blob-blue"></div>
        <div className="blob blob-purple"></div>
        <div className="blob blob-magenta"></div>
      </div>

      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="text-white">Peta </span>
            <span className="gradient-text">Profesi IT</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Panduan komprehensif struktur jenjang karier, tugas, dan tools ekosistem dunia IT.
          </p>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {/* Section Kelompok Profesi */}
        <div className="space-y-8" id="profesi">
          {categoryGroups.map((group) => {
            const filteredProfessions = group.professions.filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredProfessions.length === 0) return null;

            return (
              <div
                key={group.id}
                className={`p-6 sm:p-8 rounded-2xl border ${group.borderColor} ${group.bgColor} backdrop-blur-md`}
              >
                <h2 className="text-2xl font-bold mb-6 text-white border-b border-slate-800 pb-3">
                  {group.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredProfessions.map((profesi) => (
                    <CardProfesi key={profesi.id} profesi={profesi} />
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
