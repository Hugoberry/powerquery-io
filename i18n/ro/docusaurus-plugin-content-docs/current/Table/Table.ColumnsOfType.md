---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

Returnează o listă cu numele de coloane ce corespund tipurilor specificate.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

Returnează o listă cu numele de coloane din tabelul <code>table</code> ce corespund tipurilor specificate în <code>listOfTypes</code>.


## Examples

### Example #1 
Returnează numele de coloane de tipul Number.Type din tabel.
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
