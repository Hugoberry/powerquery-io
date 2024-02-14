---
title: List.Split
---

# List.Split


Divise la liste spécifiée en liste de listes à l&#39;aide de la taille de page spécifiée.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Se divise <code>list</code> en une liste de listes où le premier élément de la liste de sortie est une liste contenant les premiers <code>pageSize</code> éléments de    la liste source, l'élément suivant de la liste de sortie est une liste contenant les éléments <code>pageSize</code> suivants de la liste source, et ainsi de suite.



## Category
List.Transformation functions
