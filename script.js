// ----- SHORT CIRCUIT -----

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

/* Nullish coalescing Operator ?? */
console.log(0 ?? undefined); // 0 karena 0 termasuk ke dalam 'defined' value
/* Ket : Karena nilai a sudah null dari awal maka seluruhnya salah, jugapun jika a = 10 dan b = undefined maka tetaplah salah, maka pilihan yang diambil adalah selalu kondisi 2  */
let a = 11;
let b = undefined;
let c = 10;
const result = a ?? b ?? c;
console.log(result); // 11 -> Jika sudah didapat nilai `defined` maka segera tampilkan dan hentikan proses

/* Memberikan nilai default untuk variable yang bernilai `undefined` */
let user;
alert(user ?? "Anonim" ? `john` : "Williaw"); // John
