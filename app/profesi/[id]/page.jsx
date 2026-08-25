import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { categoryGroups } from "@/data/ProfessionData";
import { ArrowLeft, Cpu, Wrench } from "lucide-react";

export default function DetailProfesiPage({ params }) {
  const { id } = params;
  
  // Mencari data profesi
  let profesi = null;
  categoryGroups.forEach(g => {
    const found = g.professions.find(p => p.id === id);
    if (found) profesi = found;
  });

  if (!profesi) {
    return (
      <div className="min-h-screen text-white flex flex-col items-center justify-center">
        <p>Profesi tidak ditemukan.</p>
        <Link href="/" className="text-blue-400 underline mt-4">Kembali ke Beranda</Link>
      </div>
    );
  }

  const words = profesi.name.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-blobs">
        <div className="blob blob-blue"></div>
        <div className="blob blob-purple"></div>
        <div className="blob blob-magenta"></div>
      </div>

      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-10">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6">
          <ArrowLeft size={18} /> Kembali
        </Link>

        {/* Title Header */}
        <div className="bg-slate-900/70 backdrop-blur-md p-8 rounded-2xl border border-slate-800 mb-8">
          <h1 className="text-4xl font-extrabold mb-3">
            <span className="text-white">{firstWord} </span>
            <span className="gradient-text">{restWords}</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">{profesi.summary}</p>
        </div>

        {/* Tingkatan Pekerjaan */}
        <div className="bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl border border-slate-800 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Tingkatan / Jenjang Karier</h2>
          <div className="flex flex-wrap gap-3">
            {profesi.levels.map((lvl, index) => (
              <span key={index} className="px-4 py-2 bg-blue-950/60 border border-blue-500/40 text-blue-300 rounded-lg text-sm font-medium">
                {lvl}
              </span>
            ))}
          </div>
        </div>

        {/* 2 Kategori Tools: Software & Hardware */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Software Tools */}
          <div className="bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-3 mb-4 text-blue-400">
              <Cpu size={24} />
              <h3 className="text-xl font-bold text-white">Software Tools</h3>
            </div>
            <ul className="space-y-2 text-slate-300">
              {profesi.software.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Hardware Tools */}
          <div className="bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-3 mb-4 text-sky-400">
              <Wrench size={24} />
              <h3 className="text-xl font-bold text-white">Hardware Tools</h3>
            </div>
            <ul className="space-y-2 text-slate-300">
              {profesi.hardware.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
