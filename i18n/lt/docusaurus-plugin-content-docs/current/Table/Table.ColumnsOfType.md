---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

Pateikiamas stulpelių, atitinkančių nurodytus tipus, pavadinimų sąrašas.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

Pateikiamas lentelės <code>table</code> stulpelių, atitinkančių <code>listOfTypes</code> nurodytus tipus, pavadinimų sąrašas.


## Examples

### Example #1 
Pateikia lentelės stulpelių, kurių tipas Number.Type, pavadinimus.
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
