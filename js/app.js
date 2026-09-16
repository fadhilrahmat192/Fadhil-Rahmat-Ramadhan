/**
 * RESUME & PROFESSIONAL ARCHIVE - FADHIL RAHMAT RAMADHAN, S.T.
 * Interactive Application Controller
 */

// --- Project Data Store ---
const projectsData = {
  keureuto: {
    id: "keureuto",
    title: "PLTM Keureuto (Pembangkit Listrik Tenaga Mikro Hidro)",
    category: "renewable",
    status: "in-progress",
    statusLabel: "Fase Legalitas & Pengembangan (Studi Kelayakan Selesai)",
    location: "Aceh Utara, D.I. Aceh",
    period: "Mei 2025 – Sekarang",
    role: "Engineer",
    capacity: "Pembangkit Mikro Hidro Komersial",
    stakeholders: "PT Penta Utama Manunggal, PLN UID Aceh, PT Laksamana Cakra Energi (SPV), PT Laksamana Energi Group",
    summary: "Proyek pembangkit listrik tenaga mikro hidro dengan kapasitas yang dikembangkan untuk supply listrik daerah terpencil dengan dukungan dari entitas pemerintah dan swasta. Fadhil bertindak sebagai Engineer yang mengawal studi kelayakan teknis dan pemegang saham Special Purpose Vehicle (SPV) PT Laksamana Cakra Energi.",
    technicalDetails: [
      "Studi Kelayakan Teknis Hidrologi dan Topografi lengkap.",
      "Desain intake, headrace, surge tank, penstock, dan turbin air terintegrasi.",
      "Perhitungan Head efektif dan debit andalan untuk kontinuitas suplai listrik.",
      "Struktur pembiayaan equity SPV kolaborasi multi-stakeholders."
    ],
    impact: "Memperkuat bauran energi hijau di wilayah Aceh Utara dan menjamin pasokan energi listrik bersih ramah lingkungan bagi masyarakat."
  },
  selayar: {
    id: "selayar",
    title: "PLTS + BESS Selayar (Solar + Battery Energy Storage System)",
    category: "renewable",
    status: "in-progress",
    statusLabel: "Fase Legalitas & Pengembangan (Studi Kelayakan Selesai)",
    location: "Kabupaten Kepulauan Selayar, Sulawesi Selatan",
    period: "Desember 2025 – Sekarang",
    role: "Engineer",
    capacity: "Solar PV + BESS Utility Scale",
    stakeholders: "PT Penta Utama Manunggal, PLN ULP Selayar, Pemerintah Kabupaten Selayar",
    summary: "Integrasi panel surya fotovoltaik dengan sistem penyimpanan energi baterai (BESS) untuk sistem kelistrikan kepulauan dengan profil beban puncak yang kompleks. Bertujuan menggantikan konsumsi BBM diesel (de-dieselisasi).",
    technicalDetails: [
      "Analisis profil kurva beban puncak pulau terisolasi (isolated grid).",
      "Kalkulasi kapasitas penyimpanan BESS untuk stabilitas frekuensi dan voltage grid.",
      "Penilaian kelayakan interkoneksi sistem tenaga listrik dengan PLN ULP Selayar.",
      "Desain proteksi terhadap korosi atmosferik laut (marine environment) untuk aset pembangkit."
    ],
    impact: "Menjadi model transisi energi bersih di wilayah kepulauan Indonesia bagian timur dan menghemat konsumsi solar PLN."
  },
  jembrana: {
    id: "jembrana",
    title: "PLTS Atap Masjid Pantai Jembrana",
    category: "renewable",
    status: "in-progress",
    statusLabel: "Tahap Persiapan Konstruksi (Perizinan & Kuota PLN Disetujui)",
    location: "Kabupaten Jembrana, Bali",
    period: "Desember 2025",
    role: "System Designer & Permitting Lead",
    capacity: "2 kWp (Kilowatt-peak)",
    stakeholders: "Masyarakat & Pengurus Masjid Pantai Jembrana, Komunitas Energi Bersih, PLN",
    summary: "Perancangan detail teknis sistem (engineering design) dan penyelesaian seluruh alur perizinan resmi termasuk persetujuan kuota PLTS Atap di PLN. Proyek saat ini dalam status persiapan lanjutan menuju implementasi konstruksi fisik.",
    technicalDetails: [
      "Perancangan detail teknis sistem elektrikal dan kalkulasi simulasi yield solar PV (PVsyst).",
      "Penyusunan dokumen teknis dan pengurusan persetujuan resmi kuota PLTS Atap ke PLN.",
      "Penyelesaian seluruh administrasi dan perizinan regulasi ketenagalistrikan lokal.",
      "Penyelarasan proteksi kelistrikan, sistem inverter on-grid, dan persiapan pengadaan komponen fase konstruksi."
    ],
    impact: "Menjadi model inisiatif ketahanan energi mandiri di fasilitas publik pesisir berbasis perizinan dan integrasi jaringan PLN yang terstandarisasi."
  },
  makassar: {
    id: "makassar",
    title: "PLTS Industri Makassar (Industrial-Scale Solar Power)",
    category: "renewable",
    status: "in-progress",
    statusLabel: "Tahap Perencanaan & Pengembangan Investasi",
    location: "Kawasan Industri Makassar (KIMA) & Pelabuhan Makassar",
    period: "Dalam Pengembangan",
    role: "Project Developer & Investment Facilitator",
    capacity: "Multi-MWp Industrial Rooftop & Ground-Mounted",
    stakeholders: "Greenvolt Power Indonesia (Investor), Pelindo Regional 4, Kawasan Industri Makassar, Industri Swasta",
    summary: "Fasilitasi investasi dan pengembangan pembangkit surya skala industri dengan fokus pada efisiensi biaya energi, penurunan emisi karbon korporasi, dan pengembalian investasi (ROI) optimal.",
    technicalDetails: [
      "Site survey struktur atap gudang, pabrik, dan fasilitas dermaga pelabuhan.",
      "Studi kelayakan teknis-ekonomis skema Zero Capital Expenditure (Zero Capex) / PPA.",
      "Koordinasi teknis dengan Pelindo Regional 4 untuk green port initiative.",
      "Penyelarasan regulasi Permen ESDM terkait PLTS Atap dan kuota sistem PLN."
    ],
    impact: "Akselerasi dekarbonisasi koridor logistik dan industri maritim terbesar di kawasan Indonesia Timur."
  },
  biomassa: {
    id: "biomassa",
    title: "Tender Pengadaan Biomassa PLN EPI (Woodchip Supply)",
    category: "renewable",
    status: "completed",
    statusLabel: "Kualifikasi Teknis & Kemitraan Strategis",
    location: "North Sulawesi / PLTU Punagaya",
    period: "Januari 2026",
    role: "Lead Administrator & Partnership Strategist",
    capacity: "Woodchip Biomass Feedstock Supply",
    stakeholders: "PLN Energi Primer Indonesia (PLN EPI), Mitra Industri Swasta / Pabrik, Unit PLTU",
    summary: "Memimpin penyiapan kelengkapan administrasi pengadaan nasional dan perumusan Perjanjian Kerja Sama (PKS) strategis antara pihak swasta (pabrik pemasok) dengan PLN Energi Primer Indonesia (PLN EPI) untuk pasokan biomassa woodchip co-firing.",
    technicalDetails: [
      "Pengelolaan menyeluruh seluruh dokumen administrasi, legalitas, dan kepatuhan pengadaan tender nasional PLN EPI.",
      "Perumusan dan fasilitasi Perjanjian Kerja Sama (PKS) kemitraan strategis antara pihak swasta (pabrik) dan entitas PLN.",
      "Analisis rantai pasok (supply chain) logistik biomassa dari hulu perkebunan/pabrik pengolahan ke pembangkit listrik.",
      "Evaluasi spesifikasi teknis nilai kalor serta simulasi struktur keekonomian co-firing biomassa terhadap standar BPP PLN."
    ],
    impact: "Membangun jembatan kemitraan formal industri swasta dan BUMN dalam pemenuhan pasokan bahan baku energi primer terbarukan skala besar."
  },
  ndt: {
    id: "ndt",
    title: "Portofolio NDT Inspection & Marine Quality Assurance",
    category: "inspection",
    status: "completed",
    statusLabel: "Proyek Berkelanjutan & Berlisensi",
    location: "Galangan Kapal & Pelabuhan Sulawesi, Kalimantan, Jawa",
    period: "Juli 2022 – Sekarang",
    role: "Certified NDT Inspector (Freelance)",
    capacity: "Ultrasonic Thickness (UT), Magnetic Particle (MT), Megger Test",
    stakeholders: "PT Radius Sembilan Utama, Pemilik Armada Kapal, Biro Klasifikasi, Surveyor Galangan",
    summary: "Pelaksanaan inspeksi pengujian tak rusak (Non-Destructive Testing) serta quality control pengelasan pada kapal tunda (Tug Boat), tongkang (Barge), dan kapal komersial untuk memastikan kelayakan laut dan integritas lambung.",
    technicalDetails: [
      "Pengukuran ketebalan pelat lambung (Hull Plate Thickness Measurement) menggunakan Ultrasonic Test.",
      "Deteksi retak permukaan sambungan las struktur kapal dengan Magnetic Particle Testing (MT).",
      "Evaluasi isolasi sistem kelistrikan kapal dengan Megger Test.",
      "Penyusunan Ultrasonic Test Reports resmi sesuai standar Biro Klasifikasi Indonesia (BKI) dan IMO.",
      "Analisis korosi dan rekomendasi peremajaan pelat (plate renewal calculation)."
    ],
    impact: "Memastikan keselamatan navigasi kapal, mencegah risiko kebocoran di laut, dan memperpanjang masa operasional armada maritim."
  }
};

