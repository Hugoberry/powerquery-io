---
title: Binary.Split
---

# Binary.Split


Scindează binarul specificat într-o listă de fișiere binare, utilizând dimensiunea de pagină specificată.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Scindează `binary` într-o listă de fișiere binare în care primul element din lista de ieșire este un binar care conține primii `pageSize` byți din binarul sursă, următorul element al listei de ieșire este un binar care conține următorii `pageSize` byți din binarul sursă și așa mai departe.



## Category
Binary
