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

Dzieli listę <code>list</code> na listę list, w której pierwszy element listy wyjściowej jest listą zawierającą pierwsze <code>pageSize</code> elementy(-ów) z    listy źródłowej, następny element listy wyjściowej to lista zwierającą kolejne <code>pageSize</code> elementy(-ów) z listy źródłowej itd.



## Category
List.Transformation functions
