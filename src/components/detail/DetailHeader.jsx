import React from "react";
import Link from "next/link";
import { ArrowLeft, Cpu } from "lucide-react";

export default function DetailHeader({ profession }) {
  const { title, category, image, overview } = profession;

  return (
    <section className="pt-8">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-blue-300"
      >
        <ArrowLeft size={16} />
        Kembali ke daftar profesi
      </Link>

      <div className="glass-panel grid grid-cols-1 overflow-hidden md:grid-cols-5">
        <div className="relative h-56 md:col-span-2 md:h-full">
          <img
            src={image}
            alt={`Ilustrasi profesi ${title}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b12] via-transparent to-transparent md:bg-gradient-to-r" />
        </div>

        <div className="flex flex-col justify-center gap-4 p-6 md:col-span-3 md:p-10">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 font-mono text-xs text-blue-300">
            <Cpu size={12} />
            {category}
          </span>

          <h1 className="heading-duotone text-3xl font-extrabold leading-tight text-slate-100 sm:text-4xl">
            {title.split(" ")[0]}{" "}
            <span className="word-accent">{title.split(" ").slice(1).join(" ")}</span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-400">{overview}</p>
        </div>
      </div>
    </section>
  );
}