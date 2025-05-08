// Motivasi
const motivasi = [
    "Teruslah belajar, karena ilmu tak akan pernah habis.",
    "Gagal itu biasa, yang penting tetap mencoba.",
    "Kerja keras hari ini adalah kesuksesan di masa depan.",
    "Jangan takut bermimpi besar."
  ];
  
  function showMotivation() {
    const text = motivasi[Math.floor(Math.random() * motivasi.length)];
    const motivationText = document.getElementById('motivation-text');
    if (motivationText) {
      motivationText.textContent = text;
    }
  }
  

  
  // Modal gallery (khusus halaman galeri)
  const modal = document.getElementById("info-modal");
  const closeBtn = document.querySelector(".close-btn");
  const namaEl = document.getElementById("modal-nama");
  const kelasEl = document.getElementById("modal-kelas");
  const infoEl = document.getElementById("modal-info");
  
  if (modal && closeBtn && namaEl && kelasEl && infoEl) {
    const items = document.querySelectorAll(".gallery-item");
  
    items.forEach(img => {
      img.style.cursor = "pointer";
      img.addEventListener("click", () => {
        namaEl.textContent = img.dataset.nama;
        kelasEl.textContent = "Kelas: " + img.dataset.kelas;
        infoEl.textContent = img.dataset.info;
        modal.style.display = "flex";
      });
    });
  
    closeBtn.addEventListener("click", () => modal.style.display = "none");
    modal.addEventListener("click", e => {
      if (e.target === modal) modal.style.display = "none";
    });
  }

    // Hamburger menu
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
  
    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
      });
    }
  });
  
// Fungsi untuk toggle menu
hamburger.addEventListener('click', function() {
  menu.classList.toggle('show');
});

/**document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu   = document.getElementById("navMenu");
  
    // buka/tutup menu dengan hamburger
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  });**/

  const navbarNav = document.querySelector('.navMenu');
  const hamburger = document.querySelector('.hamburger');
  
  // Saat hamburger diklik, toggle menu
  hamburger.onclick = () => {
    navbarNav.classList.toggle('active');
  };
  
  // Tutup menu saat klik di luar
  document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    }
  });
  