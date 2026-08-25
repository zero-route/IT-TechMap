import "./globals.css";

export const metadata = {
  title: "IT Profesi Map",
  description: "Panduan Komprehensif Seluruh Profesi IT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-[#0b0f17] text-slate-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
