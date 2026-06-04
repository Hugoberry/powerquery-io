---
title: PostgreSQL.Database
---

# PostgreSQL.Database


Menghasilkan tabel berisi tabel dan tampilan SQL yang tersedia di database PostgreSQL.


## Syntax

```powerquery
PostgreSQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel berisi tabel dan tampilan SQL yang tersedia di database PostgreSQL di server `server` dalam instans database `database`. Port mungkin ditentukan secara opsional dengan server, dipisahkan oleh titik dua. Parameter catatan opsional, `options`, dapat ditentukan untuk mengontrol opsi berikut:

-   `CreateNavigationProperties` : Logika (true/false) yang mengatur apakah akan membuat properti navigasi pada nilai yang dihasilkan atau tidak (defaultnya adalah true).
-   `NavigationPropertyNameGenerator` : Fungsi yang digunakan untuk pembuatan nama properti navigasi.
-   `Query` : Kueri SQL asli yang digunakan untuk mengambil data. Jika kueri menghasilkan beberapa kumpulan hasil, hanya yang pertama yang akan dikembalikan.
-   `CommandTimeout` : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.
-   `ConnectionTimeout` : Durasi yang mengontrol lamanya waktu tunggu sebelum mengabaikan upaya membuat koneksi ke server. Nilai defaultnya tergantung pada driver.
-   `HierarchicalNavigation` : Logika (true/false) yang mengatur apakah akan melihat tabel yang dikelompokkan berdasarkan nama skema atau tidak (defaultnya adalah false).

Misalnya, parameter catatan ditentukan sebagai \[option1 = value1, option2 = value2...\] atau \[Query = "select ..."\].



## Category
Accessing data
