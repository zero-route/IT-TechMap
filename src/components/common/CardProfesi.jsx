"use client";

import Link from "next/link";
import BorderGlow from "./BorderGlow";
import { 
  Headphones, HelpCircle, Monitor, Server, Wrench, 
  Terminal, Database, Cpu, Network, Globe, Layers, 
  Shield, ShieldAlert, Lock, Eye, Skull, Code, 
  Layout, Smartphone, GitBranch, Activity, Package, Bot, Cloud,
  BarChart3, BrainCircuit, LineChart, Figma, Users, PenTool, Briefcase, Kanban,
  FolderKanban, UserCheck, Lightbulb,
  ArrowRight 
} from "lucide-react";

const iconMap = {
  Headphones, HelpCircle, Monitor, Server, Wrench, 
  Terminal, Database, Cpu, Network, Globe, Layers, 
  Shield, ShieldAlert, Lock, Eye, Skull, Code, 
  Layout, Smartphone, GitBranch, Activity, Package, Bot, Cloud,
  BarChart3, BrainCircuit, LineChart, Figma, Users, PenTool, Briefcase, Kanban,
  FolderKanban, UserCheck, Lightbulb
};

export default function CardProfesi({ profesi, index = 0, borderColor = "", bgColor = "", shadowGlow = "" }) {
  if (!profesi || typeof profesi !== "object") return null;

  const iconName = profesi.iconName || "Monitor";
  const IconComponent = iconMap[iconName] || Monitor;

  const profesiName = profesi.name || "";
  const words = profesiName ? profesiName.split(" ") : ["Profesi"];
  const firstWord = words[0] || "";
  const restWords = words.slice(1).join(" ");

  const isOrange = borderColor.includes("orange");
  const isAmber = borderColor.includes("amber");
  const isRose = borderColor.includes("rose");
  const isPurple = borderColor.includes("purple");
  const isFuchsia = borderColor.includes("fuchsia");
  const isEmerald = borderColor.includes("emerald");
  const isPink = borderColor.includes("pink");
  const isRed = borderColor.includes("red");
  
  let accentTextColor = "text-sky-400";
  let accentHoverColor = "hover:text-sky-300";
  let gradientTitleClass = "from-sky-400 to-slate-200";

  if (isOrange) {
    accentTextColor = "text-orange-400";
    accentHoverColor = "hover:text-orange-300";
    gradientTitleClass = "from-orange-400 to-slate-200";
  } else if (isAmber) {
    accentTextColor = "text-amber-400";
    accentHoverColor = "hover:text-amber-300";
    gradientTitleClass = "from-amber-400 to-slate-200";
  } else if (isRose) {
    accentTextColor = "text-rose-400";
    accentHoverColor = "hover:text-rose-300";
    gradientTitleClass = "from-rose-400 to-slate-200";
  } else if (isPurple) {
    accentTextColor = "text-purple-400";
    accentHoverColor = "hover:text-purple-300";
    gradientTitleClass = "from-purple-400 to-slate-200";
  } else if (isFuchsia) {
    accentTextColor = "text-fuchsia-400";
    accentHoverColor = "hover:text-fuchsia-300";
    gradientTitleClass = "from-fuchsia-400 to-slate-200";
  } else if (isEmerald) {
    accentTextColor = "text-emerald-400";
    accentHoverColor = "hover:text-emerald-300";
    gradientTitleClass = "from-emerald-400 to-slate-200";
  } else if (isPink) {
    accentTextColor = "text-pink-400";
    accentHoverColor = "hover:text-pink-300";
    gradientTitleClass = "from-pink-400 to-slate-200";
  } else if (isRed) {
    accentTextColor = "text-red-400";
    accentHoverColor = "hover:text-red-300";
    gradientTitleClass = "from-red-400 to-slate-200";
  }

  // Hitung delay animasi (0ms, 80ms, 160ms per baris grid 3-kolom)
  const staggerDelay = `${(index % 3) * 80}ms`;

  return (
    <div 
      className="animate-fade-in-up" 
      style={{ animationDelay: staggerDelay }}
    >
      <BorderGlow
        borderRadius={16}
        coneSpread={35}
        backgroundColor="rgba(15, 23, 42, 0.6)"
        className={`p-5 backdrop-blur-md transition-all duration-300 ${borderColor} ${bgColor} ${shadowGlow}`}
      >
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2.5 bg-slate-800/80 border border-slate-700 ${accentTextColor} rounded-lg shrink-0`}>
              <IconComponent size={22} />
            </div>
            <h3 className="text-lg font-bold leading-tight">
              <span className="text-white">{firstWord} </span>
              {restWords && (
                <span className={`bg-gradient-to-r ${gradientTitleClass} bg-clip-text text-transparent`}>
                  {restWords}
                </span>
              )}
            </h3>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
            {profesi.summary || ""}
          </p>
        </div>

        <Link
          href={`/profesi/${profesi.id || ''}`}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold ${accentTextColor} ${accentHoverColor} transition group mt-2`}
        >
          Lihat lebih detail
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </BorderGlow>
    </div>
  );
}
