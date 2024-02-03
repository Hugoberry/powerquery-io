---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

Devolve unha lista cos nomes das columnas que coinciden cos tipos especificados.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

Devolve unha lista cos nomes das columnas da táboa <code>table</code> que coinciden cos tipos especificados en <code>listOfTypes</code>.


## Examples

### Example #1 
Devolver os nomes das columnas de tipo Number.Type da táboa.
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
