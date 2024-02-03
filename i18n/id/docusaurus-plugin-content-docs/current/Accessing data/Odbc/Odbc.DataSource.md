---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

Mengembalikan sebuah tabel dari tabel SQL dan tampilan dari sumber data ODBC. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Menghasilkan sebuah tabel dari tabel SQL dan tampilan dari sumber data ODBC yang ditetapkan oleh string koneksi <code>connectionString</code>. <code>connectionString</code> dapat berupa teks atau catatan pasangan nilai properti. Nilai properti dapat berupa teks atau angka. Sebuah parameter catatan opsional, <code>options</code>, mungkin diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:    <ul><li><code>CreateNavigationProperties</code> : Logika (true/false) yang mengatur apakah akan membuat properti navigasi pada nilai yang dihasilkan atau tidak (defaultnya adalah true).</li><li><code>HierarchicalNavigation</code> : Logika (true/false) yang mengatur apakah akan melihat tabel yang dikelompokkan berdasarkan nama skema atau tidak (defaultnya adalah false).</li><li><code>ConnectionTimeout</code> : Durasi yang mengontrol lama waktu tunggu sebelum mengabaikan upaya membuat koneksi ke server. Nilai defaultnya adalah 15 detik.</li><li><code>CommandTimeout</code> : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.</li><li><code>SqlCompatibleWindowsAuth</code> : Logika (true/false) yang menentukan apakah akan memproduksi opsi string koneksi yang kompatibel dengan SQL Server untuk autentikasi Windows. Nilai defaultnya adalah true.</li></ul>


## Examples

### Example #1 
Menghasilkan tabel SQL dan tampilan dari string koneksi yang disediakan.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
