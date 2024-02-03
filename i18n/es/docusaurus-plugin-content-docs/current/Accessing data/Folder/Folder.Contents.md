---
title: Folder.Contents
---

# Folder.Contents


## Description

Devuelve una tabla con las propiedades y el contenido de los archivos y carpetas que se encuentran en la carpeta especificada.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Details

Devuelve una tabla que contiene una fila por cada carpeta y archivo encontrados en la carpeta <code>path</code>. Cada fila contiene propiedades de la carpeta o archivo y un vínculo a su contenido. El parámetro <code>options</code> está pensado actualmente solo para uso interno.



## Category
Accessing data
