---
title: Table.AddKey
---

# Table.AddKey


Přidá klíč do tabulky.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Přidá klíč do tabulky `table`, kde hodnota `columns` představuje seznam názvů sloupců, které definují klíč, a kde hodnota `isPrimary` určuje, zda je klíč primární.


## Examples

### Example #1
Umožňuje přidat do tabulky primární klíč s jedním sloupcem.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    resultTable = Table.AddKey(table, {"Id"}, true)
in
    resultTable
```

Result: 
```powerquery
Table.FromRecords({
    [Id = 1, Name = "Hello There"],
    [Id = 2, Name = "Good Bye"]
})
```




## Category
Table.Transformation
