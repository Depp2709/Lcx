// Mengambil jumlah pengunjung dari localStorage
let visitorCount = localStorage.getItem('visitorCount');

// Jika belum ada, set visitorCount ke 0
if (!visitorCount) {
    visitorCount = 0;
}

// Tambahkan 1 ke jumlah pengunjung
visitorCount++;

// Simpan kembali ke localStorage
localStorage.setItem('visitorCount', visitorCount);

// Tampilkan jumlah pengunjung di halaman
document.getElementById('visitorCount').innerText = visitorCount;
