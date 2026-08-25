import { categoryGroups } from "../../../src/data/ProfessionData";
import ProfesiDetailView from "./ProfesiDetailView";

export async function generateStaticParams() {
  const paths = [];
  categoryGroups.forEach((group) => {
    group.professions.forEach((profesi) => {
      paths.push({ id: profesi.id });
    });
  });
  return paths;
}

export default async function DetailProfesiPage({ params }) {
  const { id } = await params;
  return <ProfesiDetailView id={id} />;
}