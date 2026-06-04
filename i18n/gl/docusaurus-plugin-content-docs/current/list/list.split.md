---
title: List.Split
---

# List.Split


Divide a lista especificada nunha lista de listas co tamaño de páxina especificado.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Divide `list` nunha lista de listas onde o primeiro elemento da lista de saída é unha lista que contén os primeiros `pageSize` elementos da lista de orixe, o seguinte elemento da lista de saída é unha lista que contén os seguintes `pageSize` elementos da lista de orixe etc.



## Category
List.Transformation functions
