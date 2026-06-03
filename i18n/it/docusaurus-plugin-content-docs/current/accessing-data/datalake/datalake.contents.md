---
title: DataLake.Contents
---

# DataLake.Contents


Immettere l'URL dell'account Azure Data Lake Storage Gen1.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella con una riga per ogni cartella e file trovati alla posizione di `url` da Azure Data Lake Storage Gen1. Ogni riga contiene le proprietà della cartella o del file e un collegamento al relativo contenuto.


