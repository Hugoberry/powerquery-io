---
title: List.Split
---

# List.Split


Permite dividir la lista especificada en una lista de listas usando el tamaño de página especificado.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Divide `list` una lista de listas donde el primer elemento de la lista de salida es una lista que contiene el primer `pageSize` elementos de la lista de origen, el siguiente elemento de la lista de salida es una lista que contiene los siguientes `pageSize`elementos de la lista de origen, etc.



## Category
List.Transformation functions
