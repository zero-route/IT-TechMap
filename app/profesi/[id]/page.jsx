import Link from "next/link";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import ProfessionData from "../../../src/data/ProfessionData.js";
import DetailHeader from "../../../src/components/detail/DetailHeader.jsx";
import JobDescription from "../../../src/components/detail/JobDescription.jsx";
import ToolSection from "../../../src/components/detail/ToolSection.jsx";

// Pre-render semua halaman detail profesi saat build (Static Site Generation).
export function generateStaticParams() {
  return ProfessionData.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }) {
  const profession = ProfessionData.find((p) => p.id === params.id);
  if (!profession) return { title: "Profesi tidak ditemukan — IT-TechMap" };
  return {
    title: `${profession.title} — IT-TechMap`,
    description: profession.overview,
  };
}

export default function ProfessionDetailPage({ params }) {
  const { id } = params;
  const profession = ProfessionData.find((p) => p.id === id);

  if (!profession) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 py-24 text-center">
        <AlertTriangle size={32} className="text-purple-400" />
        <h1 className="text-2xl font-bold text-slate-100">Profesi tidak ditemukan</h1>
        <p className="max-w-sm text-sm text-slate-500">
          Profesi yang kamu cari mungkin sudah berubah nama atau belum tersedia di IT-TechMap.
        </p>
        <Link href="/" className="btn-neon mt-2">
          <ArrowLeft size={15} />
          Kembali ke beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-24">
      <DetailHeader profession={profession} />
      <JobDescription tasks={profession.tasks} examples={profession.examples} />
      <ToolSection tools={profession.tools} />
    </div>
  );
}
