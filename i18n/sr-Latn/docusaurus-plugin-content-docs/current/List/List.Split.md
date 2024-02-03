---
title: List.Split
---

# List.Split


## Description

Deli navedenu listu na listu lista koristeći navedenu veličinu stranice.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

Deli <code>list</code> na listu lista gde je prvi element izlazne liste lista koja sadrži prvih <code>pageSize</code>elemenata sa    liste izvora, sledeći element izlazne liste je lista koja sadrži sledećih <code>pageSize</code>elemenata sa liste izvora, i tako dalje.



## Category
List.Transformation functions
