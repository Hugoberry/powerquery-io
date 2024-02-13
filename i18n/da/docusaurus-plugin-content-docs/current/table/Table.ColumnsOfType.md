---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Returnerer en liste med navnene på de kolonner, der stemmer overens med de angivne typer.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

Returnerer en liste med navnene på de kolonner i tabellen <code>table</code>, som stemmer overens med typerne, der er angivet i <code>listOfTypes</code>.


## Examples

### Example #1 
Returnerer navnene på kolonner af typen Number.Type fra tabellen.
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
