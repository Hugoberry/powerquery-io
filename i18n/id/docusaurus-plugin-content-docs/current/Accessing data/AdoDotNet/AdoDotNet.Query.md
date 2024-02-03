---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

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


## Details

Menghasilkan hasil dari <code>query</code> yang sedang berjalan dengan string sambungan <code>connectionString</code> menggunakan penyedia ADO.NET <code>providerName</code>. <code>connectionString</code> dapat berupa teks atau catatan pasangan nilai properti. Nilai properti dapat berupa teks atau angka. Sebuah parameter catatan opsional, <code>options</code>, mungkin diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:    <ul><li><code>CommandTimeout</code> : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.</li><li><code>SqlCompatibleWindowsAuth</code> : Logika (true/false) yang menentukan apakah akan memproduksi opsi string koneksi yang kompatibel dengan SQL Server untuk autentikasi Windows. Nilai defaultnya adalah true.</li></ul>



## Category
Accessing data
