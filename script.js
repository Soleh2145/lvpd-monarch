const offenceHeadlines = {
  A: "Pasal A - Lalu Lintas",
  B: "Pasal B - Pelanggaran Umum",
  C: "Pasal C - Kejahatan Ringan",
  D: "Pasal D - Kejahatan Berat"
};

const offences = {
  A: [ // Sekarang A = Lalu Lintas (dulunya B)
    { name: "B01 - Kekerasan Ringan", fine: 2000, time: 20, impound: 0 },
    { name: "B02 - Gangguan Ketertiban Umum", fine: 800, time: 6, impound: 0 },
    { name: "B03 - Pencurian Ringan", fine: 1500, time: 18, impound: 0 },
    { name: "B04 - Vandalisme Ringan", fine: 1200, time: 12, impound: 0 },
    { name: "B05 - Mabuk di Tempat Umum", fine: 700, time: 3, impound: 0 },
    { name: "B06 - Pelecehan Ringan", fine: 900, time: 6, impound: 0 },
    { name: "B07 - Kepemilikan Narkotika Skala Kecil", fine: 3000, time: 24, impound: 0 },
    { name: "B08 - Masuk Paksa Properti Ringan", fine: 2500, time: 22, impound: 0 },
    { name: "B09 - Menyimpan Barang Curian Ringan", fine: 1800, time: 15, impound: 0 },
    { name: "B10 - Kembang Api Ilegal", fine: 900, time: 4, impound: 0 }
    // dst sesuai list B
  ],
  B: [ // Sekarang B = Pasal A lama (Mengemudi & Lalu Lintas)
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

// Simpan status checkbox tiap kategori
let checkedState = { A: [], B: [], C: [], D: [] };

// Inisialisasi semua kategori langsung tampil
function initOffences() {
  const container = document.getElementById("offence-list");
  container.innerHTML = "";

  Object.keys(offences).forEach(cat => {
    // Headline kategori
    const headline = document.createElement("h2");
    headline.innerText = offenceHeadlines[cat];
    container.appendChild(headline);

    // Daftar checkbox
    offences[cat].forEach((o, index) => {
      const div = document.createElement("div");
      div.className = "offence";
      div.innerHTML = `
        <label>
          <input type="checkbox" 
            data-category="${cat}"
            data-index="${index}"
            data-fine="${o.fine}" 
            data-time="${o.time}" 
            data-impound="${o.impound}" 
            onchange="updateState(this)">
          ${o.name}
        </label>
        <span> — Denda: $${o.fine}, Penjara: ${o.time} bulan, Impound: ${o.impound} hari</span>
      `;

      // restore checkbox state
      if (checkedState[cat][index]) div.querySelector("input").checked = true;

      container.appendChild(div);
    });
  });
}

// Update state saat checkbox diklik
function updateState(cb) {
  const cat = cb.dataset.category;
  const idx = cb.dataset.index;
  checkedState[cat][idx] = cb.checked;
  updateTotals();
}

// Hitung total
function updateTotals() {
  let totalFine = 0, totalTime = 0, totalImpound = 0;
  Object.keys(checkedState).forEach(cat => {
    checkedState[cat].forEach((checked, idx) => {
      if (checked) {
        const o = offences[cat][idx];
        totalFine += o.fine;
        totalTime += o.time;
        totalImpound += o.impound;
      }
    });
  });
  document.getElementById("totalFine").innerText = "$" + totalFine;
  document.getElementById("totalTime").innerText = totalTime + " bulan";
  document.getElementById("totalImpound").innerText = totalImpound + " Hari";
}

// Reset semua checkbox di semua kategori
function resetCalculator() {
  Object.keys(checkedState).forEach(cat => {
    checkedState[cat] = checkedState[cat].map(() => false);
  });
  document.querySelectorAll('#offence-list input[type="checkbox"]').forEach(cb => cb.checked = false);
  updateTotals();
}

// Load awal
window.onload = () => {
  initOffences();
  updateTotals();
};
