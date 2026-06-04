---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Menghasilkan hasil menjalankan kueri asli di sumber data ADO.NET.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan hasil dari `query` yang sedang berjalan dengan string sambungan `connectionString` menggunakan penyedia ADO.NET `providerName`. `connectionString` dapat berupa teks atau catatan pasangan nilai properti. Nilai properti dapat berupa teks atau angka. Sebuah parameter catatan opsional, `options`, mungkin diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:

-   `CommandTimeout` : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.
-   `SqlCompatibleWindowsAuth` : Logika (true/false) yang menentukan apakah akan memproduksi opsi string koneksi yang kompatibel dengan SQL Server untuk autentikasi Windows. Nilai defaultnya adalah true.



## Category
Accessing data
