---
title: Odbc.Query
---

# Odbc.Query


## Description

Mengembalikan hasil dari proses menjalankan kueri asli pada sumber data ODBC.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Menghasilkan hasil dari <code>query</code> yang sedang berjalan dengan string sambungan <code>connectionString</code> menggunakan ODBC. <code>connectionString</code> dapat berupa teks atau catatan pasangan nilai properti. Nilai properti dapat berupa teks atau angka. Sebuah parameter catatan opsional, <code>options</code>, mungkin diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:    <ul><li><code>ConnectionTimeout</code> : Durasi yang mengontrol lama waktu tunggu sebelum mengabaikan upaya membuat koneksi ke server. Nilai defaultnya adalah 15 detik.</li><li><code>CommandTimeout</code> : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.</li><li><code>SqlCompatibleWindowsAuth</code> : Logika (true/false) yang menentukan apakah akan memproduksi opsi string koneksi yang kompatibel dengan SQL Server untuk autentikasi Windows. Nilai defaultnya adalah true.</li></ul>


## Examples

### Example #1 
Mengembalikan hasil dari menjalankan kueri sederhana terhadap string koneksi yang disediakan.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
