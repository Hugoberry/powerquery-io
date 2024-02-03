---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Dodaje kolonu sa navedenim imenom. Vrednost se izračunava pomoću navedene funkcije izbora, pri čemu se svaki red smatra unosom.


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

Dodaje kolonu <code>newColumnName</code> u tabelu <code>table</code>. Vrednosti za kolonu se izračunavaju pomoću navedene funkcije izbora <code>columnGenerator</code>, pri čemu se svaki red smatra unosom.


## Examples

### Example #1 
Dodajte kolonu sa brojem pod imenom „UkupnaCena“ u tabelu, a svaka vrednost je zbir kolona [Cena] i [Isporuka].
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
