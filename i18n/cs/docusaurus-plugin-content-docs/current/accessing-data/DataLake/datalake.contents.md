---
title: DataLake.Contents
---

# DataLake.Contents


Zadejte URL svého účtu Azure Data Lake Storage Gen1.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku obsahující řádek pro každou složku a soubor nacházející se na adrese `url` z Azure Data Lake Storage Gen1. Každý řádek obsahuje vlastnosti složky nebo souboru a odkaz na jejich obsah.


