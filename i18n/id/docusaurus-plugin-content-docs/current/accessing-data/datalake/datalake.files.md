---
title: DataLake.Files
---

# DataLake.Files


Masukkan URL akun Azure Data Lake Storage Anda.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Memberikan tabel yang berisi baris untuk setiap file yang ditemukan di `url`, dari Azure Data Lake Storage Gen1. Setiap baris berisi properti file dan tautan ke kontennya.


