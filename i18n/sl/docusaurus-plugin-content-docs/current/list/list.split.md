---
title: List.Split
---

# List.Split


Razdeli navedeni seznam na seznam seznamov z uporabo navedene velikosti strani.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Razdeli `list` na seznam seznamov, kjer je prvi element seznama rezultatov seznam, ki vsebuje prvih `pageSize` elementov iz izvornega seznama, naslednji element seznama rezultatov pa vsebuje naslednjih `pageSize` elementov iz izvornega seznama itd.



## Category
List.Transformation functions
