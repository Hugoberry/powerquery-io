---
title: List.Split
---

# List.Split


Divide a lista especificada numa lista de listas com o tamanho de página especificado.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Divide <code>list</code> numa lista de listas em que o primeiro elemento da lista de resultados é uma lista que contém os primeiros <code>pageSize</code> elementos da    lista de origem, o elemento seguinte da lista de resultados é uma lista que contém os <code>pageSize</code> elementos seguintes da lista de origem, etc.



## Category
List.Transformation functions
