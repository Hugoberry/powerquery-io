---
title: DataLake.Files
---

# DataLake.Files


Indica o URL da conta de Azure Data Lake Storage.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa que contén unha fila para cada ficheiro que se encontra en `url`, desde Azure Data Lake Storage Gen1. Cada fila contén propiedades do ficheiro e unha ligazón ao seu contido.


