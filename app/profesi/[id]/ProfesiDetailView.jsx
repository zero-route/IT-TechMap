import Link from "next/link";
import Navbar from "../../../src/components/common/Navbar";
import Footer from "../../../src/components/common/Footer";
import { categoryGroups } from "../../../src/data/ProfessionData";
import {
  ArrowLeft, Cpu, Wrench, CheckCircle2, Headphones,
  HelpCircle, Monitor, Server, Terminal, Database,
  Network, Globe, Layers, Shield, ShieldAlert, Lock, Eye, Skull,
  Code, Layout, Smartphone, GitBranch, Activity, Package, Bot, Cloud,
  BarChart3, BrainCircuit, LineChart, Figma, Users, PenTool, Briefcase, Kanban,
  FolderKanban, UserCheck, Lightbulb
} from "lucide-react";

const iconMap = {
  Headphones, HelpCircle, Monitor, Server, Wrench,
  Terminal, Database, Cpu, Network, Globe, Layers, Shield,
  ShieldAlert, Lock, Eye, Skull, Code, Layout, Smartphone,
  GitBranch, Activity, Package, Bot, Cloud, BarChart3, BrainCircuit, LineChart, Figma, Users, PenTool, Briefcase, Kanban,
  FolderKanban, UserCheck, Lightbulb
};

