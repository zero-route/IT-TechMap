import Link from "next/link";
import { 
  Headphones, 
  HelpCircle, 
  Monitor, 
  Server, 
  Wrench, 
  Terminal, 
  Database, 
  Cpu, 
  Network,
  Globe,
  Layers,
  Shield,
  ArrowRight 
} from "lucide-react";

const iconMap = {
  Headphones: Headphones,
  HelpCircle: HelpCircle,
  Monitor: Monitor,
  Server: Server,
  Wrench: Wrench,
  Terminal: Terminal,
  Database: Database,
  Cpu: Cpu,
  Network: Network,
  Globe: Globe,
  Layers: Layers,
  Shield: Shield,
};

export default function CardProfesi({ profesi, borderColor, bgColor, shadowGlow }) {
  const IconComponent = iconMap[profesi.iconName] || Monitor;

  const words = profesi.name.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  // Menyesuaikan warna teks aksen mengikuti warna border grup (Biru / Orange / Amber-Kuning)
  const isOrange = borderColor.includes("orange");
  const isAmber = borderColor.includes("amber");
  
  let accentTextColor = "text-sky-400";
  let accentHoverColor = "hover:text-sky-300";

  if (isOrange) {
    accentTextColor = "text-orange-400";
    accentHoverColor = "hover:text-orange-300";
  } else if (isAmber) {
    accentTextColor = "text-amber-400";
    accentHoverColor = "hover:text-amber-300";
  }

  return (
    <div className={`p-5 rounded-xl border backdrop-blur-md transition-all duration-300 flex flex-col justify-between ${borderColor} ${bgColor} ${shadowGlow}`}>
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2.5 bg-slate-800/80 border border-slate-700 ${accentTextColor} rounded-lg shrink-0`}>
            <IconComponent size={22} />
          </div>
          <h3 className="text-lg font-bold leading-tight">
            <span className="text-white">{firstWord} </span>
            <span className="gradient-text">{restWords}</span>
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
    </div>
  );
}
