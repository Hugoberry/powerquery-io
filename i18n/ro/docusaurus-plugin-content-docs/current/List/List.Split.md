---
title: List.Split
---

# List.Split


## Description

Scindează lista specificată într-o listă de liste, utilizând dimensiunea de pagină specificată.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

Scindează <code>list</code> într-o listă de liste în care primul element al listei de ieșire este o listă care conține primele <code>pageSize</code> elemente din    lista sursă, următorul element al listei de ieșire este o listă care conține următoarele <code>pageSize</code> elemente din lista sursă și așa mai departe.



## Category
List.Transformation functions
