---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

Vrátí seznam s názvy sloupců, které odpovídají zadaným typům.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

Vrátí seznam s názvy sloupců z tabulky <code>table</code>, které odpovídají typům zadaných v <code>listOfTypes</code>.


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
