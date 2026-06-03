---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Заменяет указанный диапазон строк предоставленными строками.


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

Заменяет указанное количество строк `count` во входных данных `table` заданными в `rows`, начиная с `offset`. Параметр `rows` представляет собой список записей.

-   `table`: таблица, в которой выполняется замена.
-   `offset`: количество строк, которые следует пропустить, прежде чем выполнять замену.
-   `count`: количество строк для замены.
-   `rows`: список записей строк, вставляемых в `table` в расположении, заданном `offset`.


## Examples

### Example #1
Замена 3 строк, начиная с позиции 1.
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
