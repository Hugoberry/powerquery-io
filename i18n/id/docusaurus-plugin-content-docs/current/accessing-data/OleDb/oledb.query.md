---
title: OleDb.Query
---

# OleDb.Query


Mengembalikan hasil dari proses menjalankan kueri asli pada sumber data OLE DB.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan hasil dari `query` yang sedang berjalan dengan string sambungan `connectionString` menggunakan OLE DB. `connectionString` dapat berupa teks atau catatan pasangan nilai properti. Nilai properti dapat berupa teks atau angka. Sebuah parameter catatan opsional, `options`, mungkin diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:

-   `ConnectionTimeout` : Durasi yang mengontrol lamanya waktu tunggu sebelum mengabaikan upaya membuat koneksi ke server. Nilai defaultnya tergantung pada driver.
-   `CommandTimeout` : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.
-   `SqlCompatibleWindowsAuth` : Logika (true/false) yang menentukan apakah akan memproduksi opsi string koneksi yang kompatibel dengan SQL Server untuk autentikasi Windows. Nilai defaultnya adalah true.



## Category
Accessing data
