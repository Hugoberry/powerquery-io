---
title: DataLake.Contents
---

# DataLake.Contents


Masukkan URL akun Azure Data Lake Storage Gen1 Anda.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel yang berisi baris untuk setiap folder dan file yang ditemukan di `url` dari Azure Data Lake Storage Gen1. Setiap baris berisi properti folder atau file dan tautan ke kontennya.


