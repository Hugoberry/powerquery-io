---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Erstatter det angivne rækkeområde med den eller de leverede rækker.


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

Erstatter et angivet antal rækker, `count`, i inputtet `table` med de angivne `rows`, med start ved `offset`. Parameteren `rows` er en liste over poster.

-   `table`: Den tabel, hvor erstatningen udføres.
-   `offset`: Det antal rækker, der skal springes over, før erstatningen udføres.
-   `count`: Det antal rækker, der skal erstattes.
-   `rows`: Den liste over rækker, der skal indsættes i `table` på den position, der er angivet af `offset`.


## Examples

### Example #1
Erstat tre rækker med start ved position 1.
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