export default function ProfesiDetailView({ id }) {
  let profesi = null;
  let categoryTitle = "";
  let groupData = null;

  categoryGroups.forEach(g => {
    const found = g.professions.find(p => p.id === id);
    if (found) {
      profesi = found;
      categoryTitle = g.title;
      groupData = g;
    }
  });

  if (!profesi) {
    return (
      <div className="min-h-screen text-white flex flex-col items-center justify-center">
        <p>Profesi tidak ditemukan.</p>
        <Link href="/" className="text-sky-400 underline mt-4">Kembali ke Beranda</Link>
      </div>
    );
  }

  const IconComponent = iconMap[profesi.iconName] || Monitor;
  const words = profesi.name.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  const isOrange = groupData?.cardBorderColor.includes("orange");
  const isAmber = groupData?.cardBorderColor.includes("amber");
  const isRose = groupData?.cardBorderColor.includes("rose");
  const isPurple = groupData?.cardBorderColor.includes("purple");
  const isFuchsia = groupData?.cardBorderColor.includes("fuchsia");
  const isEmerald = groupData?.cardBorderColor.includes("emerald");
  const isPink = groupData?.cardBorderColor.includes("pink");
  const isRed = groupData?.cardBorderColor.includes("red");

  let accentText = "text-sky-400";
  let accentBorder = "border-sky-400/30";
  let accentBadgeBg = "bg-sky-950/60 border-sky-400/40 text-sky-300";
  let gradientTitleClass = "from-sky-400 to-slate-200";

  if (isOrange) {
    accentText = "text-orange-400";
    accentBorder = "border-orange-500/30";
    accentBadgeBg = "bg-orange-950/60 border-orange-500/40 text-orange-300";
    gradientTitleClass = "from-orange-400 to-slate-200";
  } else if (isAmber) {
    accentText = "text-amber-400";
    accentBorder = "border-amber-400/30";
    accentBadgeBg = "bg-amber-950/60 border-amber-400/40 text-amber-300";
    gradientTitleClass = "from-amber-400 to-slate-200";
  } else if (isRose) {
    accentText = "text-rose-400";
    accentBorder = "border-rose-500/30";
    accentBadgeBg = "bg-rose-950/60 border-rose-500/40 text-rose-300";
    gradientTitleClass = "from-rose-400 to-slate-200";
  } else if (isPurple) {
    accentText = "text-purple-400";
    accentBorder = "border-purple-500/30";
    accentBadgeBg = "bg-purple-950/60 border-purple-500/40 text-purple-300";
    gradientTitleClass = "from-purple-400 to-slate-200";
  } else if (isFuchsia) {
    accentText = "text-fuchsia-400";
    accentBorder = "border-fuchsia-500/30";
    accentBadgeBg = "bg-fuchsia-950/60 border-fuchsia-500/40 text-fuchsia-300";
    gradientTitleClass = "from-fuchsia-400 to-slate-200";
  } else if (isEmerald) {
    accentText = "text-emerald-400";
    accentBorder = "border-emerald-500/30";
    accentBadgeBg = "bg-emerald-950/60 border-emerald-500/40 text-emerald-300";
    gradientTitleClass = "from-emerald-400 to-slate-200";
  } else if (isPink) {
    accentText = "text-pink-400";
    accentBorder = "border-pink-500/30";
    accentBadgeBg = "bg-pink-950/60 border-pink-500/40 text-pink-300";
    gradientTitleClass = "from-pink-400 to-slate-200";
  } else if (isRed) {
    accentText = "text-red-400";
    accentBorder = "border-red-500/30";
    accentBadgeBg = "bg-red-950/60 border-red-500/40 text-red-300";
    gradientTitleClass = "from-red-400 to-slate-200";
  }

  return (
    <div className="min-h-screen flex flex-col relative z-0">
      <div className="bg-blobs">
        <div className="blob blob-blue"></div>
        <div className="blob blob-purple"></div>
        <div className="blob blob-magenta"></div>
      </div>

      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 text-sm transition">
          <ArrowLeft size={16} /> Kembali ke Beranda
        </Link>

        <div className={`bg-slate-900/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl border ${accentBorder} mb-8 shadow-lg`}>
          <div className="flex items-start gap-4 mb-4">
            <div className={`p-3 bg-slate-800/80 border border-slate-700 ${accentText} rounded-xl shrink-0`}>
              <IconComponent size={32} />
            </div>
            <div>
              <span className={`text-xs uppercase tracking-wider ${accentText} font-semibold`}>{categoryTitle}</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold mt-1">
                <span className="text-white">{firstWord} </span>
                {restWords && (
                  <span className={`bg-gradient-to-r ${gradientTitleClass} bg-clip-text text-transparent`}>
                    {restWords}
                  </span>
                )}
              </h1>
            </div>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{profesi.summary}</p>
        </div>

        {profesi.tasks && (
          <div className="bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl border border-slate-800 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Tugas & Tanggung Jawab Utama</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {profesi.tasks.map((task, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-800/40 p-3 rounded-xl border border-slate-700/50">
                  <CheckCircle2 size={18} className={`${accentText} shrink-0 mt-0.5`} />
                  <span className="text-slate-300 text-sm">{task}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl border border-slate-800 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Tingkatan / Jenjang Karier</h2>
          <div className="flex flex-wrap gap-3">
            {profesi.levels.map((lvl, index) => (
              <span key={index} className={`px-4 py-2 border rounded-lg text-sm font-medium ${accentBadgeBg}`}>
                {lvl}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl border border-slate-800">
            <div className={`flex items-center gap-3 mb-4 ${accentText} border-b border-slate-800 pb-3`}>
              <Cpu size={22} />
              <h3 className="text-lg font-bold text-white">Software Tools</h3>
            </div>
            <div className="space-y-3">
              {profesi.software.map((item, idx) => (
                <div key={idx} className="bg-slate-800/30 p-3 rounded-xl border border-slate-700/40">
                  <span className={`${accentText} font-semibold text-sm block`}>{item.name}</span>
                  <span className="text-slate-400 text-xs">{item.purpose}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl border border-slate-800">
            <div className={`flex items-center gap-3 mb-4 ${accentText} border-b border-slate-800 pb-3`}>
              <Wrench size={22} />
              <h3 className="text-lg font-bold text-white">Hardware Tools</h3>
            </div>
            <div className="space-y-3">
              {profesi.hardware.map((item, idx) => (
                <div key={idx} className="bg-slate-800/30 p-3 rounded-xl border border-slate-700/40">
                  <span className={`${accentText} font-semibold text-sm block`}>{item.name}</span>
                  <span className="text-slate-400 text-xs">{item.purpose}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
