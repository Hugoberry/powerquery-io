---
title: DataLake.Contents
---

# DataLake.Contents


## Description

Indica o URL da conta de Azure Data Lake Storage Gen1.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Devolve unha táboa que contén unha fila para cada cartafol e ficheiro que se encontra en <code>url</code> desde Azure Data Lake Storage Gen1. Cada fila contén propiedades do cartafol ou ficheiro e unha ligazón ao seu contido.