// --- Searchable Database for Command Palette (Ctrl+K) ---
// --- Searchable Database for Command Palette (Ctrl+K) ---
const searchIndex = [
  { title: "PLTM Keureuto (Aceh Utara)", category: "Proyek Energi Terbarukan", link: "#projects", keywords: "pltm keureuto mikro hidro aceh laksamana cakra engineer spv" },
  { title: "PLTS + BESS Selayar", category: "Proyek Energi Terbarukan", link: "#projects", keywords: "plts selayar bess baterai battery surya kepulauan diesilisasi" },
  { title: "PLTS Atap Masjid Pantai Jembrana", category: "Proyek Energi Terbarukan", link: "#projects", keywords: "jembrana bali 2 kwp solar atap masjid pesisir kuota pln perizinan pvsyst persiapan konstruksi" },
  { title: "PLTS Industri Makassar", category: "Proyek Energi Terbarukan", link: "#projects", keywords: "makassar industri kima pelindo greenvolt investor rooftop" },
  { title: "Tender Biomassa PLN EPI (Woodchip)", category: "Proyek Energi Terbarukan", link: "#projects", keywords: "biomassa pln epi woodchip co firing punagaya tiara mulia lestari pks swasta administrasi" },
  { title: "NDT Inspection & Marine QA Portfolio", category: "Maritim & Inspeksi", link: "#projects", keywords: "ndt ultrasonic ut mt megger tug boat barge kapal perkapalan" },
  
  { title: "PT Penta Utama Manunggal (Manajer Teknik)", category: "Pengalaman Kerja", link: "#experience", keywords: "penta pum manajer teknik manager engineer proyek juli 2025" },
  { title: "PT Nusantara Energi Hijau (Founder & Direktur)", category: "Pengalaman Kerja", link: "#experience", keywords: "nusantara energi hijau epc direktur founder ebt agustus 2025" },
  { title: "PT Solar Energy Technology (Founder & Direktur)", category: "Pengalaman Kerja", link: "#experience", keywords: "solar energy technology ipp direktur maret 2026 pembangkit publik" },
  { title: "PT Tiara Mulia Lestari (Sekretaris Eksekutif)", category: "Pengalaman Kerja", link: "#experience", keywords: "tiara mulia lestari sekretaris eksekutif bioenergy air minum oktober 2025" },
  { title: "PT Arindo Karya Perkasa (Staf Manajemen)", category: "Pengalaman Kerja", link: "#experience", keywords: "arindo karya perkasa real estate properti strategi september 2025" },
  { title: "PT Radius Sembilan Utama (Magang NDT)", category: "Pengalaman Kerja", link: "#experience", keywords: "radius sembilan utama inspektor magang ndt ut mt 2022" },
  
  { title: "PVsyst Expert (Desain & Simulasi Yield PLTS)", category: "Kompetensi Software", link: "#competencies", keywords: "pvsyst solar pv desain yield modeling software ebt simulasi surya on-grid" },
  { title: "RETScreen Expert (Studi Kelayakan EBT & Finansial)", category: "Kompetensi Software", link: "#competencies", keywords: "retscreen kelayakan finansial emisi studi kelayakan software clean energy ebt" },
  { title: "AutoCAD, ANSYS, Maxsurf (Engineering Software)", category: "Kompetensi Software", link: "#competencies", keywords: "autocad ansys maxsurf rhinoceros cad tools naval architecture" },
  
  { title: "S1 Teknik Perkapalan - Universitas Hasanuddin (GPA 3.73)", category: "Pendidikan", link: "#education", keywords: "unhas teknik perkapalan naval architecture 3.73 deadrise stepped ansys cfd" },
  { title: "Sertifikasi Welding Inspector Comprehensive (BNSP)", category: "Sertifikasi", link: "#education", keywords: "bnsp welding inspector pengelasan lsp unhas mai 2023 qc" },
  { title: "Sertifikasi NDT UT & MT (PT Radius Sembilan Utama)", category: "Sertifikasi", link: "#education", keywords: "sertifikasi ndt ultrasonic magnetic particle non destructive testing" },
  
  { title: "Disaster and Climate Tech Hub (DCT-Hub)", category: "Organisasi & Kepemimpinan", link: "#organizations", keywords: "dct hub climate tech iklim makassar action node founder bencana" },
  { title: "APPLTSI (Asosiasi Pengusaha PLTS Indonesia)", category: "Organisasi & Kepemimpinan", link: "#organizations", keywords: "appltsi asosiasi surya solar ti founder asosiasi pengusaha" },
  { title: "Annual Next-Gen Climate Tech, Carbon Markets, & Green Investment Forum", category: "Organisasi & Kepemimpinan", link: "#organizations", keywords: "annual next-gen climate tech carbon markets green investment forum iklim 2025" },
  { title: "Makassar for Gaza", category: "Organisasi & Kepemimpinan", link: "#organizations", keywords: "makassar for gaza palestina kemanusiaan solidaritas founder" },
  { title: "KKCTBN 2023 - Juara 3 Nasional (Tim Zhinpuru)", category: "Prestasi", link: "#naval-spotlight", keywords: "kkctbn juara 3 ui zhinpuru robot kapal pariwisata pinisi taka bonerate syamsul asri" },
  { title: "Riset Performa Hidrodinamika Perahu Pinisi (Naval Architecture)", category: "Penelitian Ilmiah", link: "#naval-spotlight", keywords: "pinisi perahu hidrodinamika naval architecture unhas pariwisata bahari keselamatan" },
  { title: "Survei Sailing Yacht Sabang & Langkawi (IMT-GT SAPHULA)", category: "Pengalaman Lapangan", link: "#field-work", keywords: "sabang langkawi sailing yacht imt gt saphula survei kapal layar" },
  { title: "Benchmarking PLTA Bili-Bili (2025)", category: "Pengalaman Lapangan", link: "#field-work", keywords: "bili bili plta hydro bendungan turbin benchmarking dct hub" },
  { title: "PT Laksamana Cakra Energi (Pemegang Saham SPV)", category: "Investasi & Ekuitas", link: "#investments", keywords: "laksamana cakra energi spv saham ekuitas pltm keureuto investor" }
];

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initPhotoSwitcher();
  initProjectFilters();
  initProjectModal();
  initSearchPalette();
  initMobileDrawer();
  initScrollSpy();
  initContactForm();
});

