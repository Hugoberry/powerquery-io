---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

Impor/data kubus DirectQuery dari AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

Menghasilkan data kubus dari AtScale di server <code>server</code>. Parameter catatan opsional, <code>opsi</code>, dapat ditetapkan untuk mengontrol opsi berikut<ul>        <li><code>TypedMeasureColumns</code>: Nilai logika menunjukkan apakah tipe yang ditentukan dalam model tabular atau multidimensi akan digunakan untuk tipe kolom pengukuran yang ditambahkan. Bila diatur ke false, tipe "nomor" akan digunakan untuk semua kolom pengukuran. Nilai default untuk opsi ini adalah false.</li>        <li><code>CommandTimeout</code>: Durasi (dalam detik) yang mengontrol berapa lama kueri sisi server yang dapat dijalankan sebelum dibatalkan. Nilai defaultnya bergantung pada driver. </li>        <li><code>ConnectionTimeout</code>: Durasi (dalam detik) yang mengontrol berapa lama waktu tunggu sebelum menghentikan upaya untuk menyambungkan ke server. Nilai defaultnya bergantung pada driver. </li></ul>Parameter catatan ditetapkan sebagai [option1 = value1, option2 = value2...].


