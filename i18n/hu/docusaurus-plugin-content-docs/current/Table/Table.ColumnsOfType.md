---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

A megadott típusoknak megfelelő oszlopok neveinek listáját adja vissza.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

A(z) <code>table</code> tábla a következőben megadott típusoknak megfelelő oszlopainak nevét adja vissza: <code>listOfTypes</code>.


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
