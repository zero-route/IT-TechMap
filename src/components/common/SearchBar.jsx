import { Search } from "lucide-react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative max-w-xl mx-auto my-6">
      <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
      <input
        type="text"
        placeholder="Cari profesi IT (misal: IT Support, Helpdesk)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-slate-900/80 border border-slate-700/60 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
      />
    </div>
  );
}
