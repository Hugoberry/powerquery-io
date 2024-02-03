---
title: MySQL.Database
---

# MySQL.Database


## Description

Mengembalikan jadual bagi jadual, paparan dan fungsi skalar disimpan SQL yang tersedia dalam pangkalan data MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Mengembalikan jadual bagi jadual, paparan dan fungsi skalar disimpan bagi SQL yang tersedia dalam pangkalan data MySQL pada pelayan <code>server</code> dalam tika pangkalan data bernama <code>database</code>. Port boleh ditentukan secara pilihan dengan pelayan, diasingkan oleh titik bertindih. Parameter rekod pilihan, <code>options</code>, boleh ditentukan untuk mengawal opsyen berikut:    <ul><li><code>Encoding</code> : Nilai TextEncoding yang menentukan set aksara yang digunakan untuk Kodkan semua pertanyaan yang dihantar kepada pelayan (lalai ialah nol).</li><li><code>CreateNavigationProperties</code> : Logik (true/false) yang menetapkan sama ada untuk menjana sifat navigasi pada nilai yang dikembalikan (lalai adalah true).</li><li><code>NavigationPropertyNameGenerator</code> : Fungsi yang digunakan untuk mencipta nama bagi sifat navigasi.</li><li><code>Query</code> : Pertanyaan SQL asal yang digunakan untuk mengambil data. Jika pertanyaan menghasilkan berbilang set keputusan, hanya yang pertama akan dikembalikan.</li><li><code>CommandTimeout</code> : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.</li><li><code>ConnectionTimeout</code> : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah bergantung pemacu.</li><li><code>TreatTinyAsBoolean</code> : Logik (true/false) yang menentukan sama ada untuk memaksa lajur tinyint pada pelayan sebagai nilai logik. Nilai lalai adalah true.</li><li><code>OldGuids</code> : Logik (true/false) yang menetapkan sama ada lajur char(36) (jika false) atau lajur binary(16) (jika true) akan dikendalikan sebagai GUID. Nilai lalai adalah false.</li><li><code>ReturnSingleDatabase</code> : Logik (true/false) yang menetapkan sama ada untuk mengembalikan semua jadual bagi semua pangkalan data (jika false) atau untuk mengembalikan jadual dan paparan pangkalan data yang ditentukan (jika true). Nilai lalai adalah false.</li><li><code>HierarchicalNavigation</code> : Logik (true/false) yang menetapkan sama ada untuk melihat jadual yang dikumpulkan mengikut nama skema (lalai adalah false).</li></ul>    Parameter rekod ditentukan sebagai, contohnya [option1 = value1, option2 = value2...] atau [Query = "select …”].    



## Category
Accessing data