// --- 1. Theme Controller (Pure Dark Mode) ---
function initTheme() {
  document.documentElement.setAttribute("data-theme", "dark");
}

// --- 2. Photo Color & Monokrom Setup ---
function initPhotoSwitcher() {
  // Photo styling is handled with CSS grayscale filter and hover color transition
}

// --- 3. Project Filter Controller ---
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const filterValue = btn.getAttribute("data-filter");
      
      projectCards.forEach(card => {
        const category = card.getAttribute("data-category");
        const status = card.getAttribute("data-status");
        
        if (filterValue === "all") {
          card.style.display = "flex";
        } else if (filterValue === "in-progress" || filterValue === "completed") {
          card.style.display = (status === filterValue) ? "flex" : "none";
        } else {
          card.style.display = (category === filterValue) ? "flex" : "none";
        }
      });
    });
  });
}

// --- 4. Project Detail Modal Controller ---
function initProjectModal() {
  const modalOverlay = document.getElementById("projectModalOverlay");
  const modalCloseBtn = document.getElementById("projectModalCloseBtn");
  const projectCards = document.querySelectorAll(".project-card");
  
  if (!modalOverlay) return;
  
  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-project-id");
      openProjectModal(projectId);
    });
  });
  
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeProjectModal);
  }
  
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeProjectModal();
  });
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeProjectModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;
  
  const modalOverlay = document.getElementById("projectModalOverlay");
  const modalTitle = document.getElementById("modalProjectTitle");
  const modalContent = document.getElementById("modalProjectContent");
  
  modalTitle.textContent = project.title;
  
  let techDetailsHtml = project.technicalDetails.map(item => `<li><i class="fas fa-check-circle" style="color:var(--accent); margin-right:8px;"></i>${item}</li>`).join("");
  
  modalContent.innerHTML = `
    <div style="margin-bottom: 1.25rem; display:flex; flex-wrap:wrap; gap:0.5rem; align-items:center;">
      <span class="badge ${project.status === 'completed' ? 'badge-green' : 'badge-amber'}">
        <i class="fas ${project.status === 'completed' ? 'fa-check' : 'fa-hourglass-half'}"></i> ${project.statusLabel}
      </span>
      <span class="badge badge-cyan"><i class="fas fa-user-tag"></i> Role: ${project.role}</span>
      <span class="badge badge-navy"><i class="fas fa-map-marker-alt"></i> ${project.location}</span>
      <span class="badge badge-navy"><i class="far fa-calendar-alt"></i> ${project.period}</span>
    </div>
    
    <div style="margin-bottom: 1.5rem; background:var(--bg-surface-muted); padding:1rem; border-radius:8px; border:1px solid var(--border-color);">
      <div style="font-size:0.8rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:0.25rem;">
        Kapasitas & Spesifikasi
      </div>
      <div style="font-size:0.95rem; font-weight:600; color:var(--text-main);">
        ${project.capacity}
      </div>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size:1.05rem; margin-bottom:0.5rem; color:var(--text-main);">Deskripsi Proyek</h4>
      <p style="font-size:0.95rem; color:var(--text-body); line-height:1.7;">${project.summary}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size:1.05rem; margin-bottom:0.5rem; color:var(--text-main);">Rincian Teknis & Metodologi</h4>
      <ul style="list-style:none; display:flex; flex-direction:column; gap:0.6rem; font-size:0.92rem; color:var(--text-body);">
        ${techDetailsHtml}
      </ul>
    </div>

    <div style="margin-bottom: 1.5rem; background:rgba(6, 182, 212, 0.08); border-left:3px solid var(--accent); padding:1rem; border-radius:0 8px 8px 0;">
      <div style="font-size:0.8rem; font-weight:700; color:var(--accent); text-transform:uppercase; margin-bottom:0.25rem;">
        Stakeholders & Mitra Kolaborasi
      </div>
      <div style="font-size:0.92rem; font-weight:500; color:var(--text-main);">
        ${project.stakeholders}
      </div>
    </div>

    <div>
      <h4 style="font-size:1.05rem; margin-bottom:0.5rem; color:var(--text-main);">Dampak & Nilai Strategis</h4>
      <p style="font-size:0.95rem; color:var(--text-body); line-height:1.6;">${project.impact}</p>
    </div>
  `;
  
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modalOverlay = document.getElementById("projectModalOverlay");
  if (modalOverlay) {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// --- 5. Quick Search Command Palette (Ctrl+K) ---
function initSearchPalette() {
  const searchModalOverlay = document.getElementById("searchModalOverlay");
  const searchTriggerBtn = document.getElementById("searchTriggerBtn");
  const searchCloseBtn = document.getElementById("searchCloseBtn");
  const searchInput = document.getElementById("paletteSearchInput");
  const searchResultsList = document.getElementById("searchResultsList");
  
  if (!searchModalOverlay || !searchInput) return;
  
  function openSearch() {
    searchModalOverlay.classList.add("open");
    searchInput.value = "";
    renderSearchResults(searchIndex);
    setTimeout(() => searchInput.focus(), 100);
    document.body.style.overflow = "hidden";
  }
  
  function closeSearch() {
    searchModalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
  
  if (searchTriggerBtn) searchTriggerBtn.addEventListener("click", openSearch);
  if (searchCloseBtn) searchCloseBtn.addEventListener("click", closeSearch);
  
  searchModalOverlay.addEventListener("click", (e) => {
    if (e.target === searchModalOverlay) closeSearch();
  });
  
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      if (searchModalOverlay.classList.contains("open")) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    if (e.key === "Escape" && searchModalOverlay.classList.contains("open")) {
      closeSearch();
    }
  });
  
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      renderSearchResults(searchIndex);
      return;
    }
    
    const filtered = searchIndex.filter(item => {
      return item.title.toLowerCase().includes(query) ||
             item.category.toLowerCase().includes(query) ||
             item.keywords.toLowerCase().includes(query);
    });
    
    renderSearchResults(filtered);
  });
}

