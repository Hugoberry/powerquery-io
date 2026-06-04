---
title: Sql.Database
---

# Sql.Database


Menghasilkan tabel berisi tabel, tampilan, dan fungsi SQL tersimpan dari database SQL Server.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel berisi tabel, tampilan dan fungsi SQL yang disimpan dari database SQL Server `database` di server `server`. Port mungkin ditentukan secara opsional dengan server, dipisahkan oleh titik dua. Parameter catatan opsional, `options`, dapat ditentukan untuk mengontrol opsi berikut:

-   `Query` : Kueri SQL asli yang digunakan untuk mengambil data. Jika kueri menghasilkan beberapa kumpulan hasil, hanya yang pertama yang akan dikembalikan.
-   `CreateNavigationProperties` : Logika (true/false) yang mengatur apakah akan membuat properti navigasi pada nilai yang dihasilkan atau tidak (defaultnya adalah true).
-   `NavigationPropertyNameGenerator` : Fungsi yang digunakan untuk pembuatan nama properti navigasi.
-   `MaxDegreeOfParallelism` : Angka yang menetapkan nilai klausa kueri "maxdop" di kueri SQL yang dibuat.
-   `CommandTimeout` : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.
-   `ConnectionTimeout` : Durasi yang mengontrol lamanya waktu tunggu sebelum mengabaikan upaya membuat koneksi ke server. Nilai defaultnya tergantung pada driver.
-   `HierarchicalNavigation` : Logika (true/false) yang mengatur apakah akan melihat tabel yang dikelompokkan berdasarkan nama skema atau tidak (defaultnya adalah false).
-   `MultiSubnetFailover` : Logika (true/false) yang mengatur nilai properti "MultiSubnetFailover" di string koneksi (defaultnya adalah false).
-   `UnsafeTypeConversions` : Logika (true/false) yang, jika true, berupaya untuk melipat konversi tipe yang dapat gagal dan menyebabkan seluruh kueri gagal. Tidak disarankan untuk penggunaan umum.
-   `ContextInfo` : Nilai biner yang digunakan untuk menetapkan CONTEXT\_INFO sebelum menjalankan setiap perintah.
-   `OmitSRID` : Logika (true/false) yang, jika true, menghilangkan SRID saat menghasilkan Well-Known Text dari tipe geometri dan geografi.
-   `EnableCrossDatabaseFolding` : Nilai logis (true/false) yang, jika bernilai true, memungkinkan pelipatan kueri di seluruh database pada server yang sama. Nilai defaultnya false.

Misalnya, parameter catatan ditentukan sebagai \[option1 = value1, option2 = value2...\] atau \[Query = "select ..."\].



## Category
Accessing data
