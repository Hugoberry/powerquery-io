---
title: DataLake.Files
---

# DataLake.Files


Zadejte adresu URL svého účtu Azure Data Lake Storage.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku obsahující řádek pro každý soubor nacházející se na adrese `url` z Azure Data Lake Storage Gen1. Každý řádek obsahuje vlastnosti souboru a odkaz na jeho obsah.


