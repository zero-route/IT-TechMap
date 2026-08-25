 import { categoryGroups } from "../src/data/ProfessionData";
import CardProfesi from "../src/components/common/CardProfesi";
import Navbar from "../src/components/common/Navbar";
import Footer from "../src/components/common/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative z-0">
      <div className="bg-blobs">
        <div className="blob blob-blue"></div>
        <div className="blob blob-purple"></div>
        <div className="blob blob-magenta"></div>
      </div>

      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-white">Peta </span>
            <span className="gradient-text">Profesi IT</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Panduan komprehensif struktur jenjang karier, tugas, dan tools ekosistem dunia IT.
          </p>
        </div>

        <div className="space-y-12">
          {categoryGroups.map((group) => {
            if (!group || !group.professions) return null;

            return (
              <section key={group.id} className="scroll-mt-20">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-6 bg-slate-700 rounded-full inline-block"></span>
                  {group.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.professions.map((profesi, index) => {
                    // Mencegah crash jika ada item undefined di array data
                    if (!profesi) return null;

                    return (
                      <CardProfesi
                        key={profesi.id || index}
                        profesi={profesi}
                        borderColor={group.cardBorderColor}
                        bgColor={group.cardBgColor}
                        shadowGlow={group.cardGlow}
                      />
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
