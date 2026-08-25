import Navbar from "../src/components/common/Navbar.jsx";
import Footer from "../src/components/common/Footer.jsx";
import "./globals.css";

export const metadata = {
  title: "IT-TechMap — Peta Profesi & Tools IT",
  description:
    "IT-TechMap adalah portal panduan profesi IT: temukan jalur karier, tugas harian, serta software & hardware yang dipakai tiap profesi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="relative min-h-screen overflow-x-hidden bg-base-950 text-slate-200 antialiased">
        {/* Ambient neon glow layer */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-overlay opacity-40" />
        <div className="pointer-events-none fixed -top-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none fixed top-1/3 right-0 -z-10 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />

        <Navbar />

        <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}