---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Vrátí seznam s názvy sloupců, které odpovídají zadaným typům.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

Vrátí seznam s názvy sloupců z tabulky `table`, které odpovídají typům zadaných v `listOfTypes`.


## Examples

### Example #1
Vrátí názvy sloupců typu Number.Type z tabulky.
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
