---
title: DataLake.Files
---

# DataLake.Files


## Description

Zadajte URL adresu svojho konta Azure Data Lake Storage.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Details

Vráti tabuľku obsahujúcu riadok pre každý súbor nájdený na <code>URL</code> adrese zo služby Azure Data Lake Storage Gen1. Každý riadok obsahuje vlastnosti súboru a prepojenie na jeho obsah.


