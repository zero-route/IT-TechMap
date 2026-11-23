import Link from "next/link";
import Navbar from "../../../src/components/common/Navbar";
import Footer from "../../../src/components/common/Footer";
import { categoryGroups } from "../../../src/data/ProfessionData";
import { ArrowLeft } from "lucide-react";

export default function ProfesiDetailView({ id }) {
  let profesi = null;
  let categoryTitle = "";
  categoryGroups.forEach((group) => {
    const found = group.professions.find((item) => item.id === id);
    if (found) { profesi = found; categoryTitle = group.title; }
  });

  if (!profesi) return <div className="site-shell"><Navbar /><main className="not-found"><p>Profesi tidak ditemukan.</p><Link href="/">Kembali ke direktori</Link></main><Footer /></div>;

  const tasks = profesi.tasks || [];
  const levels = profesi.levels || [];
  const software = profesi.software || [];
  const hardware = profesi.hardware || [];

  return (
    <div className="site-shell">
      <Navbar />
      <main className="detail-main">
        <Link href="/" className="back-link"><ArrowLeft size={16} /> Kembali ke direktori</Link>
        <header className="detail-hero">
          <span className="detail-category">{categoryTitle}</span>
          <h1>{profesi.name}</h1>
          <p>{profesi.summary}</p>
        </header>

        {tasks.length > 0 && <section className="detail-section">
          <h2>Tugas & tanggung jawab</h2>
          <div className="detail-items">{tasks.map((task, index) => <div className="detail-item" key={index}><span className="detail-item-index">{String(index + 1).padStart(2, "0")}</span><span>{task}</span></div>)}</div>
        </section>}

        {levels.length > 0 && <section className="detail-section">
          <h2>Jenjang karier</h2>
          <div className="level-list">{levels.map((level, index) => <span className="level-chip" key={index}>{level}</span>)}</div>
        </section>}

        {(software.length > 0 || hardware.length > 0) && <section className="detail-section">
          <h2>Perangkat kerja</h2>
          <div className="tool-grid">
            {software.length > 0 && <div><p className="detail-category">SOFTWARE</p><div className="tool-list">{software.map((item, index) => <div className="tool-item" key={index}><strong>{item.name}</strong><span>{item.purpose}</span></div>)}</div></div>}
            {hardware.length > 0 && <div><p className="detail-category">HARDWARE</p><div className="tool-list">{hardware.map((item, index) => <div className="tool-item" key={index}><strong>{item.name}</strong><span>{item.purpose}</span></div>)}</div></div>}
          </div>
        </section>}
      </main>
      <Footer />
    </div>
  );
}
