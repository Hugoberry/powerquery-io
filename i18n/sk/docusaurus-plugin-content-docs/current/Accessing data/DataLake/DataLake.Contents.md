---
title: DataLake.Contents
---

# DataLake.Contents


## Description

Zadajte URL adresu svojho konta Azure Data Lake Storage Gen1.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Vráti tabuľku obsahujúcu riadok pre každý priečinok a súbor nájdený na <code>URL</code> adrese zo služby Azure Data Lake Storage Gen1. Každý riadok obsahuje vlastnosti priečinka alebo súboru a prepojenie na jeho obsah.


