# short-circuiting

## Operator Logika

1. Logika AND `&&`
2. Logika OR `||`
3. Logika NOT `!`

## Perilaku logika boolean

3 Sifat mengenai logical operators :

1. Mengembalikan tipe data apapun
2. Menggunakan tipe data apapun
3. Short circuiting evaluation

contoh :

```javascript
console.log(3 || "bambang"); // 3
```

> Pada logika operator `OR` diatas javascript akan menampilkan angka 3 karena javascript telah menemukan _truthy_ value yaitu 3 dan _buru-buru_ menampilkanya sekaligus menghentikan proses. Tentu jika kita taruh 'bambang' di urutan pertama maka 'bambang' akan di tampilkan

hal penting yang perlu kita tahu tentang operator logika di javascript yaitu bahwa javascript mengevaluasi **_dari kiri ke kanan_**. Jadi, jika javascript menemukan operand pertama bernilai `true`, maka javascript akan menghentikan proses '_pembacaan kode_' dan mengabaikan kode setelahnya seperti contoh diatas.

Sebagai pengingat berikut merupakan nilai `truthy` dan `falsy`

### truthy

- `1` - angka
- '`string`'
- `true`
- [`arrays`]
- {`object`}
- `function`(){}

### falsy

- `null`
- `Nan`
- `0` - nol
- `" "`, `' '`, ` ` - string kosong
- `undefined`

## Logika OR

Berdasarkan nilai `truthy` dan `falsy` diatas mari kita buat contoh

```javascript
console.log("" || "bambang"); // bambang
console.log(true || 0); // bambang
console.log(undefined || null || ""); // ''
console.log(undefined || null || "" || 0 || "Hello"); // 'Hello'
```

> Ingat! Prinsipnya adalah javascript akan mencari `truthy` value sampai ketemu - kemudian ditampilkan dan selesei, jika tidak ditemukan maka apa yang paling terakhir akan ditampilkan walaupun semuanya `false`.

Kita akan mempelajari lebih jauh dari perilaku _short circuit_ ini pada kasus rumah makan kita. Pertama tama kita akan menggunakan _operator ternary_. Silahkan lihat source codenya disini untuk objek `rumahMakan`

### Contoh kasus

```javascript
const tanyaMenu = rumahMakan.bakmi ? rumahMakan.bakmi : "Menu tidak ada";
console.log(tanyaMenu); // 'Menu tidak ada'
```

> Seperti kita tahu bahwa di objek `rumahMakan` tidak terdapat property 'bakmi' yang membuatnya bernilai `undefined` (falsy value), jadi javascript akan menampilkan kondisi kedua yaitu 'Menu tidak ada'.

Dengan Logika operator `OR` kita dapat mengambil keuntungan dari adanya _short cuircuit_ ini

```javascript
const tanyaMenu2 = rumahMakan.bakmi || "Menu tidak ada";
console.log(tanyaMenu2); // 'Menu tidak ada'
```

> Dengan prinsip yang sama perilaku short ciruit akan mencari nilai kebenaran sampai ketemu. Jika tidak ketemu maka urutan nilai paling terakhir akan di tampilkan

Dan tentu jika `rumahMakan.bakmi` bernilai benar (menunya ada) maka ia akan menjadi `truthy` kemudian akan ditampilkan

Prinsip logika `OR`: Temukan nilai kebenaran dan segera tampilkan setelah ditemukan sekaligus hentikan proses. Jika tidak ada kebenaran maka tampilkan nilai `false` di urutan paling terakhir

## Logika AND

Perilaku _short circuit_ pada logika `AND` berkebalikan dengan apa yang kita tahu di logika `OR` yang mana _short circuit_ akan langsung mengembalikan nilai `false` jika nilai pertama yang ia temua bernilai `false`. Ingat bahwa cara kerja logika `AND` hanya akan bernilai **benar** jika semuanya **benar**, maka jika salah satunya saja sudah **salah** maka semuanya akan bernilai **salah**.

```javascript
console.log(0 && "bambang"); // 0
```

> Ingat! bahwa operator logika `AND` hanya akan mengembalikan value jika semmuanya bernilai `true`, sedangkan nilai `0` diatas merupakan `falsy` value. maka yang terjadi adalah javascript seketika menghentikan pembacaan kode walaupun nilai setelahnya bernilai `true`.

```javascript
console.log(10 && "bambang"); // bambang
```

> Pada kasus ini jika nilai pertama benar maka javascript akan melanjutkan ke nilai selanjutnya, jika nilai itu juga benar maka pembacaan kode akan terus berlanjut hingga menemukan kebenaran. Jika nilai terakhir bernilai benar, maka nilai terakhir itulah yang pada akhirnya akan ditampilkan

Prinsip logika `AND`: Jika ditemukan salah satu saja kesalahan maka hentikan proses dan tampilkan kesalahan itu.

```javascript
console.log("Hello" && 10 && null && "bambang"); // null
```

> Sudah tahu ya alasanya kenapa yang ditampilkan adalah `null` :)

### Contoh kasus

Kita ingin menampilkan `function` yang ada di `rumahMakan` jika ternyata memang ada (`true`) maka tampilkan

#### Menggunakan pengkondisian

```javascript
if (rumahMakan.mieRebus) {
  rumahMakan.mieRebus("sawi", "daun bawang", "sledri", "kobis", "telur");
}
```

#### Menggunakan Logika AND

```javascript
rumahMakan.mieRebus &&
  rumahMakan.mieRebus("sawi", "daun bawang", "sledri", "kobis", "telur");
```

Kedua cara diatas menghasilkan nilai yang sama, tetapi contoh ini hanya menunjukkan cara kerja _short circuit_ pada kedua operator `AND` dan `OR`.
