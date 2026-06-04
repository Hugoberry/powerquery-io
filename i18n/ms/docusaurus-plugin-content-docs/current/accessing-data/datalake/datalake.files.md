---
title: DataLake.Files
---

# DataLake.Files


Masukkan URL akaun Azure Data Lake Storage anda.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual yang mengandungi baris untuk setiap fail yang ditemui di `url` daripada Azure Data Lake Storage Gen1. Setiap baris mengandungi sifat fail dan pautan kepada kandungannya.


