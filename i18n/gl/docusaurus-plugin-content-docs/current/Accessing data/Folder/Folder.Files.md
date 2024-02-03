---
title: Folder.Files
---

# Folder.Files


## Description

Devolve unha táboa co contido e as propiedades dos ficheiros localizados no cartafol e subcartafoles especificados.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

Devolve unha táboa que contén unha fila por cada ficheiro localizado no cartafol <code>path</code> e nos seus subcartafoles. Cada fila contén propiedades do ficheiro e unha ligazón ao seu contido. Agora, o parámetro <code>options</code> só está pensado para uso interno.



## Category
Accessing data
