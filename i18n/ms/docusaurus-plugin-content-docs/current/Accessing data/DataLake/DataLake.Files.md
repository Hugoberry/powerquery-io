---
title: DataLake.Files
---

# DataLake.Files


## Description

Masukkan URL akaun Azure Data Lake Storage anda.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Details

Mengembalikan jadual yang mengandungi baris untuk setiap fail yang ditemui di <code>url</code> daripada Azure Data Lake Storage Gen1. Setiap baris mengandungi sifat fail dan pautan kepada kandungannya.


