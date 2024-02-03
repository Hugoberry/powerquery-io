---
title: DataLake.Files
---

# DataLake.Files


## Description

Immettere l&#39;URL dell&#39;account Azure Data Lake Storage.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Details

Restituisce una tabella con una riga per ogni file trovato alla posizione di <code>url</code> da Azure Data Lake Storage Gen1. Ogni riga contiene le proprietà del file e un collegamento al relativo contenuto.


