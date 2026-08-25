import React from "react";
import { HardDrive } from "lucide-react";

export default function HardwareList({ hardware }) {
  return (
    <div>
      <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-cyan-300">
        <HardDrive size={16} />
        Hardware
      </h3>
      <ul className="flex flex-col gap-2.5">
        {hardware.map((item, idx) => (
          <li key={idx} className="badge-hardware flex-col !items-start">
            <span className="font-semibold text-slate-100">{item.name}</span>
            <span className="text-xs font-normal text-cyan-100/70">{item.purpose}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}