---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Mengembalikan database Analysis Services di host tertentu.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan database pada instans Layanan Analisis, `server`. Parameter catatan opsional, `options`, dapat diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:

-   `TypedMeasureColumns` : Nilai logika yang mengindikasikan bahwa tipe yang ditentukan di model multi dimensi atau tabel akan digunakan untuk tipe kolom pengukuran yang ditambahkan. Saat diatur ke false, "nomor" tipe akan digunakan untuk semua kolom pengukuran. Nilai default untuk opsi ini adalah false.
-   `Culture` : Nama kultur yang menetapkan kultur untuk data. Hal ini berkaitan dengan properti string koneksi 'Pengidentifikasi Lokal'.
-   `CommandTimeout` : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default tergantung pada driver.
-   `ConnectionTimeout` : Durasi yang mengontrol lamanya waktu tunggu sebelum mengabaikan upaya membuat koneksi ke server. Nilai defaultnya tergantung pada driver.
-   `SubQueries` : Angka (0, 1 atau 2) yang mengatur nilai properti "SubQueries" dalam string koneksi. Ini mengontrol perilaku anggota yang dihitung pada subpilih atau subkubus. (Nilai defaultnya adalah 2).
-   `Implementation`



## Category
Accessing data
