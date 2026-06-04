---
title: DB2.Database
---

# DB2.Database


Menghasilkan tabel berisi tabel dan tampilan SQL yang tersedia dalam database Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel berisi tabel dan tampilan SQL yang tersedia di database Db2 di server `server` dalam instans database `database`. Port mungkin ditentukan secara opsional dengan server, dipisahkan oleh titik dua. Parameter catatan opsional, `options`, dapat ditentukan untuk mengontrol opsi berikut:

-   `CreateNavigationProperties` : Logika (true/false) yang mengatur apakah akan membuat properti navigasi pada nilai yang dihasilkan atau tidak (defaultnya adalah true).
-   `NavigationPropertyNameGenerator` : Fungsi yang digunakan untuk pembuatan nama properti navigasi.
-   `Query` : Kueri SQL asli yang digunakan untuk mengambil data. Jika kueri menghasilkan beberapa kumpulan hasil, hanya yang pertama yang akan dikembalikan.
-   `CommandTimeout` : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.
-   `ConnectionTimeout` : Durasi yang mengontrol lamanya waktu tunggu sebelum mengabaikan upaya membuat koneksi ke server. Nilai defaultnya tergantung pada driver.
-   `HierarchicalNavigation` : Logika (true/false) yang mengatur apakah akan melihat tabel yang dikelompokkan berdasarkan nama skema atau tidak (defaultnya adalah false).
-   `Implementation` : Menentukan implementasi penyedia database internal yang akan digunakan. Nilai yang valid adalah: "IBM" dan "Microsoft".
-   `BinaryCodePage` : Angka untuk CCSID (Pengidentifikasi Himpunan Karakter Berkode) untuk mendekode data biner Db2 FOR BIT ke dalam string karakter. Berlaku untuk Implementasi = "Microsoft". Atur 0 untuk menonaktifkan konversi (default). Atur 1 untuk mengonversi berdasarkan pengodean database. Atur angka CCSID lain untuk mengonversi ke pengodean aplikasi.
-   `PackageCollection` : Menentukan nilai string untuk kumpulan paket (defaultnya adalah "NULLID") untuk memungkinkan penggunaan paket yang dibagikan dan diperlukan agar dapat memproses pernyataan SQL. Berlaku untuk Implementation = "Microsoft".
-   `UseDb2ConnectGateway` : Menentukan apakah koneksi dibuat gateway Db2 Connect. Berlaku untuk Implementasi = "Microsoft".

Misalnya, parameter catatan ditentukan sebagai \[option1 = value1, option2 = value2...\] atau \[Query = "select ..."\].



## Category
Accessing data
