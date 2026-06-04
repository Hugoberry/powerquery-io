---
title: DB2.Database
---

# DB2.Database


Mengembalikan jadual bagi jadual dan pandangan SQL yang tersedia dalam pangkalan data Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual bagi jadual dan pandangan SQL yang tersedia dalam pangkalan data Db2 pada pelayan `server` dalam tika pangkalan data bernama `database`. Port boleh ditentukan secara pilihan dengan pelayan, diasingkan oleh titik bertindih. Parameter rekod pilihan, `options`, boleh ditentukan untuk mengawal opsyen berikut:

-   `CreateNavigationProperties` : Logik (true/false) yang menetapkan sama ada untuk menjana sifat navigasi pada nilai yang dikembalikan (lalai adalah true).
-   `NavigationPropertyNameGenerator` : Fungsi yang digunakan untuk mencipta nama bagi sifat navigasi.
-   `Query` : Pertanyaan SQL asal yang digunakan untuk mengambil data. Jika pertanyaan menghasilkan berbilang set keputusan, hanya yang pertama akan dikembalikan.
-   `CommandTimeout` : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.
-   `ConnectionTimeout` : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah bergantung pemacu.
-   `HierarchicalNavigation` : Logik (true/false) yang menetapkan sama ada untuk melihat jadual yang dikumpulkan mengikut nama skema (lalai adalah false).
-   `Implementation` : Menentukan pelaksanaan pembekal pangkalan data dalaman yang hendak digunakan. Nilai lalai ialah: "IBM" dan "Microsoft".
-   `BinaryCodePage` : Nombor untuk CCSID (Pengecam Set Aksara Berkod) untuk menyahkodkan data perduaan Db2 FOR BIT kepada rentetan aksara. Digunakan pada Pelaksanaan = “Microsoft”. Tetapkan 0 untuk menyahdayakan penukaran (lalai). Tetapkan 1 untuk menukar berdasarkan pengekodan pangkalan data. Tetapkan nombor CCSID lain untuk menukar kepada pengekodan aplikasi.
-   `PackageCollection` : Menentukan nilai rentetan untuk koleksi pakej (lalai adalah "NULLID") untuk mendayakan penggunaan pakej dikongsi yang diperlukan untuk memproses pernyataan SQL. Digunakan pada Pelaksanaan = "Microsoft".
-   `UseDb2ConnectGateway` : Menentukan sama ada sambungan sedang dibuat melalui get laluan Db2 Connect. Digunakan untuk pelaksanaan = "Microsoft".

Parameter rekod ditentukan sebagai \[option1 = value1, option2 = value2...\] atau \[Query = "select ..."\], sebagai contoh.



## Category
Accessing data
