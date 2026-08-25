# IT-TechMap

Portal panduan profesi IT — jelajahi berbagai profesi IT lengkap dengan tugas harian, contoh pekerjaan nyata, serta software & hardware yang dipakai di lapangan.

Dibangun dengan **Next.js (App Router)** + **Tailwind CSS**, siap deploy ke **Vercel**. Bertema *Dark Neon Cyber-Minimal*.

## 🚀 Menjalankan proyek

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

Build produksi:

```bash
npm run build
npm run start
```

Deploy ke Vercel tinggal `vercel` atau hubungkan repo ke dashboard Vercel — tidak perlu konfigurasi tambahan.

## 📁 Struktur folder

```
app/
  layout.jsx           # Root layout (pengganti index.html): <html>/<body>, Navbar, Footer, metadata
  globals.css           # Tailwind + gaya global
  page.jsx               # Route "/" (Home) — Client Component (pakai useState untuk search)
  profesi/[id]/page.jsx  # Route dinamis "/profesi/:id" (Detail) — Server Component + generateStaticParams
src/
  assets/images/          # Simpan gambar profesi di sini bila ingin mengganti placeholder
  components/
    common/                 # Navbar, Footer, SearchBar, CardProfesi
    detail/                 # DetailHeader, JobDescription, ToolSection, SoftwareList, HardwareList
  data/
    ProfessionData.js       # Single source of truth data profesi
```

> Catatan: di Next.js App Router, tiap folder di `app/` otomatis jadi route — tidak perlu `index.html` atau setup router manual seperti di Vite/CRA. Navigasi antar halaman pakai `next/link`.

## ✏️ Menambah profesi baru

Tambahkan objek baru ke array di `src/data/ProfessionData.js` mengikuti bentuk (shape) data yang sudah ada — `id`, `title`, `category`, `image`, `overview`, `tasks`, `examples`, dan `tools: { software, hardware }`. Karena `generateStaticParams` di `app/profesi/[id]/page.jsx` membaca dari file ini, halaman detail profesi baru otomatis ikut ter-generate saat build.

## 🎨 Catatan desain

- Warna dasar `#09090b`, aksen neon ungu `#a855f7`, dipadukan dengan fuchsia & cyan untuk pembeda kategori.
- Heading penting memakai gaya *duotone*: kata pertama putih lembut, kata berikutnya gradien ungu→fuchsia (`.heading-duotone` + `.word-accent` di `app/globals.css`).
- Kartu & panel memakai gaya glassmorphism (`.glass-panel`).
- Gambar profesi saat ini memakai placeholder (`placehold.co`, sudah didaftarkan di `next.config.js` → `images.remotePatterns`) — ganti dengan file di `src/assets/images/` bila sudah punya aset asli.
