import React from "react";
import { TerminalSquare, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-blue-500/10 bg-base-950/60">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-300">
              <TerminalSquare size={18} />
            </span>
            <span className="font-mono text-lg font-bold text-slate-100">
              IT<span className="text-blue-400">-TechMap</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-500/20 text-slate-400 transition-colors hover:border-blue-400 hover:text-blue-300"
            >
              <Github size={16} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-500/20 text-slate-400 transition-colors hover:border-blue-400 hover:text-blue-300"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-500/20 text-slate-400 transition-colors hover:border-blue-400 hover:text-blue-300"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-blue-500/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {year} IT-TechMap. Dibuat untuk membantu kamu memetakan jalur karier IT.</p>
          <p className="font-mono">
            status: <span className="text-blue-400">online</span>
          </p>
        </div>
      </div>
    </footer>
  );
}