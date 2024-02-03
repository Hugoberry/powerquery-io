---
title: Table.TransformRows
---

# Table.TransformRows


## Description

Преобразует строки таблицы с помощью заданной функции преобразования.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Details

Создает <code>список</code>, применяя операцию <code>transform</code> к каждой строке в <code>table</code>.


## Examples

### Example #1 
Преобразуйте строки таблицы в список чисел.
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
Преобразуйте строки числовой таблицы в текстовые записи.
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
