---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

Vráti zoznam s názvami stĺpcov, ktoré zodpovedajú zadaným typom.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

Vráti zoznam s názvami stĺpcov tabuľky <code>table</code>, ktoré zodpovedajú typom zadaným v <code>listOfTypes</code>.


## Examples

### Example #1 
Vráťte názvy stĺpcov typu Number.Type z tabuľky.
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
