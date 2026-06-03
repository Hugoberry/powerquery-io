---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Erstellt von einer Spalte mit dem angegebenen Namen ein Duplikat. Die Werte und der Typ werden aus der Quellspalte kopiert.


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

Erstellt von der Spalte mit dem Namen „`columnName`“ ein Duplikat in der Tabelle „`table`“. Die Werte und der Typ der Spalte `newColumnName` werden aus der Spalte `columnName` kopiert.


## Examples

### Example #1
Erstellt von Spalte 'a' in der Tabelle '`({[a = 1, b = 2], [a = 3, b = 4]})`' ein Duplikat mit dem Namen 'copied column'.
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
