---
title: Sql.Databases
---

# Sql.Databases


Mengembalikan jadual bagi pangkalan data pada Pelayan SQL.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual pangkalan data pada SQL server yang ditentukan, `server`. Parameter rekod pilihan, `options`, boleh ditentukan untuk mengawal opsyen berikut:

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

Parameter rekod ditentukan sebagai \[option1 = value1, option2 = value2...\], contohnya.  
  
Tidak menyokong seting pertanyaan SQL untuk dijalankan pada pelayan. `Sql.Database` harus digunakan sebagai ganti untuk menjalankan pertanyaan SQL.



## Category
Accessing data
