export const categoryGroups = [
  {
    id: "support-group",
    title: "IT Support & Service Management",
    cardBorderColor: "border-sky-400/50 hover:border-sky-300",
    cardBgColor: "bg-slate-900/60",
    cardGlow: "shadow-[0_0_15px_rgba(56,189,248,0.15)]",
    professions: [
      {
        id: "it-support",
        name: "IT Support",
        iconName: "Headphones",
        summary: "Menangani operasional harian IT, troubleshooting hardware/software, dan memberikan bantuan teknis langsung ke end-user.",
        tasks: [
          "Melakukan perbaikan dan perawatan berkala perangkat PC/Laptop perusahaan.",
          "Membantu instalasi OS, aplikasi kerja, serta konfigurasi printer & jaringan.",
          "Memberikan respon cepat dan troubleshooting saat end-user mengalami kendala IT.",
          "Mengelola inventaris aset perangkat IT perusahaan."
        ],
        levels: ["Junior IT Support", "IT Support Specialist", "Senior IT Support Lead"],
        software: [
          { name: "AnyDesk", purpose: "Remote desktop bantuan jarak jauh" },
          { name: "TeamViewer", purpose: "Remote control & transfer berkas cepat" },
          { name: "Active Directory", purpose: "Manajemen akun pengguna & hak akses domain" },
          { name: "Ventoy / Rufus", purpose: "Pembuat USB bootable installer OS" },
          { name: "CrystalDiskInfo", purpose: "Analisis kesehatan media penyimpanan HDD/SSD" }
        ],
        hardware: [
          { name: "Multimeter Digital", purpose: "Ukur tegangan power supply & kontinuitas kabel" },
          { name: "LAN Cable Tester", purpose: "Penguji urutan pin dan fisik kabel UTP RJ45" },
          { name: "Crimping Tool", purpose: "Tang pres konektor RJ45/RJ11 ke kabel LAN" },
          { name: "Precision Screwdriver", purpose: "Set obeng presisi pembongkaran laptop/PC" },
          { name: "Flash Drive / SSD", purpose: "Penyimpanan portable installer OS & utility tools" }
        ]
      },
      {
        id: "helpdesk",
        name: "Helpdesk",
        iconName: "HelpCircle",
        summary: "Garis depan penerima laporan masalah teknis dari pengguna, melakukan pencatatan tiket, serta memberikan solusi tingkat dasar.",
        tasks: [
          "Menerima dan mencatat semua keluhan atau permintaan layanan dari pengguna via telepon/tiket.",
          "Melakukan diagnosa masalah awal (Tier 1 Support).",
          "Eskalasi tiket masalah yang kompleks ke tim spesialis (L2/L3 Support).",
          "Membuat laporan insiden dan dokumentasi FAQ solusi dasar."
        ],
        levels: ["Helpdesk Agent L1", "Helpdesk Specialist L2", "Helpdesk Supervisor"],
        software: [
          { name: "Zendesk", purpose: "Platform ticketing dan manajemen customer support" },
          { name: "Freshdesk", purpose: "Sistem penanganan tiket insiden internal" },
          { name: "Jira Service Management", purpose: "Manajemen alur tiket insiden skala enterprise" },
          { name: "Microsoft 365 Admin", purpose: "Manajemen lisensi email & identitas cloud" }
        ],
        hardware: [
          { name: "Headset Noise-Canceling", purpose: "Komunikasi jernih saat melayani panggilan user" },
          { name: "Dual-Monitor Station", purpose: "Monitoring tiket & sistem simultaneously" },
          { name: "VoIP Phone", purpose: "Telepon berbasis jaringan untuk komunikasi internal" }
        ]
      },
      {
        id: "desktop-support",
        name: "Desktop Support",
        iconName: "Monitor",
        summary: "Spesialis insiden fisik yang menangani pemeliharaan, instalasi, dan perbaikan perangkat kerja komputer/laptop pengguna.",
        tasks: [
          "Melakukan deployment dan setup unit komputer kerja baru bagi karyawan.",
          "Mengganti komponen hardware PC/Laptop yang rusak (RAM, SSD, Mainboard).",
          "Konfigurasi data backup dan migrasi OS pengguna.",
          "Penanganan insiden teknis di lokasi kerja pengguna (On-Site Support)."
        ],
        levels: ["Desktop Support Technician", "Desktop Support Engineer", "Desktop Infrastructure Lead"],
        software: [
          { name: "Microsoft RDP", purpose: "Akses remote desktop ke komputer target" },
          { name: "GLPI", purpose: "Sistem manajemen aset IT dan ticketing open-source" },
          { name: "Rufus", purpose: "Utility pembuatan bootable media drive" },
          { name: "Hiren's BootCD PE", purpose: "Emergency ISO untuk recovery data & repair OS" }
        ],
        hardware: [
          { name: "External SSD Portable", purpose: "Media transfer data cadangan kecepatan tinggi" },
          { name: "Thermal Paste Kit", purpose: "Perawatan pendinginan prosesor CPU/GPU" },
          { name: "Obeng Multi-Tool", purpose: "Peralatan pembongkaran unit hardware desktop" },
          { name: "RAM & SSD Tester", purpose: "Alat pengujian modul memori & kesehatan disk" }
        ]
      },
      {
        id: "it-service-desk",
        name: "IT Service Desk",
        iconName: "Server",
        summary: "Pusat kontak tunggal (SPOC) yang mengelola alur permintaan layanan IT, manajemen insiden, dan integrasi operasional bisnis.",
        tasks: [
          "Menjelaskan dan mengelola ITIL Service Lifecycle di lingkungan perusahaan.",
          "Memastikan Kesepakatan Tingkat Layanan (SLA) penanganan masalah terpenuhi.",
          "Mengkoordinasikan respon tim teknis saat terjadi downtime/gangguan sistem besar.",
          "Evaluasi berkas kepuasan pengguna terhadap layanan IT."
        ],
        levels: ["Service Desk Analyst", "Service Desk Coordinator", "IT Service Desk Manager"],
        software: [
          { name: "Jira Service Management", purpose: "Integrasi manajemen layanan ITIL enterprise" },
          { name: "GLPI", purpose: "Manajemen inventaris aset dan tiket pengaduan" },
          { name: "ServiceNow", purpose: "Platform alur kerja digital dan otomatisasi IT" },
          { name: "Confluence", purpose: "Pusat dokumentasi basis pengetahuan (Knowledge Base)" }
        ],
        hardware: [
          { name: "Workstation Computer", purpose: "Komputer performa tinggi untuk manajemen sistem" },
          { name: "VoIP Gateway System", purpose: "Routing jaringan telepon call center" },
          { name: "Barcode Asset Scanner", purpose: "Pemindai fisik label inventaris aset IT" }
        ]
      }
    ]
  }
];
