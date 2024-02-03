---
title: Sql.Databases
---

# Sql.Databases


## Description

Menghasilkan tabel database di SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Menghasilkan tabel database pada SQL server tertentu, <code>server</code>. Parameter catatan opsional, <code>options</code>, dapat ditetapkan untuk mengontrol opsi berikut:    <ul><li><code>CreateNavigationProperties</code> : Logika (true/false) yang mengatur apakah akan membuat properti navigasi pada nilai yang dihasilkan atau tidak (defaultnya adalah true).</li><li><code>NavigationPropertyNameGenerator</code> : Fungsi yang digunakan untuk pembuatan nama properti navigasi.</li><li><code>MaxDegreeOfParallelism</code> : Angka yang menetapkan nilai klausa kueri &quot;maxdop&quot; di kueri SQL yang dibuat.</li><li><code>CommandTimeout</code> : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.</li><li><code>ConnectionTimeout</code> : Durasi yang mengontrol lamanya waktu tunggu sebelum mengabaikan upaya membuat koneksi ke server. Nilai defaultnya tergantung pada driver.</li><li><code>HierarchicalNavigation</code> : Logika (true/false) yang mengatur apakah akan melihat tabel yang dikelompokkan berdasarkan nama skema atau tidak (defaultnya adalah false).</li><li><code>MultiSubnetFailover</code> : Logika (true/false) yang mengatur nilai properti &quot;MultiSubnetFailover&quot; di string koneksi (defaultnya adalah false).</li><li><code>UnsafeTypeConversions</code> : Logika (true/false) yang, jika true, berupaya untuk melipat konversi tipe yang dapat gagal dan menyebabkan seluruh kueri gagal. Tidak disarankan untuk penggunaan umum.</li><li><code>ContextInfo</code> : Nilai biner yang digunakan untuk menetapkan CONTEXT_INFO sebelum menjalankan setiap perintah.</li><li><code>OmitSRID</code> : Logika (true/false) yang, jika true, menghilangkan SRID saat menghasilkan Well-Known Text dari tipe geometri dan geografi.</li><li><code>EnableCrossDatabaseFolding</code> : Nilai logis (true/false) yang, jika bernilai true, memungkinkan pelipatan kueri di seluruh database pada server yang sama. Nilai defaultnya false.</li></ul>    Misalnya, parameter catatan ditetapkan sebagai [option1 = value1, option2 = value2...].    <br />    Tidak mendukung pengaturan kueri SQL agar berjalan di server. <code>Sql.Database</code> harus digunakan sebagai ganti menjalankan kueri SQL.    



## Category
Accessing data
