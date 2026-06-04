---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


A megadott típusoknak megfelelő oszlopok neveinek listáját adja vissza.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

A(z) `table` tábla a következőben megadott típusoknak megfelelő oszlopainak nevét adja vissza: `listOfTypes`.


## Examples

### Example #1
Visszaadja a tábla Number.Type típusú oszlopainak nevét.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[a = 1, b = "hello"]},
        type table[a = Number.Type, b = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"a"}
```




## Category
Table.Column operations
