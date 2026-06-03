---
title: DataLake.Files
---

# DataLake.Files


Angiv URL-adressen til din Azure Data Lake Storage-konto.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel, der indeholder en række for hver fil, som blev fundet på `URL-adressen` fra Azure Data Lake Storage Gen1. Hver række indeholder egenskaberne for filen og et link til indholdet.


