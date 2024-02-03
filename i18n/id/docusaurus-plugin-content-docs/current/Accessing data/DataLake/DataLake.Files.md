---
title: DataLake.Files
---

# DataLake.Files


## Description

Masukkan URL akun Azure Data Lake Storage Anda.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Details

Memberikan tabel yang berisi baris untuk setiap file yang ditemukan di <code>url</code>, dari Azure Data Lake Storage Gen1. Setiap baris berisi properti file dan tautan ke kontennya.


