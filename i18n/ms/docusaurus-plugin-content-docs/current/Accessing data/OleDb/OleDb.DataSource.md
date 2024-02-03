---
title: OleDb.DataSource
---

# OleDb.DataSource


## Description

Kembalikan satu jadual bagi jadual dan pandangan SQL daripada sumber data OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Mengembalikan jadual bagi jadual dan paparan SQL daripada sumber data OLE DB yang ditentukan oleh rentetan sambungan <code>connectionString</code>. <code>connectionString</code> boleh berbentuk teks atau rekod bagi pasangan nilai sifat. Nilai sifat boleh berbentuk teks atau nombor. Parameter rekod pilihan, <code>options</code>, boleh diberikan untuk menentukan sifat tambahan. Rekod boleh mengandungi medan berikut:    <ul><li><code>CreateNavigationProperties</code> : Logik (true/false) yang menetapkan sama ada untuk menjana sifat navigasi pada nilai yang dikembalikan (lalai adalah true).</li><li><code>NavigationPropertyNameGenerator</code> : Fungsi yang digunakan untuk mencipta nama bagi sifat navigasi.</li><li><code>Query</code> : Pertanyaan SQL asal yang digunakan untuk mengambil data. Jika pertanyaan menghasilkan berbilang set keputusan, hanya yang pertama akan dikembalikan.</li><li><code>HierarchicalNavigation</code> : Logik (true/false) yang menetapkan sama ada hendak melihat jadual yang dikumpulkan mengikut nama skemanya (lalai adalah true).</li><li><code>ConnectionTimeout</code> : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah bergantung pemacu.</li><li><code>CommandTimeout</code> : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.</li><li><code>SqlCompatibleWindowsAuth</code> : Logik (benar/palsu) yang menentukan sama ada untuk menghasilkan pilihan rentetan sambungan yang serasi dengan SQL Server untuk pengesahan Windows. Nilai lalai ialah benar.</li></ul>    Sebagai contoh, parameter rekod ditentukan sebagai [option1 = value1, option2 = value2...] atau [Query = "select ..."].



## Category
Accessing data
