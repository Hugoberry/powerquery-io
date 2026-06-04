---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Mengembalikan koleksi skema untuk sumber data ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Mengembalikan koleksi skim untuk sumber data ADO.NET dengan nama penyedia `providerName` dengan rentetan sambungan `connectionString`. `connectionString` boleh dalam bentuk teks atau rekod pasangan nilai sifat. Nilai sifat boleh dalam bentuk teks atau nombor. Parameter rekod pilihan, `options`, boleh disediakan untuk menentukan sifat tambahan. Rekod boleh mengandungi medan yang berikut:

-   `CommandTimeout` : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.
-   `SqlCompatibleWindowsAuth` : Logik (benar/palsu) yang menentukan sama ada untuk menghasilkan pilihan rentetan sambungan yang serasi dengan SQL Server untuk pengesahan Windows. Nilai lalai ialah benar.
-   `TypeMap`



## Category
Accessing data
