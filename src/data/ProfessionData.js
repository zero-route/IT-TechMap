 export const categoryGroups = [
  // BARIS 1: IT Support & Service Desk (5 Profesi - Aksen Biru)
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
  },

  // BARIS 3: Network & Infrastructure Engineering (5 Profesi - Aksen Kuning)
  {
    id: "network-group",
    title: "Network & Infrastructure Engineering",
    cardBorderColor: "border-amber-400/50 hover:border-amber-300",
    cardBgColor: "bg-slate-900/60",
    cardGlow: "shadow-[0_0_15px_rgba(251,191,36,0.15)]",
    professions: [
      {
        id: "network-engineer",
        name: "Network Engineer",
        iconName: "Network",
        summary: "Merancang, mengonfigurasi, dan mengoptimalkan arsitektur jaringan komputer (LAN, WAN, Data Center) serta protokol routing enterprise.",
        tasks: [
          "Merancang topologi jaringan enterprise dan arsitektur routing (OSPF, BGP).",
          "Konfigurasi router, switch layer 2/3, firewall, dan akses poin Wi-Fi.",
          "Analisis throughput, latency, dan packet loss lalu lintas data.",
          "Menyusun prosedur Disaster Recovery Plan untuk infrastruktur jaringan."
        ],
        levels: ["Junior Network Engineer", "Network Engineer (CCNA/CCNP)", "Principal Network Architect"],
        software: [
          { name: "Wireshark", purpose: "Analisis mendalam protokol dan lalu lintas paket jaringan" },
          { name: "GNS3 / EVE-NG", purpose: "Simulator & emulasi topologi jaringan kompleks" },
          { name: "Cisco Packet Tracer", purpose: "Simulator konfigurasi perangkat Cisco" },
          { name: "MikroTik Winbox", purpose: "Utility GUI manajemen RouterOS MikroTik" },
          { name: "Zabbix / PRTG", purpose: "Monitoring performa & uptime interface jaringan" }
        ],
        hardware: [
          { name: "Console Cable (USB to RJ45)", purpose: "Kabel akses langsung CLI ke router/switch" },
          { name: "Optical Power Meter (OPM)", purpose: "Mengukur intensitas daya sinyal serat optik" },
          { name: "Fiber Fusion Splicer", purpose: "Alat presisi penyambung inti kabel serat optik" },
          { name: "Tone Generator & Probe", purpose: "Pelacak alur & lokasi kabel di patch panel/dinding" }
        ]
      },
      {
        id: "network-administrator",
        name: "Network Administrator",
        iconName: "Globe",
        summary: "Mengelola operasional jaringan harian, menjaga alokasi alamat IP, dan memastikan akses konektivitas pengguna berjalan lancar.",
        tasks: [
          "Mengatur segmen jaringan (VLAN, Subnetting) dan alokasi IP Address (DHCP).",
          "Pemantauan harian bandwidth dan performa koneksi internet kantor.",
          "Pembaruan firmware perangkat jaringan dan manajemen hak akses WiFi.",
          "Troubleshooting kendala konektivitas tingkat pengguna."
        ],
        levels: ["Network Admin Specialist", "Senior Network Administrator", "Network Operations Lead"],
        software: [
          { name: "SolarWinds IPAM", purpose: "Manajemen dan alokasi alokasi IP address" },
          { name: "PuTTY / MobaXterm", purpose: "Terminal SSH/Serial client untuk remote konfigurasi" },
          { name: "PRTG Network Monitor", purpose: "Visualisasi penggunaan bandwidth jaringan real-time" }
        ],
        hardware: [
          { name: "LAN Cable Tester", purpose: "Penguji kontinuitas dan urutan kabel UTP" },
          { name: "Punch Down Tool", purpose: "Menancapkan kabel UTP ke keystone jack/patch panel" },
          { name: "Console Cable", purpose: "Akses konsol lokal ke switch/router" }
        ]
      },
      {
        id: "system-engineer",
        name: "System Engineer",
        iconName: "Cpu",
        summary: "Menjembatani hardware dan software dengan merancang sistem komputasi berintegrasi tinggi, virtualisasi, dan arsitektur server.",
        tasks: [
          "Merancang arsitektur sistem komputasi enterprise dan kluster virtualisasi.",
          "Mengintegrasikan platform hardware server dengan sistem operasi & aplikasi.",
          "Optimasi beban kerja sistem (load balancing) dan kapasitas resource.",
          "Menyusun standar operasional sistem dan otomasi deployment."
        ],
        levels: ["System Engineer", "Senior System Engineer", "Principal Systems Architect"],
        software: [
          { name: "VMware vSphere / ESXi", purpose: "Platform virtualisasi komputasi enterprise" },
          { name: "Terraform", purpose: "Penyediaan infrastruktur terprogram (IaC)" },
          { name: "Ansible", purpose: "Otomasi konfigurasi sistem terdistribusi" }
        ],
        hardware: [
          { name: "Bladed Server Chassis", purpose: "Unit komputasi server modular performa tinggi" },
          { name: "SAN Storage Array", purpose: "Penyimpanan data area jaringan kecepatan tinggi" },
          { name: "Hardware Security Keys", purpose: "Kunci otentikasi fisik keamanan infrastruktur" }
        ]
      },
      {
        id: "infrastructure-engineer",
        name: "Infrastructure Engineer",
        iconName: "Layers",
        summary: "Fokus pada pondasi fisik & virtual pusat data (Data Center), penyedia daya, pendinginan, storage terpusat, dan cloud base.",
        tasks: [
          "Merancang ruang pusat data (Data Center layout, cooling, PDU power).",
          "Mengelola jaringan penyimpanan terpusat (SAN/NAS storage array).",
          "Memastikan ketersediaan infrastruktur jaringan fisik dan redundansi jaringan.",
          "Integrasi infrastruktur on-premise ke platform hybrid-cloud."
        ],
        levels: ["Infrastructure Engineer", "Senior Infrastructure Specialist", "Head of Infrastructure"],
        software: [
          { name: "OpenStack", purpose: "Platform pengelola cloud infrastructure private" },
          { name: "Zabbix Infrastructure Monitor", purpose: "Pemantauan kondisi fisik dan virtual server" },
          { name: "AWS / Azure Console", purpose: "Manajemen infrastruktur hybrid cloud" }
        ],
        hardware: [
          { name: "Enterprise PDU & UPS", purpose: "Pengatur & penyedia cadangan daya rack server" },
          { name: "NAS / SAN Appliance", purpose: "Storage server kapasitas terabyte-petabyte" },
          { name: "KVM Console Server", purpose: "Centralized out-of-band management" }
        ]
      },
      {
        id: "security-engineer",
        name: "Security Engineer",
        iconName: "Shield",
        summary: "Membangun pertahanan, mengonfigurasi sistem firewall/IDS/IPS, dan menerapkan kontrol keamanan untuk melindungi infrastruktur dari ancaman siber.",
        tasks: [
          "Konfigurasi dan pemeliharaan Next-Generation Firewall (NGFW) & VPN.",
          "Menerapkan sistem deteksi dan pencegahan intrusi (IDS/IPS).",
          "Melakukan audit konfigurasi keamanan perangkat jaringan dan server.",
          "Segmentasi jaringan keamanan dan kebijakan Zero Trust Architecture."
        ],
        levels: ["Security Engineer", "Senior Security Engineer", "Lead Infrastructure Security"],
        software: [
          { name: "Palo Alto / Fortinet Manager", purpose: "Manajemen aturan kebijakan NGFW enterprise" },
          { name: "Snort / Suricata", purpose: "Sistem pendeteksi & pencegah intrusi jaringan (IDS/IPS)" },
          { name: "Wireshark", purpose: "Inspeksi & analisis anomali paket data" }
        ],
        hardware: [
          { name: "Hardware Firewall Appliance", purpose: "Perangkat keras penyaring paket data jaringan" },
          { name: "Hardware Security Module (HSM)", purpose: "Enkripsi fisik kunci kriptografi" },
          { name: "YubiKey Security Key", purpose: "Hardware otentikasi 2FA administrator" }
        ]
      }
    ]
  },

  // BARIS 4: Cyber Security & Threat Intelligence (5 Profesi - Aksen Merah)
  {
    id: "cybersecurity-group",
    title: "Cyber Security & Threat Intelligence",
    cardBorderColor: "border-rose-500/50 hover:border-rose-400",
    cardBgColor: "bg-slate-900/60",
    cardGlow: "shadow-[0_0_15px_rgba(244,63,94,0.15)]",
    professions: [
      {
        id: "cyber-security-analyst",
        name: "Cyber Security Analyst",
        iconName: "ShieldAlert",
        summary: "Menganalisis potensi ancaman siber, memantau indikator kompromi (IoC), dan merespon insiden keamanan digital perusahaan.",
        tasks: [
          "Memantau log keamanan dan aktivitas mencurigakan secara berkesinambungan.",
          "Melakukan analisis awal pada ancaman malwares, phishing, dan serangan siber.",
          "Menyusun rekomendasi perbaikan celah keamanan untuk tim IT.",
          "Menangani proses respon insiden siber dasar (Incident Response)."
        ],
        levels: ["Junior Cyber Security Analyst", "Cyber Security Analyst (L2)", "Lead Security Analyst"],
        software: [
          { name: "Splunk / Elastic SIEM", purpose: "Pengumpul & penganalisis log keamanan terpusat" },
          { name: "VirusTotal / AlienVault", purpose: "Platform riset indikator kompromi (IoC)" },
          { name: "Wireshark", purpose: "Analisis mendalam paket data lalu lintas mencurigakan" },
          { name: "Nmap", purpose: "Scanner port dan pemeta layanan sistem" }
        ],
        hardware: [
          { name: "Faraday Bag", purpose: "Tas isolasi sinyal radio fisik untuk bukti digital barang bukti" },
          { name: "YubiKey Hardware Key", purpose: "Otentikasi aman dua faktor (2FA) akses sistem" },
          { name: "High-Performance Workstation", purpose: "Komputer analisis dekripsi & parsing log" }
        ]
      },
      {
        id: "security-analyst",
        name: "Security Analyst",
        iconName: "Lock",
        summary: "Menguji efektivitas kebijakan keamanan, menilai risiko (Risk Assessment), serta memastikan kepatuhan standar industri siber.",
        tasks: [
          "Melakukan audit kepatuhan ISO 27001 dan regulasi perlindungan data.",
          "Menilai dampak risiko keamanan pada sistem atau aplikasi baru.",
          "Mengembangkan kebijakan keamanan informasi internal perusahaan.",
          "Menyelenggarakan pelatihan kesadaran keamanan siber (Security Awareness) karyawan."
        ],
        levels: ["Security Risk Analyst", "Information Security Analyst", "Compliance & Risk Lead"],
        software: [
          { name: "Nessus / Qualys", purpose: "Vulnerability scanner penemu celah sistem" },
          { name: "OpenVAS", purpose: "Scanner celah keamanan open-source" },
          { name: "Microsoft Purview", purpose: "Platform tata kelola dan perlindungan data" }
        ],
        hardware: [
          { name: "Hardware Security Module (HSM)", purpose: "Perangkat pemroses kriptografi fisik" },
          { name: "Encrypted Flash Drive", purpose: "Penyimpanan dokumen audit berenkripsi PIN fisik" }
        ]
      },
      {
        id: "soc-analyst",
        name: "SOC Analyst",
        iconName: "Eye",
        summary: "Operator baris depan di Security Operations Center yang siaga memantau sinyal alarm SIEM, mendeteksi, dan menahan serangan secara real-time.",
        tasks: [
          "Monitoring dashboard SIEM 24/7 untuk mendeteksi anomali keamanan.",
          "Memilah sinyal alarm (True Positive vs False Positive).",
          "Isolasi perangkat yang terinfeksi ransomware/malware dari jaringan.",
          "Eskalasi insiden kritis ke tim Threat Hunting / Digital Forensics."
        ],
        levels: ["SOC Analyst Tier 1", "SOC Analyst Tier 2", "SOC Incident Responder Tier 3 / SOC Manager"],
        software: [
          { name: "Splunk Enterprise Security", purpose: "SIEM monitoring alarm keamanan real-time" },
          { name: "CrowdStrike / Defender EDR", purpose: "Endpoint Detection and Response" },
          { name: "TheHive / MISP", purpose: "Platform manajemen insiden siber & Threat Intel" }
        ],
        hardware: [
          { name: "Multi-Monitor SOC Console", purpose: "Setup layar ganda untuk monitoring dashboard SIEM" },
          { name: "Dedicated Incident Responder Laptop", purpose: "Laptop terisolasi khusus investigasi malware" }
        ]
      },
      {
        id: "penetration-tester",
        name: "Penetration Tester",
        iconName: "Terminal",
        summary: "Spesialis Red Team yang bertugas menembus dan menguji pertahanan sistem/aplikasi secara legal melalui simulasi serangan nyata.",
        tasks: [
          "Melakukan uji penetrasi (Pentest) pada aplikasi web, mobile, dan jaringan.",
          "Eksploitasi celah keamanan (Vulnerability Exploitation) untuk membuktikan risiko.",
          "Menyusun laporan teknis temuan celah beserta rekomendasi remediasi.",
          "Uji coba rekayasa sosial (Social Engineering / Phishing simulation)."
        ],
        levels: ["Junior Pentester (CPENT/OSCP)", "Senior Penetration Tester", "Red Team Lead"],
        software: [
          { name: "Burp Suite Professional", purpose: "Web application security testing & HTTP proxy" },
          { name: "Metasploit Framework", purpose: "Platform eksploitasi celah keamanan" },
          { name: "Kali Linux / Parrot OS", purpose: "OS distro khusus penetration testing" },
          { name: "SQLmap", purpose: "Tool otomatisasi eksploitasi SQL Injection" }
        ],
        hardware: [
          { name: "WiFi Pineapple", purpose: "Hardware audit Wi-Fi & simulasi rogue AP" },
          { name: "Rubber Ducky / MalDuino", purpose: "USB keystroke injection pengetes keamanan physical" },
          { name: "Proxmark3", purpose: "Alat analisis, kloning, & emulasi kartu RFID/NFC" }
        ]
      },
      {
        id: "ethical-hacker",
        name: "Ethical Hacker",
        iconName: "Skull",
        summary: "Hacker berizin resmi (White Hat) yang membongkar kerentanan arsitektur siber secara menyeluruh untuk membantu memperkuat benteng sistem.",
        tasks: [
          "Melakukan riset kerentanan (Vulnerability Research) zero-day.",
          "Simulasi peretasan mendalam pada infrastruktur kritis enterprise.",
          "Membantu Bug Bounty program dan mereview kode aplikasi (Code Review).",
          "Memberikan konsultasi mitigasi pertahanan sebelum diretas peretas jahat (Black Hat)."
        ],
        levels: ["Certified Ethical Hacker (CEH)", "Offensive Security Specialist", "Principal Security Researcher"],
        software: [
          { name: "Ghidra / IDA Pro", purpose: "Reverse engineering & decompiler biner malware" },
          { name: "Aircrack-ng", purpose: "Suite penguji & cracking keamanan jaringan nirkabel" },
          { name: "Hashcat / John the Ripper", purpose: "Tool cracking hash password berkecepatan tinggi" }
        ],
        hardware: [
          { name: "Flipper Zero", purpose: "Multi-tool portabel penguji protokol RF, RFID, Sub-1GHz, & BadUSB" },
          { name: "LAN Turtle", purpose: "Adapter Ethernet covert access untuk pivoting pentest" },
          { name: "High-GPU Cracking Rig", purpose: "Server GPU khusus untuk audit kekuatan hash password" }
        ]
      }
    ]
  }
];
