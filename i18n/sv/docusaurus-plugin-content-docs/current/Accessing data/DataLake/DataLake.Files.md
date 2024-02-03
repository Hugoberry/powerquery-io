---
title: DataLake.Files
---

# DataLake.Files


## Description

Ange URL:en till ditt Azure Data Lake Storage-konto.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Details

Returnerar en tabell som innehåller en rad för varje fil som hittades på <code>URL</code> från Azure Data Lake Storage Gen1. Varje rad innehåller egenskaper för filen och en länk till dess innehåll.


