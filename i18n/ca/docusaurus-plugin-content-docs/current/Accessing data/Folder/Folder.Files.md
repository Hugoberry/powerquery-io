---
title: Folder.Files
---

# Folder.Files


## Description

Retorna una taula que conté les propietats i els continguts dels fitxers que hi ha a la carpeta i les subcarpetes especificades.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

Retorna una taula que conté una fila per cada fitxer que hi ha a la carpeta <code>path</code> i totes les seves subcarpetes. Cada fila conté les propietats del fitxer i un enllaç al seu contingut. El paràmetre <code>options</code> actualment està destinat només per a l'ús intern.



## Category
Accessing data
