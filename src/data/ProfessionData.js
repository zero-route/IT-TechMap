// src/data/ProfessionData.js
// Single Source of Truth untuk seluruh data profesi IT yang ditampilkan di IT-TechMap.

const ProfessionData = [
  {
    id: "it-support",
    title: "IT Support",
    category: "Operasional & Layanan",
    image: "https://placehold.co/800x600/161221/3b82f6?text=IT+Support&font=jetbrains-mono",
    overview:
      "Garda terdepan dunia IT yang menangani operasional harian, troubleshoot hardware/software, manajemen inventaris, dan memberikan bantuan teknis langsung kepada end-user.",
    tasks: [
      "Menangani laporan gangguan komputer, printer, dan jaringan dari end-user.",
      "Melakukan instalasi ulang sistem operasi dan aplikasi kerja.",
      "Mengelola akun pengguna, hak akses, dan reset password di Active Directory.",
      "Melakukan pemeliharaan rutin (maintenance) perangkat keras kantor.",
    ],
    examples: [
      "Meremote laptop karyawan yang tidak bisa konek VPN lalu memperbaikinya lewat AnyDesk.",
      "Membuat bootable USB untuk instalasi ulang Windows di 10 unit PC baru.",
      "Membuka tiket di sistem helpdesk dan menutup tiket setelah masalah user selesai.",
    ],
    tools: {
      software: [
        { name: "AnyDesk / TeamViewer", purpose: "Remote control desktop cepat untuk bantuan jarak jauh." },
        { name: "Jira Service Management", purpose: "Sistem penanganan tiket insiden dan permintaan layanan." },
        { name: "Active Directory Users and Computers (ADUC)", purpose: "Manajemen akun, grup, dan hak akses domain Windows." },
        { name: "Ventoy / Rufus", purpose: "Membuat bootable USB drive untuk instalasi OS." },
        { name: "CrystalDiskInfo", purpose: "Analisis kesehatan media penyimpanan (HDD/SSD)." },
      ],
      hardware: [
        { name: "Obeng Presisi Multi-tool", purpose: "Membongkar & merakit unit laptop/PC." },
        { name: "Tang Crimping", purpose: "Memasang konektor RJ45 pada kabel jaringan UTP." },
        { name: "Konektor RJ45", purpose: "Terminasi ujung kabel LAN untuk koneksi perangkat." },
        { name: "LAN Cable Tester", purpose: "Menguji urutan pin & konektivitas kabel jaringan." },
        { name: "USB Flash Drive / SSD Portable", purpose: "Media instalasi OS dan tools utility darurat." },
      ],
    },
  },
  {
    id: "network-engineer",
    title: "Network Engineer",
    category: "Infrastruktur",
    image: "https://placehold.co/800x600/161221/6366f1?text=Network+Engineer&font=jetbrains-mono",
    overview:
      "Spesialis yang merancang, mengonfigurasi, menguji, dan memelihara infrastruktur jaringan komputer mulai dari skala LAN, WAN, hingga Data Center.",
    tasks: [
      "Merancang topologi jaringan untuk kantor cabang baru.",
      "Mengonfigurasi router, switch, dan firewall agar traffic berjalan optimal.",
      "Memonitor performa jaringan dan menindaklanjuti alert downtime.",
      "Melakukan troubleshooting koneksi fiber optic hingga ke titik putus kabel.",
    ],
    examples: [
      "Meng-capture paket data dengan Wireshark untuk mendiagnosis packet loss.",
      "Mensimulasikan topologi baru di Cisco Packet Tracer sebelum deploy ke produksi.",
      "Menyambung kabel fiber optic yang putus menggunakan fusion splicer di lokasi client.",
    ],
    tools: {
      software: [
        { name: "Wireshark", purpose: "Analisis protokol jaringan mendalam secara real-time." },
        { name: "Cisco Packet Tracer", purpose: "Simulasi topologi jaringan interaktif." },
        { name: "GNS3", purpose: "Emulator jaringan tingkat lanjut untuk image OS router/switch asli." },
        { name: "MikroTik Winbox", purpose: "GUI manajemen perangkat MikroTik RouterOS." },
        { name: "Zabbix / PRTG Network Monitor", purpose: "Monitoring performa server, traffic, dan uptime jaringan." },
      ],
      hardware: [
        { name: "Console Cable (USB to RJ45)", purpose: "Akses CLI langsung ke switch/router enterprise." },
        { name: "OTDR", purpose: "Mengukur panjang, redaman, dan titik putus kabel fiber optic." },
        { name: "Fusion Splicer", purpose: "Menyambung inti kaca kabel fiber optic dengan presisi tinggi." },
        { name: "Optical Power Meter (OPM)", purpose: "Mengukur daya sinyal cahaya pada jalur fiber optic." },
        { name: "Punch Down Tool", purpose: "Menancapkan kawat UTP ke keystone jack / patch panel." },
      ],
    },
  },
  {
    id: "system-administrator",
    title: "System Administrator",
    category: "Infrastruktur & Cloud",
    image: "https://placehold.co/800x600/161221/22d3ee?text=Sysadmin&font=jetbrains-mono",
    overview:
      "Bertanggung jawab atas pengelolaan server Linux/Windows, storage, arsitektur cloud, otomasi konfigurasi, hingga ketersediaan sistem 24/7.",
    tasks: [
      "Melakukan provisioning dan hardening server baru.",
      "Mengelola virtual machine dan resource cloud (compute, storage, VPC).",
      "Menulis script otomasi untuk deployment dan backup rutin.",
      "Memantau kapasitas server serta merencanakan scaling infrastruktur.",
    ],
    examples: [
      "Menulis playbook Ansible untuk mengonfigurasi 20 server sekaligus secara otomatis.",
      "Menyiapkan reverse proxy Nginx dan load balancer HAProxy untuk aplikasi high-traffic.",
      "Provisioning infrastruktur AWS memakai Terraform sebagai Infrastructure as Code.",
    ],
    tools: {
      software: [
        { name: "Ubuntu Server / Rocky Linux", purpose: "OS Linux distro server standar industri." },
        { name: "Proxmox VE / VMware ESXi", purpose: "Hypervisor virtualisasi server fisik menjadi VM." },
        { name: "Ansible", purpose: "Otomasi konfigurasi server dan deployment aplikasi." },
        { name: "Terraform", purpose: "Infrastructure as Code untuk penyediaan resource cloud." },
        { name: "Nginx / HAProxy", purpose: "Web server, reverse proxy, dan load balancer." },
      ],
      hardware: [
        { name: "KVM Console Switch", purpose: "Mengontrol banyak server dari satu monitor & keyboard." },
        { name: "UPS & Smart PDU", purpose: "Cadangan daya dan distribusi daya pintar di rack server." },
        { name: "Hardware Security Module (HSM)", purpose: "Pemroses kriptografi fisik untuk kunci digital server." },
        { name: "Serial Console Server", purpose: "Akses out-of-band ke banyak server via port serial." },
      ],
    },
  },
  {
    id: "cyber-security-analyst",
    title: "Cyber Security Analyst",
    category: "Keamanan Siber",
    image: "https://placehold.co/800x600/161221/3b82f6?text=Cyber+Security&font=jetbrains-mono",
    overview:
      "Ahli keamanan yang melindungi aset digital perusahaan (Blue Team) sekaligus menguji celah keamanan sistem lewat simulasi serangan nyata (Red Team/Pentest).",
    tasks: [
      "Melakukan vulnerability assessment dan penetration testing berkala.",
      "Menganalisis log keamanan untuk mendeteksi indikasi serangan (SOC monitoring).",
      "Menyusun laporan temuan celah keamanan beserta rekomendasi mitigasi.",
      "Melakukan security awareness training untuk karyawan internal.",
    ],
    examples: [
      "Melakukan scanning port dan service dengan Nmap sebelum audit keamanan.",
      "Meng-exploit celah web application memakai Burp Suite untuk laporan pentest client.",
      "Menganalisis barang bukti digital dari laptop yang terindikasi malware dengan Autopsy.",
    ],
    tools: {
      software: [
        { name: "Metasploit Framework", purpose: "Platform eksploitasi celah keamanan terlengkap." },
        { name: "Burp Suite / OWASP ZAP", purpose: "Web application security scanner & proxy interceptor." },
        { name: "Nmap", purpose: "Scanner port, penemu host, dan identifikasi versi layanan." },
        { name: "Aircrack-ng Suite", purpose: "Menguji keamanan jaringan Wi-Fi (WPA/WPA2 cracking)." },
        { name: "Autopsy / FTK Imager", purpose: "Analisis forensik digital dan pemulihan barang bukti." },
      ],
      hardware: [
        { name: "WiFi Pineapple", purpose: "Audit Wi-Fi & simulasi serangan Man-in-the-Middle." },
        { name: "Flipper Zero", purpose: "Multi-tool portabel untuk pentest RFID, NFC, dan BadUSB." },
        { name: "Proxmark3", purpose: "Analisis, kloning, dan emulasi kartu RFID/NFC." },
        { name: "Faraday Bag", purpose: "Mengisolasi bukti digital dari transmisi sinyal luar." },
      ],
    },
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    category: "Otomasi & Rilis",
    image: "https://placehold.co/800x600/161221/6366f1?text=DevOps&font=jetbrains-mono",
    overview:
      "Menjembatani tim developer dan operasional lewat otomasi pipeline CI/CD, containerization, serta pengawasan performa sistem secara berkelanjutan.",
    tasks: [
      "Membangun dan memelihara pipeline CI/CD untuk proses build-test-deploy.",
      "Mengelola container dan orkestrasi Kubernetes di lingkungan produksi.",
      "Menyiapkan dashboard monitoring dan alerting untuk seluruh layanan.",
      "Melakukan post-mortem insiden untuk meningkatkan reliability sistem.",
    ],
    examples: [
      "Menulis workflow GitHub Actions agar setiap push otomatis dites dan dideploy.",
      "Membungkus aplikasi ke dalam image Docker lalu men-deploy-nya ke cluster Kubernetes.",
      "Memantau latency API secara real-time lewat dashboard Grafana yang terhubung Prometheus.",
    ],
    tools: {
      software: [
        { name: "Docker", purpose: "Platform kontainerisasi aplikasi." },
        { name: "Kubernetes (K8s)", purpose: "Otomasi manajemen, scaling, dan deployment kontainer." },
        { name: "GitHub Actions / Jenkins", purpose: "Automation workflow untuk pipeline CI/CD." },
        { name: "Prometheus & Grafana", purpose: "Pengumpul metrik time-series dan dashboard performa." },
        { name: "ELK Stack", purpose: "Manajemen dan pencarian log terpusat." },
      ],
      hardware: [
        { name: "YubiKey / Hardware Security Key", purpose: "Otentikasi 2FA/FIDO2 ke server produksi & pipeline." },
        { name: "Workstation High-End Multi-Monitor", purpose: "Menjalankan multiple container & cluster emulator lokal." },
      ],
    },
  },
  {
    id: "software-developer",
    title: "Software Developer",
    category: "Pengembangan Perangkat Lunak",
    image: "https://placehold.co/800x600/161221/22d3ee?text=Developer&font=jetbrains-mono",
    overview:
      "Merancang, membangun, dan memelihara aplikasi (frontend, backend, mobile, atau fullstack) dari kebutuhan bisnis menjadi produk perangkat lunak yang berjalan.",
    tasks: [
      "Menerjemahkan kebutuhan fitur dari product manager menjadi kode aplikasi.",
      "Menulis dan memelihara unit test agar kode tetap stabil saat berkembang.",
      "Melakukan code review terhadap kontribusi tim lain.",
      "Mengintegrasikan aplikasi dengan REST API atau database eksternal.",
    ],
    examples: [
      "Membangun fitur checkout pada aplikasi e-commerce menggunakan React dan Node.js.",
      "Menguji endpoint API baru dengan Postman sebelum diserahkan ke tim QA.",
      "Melakukan query dan optimasi database lewat DBeaver saat performa aplikasi melambat.",
    ],
    tools: {
      software: [
        { name: "Visual Studio Code", purpose: "Text editor modular dengan ekosistem ekstensi luas." },
        { name: "Git & GitHub", purpose: "Kontrol versi terdistribusi dan kolaborasi tim." },
        { name: "Postman / Insomnia", purpose: "Pengujian dan dokumentasi REST API / GraphQL." },
        { name: "DBeaver / TablePlus", purpose: "Client database universal untuk SQL & NoSQL." },
        { name: "JetBrains Suite", purpose: "IDE khusus bahasa pemrograman tingkat enterprise." },
      ],
      hardware: [
        { name: "Laptop/Workstation Dev", purpose: "Perangkat utama untuk coding, build, dan menjalankan environment lokal." },
        { name: "Multi-Monitor Setup", purpose: "Menambah ruang kerja untuk kode, dokumentasi, dan debugging paralel." },
        { name: "Mechanical Keyboard", purpose: "Kenyamanan mengetik intensif dalam sesi coding panjang." },
      ],
    },
  },