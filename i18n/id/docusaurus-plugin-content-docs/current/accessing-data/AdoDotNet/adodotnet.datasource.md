---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Menghasilkan kumpulan skema untuk sumber data ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Menghasilkan kumpulan skema untuk sumber data ADO.NET dengan nama penyedia `providerName` dan string sambungan `connectionString`. `connectionString` dapat berupa teks atau catatan pasangan nilai properti. Nilai properti dapat berupa teks atau angka. Parameter catatan opsional, `options`, mungkin diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:

-   `CommandTimeout` : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.
-   `SqlCompatibleWindowsAuth` : Logika (true/false) yang menentukan apakah akan memproduksi opsi string koneksi yang kompatibel dengan SQL Server untuk autentikasi Windows. Nilai defaultnya adalah true.
-   `TypeMap`



## Category
Accessing data
