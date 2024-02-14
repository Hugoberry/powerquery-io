---
title: DataLake.Contents
---

# DataLake.Contents


Ange URL till ditt Azure Data Lake Storage Gen1-konto.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell som innehåller en rad för varje mapp och fil som hittades på <code>URL</code> från Azure Data Lake Storage Gen1. Varje rad innehåller egenskaper för mappen eller filen och en länk till dess innehåll.


