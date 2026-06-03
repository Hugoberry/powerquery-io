---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Dublerer en kolonne med det angivne navn. Værdier og type kopieres fra kildekolonnen.


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

Dubler kolonnen med navnet `columnName` til tabellen `table`. Værdierne og typen for den kolonne, `newColumnName`, kopieres fra kolonnen `columnName`.


## Examples

### Example #1
Dubler kolonnen "a" til en kolonne med navnet "copied column" i tabellen `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
