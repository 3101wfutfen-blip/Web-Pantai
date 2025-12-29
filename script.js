 // Toggle Menu untuk Tampilan Mobile
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Fungsi untuk Tombol "Lihat Detail"
function infoDetail(namaTempat) {
    alert("Anda memilih: " + namaTempat + "\n\nFitur detail lengkap akan segera hadir! Untuk pemesanan, silakan hubungi WhatsApp kami.");
}

// Fungsi tombol WhatsApp
function hubungiWhatsApp() {
    // Ganti nomor ini dengan nomor admin Lampung
    let nomor = "6282278369296"; 
    let pesan = "Halo Admin Wisata Lampung, saya tertarik untuk bertanya tentang paket liburan.";
    
    window.open(`https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`, '_blank');
}

// Efek Sticky Navbar saat di-scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        nav.style.boxShadow = "none";
    }
});
