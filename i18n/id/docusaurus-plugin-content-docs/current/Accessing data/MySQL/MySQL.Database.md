---
title: MySQL.Database
---

# MySQL.Database


## Description

Menghasilkan tabel berisi tabel, tampilan, dan fungsi skalar SQL tersimpan yang tersedia di database MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Menghasilkan tabel berisi tabel, tampilan dan fungsi skalar SQL yang tersedia di database MySQL di server <code>server</code> dalam instans database <code>database</code>. Port mungkin ditentukan secara opsional dengan server, dipisahkan oleh titik dua. Parameter catatan opsional, <code>options</code>, dapat ditentukan untuk mengontrol opsi berikut:    <ul><li><code>Encoding</code> : Nilai TextEncoding yang menetapkan rangkaian karakter yang digunakan untuk mengodekan semua kueri yang dikirim ke server (defaultnya null).</li><li><code>CreateNavigationProperties</code> : Logika (true/false) yang mengatur apakah akan membuat properti navigasi pada nilai yang dihasilkan atau tidak (defaultnya adalah true).</li><li><code>NavigationPropertyNameGenerator</code> : Fungsi yang digunakan untuk pembuatan nama properti navigasi.</li><li><code>Query</code> : Kueri SQL asli yang digunakan untuk mengambil data. Jika kueri menghasilkan beberapa kumpulan hasil, hanya yang pertama yang akan dikembalikan.</li><li><code>CommandTimeout</code> : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.</li><li><code>ConnectionTimeout</code> : Durasi yang mengontrol lamanya waktu tunggu sebelum mengabaikan upaya membuat koneksi ke server. Nilai defaultnya tergantung pada driver.</li><li><code>TreatTinyAsBoolean</code> : Logika (true/false) yang menentukan apakah akan memberlakukan kolom tinyint di server sebagai nilai logika atau tidak. Nilai defaultnya adalah true.</li><li><code>OldGuids</code> : Logika (true/false) yang mengatur apakah kolom char(36) (jika false) atau kolom biner(16) (jika true) akan diperlakukan sebagai GUID atau tidak. Nilai defaultnya adalah false.</li><li><code>ReturnSingleDatabase</code> : Logika (true/false) yang mengatur apakah akan menghasilkan semua tabel dari semua database (jika false) atau menghasilkan tabel dan tampilan database tertentu (jika true). Nilai defaultnya adalah false.</li><li><code>HierarchicalNavigation</code> : Logika (true/false) yang mengatur apakah akan melihat tabel yang dikelompokkan berdasarkan nama skema atau tidak (defaultnya adalah false).</li></ul>    Misalnya, parameter catatan ditentukan sebagai [option1 = value1, option2 = value2...] atau [Query = "select ..."].    



## Category
Accessing data
