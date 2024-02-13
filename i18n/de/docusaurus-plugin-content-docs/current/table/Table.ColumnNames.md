---
title: Table.ColumnNames
---

# Table.ColumnNames


Gibt die Spaltennamen als Liste zurück.


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Remarks

Gibt die Spaltennamen in der Tabelle "<code>table</code>" als Liste mit Text zurück.


## Examples

### Example #1 
Ermittelt die Spaltennamen der Tabelle.
```powerquery
Table.ColumnNames(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
{"CustomerID", "Name", "Phone"}
```




## Category
Table.Column operations
