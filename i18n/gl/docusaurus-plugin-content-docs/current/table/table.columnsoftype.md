---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Devolve unha lista cos nomes das columnas que coinciden cos tipos especificados.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

Devolve unha lista cos nomes das columnas da táboa `table` que coinciden cos tipos especificados en `listOfTypes`.


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
