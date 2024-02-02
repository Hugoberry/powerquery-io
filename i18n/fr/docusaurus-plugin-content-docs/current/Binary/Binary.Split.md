---
title: Binary.Split
---

# Binary.Split


## Description

Divise le fichier binaire spécifié en liste de fichiers binaires à l’aide de la taille de page spécifiée.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

Divise <code>binary</code> en une liste de fichiers binaires où le premier élément de la liste de sortie est un fichier binaire contenant les premiers <code>pageSize</code> octets du    fichier binaire source, l’élément suivant de la liste de sortie est un fichier binaire contenant les <code>pageSize</code> octets suivants du fichier binaire source, et ainsi de suite.



## Category
Binary
