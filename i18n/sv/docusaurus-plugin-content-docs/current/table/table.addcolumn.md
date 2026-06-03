---
title: Table.AddColumn
---

# Table.AddColumn


Lägger till en kolumn med angivet namn. Värdet beräknas med den angivna valfunktionen där varje rad används som indata.


## Syntax

```powerquery
Table.AddColumn(
    table as table,
    newColumnName as text,
    columnGenerator as function,
    optional columnType as type
) as table
```


## Remarks

Lägger till en kolumn med namnet `newColumnName` i tabellen `table`. Värdena för kolumnen beräknas med den angivna valfunktionen `columnGenerator` där varje rad används som indata.


## Examples

### Example #1
Lägg till en talkolumn med namnet "TotalPrice" i tabellen, där varje värde är summan av kolumnerna \[Pris\] och \[Frakt\].
```powerquery
Table.AddColumn(
    Table.FromRecords({
        [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0, Shipping = 10.00],
        [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5.0, Shipping = 15.00],
        [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25.0, Shipping = 10.00]
    }),
    "TotalPrice",
    each [Price] + [Shipping],
    type number
)
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100, Shipping = 10, TotalPrice = 110],
    [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5, Shipping = 15, TotalPrice = 20],
    [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25, Shipping = 10, TotalPrice = 35]
})
```




## Category
Table.Transformation
