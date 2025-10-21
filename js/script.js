// script.js
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contactForm");

  if (!contactForm) return; // keluar awal kalau borang tak wujud

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Dapatkan input
    const nama = contactForm.querySelector("#nama")?.value.trim();
    const emel = contactForm.querySelector("#emel")?.value.trim();
    const mesej = contactForm.querySelector("#mesej")?.value.trim();

    // Semak jika ada kosong
    if (!nama || !emel || !mesej) {
      alert("Sila isi semua maklumat sebelum menghantar.");
      return;
    }

    // Tunjuk mesej pengesahan
    alert(`Terima kasih, ${nama}! Mesej anda telah dihantar dengan jayanya.`);

    // Reset borang
    contactForm.reset();
  });
});
