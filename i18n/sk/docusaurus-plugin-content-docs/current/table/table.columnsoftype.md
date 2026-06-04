---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Vráti zoznam s názvami stĺpcov, ktoré zodpovedajú zadaným typom.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

Vráti zoznam s názvami stĺpcov tabuľky `table`, ktoré zodpovedajú typom zadaným v `listOfTypes`.


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
