---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Atgriež to kolonnu nosaukumu sarakstu, kuras atbilst norādītajiem tipiem.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

Atgriež to kolonnu nosaukumu sarakstu no tabulas `table`, kuras atbilst `listOfTypes` norādītajiem tipiem.


## Examples

### Example #1
Atgriež to kolonnu nosaukumus, kuru tips ir Number.Type, no tabulas.
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
