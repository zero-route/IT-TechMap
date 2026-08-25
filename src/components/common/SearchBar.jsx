import React from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange, resultCount }) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="glass-panel flex items-center gap-3 px-4 py-3 transition-shadow duration-300 focus-within:shadow-neon-sm focus-within:border-blue-400/50">
        <Search size={18} className="shrink-0 text-blue-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Cari profesi... misal: 'network' atau 'keamanan'"
          className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
        />
        {value && (
          <button
            onClick={() => onChange("")}
            aria-label="Bersihkan pencarian"
            className="shrink-0 rounded-full p-1 text-slate-500 transition-colors hover:text-blue-300"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {value && (
        <p className="mt-3 text-center font-mono text-xs text-slate-500">
          {resultCount > 0
            ? `${resultCount} profesi ditemukan untuk "${value}"`
            : `Tidak ada hasil untuk "${value}"`}
        </p>
      )}
    </div>
  );
}