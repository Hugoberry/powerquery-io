---
title: List.Split
---

# List.Split


Dzieli określoną listę na listę list przy użyciu określonego rozmiaru strony.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Dzieli listę `list` na listę list, w której pierwszy element listy wyjściowej jest listą zawierającą pierwsze `pageSize` elementy(-ów) z listy źródłowej, następny element listy wyjściowej to lista zwierającą kolejne `pageSize` elementy(-ów) z listy źródłowej itd.



## Category
List.Transformation functions
