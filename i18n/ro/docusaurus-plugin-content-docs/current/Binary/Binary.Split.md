---
title: Binary.Split
---

# Binary.Split


## Description

Scindează binarul specificat într-o listă de fișiere binare, utilizând dimensiunea de pagină specificată.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

Scindează <code>binary</code> într-o listă de fișiere binare în care primul element din lista de ieșire este un binar care conține primii <code>pageSize</code> byți din binarul sursă, următorul element al listei de ieșire este un binar care conține următorii <code>pageSize</code> byți din binarul sursă și așa mai departe.



## Category
Binary
