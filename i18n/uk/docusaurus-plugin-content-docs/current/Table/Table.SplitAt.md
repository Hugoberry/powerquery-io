---
title: Table.SplitAt
---

# Table.SplitAt


## Description

Повертає список з указаною кількістю перших рядків, а також із рештою рядків.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

Повертає список, що містить дві таблиці: з першими N рядками <code>table</code> (відповідно до <code>count</code>) і з рештою рядків <code>table</code>.Якщо таблиці в отриманому списку пронумеровано один раз і по порядку, функція пронумерує <code>table</code> лише один раз.


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
