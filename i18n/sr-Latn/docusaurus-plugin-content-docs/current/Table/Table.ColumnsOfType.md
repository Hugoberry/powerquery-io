---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

Vraća listu sa imenima kolona koje se podudaraju sa navedenim tipovima.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

Vraća listu sa imenima kolona iz tabele <code>table</code>, koja se podudaraju sa tipovima navedenim u okviru <code>listOfTypes</code>.


## Examples

### Example #1 
Vraćanje imena kolona tipa Number.Type iz tabele.
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
