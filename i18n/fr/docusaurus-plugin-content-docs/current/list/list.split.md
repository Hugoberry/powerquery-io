---
title: List.Split
---

# List.Split


Divise la liste spécifiée en liste de listes à l'aide de la taille de page spécifiée.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Se divise `list` en une liste de listes où le premier élément de la liste de sortie est une liste contenant les premiers `pageSize` éléments de la liste source, l'élément suivant de la liste de sortie est une liste contenant les éléments `pageSize` suivants de la liste source, et ainsi de suite.



## Category
List.Transformation functions
