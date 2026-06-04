---
title: DataLake.Files
---

# DataLake.Files


Introduïu l'URL del compte de l'Azure Data Lake Storage.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula que conté una fila per a cada fitxer que es troba disponible a `url` des de l'Azure Data Lake Storage Gen1. Cada fila conté propietats del fitxer i un enllaç al seu contingut.


