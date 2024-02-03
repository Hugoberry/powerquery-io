---
title: List.Split
---

# List.Split


## Description

Divide a lista especificada em uma lista de listas usando o tamanho da página especificado.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

Divide <code>list</code> em uma lista de listas em que o primeiro elemento da lista de saída é uma lista que contém os primeiros <code>pageSize</code> elementos da    lista de origem, o próximo elemento da lista de saída é uma lista que contém os próximos <code>pageSize</code> elementos da lista de origem, etc.



## Category
List.Transformation functions
