---
title: DataLake.Contents
---

# DataLake.Contents


Introduïu l'URL del vostre compte de l'Azure Data Lake Storage Gen1.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula que conté una fila per a cada carpeta i fitxer que es troben disponibles a `url` des de l'Azure Data Lake Storage Gen1. Cada fila conté propietats de la carpeta o el fitxer i un enllaç al seu contingut.


