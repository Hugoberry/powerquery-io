---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

Zamenja navedeni obseg vrstic s podanimi vrsticami.


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

Zamenja navedeno število vrstic, <code>count</code>, v vhodni tabeli <code>table</code> z navedenim seznamom <code>rows</code>, ki se začne za <code>offset</code>. Parameter <code>rows</code> je seznam zapisov.    <ul>       <li><code>table</code>: tabela, v kateri je izvedena zamenjava.</li>       <li><code>offset</code>: število vrstic, ki bodo preskočene pred zamenjavo.</li>       <li><code>count</code>: število vrstic, ki bodo zamenjane.</li>       <li><code>rows</code>: seznam zapisov vrstic, ki bodo vstavljeni v tabelo <code>table</code> na mestu, ki ga določa <code>offset</code>.</li>    </ul>


## Examples

### Example #1 
Zamenjajte 3 vrstice in začnite na mestu 1.
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
