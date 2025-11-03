const offences = {
  A: [
    { name: "A21 - Mengemudi Tanpa Lampu", fine: 1300, time: 1, impound: 0 },
    { name: "A22 - Menggunakan Jalur Darurat Tanpa Alasan", fine: 4500, time: 5, impound: 1 },
    { name: "A23 - Menghalangi Trotoar / Pejalan Kaki", fine: 2000, time: 2, impound: 3 },
    { name: "A24 - Mengemudi di Zona Sekolah Tanpa Hati-hati", fine: 1200, time: 6, impound: 1 },
    { name: "A25 - Mengubah Plat Kendaraan Ilegal", fine: 2000, time: 10, impound: 2 },
    { name: "A26 - Mengemudi Melawan Arus", fine: 1500, time: 8, impound: 1 },
    { name: "A27 - Mengangkut Penumpang Lebih dari Kapasitas", fine: 1000, time: 4, impound: 1 },
    { name: "A28 - Melawan Perintah Polisi", fine: 3000, time: 12, impound: 2 },
    { name: "A29 - Menabrak Rambu Lalu Lintas", fine: 800, time: 3, impound: 0 },
    { name: "A30 - Mengemudi Tanpa Asuransi", fine: 1500, time: 5, impound: 1 },
    { name: "A31 - Pengejaran Terhadap Petugas", fine: 5000, time: 15, impound: 4 }
  ],
  B: [
    { name: "B01 - Kekerasan Ringan", fine: 2000, time: 20, impound: 0 },
    { name: "B02 - Gangguan Ketertiban Umum", fine: 800, time: 6, impound: 0 },
    { name: "B03 - Pencurian Ringan", fine: 1500, time: 18, impound: 0 },
    { name: "B04 - Vandalisme Ringan", fine: 1200, time: 12, impound: 0 },
    { name: "B05 - Mabuk di Tempat Umum", fine: 700, time: 3, impound: 0 },
    { name: "B06 - Pelecehan Ringan", fine: 900, time: 6, impound: 0 },
    { name: "B07 - Kepemilikan Narkotika Skala Kecil", fine: 3000, time: 24, impound: 0 },
    { name: "B08 - Masuk Paksa Properti Ringan", fine: 2500, time: 22, impound: 0 },
    { name: "B09 - Menyimpan Barang Curian Ringan", fine: 1800, time: 15, impound: 0 },
    { name: "B10 - Kembang Api Ilegal", fine: 900, time: 4, impound: 0 },
    { name: "B11 - Penipuan Kecil", fine: 2200, time: 18, impound: 0 },
    { name: "B12 - Masuk Area Pemerintah Tanpa Izin", fine: 1300, time: 8, impound: 0 },
    { name: "B13 - Menjual Barang Tanpa Izin di Jalan", fine: 700, time: 3, impound: 0 },
    { name: "B14 - Berkeliaran di Tempat Terlarang", fine: 400, time: 1, impound: 0 },
    { name: "B15 - Mengganggu Acara Publik", fine: 1000, time: 6, impound: 0 },
    { name: "B16 - Penyelundupan Skala Kecil", fine: 3500, time: 24, impound: 0 },
    { name: "B17 - Vandalisme Minor", fine: 800, time: 2, impound: 0 },
    { name: "B18 - Mencuri dari Toko", fine: 1200, time: 8, impound: 0 },
    { name: "B19 - Cybercrime Ringan", fine: 2000, time: 12, impound: 0 },
    { name: "B20 - Judi Ilegal Skala Kecil", fine: 1500, time: 10, impound: 0 },
    { name: "B21 - Menghina Warga", fine: 600, time: 3, impound: 0 },
    { name: "B22 - Menimbulkan Keributan di Tempat Umum", fine: 700, time: 4, impound: 0 },
    { name: "B23 - Mengganggu Ketertiban Jalan", fine: 500, time: 2, impound: 0 },
    { name: "B24 - Penipuan Online Skala Kecil", fine: 1800, time: 12, impound: 0 },
    { name: "B25 - Mengganggu Layanan Publik", fine: 1200, time: 6, impound: 0 },
    { name: "B26 - Menjual Alkohol Ilegal", fine: 2000, time: 10, impound: 0 },
    { name: "B27 - Melanggar Peraturan Lingkungan", fine: 1000, time: 5, impound: 0 },
    { name: "B28 - Memalsukan Dokumen Ringan", fine: 2500, time: 15, impound: 0 },
    { name: "B29 - Mengintimidasi Warga", fine: 1500, time: 8, impound: 0 },
    { name: "B30 - Mengganggu Tempat Ibadah", fine: 1200, time: 6, impound: 0 }
  ],
  C: [
    { name: "C01 - Perampokan Bersenjata", fine: 15000, time: 120, impound: 0 },
    { name: "C02 - Pembunuhan", fine: 0, time: 120, impound: 0 },
    { name: "C03 - Perdagangan Narkotika Besar", fine: 20000, time: 120, impound: 0 },
    { name: "C04 - Pencurian Kendaraan Besar", fine: 12000, time: 90, impound: 0 },
    { name: "C05 - Penculikan", fine: 18000, time: 120, impound: 0 },
    { name: "C06 - Percobaan Pembunuhan", fine: 10000, time: 120, impound: 0 },
    { name: "C07 - Pembakaran dengan Niat", fine: 14000, time: 120, impound: 0 },
    { name: "C08 - Perdagangan Manusia", fine: 25000, time: 120, impound: 0 },
    { name: "C09 - Membahayakan Publik", fine: 8000, time: 100, impound: 0 },
    { name: "C10 - Pembuatan/Distribusi Senjata Ilegal", fine: 22000, time: 120, impound: 0 },
    { name: "C11 - Pembobolan Rumah", fine: 10000, time: 96, impound: 0 },
    { name: "C12 - Berpartisipasi Organisasi Kriminal", fine: 25000, time: 120, impound: 0 },
    { name: "C13 - Pemerasan", fine: 14000, time: 120, impound: 0 },
    { name: "C14 - Perampokan Bank", fine: 20000, time: 120, impound: 0 },
    { name: "C15 - Pencurian Identitas Besar", fine: 15000, time: 120, impound: 0 },
    { name: "C16 - Kekerasan Bersenjata", fine: 12000, time: 120, impound: 0 },
    { name: "C17 - Penyelundupan Besar", fine: 18000, time: 120, impound: 0 },
    { name: "C18 - Pemalsuan Besar", fine: 10000, time: 120, impound: 0 },
    { name: "C19 - Cybercrime Besar", fine: 20000, time: 120, impound: 0 },
    { name: "C20 - Penyuapan Tingkat Tinggi", fine: 25000, time: 120, impound: 0 },
    { name: "C21 - Penipuan Besar", fine: 18000, time: 120, impound: 0 }
  ],
  D: [
    { name: "D01 - Korupsi / Suap", fine: 30000, time: 120, impound: 0 },
    { name: "D02 - Pengkhianatan / Sedisi", fine: 0, time: 120, impound: 0 },
    { name: "D03 - Akses Ilegal ke Sistem Pemerintah", fine: 20000, time: 120, impound: 0 },
    { name: "D04 - Penyalahgunaan Sumber Daya Pemerintah", fine: 15000, time: 120, impound: 0 },
    { name: "D05 - Menyamar Sebagai Petugas", fine: 5000, time: 60, impound: 0 },
    { name: "D06 - Menghalangi Proses Hukum", fine: 12000, time: 120, impound: 0 },
    { name: "D07 - Membocorkan Informasi Rahasia", fine: 20000, time: 120, impound: 0 },
    { name: "D08 - Penipuan Pemilu", fine: 25000, time: 120, impound: 0 },
    { name: "D09 - Penggelapan Dana Pemerintah", fine: 30000, time: 120, impound: 0 },
    { name: "D10 - Suap Tingkat Tinggi", fine: 35000, time: 120, impound: 0 },
    { name: "D11 - Sabotase Fasilitas Pemerintah", fine: 40000, time: 120, impound: 0 },
    { name: "D12 - Terorisme / Ancaman Negara", fine: 0, time: 120, impound: 0 },
    { name: "D13 - Spionase / Mata-mata", fine: 0, time: 120, impound: 0 },
    { name: "D14 - Perdagangan Senjata Ilegal (Negara)", fine: 25000, time: 120, impound: 0 },
    { name: "D15 - Penyalahgunaan Jabatan Resmi", fine: 15000, time: 120, impound: 0 },
    { name: "D16 - Menyuap Pejabat Pemilu", fine: 20000, time: 120, impound: 0 },
    { name: "D17 - Sabotase Layanan Publik", fine: 18000, time: 120, impound: 0 },
    { name: "D18 - Penyelundupan untuk Pejabat Pemerintah", fine: 20000, time: 120, impound: 0 },
    { name: "D19 - Mengancam Pejabat", fine: 10000, time: 120, impound: 0 },
    { name: "D20 - Pengawasan / Penyadapan Ilegal", fine: 15000, time: 120, impound: 0 },
    { name: "D21 - Memalsukan Dokumen Resmi", fine: 15000, time: 120, impound: 0 },
    { name: "D22 - Menggunakan Jabatan untuk Keuntungan Pribadi", fine: 18000, time: 120, impound: 0 },
    { name: "D23 - Menyembunyikan Bukti Kriminal", fine: 12000, time: 120, impound: 0 },
    { name: "D24 - Menghalangi Investigasi", fine: 14000, time: 120, impound: 0 },
    { name: "D25 - Pemalsuan Anggaran / Laporan Keuangan", fine: 20000, time: 120, impound: 0 },
    { name: "D26 - Penyalahgunaan Kekuatan Militer / Polisi", fine: 25000, time: 120, impound: 0 },
    { name: "D27 - Memanipulasi Pemilu", fine: 22000, time: 120, impound: 0 },
    { name: "D28 - Mengancam Sistem Pemerintah", fine: 20000, time: 120, impound: 0 },
    { name: "D29 - Perdagangan Rahasia Negara", fine: 25000, time: 120, impound: 0 },
    { name: "D30 - Aksi Teror terhadap Pemerintah", fine: 0, time: 120, impound: 0 }
  ]
};

