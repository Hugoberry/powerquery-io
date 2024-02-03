---
title: DataLake.Files
---

# DataLake.Files


## Description

Zadejte adresu URL svého účtu Azure Data Lake Storage.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Details

Vrátí tabulku obsahující řádek pro každý soubor nacházející se na adrese <code>url</code> z Azure Data Lake Storage Gen1. Každý řádek obsahuje vlastnosti souboru a odkaz na jeho obsah.


