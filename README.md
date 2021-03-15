# short-circuiting

## Operator Logika

1. Logika AND `&&`
2. Logika OR `||`
3. Logika NOT `!`

## Perilaku logika boolean

3 Sifat mengenai logical operators :

1. Mengembalikan tipe data apapun
2. Menggunakan tipe data apapun
3. Short circuiting evaluation\*/

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
