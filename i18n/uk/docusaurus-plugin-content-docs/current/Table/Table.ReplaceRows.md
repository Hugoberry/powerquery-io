---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

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


## Details

Замінює зазначену кількість рядків, <code>count</code>, у вхідній <code>table</code> вказаними <code>rows</code>, починаючи після <code>offset</code>. Параметр <code>rows</code> є списком записів.    <ul>       <li><code>table</code>: Таблиця, у якій виконується заміна.</li>       <li><code>offset</code>: Кількість рядків, які необхідно пропустити до початку заміни.</li>       <li><code>count</code>: Кількість рядків, які потрібно замінити.</li>       <li><code>rows</code>: Список записів рядків, які слід вставити в <code>table</code> в положення, вказане <code>offset</code>.</li>    </ul>


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
