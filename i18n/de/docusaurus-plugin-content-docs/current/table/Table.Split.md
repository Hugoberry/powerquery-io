---
title: Table.Split
---

# Table.Split


Unterteilt die angegebene Tabelle anhand der angegebenen Seitengröße in eine Liste von Tabellen.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Remarks

Unterteilt <code>table</code> in eine Liste von Tabellen. Hierbei ist das erste Element der Liste eine Tabelle, die die ersten <code>pageSize</code> Zeilen aus    der Quelltabelle enthält. Das nächste Element der Liste ist eine Tabelle mit den nächsten <code>pageSize</code> Zeilen aus der Quelltabelle usw..


## Examples

### Example #1 
Unterteilen Sie eine Tabelle mit fünf Datensätzen in Tabellen mit je zwei Datensätze.
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation
