---
title: MySQL.Database
---

# MySQL.Database


Menghasilkan tabel berisi tabel, tampilan, dan fungsi skalar SQL tersimpan yang tersedia di database MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel berisi tabel, tampilan dan fungsi skalar SQL yang tersedia di database MySQL di server `server` dalam instans database `database`. Port mungkin ditentukan secara opsional dengan server, dipisahkan oleh titik dua. Parameter catatan opsional, `options`, dapat ditentukan untuk mengontrol opsi berikut:

-   `Encoding` : Nilai TextEncoding yang menetapkan rangkaian karakter yang digunakan untuk mengodekan semua kueri yang dikirim ke server (defaultnya null).
-   `CreateNavigationProperties` : Logika (true/false) yang mengatur apakah akan membuat properti navigasi pada nilai yang dihasilkan atau tidak (defaultnya adalah true).
-   `NavigationPropertyNameGenerator` : Fungsi yang digunakan untuk pembuatan nama properti navigasi.
-   `Query` : Kueri SQL asli yang digunakan untuk mengambil data. Jika kueri menghasilkan beberapa kumpulan hasil, hanya yang pertama yang akan dikembalikan.
-   `CommandTimeout` : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.
-   `ConnectionTimeout` : Durasi yang mengontrol lamanya waktu tunggu sebelum mengabaikan upaya membuat koneksi ke server. Nilai defaultnya tergantung pada driver.
-   `TreatTinyAsBoolean` : Logika (true/false) yang menentukan apakah akan memberlakukan kolom tinyint di server sebagai nilai logika atau tidak. Nilai defaultnya adalah true.
-   `OldGuids` : Logika (true/false) yang mengatur apakah kolom char(36) (jika false) atau kolom biner(16) (jika true) akan diperlakukan sebagai GUID atau tidak. Nilai defaultnya adalah false.
-   `ReturnSingleDatabase` : Logika (true/false) yang mengatur apakah akan menghasilkan semua tabel dari semua database (jika false) atau menghasilkan tabel dan tampilan database tertentu (jika true). Nilai defaultnya adalah false.
-   `HierarchicalNavigation` : Logika (true/false) yang mengatur apakah akan melihat tabel yang dikelompokkan berdasarkan nama skema atau tidak (defaultnya adalah false).

Misalnya, parameter catatan ditentukan sebagai \[option1 = value1, option2 = value2...\] atau \[Query = "select ..."\].



## Category
Accessing data
