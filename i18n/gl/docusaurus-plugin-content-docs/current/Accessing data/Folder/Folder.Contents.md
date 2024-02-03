---
title: Folder.Contents
---

# Folder.Contents


## Description

Devolve unha táboa co contido e as propiedades dos ficheiros e cartafoles localizados no cartafol especificado.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Details

Devolve unha táboa que contén unha fila por cada cartafol e ficheiro localizado no cartafol <code>path</code>. Cada fila contén propiedades do cartafol ou do ficheiro e unha ligazón ao seu contido. Agora, o parámetro <code>options</code> só está pensado para uso interno.



## Category
Accessing data
