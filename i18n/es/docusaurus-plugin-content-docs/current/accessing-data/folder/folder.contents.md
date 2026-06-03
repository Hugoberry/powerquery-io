---
title: Folder.Contents
---

# Folder.Contents


Devuelve una tabla con las propiedades y el contenido de los archivos y carpetas que se encuentran en la carpeta especificada.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla que contiene una fila por cada carpeta y archivo encontrados en la carpeta `path`. Cada fila contiene propiedades de la carpeta o archivo y un vínculo a su contenido. El parámetro `options` está pensado actualmente solo para uso interno.



## Category
Accessing data
