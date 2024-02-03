---
title: List.Split
---

# List.Split


## Description

Divide a lista especificada nunha lista de listas co tamaño de páxina especificado.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

Divide <code>list</code> nunha lista de listas onde o primeiro elemento da lista de saída é unha lista que contén os primeiros <code>pageSize</code> elementos da    lista de orixe, o seguinte elemento da lista de saída é unha lista que contén os seguintes <code>pageSize</code> elementos da lista de orixe etc.



## Category
List.Transformation functions
