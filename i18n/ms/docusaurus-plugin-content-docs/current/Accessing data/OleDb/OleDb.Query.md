---
title: OleDb.Query
---

# OleDb.Query


## Description

Kembalikan hasil yang menjalankan pertanyaan asal pada sumber data OLE DB.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Mengembalikan hasil daripada menjalankan <code>query</code> dengan rentetan sambungan <code>connectionString</code> menggunakan OLE DB. <code>connectionString</code> boleh dalam bentuk teks atau rekod pasangan nilai sifat. Nilai sifat boleh dalam bentuk teks atau nombor. Parameter rekod pilihan, <code>options</code>, boleh disediakan untuk menentukan sifat tambahan. Rekod boleh mengandungi medan yang berikut:    <ul><li><code>ConnectionTimeout</code> : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah bergantung pemacu.</li><li><code>CommandTimeout</code> : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.</li><li><code>SqlCompatibleWindowsAuth</code> : Logik (benar/palsu) yang menentukan sama ada untuk menghasilkan pilihan rentetan sambungan yang serasi dengan SQL Server untuk pengesahan Windows. Nilai lalai ialah benar.</li></ul>



## Category
Accessing data
