---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Gibt eine Tabelle zurück, in der allen Spalten der angegebene Text als Präfix vorangestellt wurde.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Gibt eine Tabelle zurück, in der allen Spaltennamen aus dem angegebenen Element vom Typ „`table`“ der angegebene Text (`prefix`) einschließlich eines Punkts als Präfix vorangestellt wurde: `prefix.ColumnName`.


## Examples

### Example #1
Stellt den Spalten in der Tabelle das Präfix "MyTable" voran.
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
