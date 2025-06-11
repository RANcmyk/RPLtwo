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
const fotoItems = document.querySelectorAll('.foto-item');
const modal = document.getElementById("info-modal");
const closeBtn = document.querySelector(".close-btn");
const namaEl = document.getElementById("modal-nama");
const kelasEl = document.getElementById("modal-kelas");
const infoEl = document.getElementById("modal-info");

if (modal && closeBtn && namaEl && kelasEl && infoEl && fotoItems.length > 0) {
  fotoItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      // Tutup modal dulu kalau sedang terbuka
      modal.style.display = "none";

      // Delay sedikit sebelum isi ulang
      setTimeout(() => {
        namaEl.textContent  = item.dataset.nama;
        kelasEl.textContent = "Kelas: " + item.dataset.kelas;
        infoEl.textContent  = item.dataset.info;
        modal.style.display = 'flex';
      }, 50);
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Navbar hamburger fix
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    // Tutup menu jika klik di luar
    document.addEventListener("click", function (e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove("active");
      }
    });
  }
});

function scrollGaleri(button, direction) {
  const scrollBox = button.parentElement.querySelector(".galeri-scroll");
  const scrollAmount = scrollBox.offsetWidth * 0.6; // Scroll 60% of the visible width
  scrollBox.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth',
  });
}
