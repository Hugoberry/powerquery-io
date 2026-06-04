---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Memperduakan lajur dengan nama ditetapkan. Nilai dan jenis disalin daripada lajur sumber.


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

Memperduakan lajur bernama `columnName` pada jadual `table`. Nilai dan jenis untuk lajur `newColumnName` disalin daripada lajur `columnName`.


## Examples

### Example #1
Perduakan lajur "a" kepada lajur bernama "copied column" dalam jadual `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
