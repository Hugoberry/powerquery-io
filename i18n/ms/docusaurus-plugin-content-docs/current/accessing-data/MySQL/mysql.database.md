---
title: MySQL.Database
---

# MySQL.Database


Mengembalikan jadual bagi jadual, paparan dan fungsi skalar disimpan SQL yang tersedia dalam pangkalan data MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual bagi jadual, paparan dan fungsi skalar disimpan bagi SQL yang tersedia dalam pangkalan data MySQL pada pelayan `server` dalam tika pangkalan data bernama `database`. Port boleh ditentukan secara pilihan dengan pelayan, diasingkan oleh titik bertindih. Parameter rekod pilihan, `options`, boleh ditentukan untuk mengawal opsyen berikut:

-   `Encoding` : Nilai TextEncoding yang menentukan set aksara yang digunakan untuk Kodkan semua pertanyaan yang dihantar kepada pelayan (lalai ialah nol).
-   `CreateNavigationProperties` : Logik (true/false) yang menetapkan sama ada untuk menjana sifat navigasi pada nilai yang dikembalikan (lalai adalah true).
-   `NavigationPropertyNameGenerator` : Fungsi yang digunakan untuk mencipta nama bagi sifat navigasi.
-   `Query` : Pertanyaan SQL asal yang digunakan untuk mengambil data. Jika pertanyaan menghasilkan berbilang set keputusan, hanya yang pertama akan dikembalikan.
-   `CommandTimeout` : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.
-   `ConnectionTimeout` : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah bergantung pemacu.
-   `TreatTinyAsBoolean` : Logik (true/false) yang menentukan sama ada untuk memaksa lajur tinyint pada pelayan sebagai nilai logik. Nilai lalai adalah true.
-   `OldGuids` : Logik (true/false) yang menetapkan sama ada lajur char(36) (jika false) atau lajur binary(16) (jika true) akan dikendalikan sebagai GUID. Nilai lalai adalah false.
-   `ReturnSingleDatabase` : Logik (true/false) yang menetapkan sama ada untuk mengembalikan semua jadual bagi semua pangkalan data (jika false) atau untuk mengembalikan jadual dan paparan pangkalan data yang ditentukan (jika true). Nilai lalai adalah false.
-   `HierarchicalNavigation` : Logik (true/false) yang menetapkan sama ada untuk melihat jadual yang dikumpulkan mengikut nama skema (lalai adalah false).

Parameter rekod ditentukan sebagai \[option1 = value1, option2 = value2...\] atau \[Query = "select ..."\], sebagai contoh.



## Category
Accessing data
