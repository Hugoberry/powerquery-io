---
title: Sql.Databases
---

# Sql.Databases


## Description

Mengembalikan jadual bagi pangkalan data pada Pelayan SQL.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Mengembalikan jadual pangkalan data pada SQL server yang ditentukan, <code>server</code>. Parameter rekod pilihan, <code>options</code>, boleh ditentukan untuk mengawal pilihan berikut:    <ul><li><code>CreateNavigationProperties</code> : Logik (true/false) yang menetapkan sama ada untuk menjana sifat navigasi pada nilai yang dikembalikan (lalai adalah true).</li><li><code>NavigationPropertyNameGenerator</code> : Fungsi yang digunakan untuk mencipta nama bagi sifat navigasi.</li><li><code>MaxDegreeOfParallelism</code> : Nombor yang menetapkan nilai fasal pertanyaan &quot;maxdop&quot; dalam pertanyaan SQL yang dijana.</li><li><code>CommandTimeout</code> : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.</li><li><code>ConnectionTimeout</code> : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah bergantung pemacu.</li><li><code>HierarchicalNavigation</code> : Logik (true/false) yang menetapkan sama ada untuk melihat jadual yang dikumpulkan mengikut nama skema (lalai adalah false).</li><li><code>MultiSubnetFailover</code> : Logik (true/false) yang menetapkan nilai sifat &quot;MultiSubnetFailover&quot; dalam rentetan sambungan (lalai adalah false).</li><li><code>UnsafeTypeConversions</code> : Logik (benar/palsu) yang, jika benar, mencuba untuk menugaskan pertukaran jenis yang boleh gagal dan menyebabkan keseluruhan pertanyaan gagal. Tidak disyorkan untuk kegunaan umum.</li><li><code>ContextInfo</code> : Nilai perduaan yang digunakan untuk mengeset CONTEXT_INFO sebelum menjalankan setiap perintah.</li><li><code>OmitSRID</code> : Logik (benar/palsu) yang, jika benar, tidak memasukkan SRID apabila menghasilkan Well-Known Text daripada jenis geometri dan geografi.</li><li><code>EnableCrossDatabaseFolding</code> : Nilai logik (benar/palsu) yang, jika benar, membenarkan penugasan pertanyaan merentasi pangkalan data pada pelayan yang sama. Nilai lalai adalah palsu.</li></ul>    Parameter rekod ditentukan sebagai, contohnya [option1 = value1, option2 = value2...].    <br />    Tidak menyokong tetapan pertanyaan SQL untuk dijalankan pada pelayan. <code>Sql.Database</code> perlu digunakan sebagai ganti untuk menjalankan pertanyaan SQL.    



## Category
Accessing data
