---
title: DataLake.Files
---

# DataLake.Files


## Description

Introduïu l&#39;URL del compte de l&#39;Azure Data Lake Storage.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Details

Retorna una taula que conté una fila per a cada fitxer que es troba disponible a <code>url</code> des de l'Azure Data Lake Storage Gen1. Cada fila conté propietats del fitxer i un enllaç al seu contingut.


