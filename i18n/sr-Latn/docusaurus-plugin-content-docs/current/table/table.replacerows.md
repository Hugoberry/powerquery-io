---
title: Table.ReplaceRows
---

# Table.ReplaceRows


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


## Remarks

Zamenjuje navedeni broj redova, `count`, u unosu `table` navedenim `rows`, posle `offset`. Parametar `rows` je lista zapisa.

-   `table`: Tabela u kojoj se vrši zamena.
-   `offset`: Broj redova koji se preskače pre nego što se izvrši zamena.
-   `count`: Broj redova koji se menja.
-   `rows`: Lista zapisa redova koja se umeće u `table` na lokaciji koju navodi `offset`.


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
