---
title: DataLake.Contents
---

# DataLake.Contents


Masukkan URL akaun Azure Data Lake Storage Gen1 anda.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual yang mengandungi baris untuk setiap folder dan fail yang ditemui di `url` daripada Azure Data Lake Storage Gen1. Setiap baris mengandungi sifat folder atau fail dan pautan kepada kandungannya.


