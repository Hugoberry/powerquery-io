---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Tiek izveidots kolonnas dublikāts, piešķirot tam norādīto nosaukumu. Vērtības un tips tiek kopēti no avota kolonnas.


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

Dublējiet kolonnu ar nosaukumu `columnName` tabulā `table`. Vērtības un tips kolonnai `newColumnName` tiek kopēti no kolonnas `columnName`.


## Examples

### Example #1
Dublicēt kolonnu "a" kolonnā "copied column" tabulā `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
