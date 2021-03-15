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

// ----- LOGIKA OR -----

console.log(undefined || null || ""); // "" --> false semua
console.log("" || "bambang"); // bambang --> "" adalah falsy value
console.log(null || undefined); // undefined --> keduanya false tapi tetap ditampilkan nilai yang terakhir
console.log("Hello" || 10 || null || "bambang"); // null

/* Mencari nilai kebenaran dengan operator ternary */
const tanyaMenu = rumahMakan.bakmi ? rumahMakan.bakmi : "Menu tidak ada";
console.log(tanyaMenu); // 'Menu tidak ada'

/* Dengan Operator Logika OR */
const tanyaMenu2 = rumahMakan.bakmi || "Menu tidak ada";
console.log(tanyaMenu2); // 'Menu tidak ada'

// ----- LOGIKA AND -----
console.log(0 && "bambang"); // 0
console.log(10 && "bambang"); // bambang
console.log("Hello" && 10 && null && "bambang"); // null

/* Contoh Kasus */

if (rumahMakan.mieRebus) {
  rumahMakan.mieRebus("sawi", "daun bawang", "sledri", "kobis", "telur");
}

rumahMakan.mieRebus &&
  rumahMakan.mieRebus("sawi", "daun bawang", "sledri", "kobis", "telur");
