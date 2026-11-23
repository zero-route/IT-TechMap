import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CardProfesi({ profesi }) {
  if (!profesi) return null;
  return (
    <Link href={`/profesi/${profesi.id}`} className="profession-row">
      <span className="profession-copy"><strong>{profesi.name}</strong><small>{profesi.summary}</small></span>
      <ArrowUpRight className="profession-arrow" size={18} />
    </Link>
  );
}
