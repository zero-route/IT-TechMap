import Link from "next/link";
import { Headphones, HelpCircle, Monitor, Server, ArrowRight } from "lucide-react";

const iconMap = {
  Headphones: Headphones,
  HelpCircle: HelpCircle,
  Monitor: Monitor,
  Server: Server
};

export default function CardProfesi({ profesi, borderColor, bgColor, shadowGlow }) {
  const IconComponent = iconMap[profesi.iconName] || Monitor;

  const words = profesi.name.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <div className={`p-5 rounded-xl border backdrop-blur-md transition-all duration-300 flex flex-col justify-between ${borderColor} ${bgColor} ${shadowGlow}`}>
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 bg-slate-800/80 border border-slate-700 text-sky-400 rounded-lg shrink-0">
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
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition group mt-2"
      >
        Lihat lebih detail
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
