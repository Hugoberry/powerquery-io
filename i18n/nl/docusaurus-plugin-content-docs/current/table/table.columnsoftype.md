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

Retourneert een lijst met namen van de kolommen uit tabel `table` die overeenkomen met de opgegeven typen in `listOfTypes`.


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
