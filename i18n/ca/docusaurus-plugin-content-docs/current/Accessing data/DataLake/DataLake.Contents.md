---
title: DataLake.Contents
---

# DataLake.Contents


## Description

Introduïu l&#39;URL del vostre compte de l&#39;Azure Data Lake Storage Gen1.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Retorna una taula que conté una fila per a cada carpeta i fitxer que es troben disponibles a <code>url</code> des de l'Azure Data Lake Storage Gen1. Cada fila conté propietats de la carpeta o el fitxer i un enllaç al seu contingut.


