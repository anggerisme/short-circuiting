// ----- OVERVIEW -----
console.log(undefined || null || ""); // ""
console.log("" || "bambang"); // bambang
console.log(null || undefined); // undefined

// ----- CONTOH KASUS -----

const rumahMakan = {
  nama: "Rumah makan berkah",
  lokasi: "Jalan merpati blok m",
  kategori: ["tradisional", "murah", "warteg"],
  makanan: ["soto", "gulai ikan", "rendang", "sate", "nasi goreng"],
  minuman: ["es teh", "es jeruk", "kopi"],
  jamBuka: {
    kam: {
      buka: 12,
      tutup: 22,
    },
    jum: {
      buka: 11,
      tutup: 23,
    },
    sab: {
      buka: 0,
      tutup: 24,
    },
  },

  mieRebus: function (sawi, ...bumbuLain) {
    console.log(sawi);
    console.log(...bumbuLain);
  },
};
/* Mencari nilai kebenaran dengan operator ternary */
const tanyaMenu = rumahMakan.bakmi ? rumahMakan.bakmi : "Menu tidak ada";
console.log(tanyaMenu); // 'Menu tidak ada'

/* Dengan Operator Logika OR */
const tanyaMenu2 = rumahMakan.bakmi || "Menu tidak ada";
console.log(tanyaMenu2); // 'Menu tidak ada'
