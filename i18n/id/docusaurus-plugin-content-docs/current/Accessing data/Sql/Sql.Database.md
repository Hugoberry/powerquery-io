---
title: Sql.Database
---

# Sql.Database


## Description

Menghasilkan tabel berisi tabel, tampilan, dan fungsi SQL tersimpan dari database SQL Server.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Menghasilkan tabel berisi tabel, tampilan dan fungsi SQL yang disimpan dari database SQL Server <code>database</code> di server <code>server</code>. Port mungkin ditentukan secara opsional dengan server, dipisahkan oleh titik dua. Parameter catatan opsional, <code>options</code>, dapat ditentukan untuk mengontrol opsi berikut:    <ul><li><code>Query</code> : Kueri SQL asli yang digunakan untuk mengambil data. Jika kueri menghasilkan beberapa kumpulan hasil, hanya yang pertama yang akan dikembalikan.</li><li><code>CreateNavigationProperties</code> : Logika (true/false) yang mengatur apakah akan membuat properti navigasi pada nilai yang dihasilkan atau tidak (defaultnya adalah true).</li><li><code>NavigationPropertyNameGenerator</code> : Fungsi yang digunakan untuk pembuatan nama properti navigasi.</li><li><code>MaxDegreeOfParallelism</code> : Angka yang menetapkan nilai klausa kueri &quot;maxdop&quot; di kueri SQL yang dibuat.</li><li><code>CommandTimeout</code> : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.</li><li><code>ConnectionTimeout</code> : Durasi yang mengontrol lamanya waktu tunggu sebelum mengabaikan upaya membuat koneksi ke server. Nilai defaultnya tergantung pada driver.</li><li><code>HierarchicalNavigation</code> : Logika (true/false) yang mengatur apakah akan melihat tabel yang dikelompokkan berdasarkan nama skema atau tidak (defaultnya adalah false).</li><li><code>MultiSubnetFailover</code> : Logika (true/false) yang mengatur nilai properti &quot;MultiSubnetFailover&quot; di string koneksi (defaultnya adalah false).</li><li><code>UnsafeTypeConversions</code> : Logika (true/false) yang, jika true, berupaya untuk melipat konversi tipe yang dapat gagal dan menyebabkan seluruh kueri gagal. Tidak disarankan untuk penggunaan umum.</li><li><code>ContextInfo</code> : Nilai biner yang digunakan untuk menetapkan CONTEXT_INFO sebelum menjalankan setiap perintah.</li><li><code>OmitSRID</code> : Logika (true/false) yang, jika true, menghilangkan SRID saat menghasilkan Well-Known Text dari tipe geometri dan geografi.</li><li><code>EnableCrossDatabaseFolding</code> : Nilai logis (true/false) yang, jika bernilai true, memungkinkan pelipatan kueri di seluruh database pada server yang sama. Nilai defaultnya false.</li></ul>    Misalnya, parameter catatan ditentukan sebagai [option1 = value1, option2 = value2...] atau [Query = "select ..."].    



## Category
Accessing data
