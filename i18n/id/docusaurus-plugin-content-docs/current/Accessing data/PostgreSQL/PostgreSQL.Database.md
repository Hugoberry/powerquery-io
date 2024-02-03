---
title: PostgreSQL.Database
---

# PostgreSQL.Database


## Description

Menghasilkan tabel berisi tabel dan tampilan SQL yang tersedia di database PostgreSQL.


## Syntax

```powerquery
PostgreSQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Menghasilkan tabel berisi tabel dan tampilan SQL yang tersedia di database PostgreSQL di server <code>server</code> dalam instans database <code>database</code>. Port mungkin ditentukan secara opsional dengan server, dipisahkan titik dua. Parameter catatan opsional, <code>options</code>, dapat ditentukan untuk mengontrol opsi berikut:    <ul><li><code>CreateNavigationProperties</code> : Logika (true/false) yang mengatur apakah akan membuat properti navigasi pada nilai yang dihasilkan atau tidak (defaultnya adalah true).</li><li><code>NavigationPropertyNameGenerator</code> : Fungsi yang digunakan untuk pembuatan nama properti navigasi.</li><li><code>Query</code> : Kueri SQL asli yang digunakan untuk mengambil data. Jika kueri menghasilkan beberapa kumpulan hasil, hanya yang pertama yang akan dikembalikan.</li><li><code>CommandTimeout</code> : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.</li><li><code>ConnectionTimeout</code> : Durasi yang mengontrol lamanya waktu tunggu sebelum mengabaikan upaya membuat koneksi ke server. Nilai defaultnya tergantung pada driver.</li><li><code>HierarchicalNavigation</code> : Logika (true/false) yang mengatur apakah akan melihat tabel yang dikelompokkan berdasarkan nama skema atau tidak (defaultnya adalah false).</li></ul>    Misalnya parameter catatan ditentukan sebagai [option1 = value1, option2 = value2...] atau [Query = "select ..."].    



## Category
Accessing data
