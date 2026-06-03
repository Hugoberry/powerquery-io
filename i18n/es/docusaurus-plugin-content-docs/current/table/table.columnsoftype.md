---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Devuelve una lista con los nombres de las columnas que coinciden con los tipos especificados.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

Devuelve una lista con los nombres de las columnas desde la tabla `table` que coinciden con los tipos especificados en `listOfTypes`.


## Examples

### Example #1
Devuelve los nombres de columnas de tipo Number.Type de la tabla.
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
