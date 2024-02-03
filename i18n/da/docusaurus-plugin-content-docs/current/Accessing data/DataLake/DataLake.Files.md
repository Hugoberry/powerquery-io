---
title: DataLake.Files
---

# DataLake.Files


## Description

Angiv URL-adressen til din Azure Data Lake Storage-konto.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Details

Returnerer en tabel, der indeholder en række for hver fil, som blev fundet på <code>URL-adressen</code> fra Azure Data Lake Storage Gen1. Hver række indeholder egenskaberne for filen og et link til indholdet.


