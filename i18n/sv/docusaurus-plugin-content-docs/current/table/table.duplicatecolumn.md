---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Duplicerar en kolumn med det angivna namnet. Värdena och typen kopieras från källkolumnen.


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

Duplicera kolumnen med namnet `columnName` till tabellen `table`. Värdena och typen för kolumnen `newColumnName` kopieras från kolumn `columnName`.


## Examples

### Example #1
Duplicera kolumnen "a" till en kolumn med namnet "copied column" i tabellen `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
