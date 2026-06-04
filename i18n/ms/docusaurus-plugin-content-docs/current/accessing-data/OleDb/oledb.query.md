---
title: OleDb.Query
---

# OleDb.Query


Kembalikan hasil yang menjalankan pertanyaan asal pada sumber data OLE DB.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan hasil daripada menjalankan `query` dengan rentetan sambungan `connectionString` menggunakan OLE DB. `connectionString` boleh dalam bentuk teks atau rekod pasangan nilai sifat. Nilai sifat boleh dalam bentuk teks atau nombor. Parameter rekod pilihan, `options`, boleh disediakan untuk menentukan sifat tambahan. Rekod boleh mengandungi medan yang berikut:

-   `ConnectionTimeout` : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah bergantung pemacu.
-   `CommandTimeout` : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.
-   `SqlCompatibleWindowsAuth` : Logik (benar/palsu) yang menentukan sama ada untuk menghasilkan pilihan rentetan sambungan yang serasi dengan SQL Server untuk pengesahan Windows. Nilai lalai ialah benar.



## Category
Accessing data
