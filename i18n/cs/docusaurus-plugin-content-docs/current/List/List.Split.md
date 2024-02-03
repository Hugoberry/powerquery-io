---
title: List.Split
---

# List.Split


## Description

Rozdělí zadaný seznam do seznamu seznamů s použitím zadané velikosti stránky.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

Rozdělí <code>list</code> do seznamu seznamů, kde první prvek výstupního seznamu je seznam s prvními <code>pageSize</code> prvky ze zdrojového seznamu,    další prvek výstupního seznamu je seznam s dalšími <code>pageSize</code> prvky ze zdrojového seznamu atd.



## Category
List.Transformation functions
