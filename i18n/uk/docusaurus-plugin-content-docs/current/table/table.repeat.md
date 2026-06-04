---
title: Table.Repeat
---

# Table.Repeat


Повторює рядки таблиць зазначену кількість разів.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Remarks

Повертає таблицю з рядками із введення (`table`), повторюваними зазначену кількість разів (`count`).


## Examples

### Example #1
Повторити рядки таблиці двічі.
```powerquery
Table.Repeat(
    Table.FromRecords({
        [a = 1, b = "hello"],
        [a = 3, b = "world"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = "hello"],
    [a = 3, b = "world"],
    [a = 1, b = "hello"],
    [a = 3, b = "world"]
})
```




## Category
Table.Row operations
