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

export default function CardProfesi({ profesi, borderColor }) {
  const IconComponent = iconMap[profesi.iconName] || Monitor;

  const words = profesi.name.split(" ");
  const firstWord = words[0];
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
  let hslGlowColor = "199 89% 48%";
  let gradientColors = ["#38bdf8", "#818cf8", "#c084fc"];

  if (isOrange) {
    accentTextColor = "text-orange-400";
    accentHoverColor = "hover:text-orange-300";
    gradientTitleClass = "from-orange-400 to-slate-200";
    hslGlowColor = "24 95% 53%";
    gradientColors = ["#fb923c", "#f97316", "#fdba74"];
  } else if (isAmber) {
    accentTextColor = "text-amber-400";
    accentHoverColor = "hover:text-amber-300";
    gradientTitleClass = "from-amber-400 to-slate-200";
    hslGlowColor = "43 96% 56%";
    gradientColors = ["#fbbf24", "#f59e0b", "#fde047"];
  } else if (isRose) {
    accentTextColor = "text-rose-400";
    accentHoverColor = "hover:text-rose-300";
    gradientTitleClass = "from-rose-400 to-slate-200";
    hslGlowColor = "351 89% 60%";
    gradientColors = ["#fb7185", "#f43f5e", "#fda4af"];
  } else if (isPurple) {
    accentTextColor = "text-purple-400";
    accentHoverColor = "hover:text-purple-300";
    gradientTitleClass = "from-purple-400 to-slate-200";
    hslGlowColor = "271 91% 65%";
    gradientColors = ["#c084fc", "#a855f7", "#e879f9"];
  } else if (isFuchsia) {
    accentTextColor = "text-fuchsia-400";
    accentHoverColor = "hover:text-fuchsia-300";
    gradientTitleClass = "from-fuchsia-400 to-slate-200";
    hslGlowColor = "292 84% 61%";
    gradientColors = ["#e879f9", "#d946ef", "#f472b6"];
  } else if (isEmerald) {
    accentTextColor = "text-emerald-400";
    accentHoverColor = "hover:text-emerald-300";
    gradientTitleClass = "from-emerald-400 to-slate-200";
    hslGlowColor = "160 84% 39%";
    gradientColors = ["#34d399", "#10b981", "#6ee7b7"];
  } else if (isPink) {
    accentTextColor = "text-pink-400";
    accentHoverColor = "hover:text-pink-300";
    gradientTitleClass = "from-pink-400 to-slate-200";
    hslGlowColor = "330 81% 60%";
    gradientColors = ["#f472b6", "#ec4899", "#fb7185"];
  } else if (isRed) {
    accentTextColor = "text-red-400";
    accentHoverColor = "hover:text-red-300";
    gradientTitleClass = "from-red-400 to-slate-200";
    hslGlowColor = "0 84% 60%";
    gradientColors = ["#f87171", "#ef4444", "#fca5a5"];
  }

  return (
    <BorderGlow
      glowColor={hslGlowColor}
      colors={gradientColors}
      borderRadius={16}
      glowRadius={40}
      edgeSensitivity={35}
      backgroundColor="rgba(15, 23, 42, 0.6)"
      className="p-5 backdrop-blur-md transition-all duration-300"
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
          {profesi.summary}
        </p>
      </div>

      <Link
        href={`/profesi/${profesi.id}`}
        className={`inline-flex items-center gap-1.5 text-xs font-semibold ${accentTextColor} ${accentHoverColor} transition group mt-2`}
      >
        Lihat lebih detail
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </BorderGlow>
  );
}
