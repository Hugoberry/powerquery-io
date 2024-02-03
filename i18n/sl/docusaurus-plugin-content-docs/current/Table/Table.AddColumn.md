---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Doda stolpec z navedenim imenom. Vrednost se izračuna z določeno funkcijo izbire, pri čemer vsaka vrstica predstavlja vnos.


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

Doda stolpec z imenom <code>newColumnName</code> v tabelo <code>table</code>. Vrednosti za stolpec se izračunajo z določeno funkcijo izbire <code>columnGenerator</code>, pri čemer vsaka vrstica predstavlja vnos.


## Examples

### Example #1 
Dodajte številski stolpec z imenom &#34;SkupnaCena&#34; v tabelo, pri čemer je vsaka vrednost vsota stolpcev [Cena] in [Dostava].
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
