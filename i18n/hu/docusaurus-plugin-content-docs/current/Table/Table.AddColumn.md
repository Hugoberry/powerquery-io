---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Felvesz egy oszlopot a megadott névvel. Az érték kiszámítása a megadott kiválasztási függvénnyel történik, amely mindegyik sort megkapja bemenetként.


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

Felvesz egy <code>newColumnName</code> nevű oszlopot a(z) <code>table</code> táblába. Az oszlop értékeinek kiszámítása a megadott <code>columnGenerator</code> kiválasztási függvénnyel történik, amely mindegyik sort megkapja bemenetként.


## Examples

### Example #1 
Adjon hozzá egy „TotalPrice“ nevű számoszlopot a táblához, amelynek minden értéke a [Price] és a [Shipping] oszlop összege.
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
