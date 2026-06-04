---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Duplira kolonu sa navedenim imenom. Vrednosti i tip se kopiraju iz izvorne kolone.


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

Dupliranje kolone `columnName` u okviru tabele `table`. Vrednosti i tip za kolonu `newColumnName` se kopiraju iz kolone `columnName`.


## Examples

### Example #1
Dupliranje kolone „a“ u kolonu „kopirana kolona“ u okviru tabele `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
