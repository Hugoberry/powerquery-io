---
title: Folder.Files
---

# Folder.Files


## Description

Devuelve una tabla que contiene las propiedades y el contenido de las carpetas y los archivos encontrados en la carpeta y las subcarpetas especificadas.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

Devuelve una tabla que contiene una fila para cada archivo que se encuentra en la carpeta <code>path</code> y todas sus subcarpetas. Cada fila contiene propiedades del archivo y un vínculo a su contenido. El parámetro <code>options</code> está pensado actualmente solo para uso interno.



## Category
Accessing data
