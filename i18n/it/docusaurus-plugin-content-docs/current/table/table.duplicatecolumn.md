---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Duplica una colonna con il nome specificato. I valori e il tipo vengono copiati dalla colonna di origine.


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

Duplicare la colonna denominata `columnName` nella tabella `table`. I valori e il tipo della colonna `newColumnName` vengono copiati dalla colonna `columnName`.


## Examples

### Example #1
Duplicare la colonna "a" in una colonna denominata "copied column" nella tabella `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
