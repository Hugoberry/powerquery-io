---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Vraća listu sa imenima kolona koje se podudaraju sa navedenim tipovima.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

Vraća listu sa imenima kolona iz tabele `table`, koja se podudaraju sa tipovima navedenim u okviru `listOfTypes`.


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
