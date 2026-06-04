---
title: Folder.Contents
---

# Folder.Contents


Retorna una taula que conté les propietats i els continguts dels fitxers i les carpetes que es troben a la carpeta especificada.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula que conté una fila per cada carpeta i cada fitxer que hi ha a la carpeta `path`. Cada fila conté les propietats de la carpeta o del fitxer i un enllaç al seu contingut. El paràmetre `options` actualment està destinat només per a l'ús intern.



## Category
Accessing data
