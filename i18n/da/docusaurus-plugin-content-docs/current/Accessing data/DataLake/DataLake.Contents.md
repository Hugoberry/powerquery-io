---
title: DataLake.Contents
---

# DataLake.Contents


## Description

Angiv URL-adressen til din Azure Data Lake Storage Gen1-konto.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Returnerer en tabel, der indeholder en række for hver mappe og fil, der blev fundet på <code>URL-adressen</code> fra Azure Data Lake Storage Gen1. Hver række indeholder egenskaberne for mappen eller filen og et link til indholdet.


