---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

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


## Details

Mengembalikan hasil daripada menjalankan <code>query</code> dengan rentetan sambungan <code>connectionString</code> menggunakan penyedia ADO.NET <code>providerName</code>. <code>connectionString</code> boleh dalam bentuk teks atau rekod pasangan nilai sifat. Nilai sifat boleh dalam bentuk teks atau nombor. Parameter rekod pilihan, <code>options</code>, boleh disediakan untuk menentukan sifat tambahan. Rekod boleh mengandungi medan yang berikut:    <ul><li><code>CommandTimeout</code> : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.</li><li><code>SqlCompatibleWindowsAuth</code> : Logik (benar/palsu) yang menentukan sama ada untuk menghasilkan pilihan rentetan sambungan yang serasi dengan SQL Server untuk pengesahan Windows. Nilai lalai ialah benar.</li></ul>



## Category
Accessing data
