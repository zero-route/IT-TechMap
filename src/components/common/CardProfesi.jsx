import Link from "next/link";
import { Headphones, HelpCircle, Monitor, Server, ArrowRight } from "lucide-react";

const iconMap = {
  Headphones: Headphones,
  HelpCircle: HelpCircle,
  Monitor: Monitor,
  Server: Server,
};

export default function CardProfesi({ profesi }) {
  const IconComponent = iconMap[profesi.iconName] || Monitor;

  // Pemisah Judul Duotone
  const words = profesi.name.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 bg-blue-950/80 border border-blue-500/30 text-blue-400 rounded-lg">
            <IconComponent size={24} />
          </div>
          <h3 className="text-xl font-bold">
            <span className="text-white">{firstWord} </span>
            <span className="gradient-text">{restWords}</span>
          </h3>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {profesi.summary}
        </p>
      </div>

      <Link
        href={`/profesi/${profesi.id}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition group mt-2"
      >
        Lihat lebih detail
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
