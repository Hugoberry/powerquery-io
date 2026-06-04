---
title: Odbc.DataSource
---

# Odbc.DataSource


Kembali jadual daripada jadual SQL dan pandangan daripada sumber data ODBC.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual daripada jadual SQL dan pandangan daripada sumber data ODBC yang ditentukan oleh rentetan sambungan `connectionString`. `connectionString` boleh dalam bentuk teks atau rekod pasangan nilai sifat. Nilai sifat boleh juga dalam bentuk teks atau nombor. Parameter rekod opsyenal, `options`, boleh disediakan untuk menentukan sifat tambahan yang tertentu. Rekod boleh mengandungi medan yang berikut:

-   `CreateNavigationProperties` : Logik (true/false) yang menetapkan sama ada untuk menjana sifat navigasi pada nilai yang dikembalikan (lalai adalah true).
-   `HierarchicalNavigation` : Logik (true/false) yang menetapkan sama ada untuk melihat jadual yang dikumpulkan mengikut nama skema (lalai adalah false).
-   `ConnectionTimeout` : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah 15 saat.
-   `CommandTimeout` : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.
-   `SqlCompatibleWindowsAuth` : Logik (benar/palsu) yang menentukan sama ada untuk menghasilkan pilihan rentetan sambungan yang serasi dengan SQL Server untuk pengesahan Windows. Nilai lalai ialah benar.


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
