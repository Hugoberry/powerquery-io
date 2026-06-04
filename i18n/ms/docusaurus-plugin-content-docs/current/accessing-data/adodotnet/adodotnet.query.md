---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Mengembalikan hasil menjalankan pertanyaan asli pada sumber data ADO.NET.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan hasil daripada menjalankan `query` dengan rentetan sambungan `connectionString` menggunakan penyedia ADO.NET `providerName`. `connectionString` boleh dalam bentuk teks atau rekod pasangan nilai sifat. Nilai sifat boleh dalam bentuk teks atau nombor. Parameter rekod pilihan, `options`, boleh disediakan untuk menentukan sifat tambahan. Rekod boleh mengandungi medan yang berikut:

-   `CommandTimeout` : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.
-   `SqlCompatibleWindowsAuth` : Logik (benar/palsu) yang menentukan sama ada untuk menghasilkan pilihan rentetan sambungan yang serasi dengan SQL Server untuk pengesahan Windows. Nilai lalai ialah benar.



## Category
Accessing data
