---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Pridá stĺpec so zadaným názvom. Hodnota sa vypočíta pomocou zadanej funkcie výberu, pričom každý riadok sa použije ako vstup.


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

Pridá stĺpec s názvom <code>newColumnName</code> do tabuľky <code>table</code>. Hodnoty pre tento stĺpec sa vypočítajú pomocou zadanej funkcie výberu <code>columnGenerator</code>, pričom každý riadok sa použije ako vstup.


## Examples

### Example #1 
Do tabuľky pridá stĺpec s názvom TotalPrice, pričom každá hodnota bude súčet stĺpca [Price] so stĺpcom [Shipping].
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
