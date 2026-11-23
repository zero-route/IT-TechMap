"use client";

import { useEffect, useRef, useState } from "react";
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
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  const delayStyle = { transitionDelay: `${index * 230}ms` };

  return (
    <div
      ref={cardRef}
      style={delayStyle}
      className={`fade-up-init ${isVisible ? "fade-up-active" : ""}`}
    >
      <BorderGlow
        borderRadius={16}
        coneSpread={35}
        backgroundColor="rgba(15, 23, 42, 0.95)"
        className={`p-5 transition-all duration-300 group ${borderColor} ${bgColor} ${shadowGlow}`}
      >
        <div>
          {/* Header Kartu: Memakai justify-between agar 2 bintang berada tepat di kanan sejajar judul */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
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

            {/* Icon 2 Bintang React Bits (Sparkles) dengan Efek Shining/Glow saat Hover */}
            <div className="relative text-white/40 group-hover:text-white transition-all duration-300 shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">
              <svg 
                className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                {/* Bintang Besar */}
                <path d="M9.5 2C9.5 5.58579 6.58579 8.5 3 8.5C6.58579 8.5 9.5 11.4142 9.5 15C9.5 11.4142 12.4142 8.5 16 8.5C12.4142 8.5 9.5 5.58579 9.5 2Z" />
                {/* Bintang Kecil */}
                <path d="M17.5 13C17.5 15.2091 15.7091 17 13.5 17C15.7091 17 17.5 18.7909 17.5 21C17.5 18.7909 19.2909 17 21.5 17C19.2909 17 17.5 15.2091 17.5 13Z" />
              </svg>
            </div>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
            {profesi.summary || ""}
          </p>
        </div>

        <Link
          href={`/profesi/${profesi.id || ''}`}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold ${accentTextColor} ${accentHoverColor} transition group/link mt-2`}
        >
          Lihat lebih detail
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </BorderGlow>
    </div>
  );
}
