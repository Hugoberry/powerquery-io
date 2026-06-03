---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Returnerar en tabell där alla kolumnerna föregås av angiven text.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Returnerar en tabell där alla angivna kolumnnamn från `table` föregås av angiven text, `prefix`, plus en punkt i formatet `prefix.ColumnName`.


## Examples

### Example #1
Lägg till "MyTable" som prefix i tabellen.
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