function renderSearchResults(items) {
  const resultsContainer = document.getElementById("searchResultsList");
  if (!resultsContainer) return;
  
  if (items.length === 0) {
    resultsContainer.innerHTML = `
      <div style="padding: 2rem; text-align:center; color:var(--text-muted); font-size:0.9rem;">
        <i class="fas fa-search" style="font-size:1.5rem; margin-bottom:0.5rem; display:block; opacity:0.5;"></i>
        Tidak ditemukan hasil yang cocok dengan pencarian Anda.
      </div>
    `;
    return;
  }
  
  resultsContainer.innerHTML = items.map(item => `
    <a href="${item.link}" class="search-result-item" onclick="document.getElementById('searchModalOverlay').classList.remove('open'); document.body.style.overflow='';">
      <div class="result-title">${item.title}</div>
      <div class="result-meta">
        <span style="color:var(--accent); font-weight:600;">${item.category}</span>
      </div>
    </a>
  `).join("");
}

// --- 6. Mobile Navigation Drawer ---
function initMobileDrawer() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const drawer = document.getElementById("mobileNavDrawer");
  const drawerOverlay = document.getElementById("drawerOverlay");
  const drawerCloseBtn = document.getElementById("drawerCloseBtn");
  const drawerLinks = document.querySelectorAll(".drawer-link");
  
  if (!hamburgerBtn || !drawer || !drawerOverlay) return;
  
  function openDrawer() {
    drawer.classList.add("open");
    drawerOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  
  function closeDrawer() {
    drawer.classList.remove("open");
    drawerOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
  
  hamburgerBtn.addEventListener("click", openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeDrawer);
  drawerOverlay.addEventListener("click", closeDrawer);
  
  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

// --- 7. Scroll-Spy Navigation ---
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const header = document.querySelector(".site-header");
  
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    
    if (header) {
      if (scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

// --- 8. Contact Form Handling ---
function initContactForm() {
  const contactForm = document.getElementById("contactMessageForm");
  if (!contactForm) return;
  
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("contactName");
    const emailInput = document.getElementById("contactEmail");
    const subjectInput = document.getElementById("contactSubject");
    const messageInput = document.getElementById("contactMsg");
    
    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      showToast("Harap lengkapi semua kolom yang wajib diisi.", "error");
      return;
    }
    
    // Create mailto direct link option for user's email client
    const mailtoLink = `mailto:fadhilrahmat192@gmail.com?subject=${encodeURIComponent(subjectInput.value || 'Pesan dari Website Fadhil Rahmat')}&body=${encodeURIComponent('Nama: ' + nameInput.value + '\nEmail: ' + emailInput.value + '\n\nPesan:\n' + messageInput.value)}`;
    
    showToast("Pesan Anda telah siap dikirim! Mengarahkan ke klien email...");
    
    setTimeout(() => {
      window.location.href = mailtoLink;
      contactForm.reset();
    }, 1000);
  });
}

// --- Helper: Toast Notification ---
function showToast(message, type = "success") {
  let toast = document.getElementById("globalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "globalToast";
    toast.className = "toast-notification";
    document.body.appendChild(toast);
  }
  
  const icon = type === "error" ? "fa-exclamation-circle" : "fa-check-circle";
  toast.innerHTML = `<i class="fas ${icon}" style="color:${type === 'error' ? '#EF4444' : '#06B6D4'};"></i> <span>${message}</span>`;
  
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}
