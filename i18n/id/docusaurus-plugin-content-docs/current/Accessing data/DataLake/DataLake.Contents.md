---
title: DataLake.Contents
---

# DataLake.Contents


## Description

Masukkan URL akun Azure Data Lake Storage Gen1 Anda.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Menghasilkan tabel yang berisi baris untuk setiap folder dan file yang ditemukan di <code>url</code> dari Azure Data Lake Storage Gen1. Setiap baris berisi properti folder atau file dan tautan ke kontennya.


