---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

Zamenjuje navedeni opseg redova datim redovima.


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

Zamenjuje navedeni broj redova, <code>count</code>, u unosu <code>table</code> navedenim <code>rows</code>, posle <code>offset</code>. Parametar <code>rows</code> je lista zapisa.    <ul>       <li><code>table</code>: Tabela u kojoj se vrši zamena.</li>       <li><code>offset</code>: Broj redova koji se preskače pre nego što se izvrši zamena.</li>       <li><code>count</code>: Broj redova koji se menja.</li>       <li><code>rows</code>: Lista zapisa redova koja se umeće u <code>table</code> na lokaciji koju navodi <code>offset</code>.</li>    </ul>


## Examples

### Example #1 
Počev od položaja 1, zamena 3 reda.
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
