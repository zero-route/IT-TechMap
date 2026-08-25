export const categoryGroups = [
  {
    id: "support-group",
    title: "IT Support & Service Management",
    borderColor: "border-sky-400/40", // Border biru muda
    bgColor: "bg-sky-950/20",
    professions: [
      {
        id: "it-support",
        name: "IT Support",
        iconName: "Headphones",
        summary: "Menangani operasional harian IT, troubleshooting hardware/software, dan memberikan bantuan teknis langsung ke end-user.",
        levels: ["Junior IT Support", "IT Support Specialist", "Senior IT Support Lead"],
        software: ["AnyDesk", "TeamViewer", "Active Directory", "Ventoy", "CrystalDiskInfo"],
        hardware: ["Multimeter Digital", "LAN Cable Tester", "Crimping Tool", "Precision Screwdriver Set", "USB Drive Portable"]
      },
      {
        id: "helpdesk",
        name: "Helpdesk",
        iconName: "HelpCircle",
        summary: "Garis depan penerima laporan masalah teknis dari pengguna, melakukan pencatatan tiket, serta memberikan solusi tingkat dasar.",
        levels: ["Helpdesk Agent L1", "Helpdesk Specialist L2", "Helpdesk Supervisor"],
        software: ["Zendesk", "Freshdesk", "Jira Service Management", "Microsoft 365 Admin"],
        hardware: ["Headset Wireless", "Dual-Monitor Station", "VoIP Phone"]
      },
      {
        id: "desktop-support",
        name: "Desktop Support",
        iconName: "Monitor",
        summary: "Spesialis insiden fisik yang menangani pemeliharaan, instalasi, dan perbaikan perangkat kerja komputer/laptop pengguna.",
        levels: ["Desktop Support Technician", "Desktop Support Engineer", "Desktop Infrastructure Lead"],
        software: ["Microsoft RDP", "GLPI", "Rufus", "Hiren's BootCD PE"],
        hardware: ["External SSD Portable", "Thermal Paste & Cleaning Kit", "Screwdriver Set", "RAM & SSD Tester"]
      },
      {
        id: "it-service-desk",
        name: "IT Service Desk",
        iconName: "Server",
        summary: "Pusat kontak tunggal (SPOC) yang mengelola alur permintaan layanan IT, manajemen insiden, dan integrasi operasional bisnis.",
        levels: ["Service Desk Analyst", "Service Desk Coordinator", "IT Service Desk Manager"],
        software: ["Jira Service Management", "GLPI", "ServiceNow", "Confluence"],
        hardware: ["Workstation Computer", "VoIP Gateway System", "Barcode Asset Scanner"]
      }
    ]
  }
];
