---
title: List.Split
---

# List.Split


Rozdělí zadaný seznam do seznamu seznamů s použitím zadané velikosti stránky.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Rozdělí `list` do seznamu seznamů, kde první prvek výstupního seznamu je seznam s prvními `pageSize` prvky ze zdrojového seznamu, další prvek výstupního seznamu je seznam s dalšími `pageSize` prvky ze zdrojového seznamu atd.



## Category
List.Transformation functions
