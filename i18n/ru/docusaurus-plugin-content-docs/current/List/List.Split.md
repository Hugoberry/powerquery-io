---
title: List.Split
---

# List.Split


## Description

Разделяет указанный список на список списков с заданным размером страницы.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

Разделяет <code>list</code> на список списков, где первый элемент выходного списка — список с первыми элементами (<code>pageSize</code>) из    исходного списка, следующий элемент выходного списка — список со следующими элементами (<code>pageSize</code>) из исходного списка и т. д.



## Category
List.Transformation functions
