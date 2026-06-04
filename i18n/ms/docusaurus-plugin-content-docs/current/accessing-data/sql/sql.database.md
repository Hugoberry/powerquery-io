---
title: Sql.Database
---

# Sql.Database


Mengembalikan jadual bagi jadual, paparan dan fungsi disimpan SQL daripada pangkalan data pelayan SQL.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual bagi jadual, paparan dan fungsi disimpan bagi SQL daripada pangkalan data SQL Server `database` pada pelayan `server`. Port boleh ditentukan secara pilihan dengan pelayan, diasingkan oleh titik bertindih atau koma. Parameter rekod pilihan, `options`, boleh ditentukan untuk mengawal opsyen berikut:

-   `Query` : Pertanyaan SQL asal yang digunakan untuk mengambil data. Jika pertanyaan menghasilkan berbilang set keputusan, hanya yang pertama akan dikembalikan.
-   `CreateNavigationProperties` : Logik (true/false) yang menetapkan sama ada untuk menjana sifat navigasi pada nilai yang dikembalikan (lalai adalah true).
-   `NavigationPropertyNameGenerator` : Fungsi yang digunakan untuk mencipta nama bagi sifat navigasi.
-   `MaxDegreeOfParallelism` : Nombor yang menetapkan nilai fasal pertanyaan "maxdop" dalam pertanyaan SQL yang dijana.
-   `CommandTimeout` : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.
-   `ConnectionTimeout` : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah bergantung pemacu.
-   `HierarchicalNavigation` : Logik (true/false) yang menetapkan sama ada untuk melihat jadual yang dikumpulkan mengikut nama skema (lalai adalah false).
-   `MultiSubnetFailover` : Logik (true/false) yang menetapkan nilai sifat "MultiSubnetFailover" dalam rentetan sambungan (lalai adalah false).
-   `UnsafeTypeConversions` : Logik (benar/palsu) yang, jika benar, mencuba untuk menugaskan pertukaran jenis yang boleh gagal dan menyebabkan keseluruhan pertanyaan gagal. Tidak disyorkan untuk kegunaan umum.
-   `ContextInfo` : Nilai perduaan yang digunakan untuk mengeset CONTEXT\_INFO sebelum menjalankan setiap perintah.
-   `OmitSRID` : Logik (benar/palsu) yang, jika benar, tidak memasukkan SRID apabila menghasilkan Well-Known Text daripada jenis geometri dan geografi.
-   `EnableCrossDatabaseFolding` : Nilai logik (benar/palsu) yang, jika benar, membenarkan penugasan pertanyaan merentasi pangkalan data pada pelayan yang sama. Nilai lalai adalah palsu.

Parameter rekod ditentukan sebagai \[option1 = value1, option2 = value2...\] atau \[Query = "select ..."\], sebagai contoh.



## Category
Accessing data
