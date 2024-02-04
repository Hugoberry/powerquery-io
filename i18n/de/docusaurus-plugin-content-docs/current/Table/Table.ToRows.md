---
title: Table.ToRows
---

# Table.ToRows


## Description

Erstellt eine Liste mit geschachtelten Listen mit Zeilenwerten aus einer Tabelle.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Erstellt eine Liste mit geschachtelten Listen aus der Tabelle "<code>table</code>".  Jedes Listenelement ist eine innere Liste mit den Zeilenwerten.


## Examples

### Example #1 
Erstellt eine Liste mit den Zeilenwerten aus der Tabelle.
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
