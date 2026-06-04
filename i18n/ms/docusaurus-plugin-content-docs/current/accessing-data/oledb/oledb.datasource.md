---
title: OleDb.DataSource
---

# OleDb.DataSource


Kembalikan satu jadual bagi jadual dan pandangan SQL daripada sumber data OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual bagi jadual dan pandangan SQL daripada sumber data OLE DB yang ditentukan oleh rentetan sambungan `connectionString`. `connectionString` boleh jadi teks atau rekod pasangan nilai sifat. Nilai sifat boleh berbentuk teks atau nombor. Parameter rekod pilihan, `options`, boleh diberikan untuk menentukan sifat tambahan. Rekod tersebut boleh mengandungi medan berikut:

-   `CreateNavigationProperties` : Logik (true/false) yang menetapkan sama ada untuk menjana sifat navigasi pada nilai yang dikembalikan (lalai adalah true).
-   `NavigationPropertyNameGenerator` : Fungsi yang digunakan untuk mencipta nama bagi sifat navigasi.
-   `Query` : Pertanyaan SQL asal yang digunakan untuk mengambil data. Jika pertanyaan menghasilkan berbilang set keputusan, hanya yang pertama akan dikembalikan.
-   `HierarchicalNavigation` : Logik (true/false) yang menetapkan sama ada hendak melihat jadual yang dikumpulkan mengikut nama skemanya (lalai adalah true).
-   `ConnectionTimeout` : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah bergantung pemacu.
-   `CommandTimeout` : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.
-   `SqlCompatibleWindowsAuth` : Logik (benar/palsu) yang menentukan sama ada untuk menghasilkan pilihan rentetan sambungan yang serasi dengan SQL Server untuk pengesahan Windows. Nilai lalai ialah benar.

Parameter rekod ditentukan sebagai \[option1 = value1, option2 = value2...\] atau \[Query = "select ..."\], sebagai contoh.



## Category
Accessing data
