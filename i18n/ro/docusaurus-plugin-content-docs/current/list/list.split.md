---
title: List.Split
---

# List.Split


Scindează lista specificată într-o listă de liste, utilizând dimensiunea de pagină specificată.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Scindează `list` într-o listă de liste în care primul element al listei de ieșire este o listă care conține primele `pageSize` elemente din lista sursă, următorul element al listei de ieșire este o listă care conține următoarele `pageSize` elemente din lista sursă și așa mai departe.



## Category
List.Transformation functions
