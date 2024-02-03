---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Adaugă o coloană cu numele specificat. Valoarea este calculată utilizând funcţia de selectare specificată cu fiecare rând preluat ca intrare.


## Syntax

```powerquery
Table.AddColumn(
    table as table,
    newColumnName as text,
    columnGenerator as function,
    optional columnType as type
) as table
```


## Details

Adaugă o coloană cu numele <code>newColumnName</code> la tabelul <code>table</code>. Valorile pentru coloană sunt calculate utilizând funcţia de selectare specificată <code>columnGenerator</code> cu fiecare rând preluat ca intrare.


## Examples

### Example #1 
Adăugați o coloană numerică denumită „PrețTotal” la tabel, cu fiecare valoare fiind suma coloanelor [Preț] și [Livrare].
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
