---
title: Table.SplitAt
---

# Table.SplitAt


Повертає список з указаною кількістю перших рядків, а також із рештою рядків.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

Повертає список, що містить дві таблиці: з першими N рядками `table` (відповідно до `count`) і з рештою рядків `table`. Якщо таблиці в отриманому списку пронумеровано один раз і по порядку, функція пронумерує `table` лише один раз.


## Examples

### Example #1
Повертає перші два рядки таблиці й решту її рядків.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
