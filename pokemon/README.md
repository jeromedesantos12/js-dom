# Pokemon Gallery JS

Skrip ini menampilkan galeri gambar 500 Pokemon secara dinamis di halaman web, lengkap dengan fitur interaktif untuk "menangkap" setiap Pokemon.

## Fitur

- Menampilkan 500 gambar Pokemon secara otomatis menggunakan data dari PokeAPI.
- Setiap gambar Pokemon diberi label nomor urut.
- Gambar Pokemon dapat diklik untuk menandai sebagai "tertangkap" (dengan efek visual).
- Jika semua Pokemon sudah diklik, akan muncul alert ucapan selamat.

## Cara Kerja

1. Script mencari elemen dengan id `container` di HTML.
2. Melakukan loop dari 1 sampai 500 untuk membuat elemen Pokemon:
   - Membuat elemen `<div>` dengan class `pokemon`.
   - Membuat elemen `<img>` yang sumber gambarnya diambil dari PokeAPI.
   - Membuat elemen `<span>` berisi nomor Pokemon.
   - Menyusun elemen-elemen tersebut ke dalam container.
3. Setiap gambar Pokemon diberi class `round` untuk efek visual.
4. Jika gambar diklik, class `roundClick` akan ditambahkan/dihapus (toggle).
5. Jika semua gambar sudah diklik, akan muncul alert kemenangan.

## Contoh Struktur HTML yang Dihasilkan

```html
<div id="container">
  <div class="pokemon">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" class="round" />
    <span>#1</span>
  </div>
  <!-- ... hingga #500 -->
</div>
```

## Kebutuhan

- File ini membutuhkan elemen dengan id `container` di HTML.
- Koneksi internet untuk mengambil gambar dari PokeAPI.

## Cara Menggunakan

1. Pastikan file script.js sudah terhubung di HTML.
2. Tambahkan elemen `<div id="container"></div>` di HTML.
3. Buka halaman di browser, galeri Pokemon akan muncul otomatis.
