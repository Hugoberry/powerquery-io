---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

Returnerar en lista med namnen på de kolumner som matchar de angivna typerna.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

Returnerar en lista med namnen på de kolumner från tabellen <code>table</code> som matchar de angivna typerna i <code>listOfTypes</code>.


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
