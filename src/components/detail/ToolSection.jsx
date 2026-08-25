import React from "react";
import { Wrench } from "lucide-react";
import SoftwareList from "./SoftwareList.jsx";
import HardwareList from "./HardwareList.jsx";

export default function ToolSection({ tools }) {
  return (
    <section className="mt-6">
      <div className="glass-panel p-6 md:p-8">
        <h2 className="mb-6 flex items-center gap-2 text-lg font-bold text-slate-100">
          <Wrench size={19} className="text-blue-400" />
          Perangkat Kerja
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <SoftwareList software={tools.software} />
          <HardwareList hardware={tools.hardware} />
        </div>
      </div>
    </section>
  );
}