---
title: DataLake.Contents
---

# DataLake.Contents


## Description

Masukkan URL akaun Azure Data Lake Storage Gen1 anda.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Mengembalikan jadual yang mengandungi baris untuk setiap folder dan fail yang ditemui di <code>url</code> daripada Azure Data Lake Storage Gen1. Setiap baris mengandungi sifat folder atau fail dan pautan kepada kandungannya.


