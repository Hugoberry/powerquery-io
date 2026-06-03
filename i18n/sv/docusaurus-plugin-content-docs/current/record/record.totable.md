---
title: Record.ToTable
---

# Record.ToTable


Returnerar en tabell där varje rad är ett fältnamn och värde i indataposten.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

Returnerar en tabell som innehåller kolumnerna `Name` och `Value` med en rad för varje fält i `record`.


## Examples

### Example #1
Skapa en tabell från posten.
```powerquery
Record.ToTable([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "OrderID", Value = 1],
    [Name = "CustomerID", Value = 1],
    [Name = "Item", Value = "Fishing rod"],
    [Name = "Price", Value = 100]
})
```




## Category
Record.Serialization
