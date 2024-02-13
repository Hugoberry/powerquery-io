---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Zwraca listę z nazwami kolumn odpowiadającymi określonym typom.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

Zwraca listę z nazwami kolumn z tabeli <code>table</code>, które odpowiadają typom określonym w elemencie <code>listOfTypes</code>.


## Examples

### Example #1 
Zwraca nazwy kolumn typu Number.Type z tabeli.
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
