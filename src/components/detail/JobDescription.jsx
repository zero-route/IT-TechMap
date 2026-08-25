import React from "react";
import { ListChecks, Briefcase } from "lucide-react";

export default function JobDescription({ tasks, examples }) {
  return (
    <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="glass-panel p-6">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-100">
          <ListChecks size={19} className="text-blue-400" />
          Tugas &amp; Tanggung Jawab
        </h2>
        <ul className="space-y-3">
          {tasks.map((task, idx) => (
            <li key={idx} className="flex gap-3 text-sm leading-relaxed text-slate-400">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              {task}
            </li>
          ))}
        </ul>
      </div>

      <div className="glass-panel p-6">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-100">
          <Briefcase size={18} className="text-indigo-400" />
          Contoh Pekerjaan Nyata
        </h2>
        <ul className="space-y-3">
          {examples.map((example, idx) => (
            <li
              key={idx}
              className="rounded-lg border border-blue-500/10 bg-blue-500/5 px-4 py-3 text-sm leading-relaxed text-slate-400"
            >
              {example}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}