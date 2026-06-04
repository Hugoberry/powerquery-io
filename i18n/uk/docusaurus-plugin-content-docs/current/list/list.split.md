---
title: List.Split
---

# List.Split


Розділяє вказаний список на список списків за вказаним розміром сторінки.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Розділяє список "`list`" на список списків, перший із яких містить першу `pageSize`\-елементну частину вихідного списку, наступний – наступну `pageSize`\-елементну частину вихідного списку тощо.



## Category
List.Transformation functions
