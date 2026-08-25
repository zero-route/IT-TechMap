import React from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu } from "lucide-react";

export default function CardProfesi({ profession }) {
  const { id, title, category, image, overview } = profession;

  return (
    <Link
      href={`/profesi/${id}`}
      className="group glass-panel relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-400/50 hover:shadow-neon-md"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={image}
          alt={`Ilustrasi profesi ${title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b12] via-transparent to-transparent" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-base-950/70 px-3 py-1 font-mono text-[11px] text-purple-300 backdrop-blur-sm">
          <Cpu size={12} />
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-bold text-slate-100 transition-colors group-hover:text-purple-300">
          {title}
        </h3>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-slate-400">
          {overview}
        </p>

        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-400">
          Lihat detail
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
