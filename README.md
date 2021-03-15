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

Berdasarkan nilai `truthy` dan `falsy` diatas mari kita buat contoh lagi

```javascript
console.log("" || "bambang"); // bambang
console.log(true || 0); // bambang
console.log(undefined || null || ""); // ''
console.log(undefined || null || "" || 0 || "Hello"); // 'Hello'
```

> Ingat! Prinsipnya adalah javascript akan mencari `truthy` value sampai ketemu - kemudian ditampilkan dan selesei, jika tidak ditemukan maka apa yang paling terakhir akan ditampilkan walaupun semuanya `false`.

## Contoh kasus

Kita akan mempelajari lebih jauh dari perilaku _short circuit_ ini pada kasus rumah makan kita. Pertama tama kita akan menggunakan _operator ternary_. Silahkan lihat source codenya disini untuk objek `rumahMakan`

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
