import React from "react";
import { AppWindow } from "lucide-react";

export default function SoftwareList({ software }) {
  return (
    <div>
      <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-purple-300">
        <AppWindow size={16} />
        Software
      </h3>
      <ul className="flex flex-col gap-2.5">
        {software.map((item, idx) => (
          <li key={idx} className="badge-software flex-col !items-start">
            <span className="font-semibold text-slate-100">{item.name}</span>
            <span className="text-xs font-normal text-purple-200/70">{item.purpose}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
