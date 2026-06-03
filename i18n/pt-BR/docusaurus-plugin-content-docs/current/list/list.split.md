---
title: List.Split
---

# List.Split


Divide a lista especificada em uma lista de listas usando o tamanho da página especificado.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Divide `list` em uma lista de listas em que o primeiro elemento da lista de saída é uma lista que contém os primeiros `pageSize` elementos da lista de origem, o próximo elemento da lista de saída é uma lista que contém os próximos `pageSize` elementos da lista de origem, etc.



## Category
List.Transformation functions
