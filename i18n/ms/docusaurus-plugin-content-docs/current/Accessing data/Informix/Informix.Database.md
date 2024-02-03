---
title: Informix.Database
---

# Informix.Database


## Description

Mengembalikan satu jadual SQL dan paparan yang terdapat di pangkalan data Informix.


## Syntax

```powerquery
Informix.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Mengembalikan jadual bagi jadual dan paparan SQL yang tersedia dalam pangkalan data Informix pada pelayan <code>server</code> dalam tika pangkalan data bernama <code>database</code>. Port boleh ditentukan secara pilihan dengan pelayan, diasingkan oleh titik bertindih. Parameter rekod pilihan, <code>options</code>, boleh ditentukan untuk mengawal opsyen berikut:    <ul><li><code>CreateNavigationProperties</code> : Logik (true/false) yang menetapkan sama ada untuk menjana sifat navigasi pada nilai yang dikembalikan (lalai adalah true).</li><li><code>NavigationPropertyNameGenerator</code> : Fungsi yang digunakan untuk mencipta nama bagi sifat navigasi.</li><li><code>Query</code> : Pertanyaan SQL asal yang digunakan untuk mengambil data. Jika pertanyaan menghasilkan berbilang set keputusan, hanya yang pertama akan dikembalikan.</li><li><code>CommandTimeout</code> : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.</li><li><code>ConnectionTimeout</code> : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah bergantung pemacu.</li><li><code>HierarchicalNavigation</code> : Logik (true/false) yang menetapkan sama ada untuk melihat jadual yang dikumpulkan mengikut nama skema (lalai adalah false).</li></ul>    Parameter rekod ditentukan sebagai, contohnya [option1 = value1, option2 = value2...] atau [Query = "select …”].    



## Category
Accessing data
