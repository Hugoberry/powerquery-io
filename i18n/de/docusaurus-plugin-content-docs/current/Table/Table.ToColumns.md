---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Erstellt eine Liste mit geschachtelten Listen mit Spaltenwerten aus einer Tabelle.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Erstellt eine Liste mit geschachtelten Listen aus der Tabelle "<code>table</code>".  Jedes Listenelement ist eine innere Liste mit den Spaltenwerten.


## Examples

### Example #1 
Erstellt eine Liste mit den Spaltenwerten aus der Tabelle.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
