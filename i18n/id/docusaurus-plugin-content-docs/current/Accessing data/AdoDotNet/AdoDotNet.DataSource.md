---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

Menghasilkan kumpulan skema untuk sumber data ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

Menghasilkan kumpulan skema untuk sumber data ADO.NET dengan nama penyedia <code>providerName</code> dan string sambungan <code>connectionString</code>. <code>connectionString</code> dapat berupa teks atau catatan pasangan nilai properti. Nilai properti dapat berupa teks atau angka. Parameter catatan opsional, <code>options</code>, mungkin diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:    <ul><li><code>CommandTimeout</code> : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.</li><li><code>SqlCompatibleWindowsAuth</code> : Logika (true/false) yang menentukan apakah akan memproduksi opsi string koneksi yang kompatibel dengan SQL Server untuk autentikasi Windows. Nilai defaultnya adalah true.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
