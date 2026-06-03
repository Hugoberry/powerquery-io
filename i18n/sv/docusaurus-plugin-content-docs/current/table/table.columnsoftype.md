---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Returnerar en lista med namnen på de kolumner som matchar de angivna typerna.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

Returnerar en lista med namnen på de kolumner från tabellen `table` som matchar de angivna typerna i `listOfTypes`.


## Examples

### Example #1
Returnera namnen på kolumnerna av typen Number.Type från tabellen.
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
