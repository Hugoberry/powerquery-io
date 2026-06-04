---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Замінює вказаний діапазон рядків наданими рядками.


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

Замінює зазначену кількість рядків, `count`, у вхідній `table` вказаними `rows`, починаючи після `offset`. Параметр `rows` є списком записів.

-   `table`: Таблиця, у якій виконується заміна.
-   `offset`: Кількість рядків, які необхідно пропустити до початку заміни.
-   `count`: Кількість рядків, які потрібно замінити.
-   `rows`: Список записів рядків, які слід вставити в `table` в положення, вказане `offset`.


## Examples

### Example #1
Замінити 3 рядки, починаючи з позиції 1.
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
