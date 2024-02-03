---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

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


## Details

Заменяет указанное количество строк <code>count</code> во входных данных <code>table</code> заданными в <code>rows</code>, начиная с <code>offset</code>. Параметр <code>rows</code> представляет собой список записей.    <ul>       <li><code>table</code>: таблица, в которой выполняется замена.</li>       <li><code>offset</code>: количество строк, которые следует пропустить, прежде чем выполнять замену.</li>       <li><code>count</code>: количество строк для замены.</li>       <li><code>rows</code>: список записей строк, вставляемых в <code>table</code> в расположении, заданном <code>offset</code>.</li>    </ul>


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
