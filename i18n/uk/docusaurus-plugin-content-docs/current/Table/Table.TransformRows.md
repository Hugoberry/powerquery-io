---
title: Table.TransformRows
---

# Table.TransformRows


## Description

Перетворює рядки таблиці, використовуючи вказану функцію перетворення.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Details

Створює <code>список</code>, застосовуючи операцію <code>transform</code> до кожного рядка в <code>table</code>.


## Examples

### Example #1 
Перетворення рядків таблиці на список чисел.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    each [a]
)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```


### Example #2 
Перетворення рядків числової таблиці на текстові записи.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    (row) as record => [B = Number.ToText(row[a])]
)
```

Result: 
```powerquery
{
    [B = "1"],
    [B = "2"],
    [B = "3"],
    [B = "4"],
    [B = "5"]
}
```




## Category
Table.Transformation
