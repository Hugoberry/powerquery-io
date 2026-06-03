---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Duplica una columna con el nombre especificado. Los valores y el tipo se copian de la columna de origen.


## Syntax

```powerquery
Table.DuplicateColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional columnType as type
) as table
```


## Remarks

Duplicar la columna denominada `columnName` en la tabla `table`. Los valores y el tipo de la columna `newColumnName` se copian de la columna `columnName`.


## Examples

### Example #1
Duplica la columna "a" en una columna denominada "columna copiada" en la tabla `({[a = 1, b = 2], [a = 3, b = 4]})`.
```powerquery
Table.DuplicateColumn(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    "a",
    "copied column"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2, #"copied column" = 1],
    [a = 3, b = 4, #"copied column" = 3]
})
```




## Category
Table.Column operations
