---
title: Sql.Database
---

# Sql.Database


## Description

Mengembalikan jadual bagi jadual, paparan dan fungsi disimpan SQL daripada pangkalan data pelayan SQL.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Mengembalikan jadual bagi jadual, paparan dan fungsi disimpan bagi SQL daripada pangkalan data SQL Server <code>database</code> pada pelayan <code>server</code>. Port boleh ditentukan secara pilihan dengan pelayan, diasingkan oleh titik bertindih atau koma. Parameter rekod pilihan, <code>options</code>, boleh ditentukan untuk mengawal opsyen berikut:    <ul><li><code>Query</code> : Pertanyaan SQL asal yang digunakan untuk mengambil data. Jika pertanyaan menghasilkan berbilang set keputusan, hanya yang pertama akan dikembalikan.</li><li><code>CreateNavigationProperties</code> : Logik (true/false) yang menetapkan sama ada untuk menjana sifat navigasi pada nilai yang dikembalikan (lalai adalah true).</li><li><code>NavigationPropertyNameGenerator</code> : Fungsi yang digunakan untuk mencipta nama bagi sifat navigasi.</li><li><code>MaxDegreeOfParallelism</code> : Nombor yang menetapkan nilai fasal pertanyaan &quot;maxdop&quot; dalam pertanyaan SQL yang dijana.</li><li><code>CommandTimeout</code> : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.</li><li><code>ConnectionTimeout</code> : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah bergantung pemacu.</li><li><code>HierarchicalNavigation</code> : Logik (true/false) yang menetapkan sama ada untuk melihat jadual yang dikumpulkan mengikut nama skema (lalai adalah false).</li><li><code>MultiSubnetFailover</code> : Logik (true/false) yang menetapkan nilai sifat &quot;MultiSubnetFailover&quot; dalam rentetan sambungan (lalai adalah false).</li><li><code>UnsafeTypeConversions</code> : Logik (benar/palsu) yang, jika benar, mencuba untuk menugaskan pertukaran jenis yang boleh gagal dan menyebabkan keseluruhan pertanyaan gagal. Tidak disyorkan untuk kegunaan umum.</li><li><code>ContextInfo</code> : Nilai perduaan yang digunakan untuk mengeset CONTEXT_INFO sebelum menjalankan setiap perintah.</li><li><code>OmitSRID</code> : Logik (benar/palsu) yang, jika benar, tidak memasukkan SRID apabila menghasilkan Well-Known Text daripada jenis geometri dan geografi.</li><li><code>EnableCrossDatabaseFolding</code> : Nilai logik (benar/palsu) yang, jika benar, membenarkan penugasan pertanyaan merentasi pangkalan data pada pelayan yang sama. Nilai lalai adalah palsu.</li></ul>    Parameter rekod ditentukan sebagai, contohnya [option1 = value1, option2 = value2...] atau [Query = "select …”].    



## Category
Accessing data
