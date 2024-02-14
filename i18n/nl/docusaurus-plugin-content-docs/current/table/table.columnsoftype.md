---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Retourneert een lijst met namen van de kolommen die overeenkomen met de opgegeven typen.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

Retourneert een lijst met namen van de kolommen uit tabel <code>table</code> die overeenkomen met de opgegeven typen in <code>listOfTypes</code>.


## Examples

### Example #1 
Retourneert de namen van kolommen van het type Number.Type uit de tabel.
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
