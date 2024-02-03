---
title: Folder.Contents
---

# Folder.Contents


## Description

Retorna una taula que conté les propietats i els continguts dels fitxers i les carpetes que es troben a la carpeta especificada.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Details

Retorna una taula que conté una fila per cada carpeta i cada fitxer que hi ha a la carpeta <code>path</code>. Cada fila conté les propietats de la carpeta o del fitxer i un enllaç al seu contingut. El paràmetre <code>options</code> actualment està destinat només per a l'ús intern.



## Category
Accessing data
