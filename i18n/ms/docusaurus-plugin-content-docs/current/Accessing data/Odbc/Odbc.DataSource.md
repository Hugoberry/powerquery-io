---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

Kembali jadual daripada jadual SQL dan pandangan daripada sumber data ODBC. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Mengembalikan jadual daripada jadual SQL dan pandangan daripada sumber data ODBC yang ditentukan oleh rentetan sambungan <code>connectionString</code>. <code>connectionString</code> boleh dalam bentuk teks atau rekod pasangan nilai sifat. Nilai sifat boleh juga dalam bentuk teks atau nombor. Parameter rekod opsyenal, <code>options</code>, boleh disediakan untuk menentukan sifat tambahan yang tertentu. Rekod boleh mengandungi medan yang berikut:    <ul><li><code>CreateNavigationProperties</code> : Logik (true/false) yang menetapkan sama ada untuk menjana sifat navigasi pada nilai yang dikembalikan (lalai adalah true).</li><li><code>HierarchicalNavigation</code> : Logik (true/false) yang menetapkan sama ada untuk melihat jadual yang dikumpulkan mengikut nama skema (lalai adalah false).</li><li><code>ConnectionTimeout</code> : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah 15 saat.</li><li><code>CommandTimeout</code> : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.</li><li><code>SqlCompatibleWindowsAuth</code> : Logik (benar/palsu) yang menentukan sama ada untuk menghasilkan pilihan rentetan sambungan yang serasi dengan SQL Server untuk pengesahan Windows. Nilai lalai ialah benar.</li></ul>


## Examples

### Example #1 
Kembalikan jadual dan pandangan SQL daripada rentetan sambungan yang diberikan.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
