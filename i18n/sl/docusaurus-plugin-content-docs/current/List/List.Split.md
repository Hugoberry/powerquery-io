---
title: List.Split
---

# List.Split


## Description

Razdeli navedeni seznam na seznam seznamov z uporabo navedene velikosti strani.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

Razdeli <code>list</code> na seznam seznamov, kjer je prvi element seznama rezultatov seznam, ki vsebuje prvih <code>pageSize</code> elementov iz     izvornega seznama, naslednji element seznama rezultatov pa vsebuje naslednjih <code>pageSize</code> elementov iz izvornega seznama itd.



## Category
List.Transformation functions
