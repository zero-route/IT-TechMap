export const categoryGroups = [
  // BARIS 1: Support & Service Desk (5 Profesi - Aksen Biru)
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
      },
      {
        id: "technical-support",
        name: "Technical Support",
        iconName: "Wrench",
        summary: "Memberikan bantuan teknis tingkat lanjut untuk masalah sistem, perangkat lunak kompleks, dan infrastruktur IT pengguna.",
        tasks: [
          "Melakukan diagnosa mendalam untuk masalah perangkat lunak dan hardware.",
          "Menyediakan eskalasi dukungan teknis tingkat menengah (Tier 2/3).",
          "Konfigurasi dan perawatan perangkat periferal sistem perusahaan."
        ],
        levels: ["Technical Support Tier 2", "Technical Support Specialist", "Support Team Lead"],
        software: [
          { name: "TeamViewer", purpose: "Remote akses sistem untuk perbaikan tingkat lanjut" },
          { name: "Wireshark", purpose: "Inspeksi dasar lalu lintas jaringan" },
          { name: "Sysinternals Suite", purpose: "Utility troubleshooting sistem Windows" }
        ],
        hardware: [
          { name: "Multimeter Digital", purpose: "Pengukuran arus dan tegangan perangkat" },
          { name: "POST Diagnostics Card", purpose: "Mendeteksi kesalahan hardware motherboard" },
          { name: "Kabel Diagnostic", purpose: "Konektor universal pengujian hardware" }
        ]
      }
    ]
  },

  // BARIS 2: System & Server Administration (5 Profesi - Aksen Orange)
  {
    id: "sysadmin-group",
    title: "System & Server Administration",
    cardBorderColor: "border-orange-500/50 hover:border-orange-400",
    cardBgColor: "bg-slate-900/60",
    cardGlow: "shadow-[0_0_15px_rgba(249,115,22,0.15)]",
    professions: [
      {
        id: "system-administrator",
        name: "System Administrator",
        iconName: "Server",
        summary: "Mengelola, mengonfigurasi, dan memelihara seluruh infrastruktur server serta ketersediaan sistem operasi perusahaan.",
        tasks: [
          "Pengelolaan dan instalasi OS server (Linux/Windows Server).",
          "Otomasi pemeliharaan rutin dan manajemen cadangan data (backup).",
          "Memastikan uptime server dan keamanan sistem dari kerentanan."
        ],
        levels: ["Junior SysAdmin", "System Administrator", "Senior SysAdmin / Infrastructure Lead"],
        software: [
          { name: "Ansible", purpose: "Otomasi konfigurasi server secara terpusat" },
          { name: "Proxmox VE / ESXi", purpose: "Platform virtualisasi server (Hypervisor)" },
          { name: "Nginx / Apache", purpose: "Web server dan reverse proxy" }
        ],
        hardware: [
          { name: "Server Rack Mount", purpose: "Perangkat keras unit komputasi server enterprise" },
          { name: "KVM Switch", purpose: "Pengontrol fisik multi-server dengan satu monitor/keyboard" },
          { name: "UPS Smart", purpose: "Cadangan daya listrik darurat untuk rack server" }
        ]
      },
      {
        id: "windows-administrator",
        name: "Windows Administrator",
        iconName: "Monitor",
        summary: "Spesialis dalam merancang, mengonfigurasi, dan mengelola ekosistem server berbasis Microsoft Windows Server & Active Directory.",
        tasks: [
          "Manajemen Active Directory Domain Services (AD DS) & Group Policy (GPO).",
          "Pengelolaan Microsoft Exchange Server, Teams, dan IIS Web Server.",
          "Penerapan patch keamanan sistem operasi Windows Server."
        ],
        levels: ["Windows Server Admin", "Senior Windows Engineer", "Active Directory Specialist"],
        software: [
          { name: "Active Directory (ADUC)", purpose: "Manajemen identitas dan grup domain Windows" },
          { name: "PowerShell", purpose: "Bahasa skrip otomasi tugas administratif Windows" },
          { name: "WSUS", purpose: "Distribusi patch pembaruan Windows Server" }
        ],
        hardware: [
          { name: "Enterprise Server Unit", purpose: "Perangkat server khusus untuk Windows Domain Controller" },
          { name: "Hardware Security Module", purpose: "Perlindungan kunci enkripsi digital server" },
          { name: "Storage NAS/SAN", purpose: "Penyimpanan data domain terpusat" }
        ]
      },
      {
        id: "linux-administrator",
        name: "Linux Administrator",
        iconName: "Terminal",
        summary: "Bertanggung jawab atas pengelolaan, keamanan, dan optimasi performa server berbasis distro Linux (Ubuntu, RHEL, Rocky, Debian).",
        tasks: [
          "Manajemen pengguna, hak akses file, dan konfigurasi kernel Linux.",
          "Penulisan skrip otomasi menggunakan Shell/Bash scripting.",
          "Pemantauan log sistem dan optimasi penggunaan resource server."
        ],
        levels: ["Junior Linux Admin", "Linux System Engineer", "Senior Linux System Architect"],
        software: [
          { name: "OpenSSH", purpose: "Akses remote CLI aman ke server Linux" },
          { name: "Bash Scripting", purpose: "Otomasi skrip tugas administratif harian" },
          { name: "Systemd / Journald", purpose: "Manajemen servis dan logging sistem Linux" }
        ],
        hardware: [
          { name: "Serial Console Cable", purpose: "Koneksi langsung ke port console server Linux" },
          { name: "High-RAM Server", purpose: "Server fisik dengan kapasitas RAM tinggi untuk layanan Linux" },
          { name: "Serial Console Server", purpose: "Out-of-band remote access banyak server" }
        ]
      },
      {
        id: "database-administrator",
        name: "Database Administrator",
        iconName: "Database",
        summary: "Mengelola kinerja, integritas data, keamanan, serta skema kueri dari sistem manajemen basis data (DBMS).",
        tasks: [
          "Merancang dan mengoptimalkan kueri SQL/NoSQL serta indeks data.",
          "Melakukan prosedur backup, pemulihan bencana (disaster recovery), dan replikasi data.",
          "Mengatur hak akses pengguna dan enkripsi data sensitif basis data."
        ],
        levels: ["Junior DBA", "Database Administrator", "Senior Database Architect"],
        software: [
          { name: "DBeaver / TablePlus", purpose: "Client universal pengelolaan multi-database" },
          { name: "PostgreSQL / MySQL", purpose: "RDBMS relational database engine" },
          { name: "MongoDB", purpose: "NoSQL document database engine" }
        ],
        hardware: [
          { name: "NVMe Enterprise Storage", purpose: "Media penyimpanan i/o tinggi untuk kueri cepat" },
          { name: "High-Performance Server", purpose: "Server khusus pemrosesan transaksi basis data" },
          { name: "Hardware Backup Appliance", purpose: "Perangkat keras khusus penyimpanan cadangan data" }
        ]
      },
      {
        id: "server-administrator",
        name: "Server Administrator",
        iconName: "Cpu",
        summary: "Berfokus pada pemeliharaan fisik hardware server, alokasi resource, temperatur pusat data (data center), dan operasional tingkat rendah.",
        tasks: [
          "Pemasangan fisik unit server ke rack data center dan manajemen kabel.",
          "Monitoring suhu, catu daya, dan kesehatan komponen internal server (RAID, RAM, CPU).",
          "Pengelolaan ketersediaan jaringan fisik dan port switch server."
        ],
        levels: ["Data Center Technician", "Server Administrator", "Infrastructure Operations Lead"],
        software: [
          { name: "Zabbix / PRTG", purpose: "Monitoring performa server & lalu lintas jaringan" },
          { name: "iDRAC / iLO", purpose: "Out-of-band management hardware server Dell/HP" },
          { name: "VMware ESXi", purpose: "Virtualisasi resource hardware server" }
        ],
        hardware: [
          { name: "RAID Controller Card", purpose: "Pengelola redundansi & keamanan disk server" },
          { name: "Fiber Optic Cable", purpose: "Kabel transmisi data antar server kecepatan tinggi" },
          { name: "PDU Smart", purpose: "Pengatur dan pemantau distribusi daya listrik rack server" }
        ]
      }
    ]
  }
];
