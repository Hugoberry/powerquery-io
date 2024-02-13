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

Erstellt von der Spalte mit dem Namen '<code>columnName</code>' ein Duplikat in der Tabelle '<code>table</code>'. Die Werte und der Typ für die Spalte '<code>newColumnName</code>' werden aus der Spalte '<code>columnName</code>' kopiert.


## Examples

### Example #1 
Erstellt von Spalte &#39;a&#39; in der Tabelle &#39;&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;&#39; ein Duplikat mit dem Namen &#39;copied column&#39;.
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
