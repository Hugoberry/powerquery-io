---
title: AnalysisServices.Database
---

# AnalysisServices.Database


## Description

Hasilkan sebuah tabel kubus multidimensi atau model tabular dari database Layanan Analisis.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Menghasilkan tabel model kubus atau tabel multidimensi dari database Layanan Analisis <code>database</code> pada server <code>server</code>. Parameter catatan opsional, <code>options</code> dapat ditentukan untuk mengontrol opsi berikut:    <ul><li><code>Query</code> : Kueri MDX asli yang digunakan untuk mengambil data.</li><li><code>TypedMeasureColumns</code> : Nilai logika yang mengindikasikan bahwa tipe yang ditentukan di model multi dimensi atau tabel akan digunakan untuk tipe kolom pengukuran yang ditambahkan. Saat diatur ke false, &quot;nomor&quot; tipe akan digunakan untuk semua kolom pengukuran. Nilai default untuk opsi ini adalah false.</li><li><code>Culture</code> : Nama kultur yang menetapkan kultur untuk data. Hal ini berkaitan dengan properti string koneksi &#39;Pengidentifikasi Lokal&#39;.</li><li><code>CommandTimeout</code> : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default tergantung pada driver.</li><li><code>ConnectionTimeout</code> : Durasi yang mengontrol lamanya waktu tunggu sebelum mengabaikan upaya membuat koneksi ke server. Nilai defaultnya tergantung pada driver.</li><li><code>SubQueries</code> : Angka (0, 1 atau 2) yang mengatur nilai properti &quot;SubQueries&quot; dalam string koneksi. Ini mengontrol perilaku anggota yang dihitung pada subpilih atau subkubus. (Nilai defaultnya adalah 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
