---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Duplica una columna amb el nom especificat. Els valors i el tipus es copien de la columna d'origen.


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

Duplica la columna amb el nom `columnName` a la taula `table`. Els valors i el tipus de la columna `newColumnName` es copien de la columna `columnName`.


## Examples

### Example #1
Duplica la columna "a" en una columna anomenada "copied column" de la taula `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
