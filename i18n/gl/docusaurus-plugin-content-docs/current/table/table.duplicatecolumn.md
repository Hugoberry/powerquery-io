---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Duplica unha columna co nome especificado. Os valores e o tipo cópianse da columna de orixe.


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

Duplica a columna chamada `columnName` na táboa `table` . Os valores e o tipo da columna `newColumnName` cópianse da columna `columnName`.


## Examples

### Example #1
Duplicar a columna "a" á columna co nome "columna copiada" da táboa `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