function showOffences() {
  const category = document.getElementById("category").value;
  const container = document.getElementById("offence-list");
  container.innerHTML = "";

  if (!category || !offences[category]) {
    container.innerHTML = "<p>Tidak ada pasal untuk kategori ini.</p>";
    return;
  }

  offences[category].forEach(o => {
    const div = document.createElement("div");
    div.className = "offence";
    div.innerHTML = `
      <label>
        <input type="checkbox" 
          data-fine="${o.fine}" 
          data-time="${o.time}" 
          data-impound="${o.impound}" 
          onchange="updateTotals()">
        ${o.name}
      </label>
      <span> — Denda: $${o.fine}, Penjara: ${o.time} bulan, Impound: ${o.impound} hari</span>
    `;
    container.appendChild(div);
  });
}

function updateTotals() {
  let totalFine = 0, totalTime = 0, totalImpound = 0;
  document.querySelectorAll('#offence-list input[type="checkbox"]:checked').forEach(cb => {
    totalFine += Number(cb.dataset.fine);
    totalTime += Number(cb.dataset.time);
    totalImpound += Number(cb.dataset.impound);
  });

  document.getElementById("totalFine").innerText = "$" + totalFine;
  document.getElementById("totalTime").innerText = totalTime + " bulan";
  document.getElementById("totalImpound").innerText = totalImpound + " Hari";
}

function resetCalculator() {
  document.querySelectorAll('#offence-list input[type="checkbox"]').forEach(cb => cb.checked = false);
  updateTotals();
}