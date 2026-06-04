---
title: Folder.Files
---

# Folder.Files


Retorna una taula que conté les propietats i els continguts dels fitxers que hi ha a la carpeta i les subcarpetes especificades.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula que conté una fila per a cada fitxer trobat a la carpeta especificada i a totes les seves subcarpetes.

-   `path`: el camí de la carpeta d'on voleu recuperar els fitxers. El camí de la carpeta subministrada ha de ser un camí absolut.
-   `options`: (Opcional) Aquest paràmetre està destinat actualment només per a ús intern.

Cada fila de la taula retornada conté propietats del fitxer i un enllaç al seu contingut.


## Examples

### Example #1
Retorna una taula que conté tots els fitxers trobats a C:\\test-examples\\example-folder i totes les seves subcarpetes.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
